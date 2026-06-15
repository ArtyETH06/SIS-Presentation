# Self-Improving Software — Presentations

A collection of HTML presentations on self-improving software. Each presentation
lives in its own folder and is a self-contained, navigable HTML slide deck.

## Presentations

| # | Title | Folder |
|---|-------|--------|
| 1 | Self-Improving MCP based on real user experience | [`Self-Improving-MCP/`](./Self-Improving-MCP/) |

## How to view

Open the presentation's `index.html` in any browser — no build step, no dependencies:

```bash
open Self-Improving-MCP/index.html      # macOS
xdg-open Self-Improving-MCP/index.html  # Linux
```

Or serve it locally:

```bash
cd Self-Improving-MCP && python3 -m http.server 8000
# then open http://localhost:8000
```

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
Fonts loaded from Google Fonts (Space Grotesk, Inter, JetBrains Mono).
