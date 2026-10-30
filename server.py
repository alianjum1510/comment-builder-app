# Comment Builder on monday code.
# - Serves the Comment Builder page (public/, built by build_client.py) for the "Comment Builder" item view.
# - POST /api/ai/write      { prompt }  → { text }   "Write with AI"
# - POST /api/ai/summarize  { text }    → { text }   "Summarize"
# - POST /api/ai/autofill   { comment, options, … } → { fields }   "✨ Autofill" (team's category rules)
# Every /api request must carry monday's session token (Authorization header): app ID and expiry are checked, and
# its signature too once MONDAY_CLIENT_SECRET is set, so nobody outside monday can use the AI. Without that secret
# the signature is NOT checked (/health shows "signatureCheck": "off").
# Secrets: OPENAI_API_KEY, MONDAY_CLIENT_SECRET (the app's Client Secret). Read from, in order:
#   1. monday code Secrets (Developer Center → Server-side code → Secrets)
#   2. environment variables
#   3. the .env file next to this server.py (never served to the browser; only public/ is)
# Optional: OPENAI_MODEL (default gpt-4o-mini).
# Standard library only (Python 3.9+): nothing to pip install.

import base64
import hashlib
import hmac
import json
import os
import re
import threading
import time
import traceback
import urllib.error
import urllib.parse
import urllib.request
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

HERE = os.path.dirname(os.path.abspath(__file__))

# Load .env (KEY=value lines; # comments) without overriding variables that are already set.
DOT_ENV = {}


def load_dot_env():
    try:
        with open(os.path.join(HERE, ".env"), encoding="utf-8") as f:
            text = f.read()
    except OSError:
        return
    for line in text.splitlines():
        m = re.fullmatch(r"\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*", line, re.I)
        if not m or line.strip().startswith("#"):
            continue
        v = m.group(2)
        if (v.startswith('"') and v.endswith('"')) or (v.startswith("'") and v.endswith("'")):
            v = v[1:-1]
        if v:
            DOT_ENV[m.group(1)] = v
        if v and not os.environ.get(m.group(1)):
            os.environ[m.group(1)] = v


load_dot_env()

PORT = int(os.environ.get("PORT") or 8080)
PUBLIC_DIR = os.path.join(HERE, "public")
MAX_BODY = 64 * 1024

# ---------- small helpers ----------


class HttpError(Exception):
    def __init__(self, status, message):
        super().__init__(message)
        self.status = status
        self.message = message


def js_str(v):
    """String(v) as JavaScript would write it, for values that come from request JSON."""
    if isinstance(v, str):
        return v
    if v is None:
        return "null"
    if isinstance(v, bool):
        return "true" if v else "false"
    if isinstance(v, float) and v.is_integer():
        return str(int(v))
    if isinstance(v, (int, float)):
        return str(v)
    return json.dumps(v, ensure_ascii=False)


def as_dict(v):
    return v if isinstance(v, dict) else {}


def to_json(obj):
    return json.dumps(obj, ensure_ascii=False, separators=(",", ":"))


# ---------- secrets ----------

# monday code keeps secrets in its secrets store, reachable through the local monday code sidecar (the same
# service monday's SDKs call). Outside monday code it isn't there and we fall back to os.environ / .env.
MONDAY_SIDECAR = "http://localhost:59999"


def monday_get(kind, name=""):
    """GET <sidecar>/<kind>/<name>; the decoded JSON, or None when the sidecar or the value is missing."""
    url = f"{MONDAY_SIDECAR}/{kind}" + (f"/{urllib.parse.quote(name, safe='')}" if name else "")
    try:
        req = urllib.request.Request(url, headers={"Accept": "application/json"})
        with urllib.request.urlopen(req, timeout=3) as res:
            raw = res.read().decode("utf-8")
    except Exception:
        return None
    try:
        return json.loads(raw)
    except ValueError:
        return raw


def load_monday_env():
    """Copy monday code Environment variables into os.environ (like the Node SDK's updateProcessEnv)."""
    keys = monday_get("environment-variables")
    for key in keys if isinstance(keys, list) else []:
        value = monday_get("environment-variables", str(key))
        if isinstance(value, str) and not os.environ.get(str(key)):
            os.environ[str(key)] = value


def clean(v):
    if not isinstance(v, str):
        return ""
    v = v.strip()
    m = re.fullmatch(r"(['\"])(.*)\1", v)
    return (m.group(2) if m else v).strip()


