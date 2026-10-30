# Comment Builder on monday code (server side)

This folder is the whole Comment Builder app as a monday code server:

- `server.js`: serves the Comment Builder page and the AI endpoints (`/api/ai/write`, `/api/ai/summarize`, `/api/ai/autofill`).
- `public/`: the page. Rebuild it after any change in `v4/` with `python3 -I comment-builder-server-app/build_client.py`.
- `package.json`: tells monday code how to start the server (`npm start`).

The OpenAI key is **never** in this folder. It lives in monday code **Secrets**.

## One-time setup

1. Install Node.js: `brew install node` (or the LTS installer from nodejs.org). Check: `node -v`.
2. Install monday's app tool: `npm install -g @mondaycom/apps-cli`
3. Log in: `mapps init`, then paste your developer token (Developer Center → profile picture → Developer → My access tokens).

## Deploy (each time something changes)

From the project folder:

```bash
python3 -I comment-builder-server-app/build_client.py
cd comment-builder-server-app
mapps code:push -a 11942098
```

`11942098` is the Comment Builder app ID. When asked, pick the **draft** version you're working on (v4).

## Secrets: option A, the .env file (in this folder)

Open `.env` and fill in:

```
OPENAI_API_KEY=sk-...
```

`.env` is read only by `server.js` on the server and is never served to the browser.
**Never** put this folder or `.env` into the client-side zip (Features → Deployment).

## Secrets: option B, monday code Secrets (once per app version)

Developer Center → Comment Builder → v4 → **Server-side code → Secrets**:

| Name | Value |
|---|---|
| `OPENAI_API_KEY` | your OpenAI API key |

Optional, under **Environment variables**: `OPENAI_MODEL` (default `gpt-4o-mini`).

## Point the tab at the server

Developer Center → **Features → Comment Builder → Deployment** → choose **monday code** (instead of the zip) → **Save changes**.

> For now no monday secret is used: the server only reads the session token (app ID + expiry).
> Before going live, restore the signature check with the app's Client Secret.

## Check it works

- Open `<your monday code URL>/health`. It should show `{"ok":true}`.
- On a deal → Comment Builder → ✍️ **Write with AI** → describe an update → **Generate**.
- On an update → 📋 **Summarize**.
- In the comment form → ✨ **Autofill**.
