# MusicRoom

Premium website for **The Music Room by Archit** — a music academy in Dehradun.

## Stack

Semantic HTML5, CSS3 (custom properties), vanilla ES modules. No frameworks.

## Structure

- `index.html` — Home (hero, philosophy, programs, why-us, gallery, testimonials, CTA)
- `pages/about.html` — story, founder, mission/vision, performance culture, stats
- `pages/programs.html` — Year One journey, timeline, term cards, outcomes, FAQ
- `pages/gallery.html` — category filters, masonry grid, accessible lightbox
- `pages/contact.html` — contact details, map, validated form, WhatsApp CTA
- `css/` — variables, reset, typography, layout, components, animations, utilities, responsive (imported by `style.css`)
- `js/` — main, navbar, animations, gallery, contact, faq, utils (ES modules)
- `assets/images/` — SVG placeholders; replace with real academy photography (WebP preferred) before launch
- `sitemap.xml`, `robots.txt` — SEO

## Development

No installs needed — just double-click `index.html`. The pages load `js/site.js`, a classic script with zero imports, so everything works over `file://`, offline, on any device.

In VS Code, press `F5` — it opens `index.html` directly in the browser. No local server, Python, or extra setup required.

Optional local server (same result):

```bash
python -m http.server 8000
```

## Conventions

Docs in `MusicFacortyWebsiteData/` are the source of truth: dark luxury theme (`#0B0B0B` / gold `#C89B3C`), Playfair Display + Inter, 8px spacing scale, BEM naming, WCAG 2.2 AA, Lighthouse ≥90.

## Before deployment

- Replace placeholder SVGs with real photos (WebP) and update `assets/images/hero.svg` preload.
- Update phone/email/WhatsApp/social links in `pages/contact.html` and JSON-LD schema.
- Set domain `themusicfactory.in` in canonical/OG/sitemap URLs if different.