def secret_candidates(name):
    """Every value found for `name`, from every source: [{source, value}]. A wrong value in one place no longer
    hides the right one in another."""
    out = []

    def add(source, v):
        v = clean(v)
        if v and not any(o["value"] == v for o in out):
            out.append({"source": source, "value": v})

    add("monday Secrets", monday_get("secrets", name))
    add("monday Environment variables", monday_get("environment-variables", name))
    add("process env", os.environ.get(name))
    add(".env file", DOT_ENV.get(name))
    return out


def secret(name):
    found = secret_candidates(name)
    return found[0]["value"] if found else ""


# ---------- monday session token ----------

APP_ID = "11942098"  # Comment Builder


def b64url(part):
    part = part.rstrip("=")
    return base64.urlsafe_b64decode(part + "=" * (-len(part) % 4))


def signed_with(parts, client_secret):
    """True when the token (HS256 JWT) was signed with this Client Secret."""
    try:
        if as_dict(json.loads(b64url(parts[0]).decode("utf-8"))).get("alg") != "HS256":
            return False
        expected = hmac.new(client_secret.encode("utf-8"), f"{parts[0]}.{parts[1]}".encode("ascii"), hashlib.sha256)
        return hmac.compare_digest(expected.digest(), b64url(parts[2]))
    except Exception:
        return False


def read_session_token(token):
    """Read monday's session token. Rejects missing / malformed / expired tokens, tokens from another app and, once
    MONDAY_CLIENT_SECRET is set, tokens not signed with it."""
    parts = re.sub(r"^Bearer\s+", "", str(token or ""), flags=re.I).split(".")
    if len(parts) != 3:
        raise HttpError(401, "Missing monday session token. Open Comment Builder inside a monday item.")
    client_secrets = [c["value"] for c in secret_candidates("MONDAY_CLIENT_SECRET")]
    if client_secrets and not any(signed_with(parts, s) for s in client_secrets):
        raise HttpError(401, "Invalid monday session token. Reload the page.")
    try:
        payload = json.loads(b64url(parts[1]).decode("utf-8"))
    except Exception:
        raise HttpError(401, "Unreadable monday session token.")
    payload = as_dict(payload)
    exp = payload.get("exp")
    if exp and isinstance(exp, (int, float)) and time.time() > exp:
        raise HttpError(401, "monday session expired. Reload the page.")
    app_id = as_dict(payload.get("dat")).get("app_id")
    if app_id and js_str(app_id) != APP_ID:
        raise HttpError(403, "This session belongs to another app.")
    return payload  # { dat: { user_id, account_id, app_id, … }, exp, … }


# ---------- OpenAI ----------

PROMPTS = {
    "write": {
        "system": (
            "You write clear, professional updates for a sales team's CRM on monday.com. "
            'Write in the same language as the request. Use short paragraphs or simple bullet points ("• "). '
            "Plain text only: no markdown, no headings, no greeting or sign-off unless asked."
        ),
        "max": 450,
    },
    "summarize": {
        "system": (
            "You summarize monday.com updates (often forwarded emails) for a busy sales team. "
            'Reply in 2 to 4 short bullet points starting with "• ". Keep names, companies, dates, amounts and next steps. '
            "Ignore signatures, tracking links and quoted older emails. Same language as the update. Plain text only."
        ),
        "max": 250,
    },
}


def openai_chat(payload):
    """POST to OpenAI chat completions; the response JSON. Errors become HttpError(502) like the page expects."""
    key = secret("OPENAI_API_KEY")
    if not key:
        raise HttpError(500, "OPENAI_API_KEY is not set (.env or Server-side code → Secrets).")
    req = urllib.request.Request(
        "https://api.openai.com/v1/chat/completions",
        data=to_json(payload).encode("utf-8"),
        headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=120) as res:
            status, raw = res.status, res.read()
    except urllib.error.HTTPError as e:
        status, raw = e.code, e.read()
    try:
        data = as_dict(json.loads(raw.decode("utf-8")))
    except ValueError:
        data = {}
    if not 200 <= status < 300:
        raise HttpError(502, f"OpenAI error: {as_dict(data.get('error')).get('message') or status}")
    return data


def openai_content(data):
    choices = data.get("choices")
    first = as_dict(choices[0]) if isinstance(choices, list) and choices else {}
    return as_dict(first.get("message")).get("content") or ""


