// Comment Builder on monday code.
// - Serves the Comment Builder page (public/, built by build_client.py) for the "Comment Builder" item view.
// - POST /api/ai/write      { prompt }  → { text }   "Write with AI"
// - POST /api/ai/summarize  { text }    → { text }   "Summarize"
// - POST /api/ai/autofill   { comment, options, … } → { fields }   "✨ Autofill" (team's category rules)
// Every /api request must carry monday's session token (Authorization header). For now the token is only READ
// (app ID + expiry), NOT signature-checked: no monday secret is configured. TODO: restore the signature check
// with the app's Client Secret before going live, so nobody outside monday can use the AI.
// Secret: OPENAI_API_KEY. Read from, in order:
//   1. monday code Secrets (Developer Center → Server-side code → Secrets)
//   2. environment variables
//   3. the .env file next to this server.js (never served to the browser; only public/ is)
// Optional: OPENAI_MODEL (default gpt-4o-mini).

const http = require(`http`);
const fs = require(`fs`);
const path = require(`path`);

// Load .env (KEY=value lines; # comments) without overriding variables that are already set.
const DOT_ENV = {};
(function loadDotEnv() {
  let text = ``;
  try {
    text = fs.readFileSync(path.join(__dirname, `.env`), `utf8`);
  } catch {
    return;
  }
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/i);
    if (!m || line.trim().startsWith(`#`)) continue;
    let v = m[2];
    if ((v.startsWith(`"`) && v.endsWith(`"`)) || (v.startsWith(`'`) && v.endsWith(`'`))) v = v.slice(1, -1);
    if (v) DOT_ENV[m[1]] = v;
    if (v && !process.env[m[1]]) process.env[m[1]] = v;
  }
})();

const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = path.join(__dirname, `public`);
const MAX_BODY = 64 * 1024;

/* ---------- secrets ---------- */

// monday code keeps secrets in its secrets store; read them through monday's SDK, fall back to process.env.
let secretsManager = null, envManager = null;
try {
  const sdk = require(`@mondaycom/apps-sdk`);
  try { secretsManager = new sdk.SecretsManager(); } catch {}
  try { envManager = new sdk.EnvironmentVariablesManager({ updateProcessEnv: true }); } catch {}
} catch {}

