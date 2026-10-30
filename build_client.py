for """Build the Comment Builder page into comment-builder-server-app/public/ (served by server.py on monday code).

Usage (from the project root):  python3 -I comment-builder-server-app/build_client.py
Uses the same sources as the zip build (v4/comment-logic.js, v4/updates-feed.js, v4/ui.js, v4/updates.css)
and the original v2 bundle in 16960240/. Writes files only; no zip.
"""
import hashlib
import pathlib
import shutil

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent
SRC = ROOT / "v4"
V2 = ROOT / "16960240"
PUBLIC = HERE / "public"
V2_JS = "index-DrcEGg81.js"

src = (V2 / "assets" / V2_JS).read_text(encoding="utf-8")
logic = (SRC / "comment-logic.js").read_text(encoding="utf-8")
feed = (SRC / "updates-feed.js").read_text(encoding="utf-8")
ui = (SRC / "ui.js").read_text(encoding="utf-8")
css = (SRC / "updates.css").read_text(encoding="utf-8")


def swap(text, start_marker, end_marker, new):
    """Replace text[start_marker : end_marker) with new; both markers must be unique."""
    for marker in (start_marker, end_marker):
        if text.count(marker) != 1:
            raise SystemExit(f"Marker {marker[:40]!r} not unique; is this the v2 bundle?")
    start, end = text.index(start_marker), text.index(end_marker)
    return text[:start] + "\n" + new + "\n" + text[end:]


src = swap(src, "async function Tn(e){", "var kn=0", logic)
src = swap(src, "function Pn(){", "Ut(document.getElementById(`root`))", feed + "\n" + ui)


def hashed(stem, ext, content):
    return f"{stem}-{hashlib.sha256(content.encode('utf-8')).hexdigest()[:8]}.{ext}"


out_js = hashed("index", "js", src)
out_css = hashed("updates", "css", css)

if PUBLIC.exists():
    shutil.rmtree(PUBLIC)
(PUBLIC / "assets").mkdir(parents=True)
(PUBLIC / "assets" / out_js).write_text(src, encoding="utf-8")
(PUBLIC / "assets" / out_css).write_text(css, encoding="utf-8")
for orig_css in (V2 / "assets").glob("*.css"):
    shutil.copy2(orig_css, PUBLIC / "assets" / orig_css.name)

html = (V2 / "index.html").read_text(encoding="utf-8")
if html.count(f"./assets/{V2_JS}") != 1 or html.count("</head>") != 1:
    raise SystemExit("Unexpected index.html; is this the v2 build?")
html = html.replace(f"./assets/{V2_JS}", f"./assets/{out_js}")
html = html.replace("<title>Deal Comment Logger</title>", "<title>Comment Builder</title>")
html = html.replace("</head>", f'  <link rel="stylesheet" href="./assets/{out_css}">\n  </head>')
html = html.replace('"./assets/', '"/assets/')  # absolute: works whatever path monday opens the page on
(PUBLIC / "index.html").write_text(html, encoding="utf-8")
print("Built page into", PUBLIC, "->", out_js, out_css)