def openai(kind, user_text):
    data = openai_chat(
        {
            "model": os.environ.get("OPENAI_MODEL") or "gpt-4o-mini",
            "temperature": 0.4,
            "max_tokens": PROMPTS[kind]["max"],
            "messages": [
                {"role": "system", "content": PROMPTS[kind]["system"]},
                {"role": "user", "content": user_text},
            ],
        }
    )
    return js_str(openai_content(data)).strip()


# ---------- ✨ Autofill: the team's classification rules ----------

AUTOFILL_GUIDE = """You classify comments that a sales/operations team logs on deals and leads in monday.com.
Read the comment (and the deal/lead context) and fill the form fields.

ANSWER RULES
- Every value MUST be copied exactly from "allowedValues" in the request. The rules below use codes (QUOTE, SHIP, PAY…);
  answer with the matching allowedValues entry, e.g. QUOTE → "Quote", SHIP → "Ship", PAY → "Pay", ITEM → "Item", TRADE → "Trade".
- ALWAYS fill: mainCategory (exactly one, the best match — even for short or vague comments use the deal/lead context),
  subCategory (one tag; DOCS if none fits), categories (derived from mainCategory), escalation ("Yes" or "No").
- Classify what the comment is ABOUT. The deal/lead context only breaks a tie for vague comments: the item being a
  lead, or its deal stage, is never by itself a reason for LEAD (or QUOTE).
- "examplesFromThisDeal" are earlier comments on the same deal: they show the team's style, but don't copy their
  category unless the new comment is about the same thing.
- Fill nextStep, dueDate and transcript only when the comment implies them; otherwise "".
- Never invent values that are not in allowedValues.

LANGUAGE
- Comments are often in GERMAN (short ERP-style notes full of abbreviations), sometimes English. Classify by meaning;
  use the GERMAN TERMS list below. The answer values are always the allowedValues, never translated.
- One comment may hold several notes (often each starting with a date). Autofill fills one set of fields, so classify
  the most important operational note, using the priority and mandatory rules below.

MAIN CATEGORY (scope) — select exactly one:
LEAD = leads, prospects, pipeline, potential customers (the prospect itself: new interest, first contact, qualification)
ITEM = product truth: ingredients, specifications, composition, attributes
QUOTE = customer quotations, offers, RFQs
PO = customer purchase orders (sales-side PO)
ORDER = sales order processing, fulfillment execution
WH = warehouse operations, storage, picking, stock movement
SHIP = shipping execution, delivery, logistics in transit
INV = invoicing, billing, invoice corrections, credit notes
PAY = payments, reminders, dunning, financial settlement
RMA = returns, complaints, replacements
SRV = customer service, questionnaires, support, surveys, aftersales
VEND = supplier/vendor interactions
PURQ = internal purchase requisitions
PORD = purchase orders to suppliers (buy-side PO)
RCV = goods receipt, inbound deliveries
QC = quality control, inspections
CNT = contracts and agreements
PROJ = projects, implementations
FCAST = forecasting, planning
ITI = intercompany transactions
MDM = master data: material codes, account changes, governance
INVN = inventory counts, stock balances
KIT = physical kitting, assembly of materials only
HSE = health, safety, environment instructions
REG = regulatory compliance, registrations
REB = rebates, discounts, financial incentives
CARR = carriers, freight forwarders
TEND = tenders, bids
INS = insurance matters

MAIN CATEGORY PRIORITY RULES (strict precedence, apply in order):
1. Payment, reminders, dunning → PAY
2. Invoice creation/correction → INV
3. Delivery execution, shipment movement → SHIP
4. Sales order execution → ORDER
5. Customer service, questionnaires, surveys → SRV
6. Product specifications, ingredients → ITEM
7. Regulatory compliance → REG
8. Master data changes → MDM
9. Vendor interactions → VEND
If multiple apply, select the category closest to the operational transaction. Never select multiple main categories.

SUBCATEGORY TAG — select the ONE most relevant tag (the form allows only one); never leave it empty:
LEGAL = legal restrictions, contracts
COMPL = compliance, regulations, certifications
DG = dangerous goods, hazardous classification
ARTWK = artwork, design proofs, labels
PKG = packaging rules, pallet/box types, dimensions
PPE = protective equipment requirements
TERMS = commercial terms, delivery terms, payment terms
APPROVAL = formal approval needed (artwork, credit, release)
CREDIT = credit limits, finance release, risk checks
TRACE = traceability, lot numbers, expiry, FEFO/FIFO
LOG = logistics rules, delivery slots, constraints
TMS = transport management, routing, tracking, carrier ref
TAX = taxation, VAT, duties, special tax rules
MKT = marketing, promotions, campaigns
QMS = quality management, audits, quality holds
EHS = environment, health, safety
SUST = sustainability, environmental claims
TRADE = trade compliance, restrictions
HS = harmonized system (tariff codes)
ORIGIN = origin declarations, EUR.1, CoO
HAZWASTE = hazardous waste notes
TEMP = temperature requirements (cold chain, etc.)
SLED = shelf-life, expiry, best before
CALIB = calibration of tools/instruments
CONTENT = content description (ingredients, material spec)
PROMO = promotional pricing, discounts, offers
PRICEGOV = pricing rules, tenders, price restrictions
REBATE = rebates, kickbacks, credit notes
SECURITY = security requirements, restricted access
PRIVACY = data privacy, GDPR, customer info handling
DOCS = documentation requirements (invoices, CMR, SDS, CoA, questionnaires, forms, paperwork of any type)
KPI = performance tracking, service level targets
SLA = service-level agreements, time-to-service
If no tag clearly applies → DOCS.
Use DOCS only when the comment is about a document (send / attach / print a PDF, invoice, form, certificate, paperwork)
or truly no other tag fits. When a topic tag fits (TERMS, PRICEGOV, LOG, CREDIT, PKG…), use that tag instead. The
MANDATORY RULES below still decide where they apply (e.g. dunning → DOCS, master data → DOCS).

CATAGORIES (workflow) — always derived from the main category:
QUOTE, TEND, LEAD → W-Quote | ORDER, PO → W-Order | WH, INVN, RCV, KIT → W-WH | SHIP, CARR → W-Ship | INV, PAY, REB → W-Inv | anything else → General.

MANDATORY RULES (override everything above; mainCategory + subCategory):
- dunning / Mahnung / reminder (also "keine Mahnungen") → PAY + DOCS
- credit limit, credit approval, credit insurance cover or amount (VS, Kreditversicherung, Versicherungsschutz,
  @rating, Creditreform, Bonitätsindex, Höchstkredit), customer blocked (Kd. gesperrt), deliver despite open items
  (offene Posten) → PAY + CREDIT
- payment terms: Vorkasse, Skonto, Zahlungsziel → PAY + TERMS
- the insurer itself: which insurer (versichert bei AKV, Coface), insurance application, insurer cancelled the cover → INS + DOCS
- invoicing rules: fakturieren, Rechnung / RG, RG-PDF, invoice e-mail → INV + DOCS
- master data: new or changed address (Firmen-/Rechnungsadresse), new / wrong / duplicate customer number,
  "siehe Kd.-Nr.", account switched (Webshop → normal), company closed, note in the Artikelbaustein → MDM + DOCS
- customer data handling / data protection (DSGVO, GDPR, Datenschutz, Daten nicht weitergeben) → MDM + PRIVACY
- order terms: minimum order value (MBW), frei Haus thresholds, agreed prices / price conditions for an existing
  customer's orders, which articles to deliver or not (incl. articles no longer delivered, replacement / substitute
  articles: Ersatz, stattdessen, ausgelistet) → ORDER + TERMS (+ VAT / MwSt. → subCategory TAX). ITEM is only for what
  a product IS (specification, make-up), not which articles a customer gets.
- price talks with a lead / prospect, price offers, a new price list or prices for a future period (e.g. "Preise 2027")
  → QUOTE + PRICEGOV. Use the deal stage to tell a lead / prospect from an existing customer.
- a call, meeting or e-mail is not SRV by itself: classify by what was discussed (e.g. a call about prices → the price
  rules above)
- order handling: partial / back-order delivery (Nachlieferung), which account handles which deliveries → ORDER + LOG
- delivery execution, shipment movement; shipping: carrier or route (DHL, GLS, MBS, Spedition), freight costs, delivery
  to a country, delivery slots → SHIP + LOG
- documentation requirements (a document must be sent, attached, printed or kept: AB-PDF, RG-PDF, CMR, CoA, SDS…) →
  subCategory DOCS (mandatory), with the main category of the process it belongs to
- cartons / pallets per shipment → SHIP + PKG
- product make-up (layers, packing units, specification) → ITEM + CONTENT (packing per carton → ITEM + PKG)
- questionnaires, forms, surveys → SRV + DOCS; regulatory compliance → REG + COMPL

GERMAN TERMS
Kd. / KD = Kunde (customer) · Kd.-Nr. = customer number · RG = Rechnung (invoice) · AB = Auftragsbestätigung (order
confirmation) · MBW = Mindestbestellwert (minimum order value) · FH / frei Haus = free delivery · VS = Versicherungssumme
(credit-insurance limit) · OP / offene Posten = unpaid invoices · Mahnung = dunning · Vorkasse = prepayment ·
Skonto = early-payment discount · MwSt. = VAT · Bestellung / Auftrag = order · Angebot = quote · Anfrage = RFQ ·
Lieferung = delivery · Nachlieferung = back-order delivery · Versand = shipping · Spedition = freight forwarder ·
Fracht = freight · Palette / Pal. = pallet · Karton = carton · VE = packing unit · WA = Warenausgang (goods issue) ·
LZ = Lieferzeit · WT = Werktage · Lager = warehouse · Artikel / Art. = item · Reklamation = complaint · Retoure = return ·
gesperrt = blocked · Versicherung = insurance. Initials such as BD, IF, KL, je, pe, RS, KC, D.F are the author: ignore.

EXAMPLES (comment → mainCategory + subCategory)
"21.03.2014 MBW: 1000 €" → ORDER + TERMS
"jede Bestellung einzeln fakturieren !!" → INV + DOCS
"sollte bei einer Pos. nicht genug Ware da sein, Pos. komplett nachliefern" → ORDER + LOG
"10.04.2002 kann trotz offener Posten beliefert werden/ keine Versicherung notwendig" → PAY + CREDIT
"13.06.2025 neue Firmenadresse bzw. Rechnungsadresse / If." → MDM + DOCS
"keine Mahnungen verschicken! September 2006" → PAY + DOCS
"schließen zum 01.05.2024 / Kd. gesperrt ! IF" → PAY + CREDIT
"19.07.2023 DHL Paket nach Luxemburg 15,00 Euro KL" → SHIP + LOG
"VS 10.000 ab 15.01.14 /BD" → PAY + CREDIT
"Hr. Wetz möchte immer über frei Haus, evt. auffüllen (Latexhandschuhe)" → ORDER + TERMS
"06.12..2007 Lieferung nach Deutschland 250 € frei Haus dann aber MwSt." → ORDER + TAX
"nach Email-Adresse (RG-PDF) fragen!" → INV + DOCS
"18.06.03 versichert bei AKV. pe" → INS + DOCS
"VORKASSE - ab 500,00 Euro frei Haus" → PAY + TERMS
"16.01.15 bei Artikeln 30869-00 und -11 passen jeweils nur 24 Kartons auf die Palette." → SHIP + PKG
"20.08.19-RS : Kunde wird umgestellt von Webshop auf normaler Kunde" → MDM + DOCS
"Art. 12345-00 ausgelistet, stattdessen 12346-00 liefern" → ORDER + TERMS
"Telefonat mit Fr. Schulz wegen neuer Preisliste 2027, nächste Woche nachfassen" → QUOTE + PRICEGOV
"Kd. bekommt weiterhin 5% auf alle Bestellungen, Preise wie vereinbart" → ORDER + TERMS
"Datenschutz: Kontaktdaten des Kd. nur intern verwenden" → MDM + PRIVACY

NEXT STEP — the action the comment implies (e.g. unpaid invoice → Chase Payment, customer wants an offer → Send Proposal,
waiting for the customer → Awaiting Response, call agreed → Call Back). Empty if no action is implied.

ESCALATION — "Yes" only if the comment says it is urgent, escalated, a complaint, or at risk (German: dringend,
eskaliert, Beschwerde, Reklamation); otherwise "No". Exclamation marks or capitals alone are not an escalation.

DUE DATE — only if the comment states or implies a deadline ("by Friday", "next week", "on the 30th"; German: "bis",
"bis zum", "spätestens", "nächste Woche"). Work it out from TODAY given in the request and return YYYY-MM-DD; otherwise
empty. A date that starts or ends a note ("21.03.2014 MBW…", "/ 15.02.18 BD") or says since when something applies
("ab 15.01.14", "Stand 27.05.2025") is when the note was written or took effect — NOT a due date.

TRANSCRIPT — a URL from the comment only if it is clearly a call/meeting transcript link; otherwise empty.

Reply with JSON only: {"escalation":"","categories":"","mainCategory":"","subCategory":"","nextStep":"","dueDate":"","transcript":""}"""


