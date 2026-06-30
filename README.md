# Self-Improving Software — Presentations

A collection of HTML presentations on self-improving software. Each presentation
lives in its own folder and is a self-contained, navigable HTML slide deck.

## Presentations

| # | Title | Folder |
|---|-------|--------|
| 1 | Self-Improving MCP based on real user experience | [`Self-Improving-MCP/`](./Self-Improving-MCP/) |

## Run it manually

The deck is plain HTML/CSS/JS — there is nothing to install or build. Two ways to run it.

### 1. Clone, then open the file directly

```bash
git clone git@github.com:ArtyETH06/SIS-Presentation.git
cd SIS-Presentation/Self-Improving-MCP

open index.html         # macOS
xdg-open index.html     # Linux
start index.html        # Windows
```

This works for everything except: the QR codes and avatar images load fine, but
some browsers block `file://` access to sibling assets. If an image or QR is
missing, use the local-server method below instead.

### 2. Serve it locally (recommended)

From inside the presentation folder, start any static server:

```bash
cd Self-Improving-MCP
python3 -m http.server 8777
# then open http://localhost:8777 in your browser
```

No Python? Any of these work the same way:

```bash
npx serve -l 8777 .          # Node (npx)
php -S localhost:8777        # PHP
ruby -run -e httpd . -p 8777 # Ruby
```

Then open **http://localhost:8777** and present. Press `F` for fullscreen.

> Note: the fonts (Geist, Hanken Grotesk, Fragment Mono) load from Google Fonts,
> so the first load needs an internet connection. Offline, the deck still works —
> it just falls back to system fonts.

## Navigation

| Action | Keys |
|--------|------|
| Next slide | `→` · `Space` · `PageDown` · scroll down |
| Previous slide | `←` · `PageUp` · scroll up |
| First / last slide | `Home` / `End` |
| Fullscreen | `F` |
| Jump to slide | click the dots |
| Mobile | swipe left / right |

## Stack

Plain HTML + CSS + vanilla JS. No framework, no build — just open the file.
Fonts loaded from Google Fonts (Geist, Hanken Grotesk, Fragment Mono).
