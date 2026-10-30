# Comment Builder on monday code (server side)

This folder is the whole Comment Builder app as a monday code server:

- `server.py`: serves the Comment Builder page and the AI endpoints (`/api/ai/write`, `/api/ai/summarize`, `/api/ai/autofill`). Python 3.9+, standard library only.
- `public/`: the page. Rebuild it after any change in `v4/` with `python3 -I comment-builder-server-app/build_client.py`.
  **Before the next rebuild**, apply `v4-fixes.diff` to `v4/` by hand: the photo-field and double-mention fixes go into
  `v4/updates-feed.js`, the Autofill fix (clear the previous Autofill's leftovers) into `v4/ui.js`. Both were made
  directly in `public/`, and a rebuild from an unchanged `v4/` would undo them.
- `Procfile`: tells monday code how to start the server (`python3 server.py`).
- `requirements.txt`: marks this as a Python app for monday code. It's empty because the server needs no packages.

The secrets are **never** in git. They live in monday code **Secrets** (`.env` is only for running locally and is in `.gitignore`).

## One-time setup

1. Install Node.js: `brew install node` (or the LTS installer from nodejs.org). Check: `node -v`. The server doesn't need it, but monday's deploy tool does.
2. Install monday's app tool: `npm install -g @mondaycom/apps-cli`
3. Log in: `mapps init`, then paste your developer token (Developer Center → profile picture → Developer → My access tokens).

## Run it locally

Put the keys in `.env` (same names as the Secrets below; never commit it), then:

```bash
cd comment-builder-server-app
python3 server.py            # or: PORT=3000 python3 server.py
```

Open `http://localhost:8080/health`. Outside monday code the key comes from your environment or `.env`.

## Deploy (each time something changes)

From the project folder:

```bash
python3 -I comment-builder-server-app/build_client.py
cd comment-builder-server-app
mapps code:push -a 11942098
```

`11942098` is the Comment Builder app ID. When asked, pick the **draft** version you're working on (v4).

## Secrets: monday code Secrets (once per app version)

Developer Center → Comment Builder → v4 → **Server-side code → Secrets**:

| Name | Value |
|---|---|
| `OPENAI_API_KEY` | your OpenAI API key |
| `MONDAY_CLIENT_SECRET` | the app's **Client Secret** (Developer Center → Comment Builder → **Basic Information**) |

With `MONDAY_CLIENT_SECRET` set, every AI request must carry a session token signed by monday for this app, so nobody
outside monday can use the OpenAI key. Without it the signature is not checked (`/health` shows `"signatureCheck":"off"`).

Optional, under **Environment variables**: `OPENAI_MODEL` (default `gpt-4o-mini`).

`server.py` reads Secrets and Environment variables from monday code's local service (`localhost:59999`), the same one monday's SDKs use.

## Point the tab at the server

Developer Center → **Features → Comment Builder → Deployment** → choose **monday code** (instead of the zip) → **Save changes**.

## Check it works

- Open `<your monday code URL>/health`. It should show `"ok":true`, `"signatureCheck":"on"` and, under `secretsFound`, where each secret was found (e.g. `monday Secrets (164 chars)`).
- On a deal → Comment Builder → ✍️ **Write with AI** → describe an update → **Generate**.
- On an update → 📋 **Summarize**.
- In the comment form → ✨ **Autofill**.