const clean = v => (typeof v === `string` ? v.trim().replace(/^(['"])(.*)\1$/, `$2`).trim() : ``);

// Every value found for `name`, from every source: [{ source, value }]. A wrong value in one place no longer
// hides the right one in another.
async function secretCandidates(name) {
  const out = [];
  const add = (source, v) => { v = clean(v); if (v && !out.some(o => o.value === v)) out.push({ source, value: v }); };
  try { add(`monday Secrets`, secretsManager && (await secretsManager.get(name))); } catch {}
  try { add(`monday Environment variables`, envManager && (await envManager.get(name))); } catch {}
  add(`process env`, process.env[name]);
  add(`.env file`, DOT_ENV[name]);
  return out;
}

async function secret(name) {
  return (await secretCandidates(name))[0]?.value || ``;
}

/* ---------- monday session token ---------- */

const APP_ID = `11942098`; // Comment Builder

// Read monday's session token WITHOUT verifying its signature (no monday secret configured yet).
// Rejects missing / malformed / expired tokens and tokens from another app.
function readSessionToken(token) {
  const parts = String(token || ``).replace(/^Bearer\s+/i, ``).split(`.`);
  if (parts.length !== 3) throw httpError(401, `Missing monday session token. Open Comment Builder inside a monday item.`);
  let payload = {};
  try {
    payload = JSON.parse(Buffer.from(parts[1], `base64url`).toString());
  } catch {
    throw httpError(401, `Unreadable monday session token.`);
  }
  if (payload.exp && Date.now() / 1000 > payload.exp) throw httpError(401, `monday session expired. Reload the page.`);
  const appId = payload?.dat?.app_id;
  if (appId && String(appId) !== APP_ID) throw httpError(403, `This session belongs to another app.`);
  return payload; // { dat: { user_id, account_id, app_id, … }, exp, … }
}

/* ---------- OpenAI ---------- */

const PROMPTS = {
  write: {
    system:
      `You write clear, professional updates for a sales team's CRM on monday.com. ` +
      `Write in the same language as the request. Use short paragraphs or simple bullet points ("• "). ` +
      `Plain text only: no markdown, no headings, no greeting or sign-off unless asked.`,
    max: 450,
  },
  summarize: {
    system:
      `You summarize monday.com updates (often forwarded emails) for a busy sales team. ` +
      `Reply in 2 to 4 short bullet points starting with "• ". Keep names, companies, dates, amounts and next steps. ` +
      `Ignore signatures, tracking links and quoted older emails. Same language as the update. Plain text only.`,
    max: 250,
  },
};

async function openai(kind, userText) {
  const key = await secret(`OPENAI_API_KEY`);
  if (!key) throw httpError(500, `OPENAI_API_KEY is not set (.env or Server-side code → Secrets).`);
  const res = await fetch(`https://api.openai.com/v1/chat/completions`, {
    method: `POST`,
    headers: { Authorization: `Bearer ${key}`, "Content-Type": `application/json` },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || `gpt-4o-mini`,
      temperature: 0.4,
      max_tokens: PROMPTS[kind].max,
      messages: [
        { role: `system`, content: PROMPTS[kind].system },
        { role: `user`, content: userText },
      ],
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw httpError(502, `OpenAI error: ${data?.error?.message || res.status}`);
  return String(data?.choices?.[0]?.message?.content || ``).trim();
}

/* ---------- ✨ Autofill: the team's classification rules ---------- */

const AUTOFILL_GUIDE = `You classify comments that a sales/operations team logs on deals and leads in monday.com.
Read the comment (and the deal/lead context) and fill the form fields.

ANSWER RULES
- Every value MUST be copied exactly from "allowedValues" in the request. The rules below use codes (QUOTE, SHIP, PAY…);
  answer with the matching allowedValues entry, e.g. QUOTE → "Quote", SHIP → "Ship", PAY → "Pay", ITEM → "Item", TRADE → "Trade".
- ALWAYS fill: mainCategory (exactly one, the best match — even for short or vague comments use the deal/lead context),
  subCategory (one tag; DOCS if none fits), categories (derived from mainCategory), escalation ("Yes" or "No").
- Fill nextStep, dueDate and transcript only when the comment implies them; otherwise "".
- Never invent values that are not in allowedValues.

LANGUAGE
- Comments are often in GERMAN (short ERP-style notes full of abbreviations), sometimes English. Classify by meaning;
  use the GERMAN TERMS list below. The answer values are always the allowedValues, never translated.
- One comment may hold several notes (often each starting with a date). Autofill fills one set of fields, so classify
  the most important operational note, using the priority and mandatory rules below.

MAIN CATEGORY (scope) — select exactly one:
LEAD = leads, prospects, pipeline, potential customers
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
- order terms: minimum order value (MBW), frei Haus thresholds, prices, which articles to deliver or not → ORDER + TERMS
  (+ VAT / MwSt. → subCategory TAX)
- order handling: partial / back-order delivery (Nachlieferung), which account handles which deliveries → ORDER + LOG
- shipping: carrier or route (DHL, GLS, MBS, Spedition), freight costs, delivery to a country, delivery slots → SHIP + LOG
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

NEXT STEP — the action the comment implies (e.g. unpaid invoice → Chase Payment, customer wants an offer → Send Proposal,
waiting for the customer → Awaiting Response, call agreed → Call Back). Empty if no action is implied.

ESCALATION — "Yes" only if the comment says it is urgent, escalated, a complaint, or at risk (German: dringend,
eskaliert, Beschwerde, Reklamation); otherwise "No". Exclamation marks or capitals alone are not an escalation.

DUE DATE — only if the comment states or implies a deadline ("by Friday", "next week", "on the 30th"; German: "bis",
"bis zum", "spätestens", "nächste Woche"). Work it out from TODAY given in the request and return YYYY-MM-DD; otherwise
empty. A date that starts or ends a note ("21.03.2014 MBW…", "/ 15.02.18 BD") or says since when something applies
("ab 15.01.14", "Stand 27.05.2025") is when the note was written or took effect — NOT a due date.

TRANSCRIPT — a URL from the comment only if it is clearly a call/meeting transcript link; otherwise empty.

Reply with JSON only: {"escalation":"","categories":"","mainCategory":"","subCategory":"","nextStep":"","dueDate":"","transcript":""}`;

async function openaiAutofill(body) {
  const key = await secret(`OPENAI_API_KEY`);
  if (!key) throw httpError(500, `OPENAI_API_KEY is not set (.env or Server-side code → Secrets).`);
  const list = v => (Array.isArray(v) ? v.map(String).slice(0, 80) : []);
  const options = {
    escalation: list(body.options?.escalation),
    categories: list(body.options?.categories),
    mainCategory: list(body.options?.mainCategory),
    subCategory: list(body.options?.subCategory),
    nextStep: list(body.options?.nextStep),
  };
  const examples = (Array.isArray(body.examples) ? body.examples : []).slice(0, 8);
  const request = {
    instructions: `Fill mainCategory, subCategory, categories and escalation always; copy values exactly from allowedValues.`,
    today: String(body.today || ``).slice(0, 10),
    weekday: String(body.weekday || ``).slice(0, 12),
    deal: { name: String(body.dealName || ``).slice(0, 200), stage: String(body.dealStage || ``).slice(0, 100) },
    allowedValues: options,
    examplesFromThisDeal: examples,
    comment: String(body.comment || ``).slice(0, 4000),
  };
  const res = await fetch(`https://api.openai.com/v1/chat/completions`, {
    method: `POST`,
    headers: { Authorization: `Bearer ${key}`, "Content-Type": `application/json` },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || `gpt-4o-mini`,
      temperature: 0.1,
      max_tokens: 300,
      response_format: { type: `json_object` },
      messages: [
        { role: `system`, content: AUTOFILL_GUIDE },
        { role: `user`, content: JSON.stringify(request) },
      ],
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw httpError(502, `OpenAI error: ${data?.error?.message || res.status}`);
  let raw = {};
  try {
    raw = JSON.parse(data?.choices?.[0]?.message?.content || `{}`);
  } catch {}
  // Keep only exact allowed values (case-insensitive match → the form's own spelling).
  const pick = (val, allowed) => allowed.find(o => o.toLowerCase() === String(val || ``).trim().toLowerCase()) || ``;
  const fields = {};
  for (const k of Object.keys(options)) {
    const v = pick(raw[k], options[k]);
    if (v) fields[k] = v;
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw.dueDate || ``)) fields.dueDate = raw.dueDate;
  if (/^https?:\/\//i.test(raw.transcript || ``)) fields.transcript = String(raw.transcript).slice(0, 500);
  return fields;
}

/* ---------- small helpers ---------- */

function httpError(status, message) {
  const e = new Error(message);
  e.status = status;
  return e;
}

function sendJson(res, status, obj) {
  res.writeHead(status, { "Content-Type": `application/json; charset=utf-8`, "Cache-Control": `no-store` });
  res.end(JSON.stringify(obj));
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on(`data`, c => {
      size += c.length;
      if (size > MAX_BODY) {
        reject(httpError(413, `Request too large.`));
        req.destroy();
      } else chunks.push(c);
    });
    req.on(`end`, () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString() || `{}`));
      } catch {
        reject(httpError(400, `Invalid JSON.`));
      }
    });
    req.on(`error`, reject);
  });
}

// Simple per-user limit so a stuck button can't run up the OpenAI bill: 30 requests per minute.
const hits = new Map();
function rateLimit(userId) {
  const now = Date.now();
  const list = (hits.get(userId) || []).filter(t => now - t < 60000);
  if (list.length >= 30) throw httpError(429, `Too many AI requests. Please wait a minute.`);
  list.push(now);
  hits.set(userId, list);
}

/* ---------- static page ---------- */

const TYPES = { ".html": `text/html; charset=utf-8`, ".js": `text/javascript; charset=utf-8`, ".css": `text/css; charset=utf-8`, ".svg": `image/svg+xml`, ".png": `image/png`, ".ico": `image/x-icon`, ".json": `application/json` };

function serveStatic(req, res) {
  let rel = decodeURIComponent(new URL(req.url, `http://x`).pathname);
  // monday may open the page on a sub-path; assets are found wherever "/assets/" appears in the path.
  const at = rel.lastIndexOf(`/assets/`);
  if (at > 0) rel = rel.slice(at);
  if (rel === `/` || rel === `` || !path.extname(rel)) rel = `/index.html`;
  const file = path.normalize(path.join(PUBLIC_DIR, rel));
  if (!file.startsWith(PUBLIC_DIR + path.sep)) return sendJson(res, 403, { error: `Forbidden` });
  fs.readFile(file, (err, buf) => {
    if (err) {
      if (rel.startsWith(`/assets/`)) return sendJson(res, 404, { error: `Not found` }); // never answer a script with HTML
      // Unknown paths fall back to the page itself.
      return fs.readFile(path.join(PUBLIC_DIR, `index.html`), (e2, html) => {
        if (e2) return sendJson(res, 404, { error: `Not found` });
        res.writeHead(200, { "Content-Type": TYPES[`.html`], "Cache-Control": `no-cache` });
        res.end(html);
      });
    }
    const ext = path.extname(file).toLowerCase();
    // Asset names contain a content hash, so they can be cached for a long time; the page itself can't.
    const cache = rel.startsWith(`/assets/`) ? `public, max-age=31536000, immutable` : `no-cache`;
    res.writeHead(200, { "Content-Type": TYPES[ext] || `application/octet-stream`, "Cache-Control": cache });
    res.end(buf);
  });
}

/* ---------- routes ---------- */

async function handleApi(req, res, route) {
  if (req.method !== `POST`) throw httpError(405, `Use POST.`);
  const session = readSessionToken(req.headers.authorization);
  const ip = String(req.headers[`x-forwarded-for`] || req.socket?.remoteAddress || ``).split(`,`)[0].trim();
  rateLimit(`user:${session?.dat?.user_id || `anon`}`);
  rateLimit(`ip:${ip || `unknown`}`);
  const body = await readJson(req);

  if (route === `/api/ai/write`) {
    const prompt = String(body.prompt || ``).trim().slice(0, 4000);
    if (!prompt) throw httpError(400, `Describe what the update should say.`);
    return sendJson(res, 200, { text: await openai(`write`, prompt) });
  }
  if (route === `/api/ai/autofill`) {
    if (!String(body.comment || ``).trim()) throw httpError(400, `Write the comment first.`);
    return sendJson(res, 200, { fields: await openaiAutofill(body) });
  }
  if (route === `/api/ai/summarize`) {
    const text = String(body.text || ``).trim().slice(0, 12000);
    if (!text) throw httpError(400, `This update has no text to summarize.`);
    return sendJson(res, 200, { text: await openai(`summarize`, text) });
  }
  throw httpError(404, `Unknown API route.`);
}

http
  .createServer(async (req, res) => {
    const route = new URL(req.url, `http://x`).pathname;
    try {
      if (route === `/health`) {
        const names = [`OPENAI_API_KEY`];
        const seen = {};
        for (const n of names) seen[n] = (await secretCandidates(n)).map(c => `${c.source} (${c.value.length} chars)`);
        return sendJson(res, 200, { ok: true, secretsFound: seen });
      }
      if (route.startsWith(`/api/`)) return await handleApi(req, res, route);
      if (req.method !== `GET` && req.method !== `HEAD`) throw httpError(405, `Method not allowed.`);
      return serveStatic(req, res);
    } catch (err) {
      if (!err.status) console.error(err);
      sendJson(res, err.status || 500, { error: err.status ? err.message : `Server error.` });
    }
  })
  .listen(PORT, () => console.log(`Comment Builder listening on ${PORT}`));