def openai_autofill(body):
    def as_list(v):
        return [js_str(x) for x in v][:80] if isinstance(v, list) else []

    opts = as_dict(body.get("options"))
    options = {k: as_list(opts.get(k)) for k in ("escalation", "categories", "mainCategory", "subCategory", "nextStep")}
    examples = (body.get("examples") if isinstance(body.get("examples"), list) else [])[:8]
    request = {
        "instructions": "Fill mainCategory, subCategory, categories and escalation always; copy values exactly from allowedValues.",
        "today": js_str(body.get("today") or "")[:10],
        "weekday": js_str(body.get("weekday") or "")[:12],
        "deal": {"name": js_str(body.get("dealName") or "")[:200], "stage": js_str(body.get("dealStage") or "")[:100]},
        "allowedValues": options,
        "examplesFromThisDeal": examples,
        "comment": js_str(body.get("comment") or "")[:4000],
    }
    data = openai_chat(
        {
            "model": os.environ.get("OPENAI_MODEL") or "gpt-4o-mini",
            "temperature": 0.1,
            "max_tokens": 300,
            "response_format": {"type": "json_object"},
            "messages": [
                {"role": "system", "content": AUTOFILL_GUIDE},
                {"role": "user", "content": to_json(request)},
            ],
        }
    )
    try:
        raw = as_dict(json.loads(js_str(openai_content(data) or "{}")))
    except ValueError:
        raw = {}

    # Keep only exact allowed values (case-insensitive match → the form's own spelling).
    def pick(val, allowed):
        want = js_str(val or "").strip().lower()
        return next((o for o in allowed if o.lower() == want), "")

    fields = {}
    for k, allowed in options.items():
        v = pick(raw.get(k), allowed)
        if v:
            fields[k] = v
    due = raw.get("dueDate")
    if isinstance(due, str) and re.fullmatch(r"[0-9]{4}-[0-9]{2}-[0-9]{2}", due):
        fields["dueDate"] = due
    transcript = js_str(raw.get("transcript") or "")
    if re.match(r"https?://", transcript, re.I):
        fields["transcript"] = transcript[:500]
    return fields


# Simple per-user limit so a stuck button can't run up the OpenAI bill: 30 requests per minute.
hits = {}
hits_lock = threading.Lock()


def rate_limit(user_id):
    now = time.time()
    with hits_lock:
        recent = [t for t in hits.get(user_id, []) if now - t < 60]
        if len(recent) >= 30:
            raise HttpError(429, "Too many AI requests. Please wait a minute.")
        recent.append(now)
        hits[user_id] = recent


# ---------- static page ----------

TYPES = {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".ico": "image/x-icon",
    ".json": "application/json",
}


def read_file(path):
    with open(path, "rb") as f:
        return f.read()


# ---------- routes ----------


class Handler(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"  # keep-alive, like Node's server
    server_version = "CommentBuilder"
    body_read = False

    def log_message(self, format, *args):
        pass  # no per-request access log (server.js didn't have one either)

    # Any HTTP method (do_GET, do_POST, do_PUT, …) goes through route(), as in server.js.
    def __getattr__(self, name):
        if name.startswith("do_"):
            return self.route
        raise AttributeError(name)

    def send(self, status, content_type, body, cache):
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Cache-Control", cache)
        self.send_header("Content-Length", str(len(body)))
        has_body = self.headers.get("Content-Length", "0") != "0" or self.headers.get("Transfer-Encoding")
        if has_body and not self.body_read:
            self.close_connection = True  # unread request body: don't reuse the connection
        if self.close_connection:
            self.send_header("Connection", "close")
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)

    def send_json(self, status, obj):
        self.send(status, "application/json; charset=utf-8", to_json(obj).encode("utf-8"), "no-store")

    def read_json(self):
        if "chunked" in self.headers.get("Transfer-Encoding", "").lower():
            raw = b""
            while True:
                size = int(self.rfile.readline().split(b";")[0].strip() or b"0", 16)
                if size == 0:
                    while self.rfile.readline() not in (b"\r\n", b"\n", b""):
                        pass  # trailers
                    break
                if len(raw) + size > MAX_BODY:
                    raise HttpError(413, "Request too large.")
                raw += self.rfile.read(size)
                self.rfile.readline()
        else:
            length = int(self.headers.get("Content-Length") or 0)
            if length > MAX_BODY:
                raise HttpError(413, "Request too large.")
            raw = self.rfile.read(length) if length > 0 else b""
        self.body_read = True
        try:
            return json.loads(raw.decode("utf-8", errors="replace") or "{}")
        except ValueError:
            raise HttpError(400, "Invalid JSON.")

    def route(self):
        self.body_read = False
        try:
            path = urllib.parse.urlsplit(self.path).path
            if path == "/health":
                seen = {}
                for n in ["OPENAI_API_KEY", "MONDAY_CLIENT_SECRET"]:
                    seen[n] = [f"{c['source']} ({len(c['value'])} chars)" for c in secret_candidates(n)]
                check = "on" if seen["MONDAY_CLIENT_SECRET"] else "off"
                return self.send_json(200, {"ok": True, "signatureCheck": check, "secretsFound": seen})
            if path.startswith("/api/"):
                return self.handle_api(path)
            if self.command not in ("GET", "HEAD"):
                raise HttpError(405, "Method not allowed.")
            return self.serve_static()
        except HttpError as err:
            self.send_json(err.status, {"error": err.message})
        except Exception:
            traceback.print_exc()
            self.send_json(500, {"error": "Server error."})

    def handle_api(self, route):
        if self.command != "POST":
            raise HttpError(405, "Use POST.")
        session = read_session_token(self.headers.get("Authorization"))
        ip = (self.headers.get("X-Forwarded-For") or self.client_address[0] or "").split(",")[0].strip()
        rate_limit(f"user:{as_dict(session.get('dat')).get('user_id') or 'anon'}")
        rate_limit(f"ip:{ip or 'unknown'}")
        body = as_dict(self.read_json())

        if route == "/api/ai/write":
            prompt = js_str(body.get("prompt") or "").strip()[:4000]
            if not prompt:
                raise HttpError(400, "Describe what the update should say.")
            return self.send_json(200, {"text": openai("write", prompt)})
        if route == "/api/ai/autofill":
            if not js_str(body.get("comment") or "").strip():
                raise HttpError(400, "Write the comment first.")
            return self.send_json(200, {"fields": openai_autofill(body)})
        if route == "/api/ai/summarize":
            text = js_str(body.get("text") or "").strip()[:12000]
            if not text:
                raise HttpError(400, "This update has no text to summarize.")
            return self.send_json(200, {"text": openai("summarize", text)})
        raise HttpError(404, "Unknown API route.")

    def serve_static(self):
        rel = urllib.parse.unquote(urllib.parse.urlsplit(self.path).path)
        # monday may open the page on a sub-path; assets are found wherever "/assets/" appears in the path.
        at = rel.rfind("/assets/")
        if at > 0:
            rel = rel[at:]
        if rel in ("/", "") or not os.path.splitext(rel)[1]:
            rel = "/index.html"
        file = os.path.normpath(os.path.join(PUBLIC_DIR, rel.lstrip("/")))
        if not file.startswith(PUBLIC_DIR + os.sep):
            return self.send_json(403, {"error": "Forbidden"})
        try:
            buf = read_file(file)
        except OSError:
            if rel.startswith("/assets/"):
                return self.send_json(404, {"error": "Not found"})  # never answer a script with HTML
            # Unknown paths fall back to the page itself.
            try:
                html = read_file(os.path.join(PUBLIC_DIR, "index.html"))
            except OSError:
                return self.send_json(404, {"error": "Not found"})
            return self.send(200, TYPES[".html"], html, "no-cache")
        ext = os.path.splitext(file)[1].lower()
        # Asset names contain a content hash, so they can be cached for a long time; the page itself can't.
        cache = "public, max-age=31536000, immutable" if rel.startswith("/assets/") else "no-cache"
        self.send(200, TYPES.get(ext, "application/octet-stream"), buf, cache)


if __name__ == "__main__":
    load_monday_env()
    server = ThreadingHTTPServer(("", PORT), Handler)
    server.daemon_threads = True
    print(f"Comment Builder listening on {PORT}", flush=True)
    if not secret("MONDAY_CLIENT_SECRET"):
        print("WARNING: MONDAY_CLIENT_SECRET is not set: session tokens are NOT signature-checked.", flush=True)
    server.serve_forever()
