# UNBROKEN — 20,000 Years of African History

An interactive, evidence-based web project tracing African history from the origins of *Homo sapiens* through the great pre-colonial empires and into living culture.

**Volume I — Origins & Empires:** Origins (migration map) · Kemet & Nubia (pyramid engineering lab) · Kingdoms (empire map) · Culture (3D hair & attire archive).

**Volume II — Trade & the slave trades** (live): Trade (trade-route map) · Slavery & Resistance (four systems, Slave Voyages data, resistance timeline).

**Volume III — Colonialism & independence** (live): Berlin Conference, wars of resistance, and the road to independence — mapped and sourced.

---

## Run it locally

No build step. Either:

1. **Open directly:** double-click `index.html` (works from the filesystem — data is loaded as scripts, not fetched).
2. **Or serve it** (recommended, so map tiles behave identically everywhere):

   ```powershell
   # from this folder
   python -m http.server 8080
   # then visit http://localhost:8080
   ```

The interactive maps use free CARTO/OpenStreetMap tiles, so they need an internet connection the first time.

## Project structure

```
index.html            Home + deep-time timeline
genesis.html          Origins + Out of Africa map
kemet.html            Kemet, Nubia + pyramid engineering lab
kingdoms.html         Pre-colonial empires map
trade.html            Trade-route map (Volume II)
slavery.html          Slave trades & resistance (Volume II)
colonialism.html      Colonialism & independence (Volume III)
culture.html          3D hair & attire archive
SOURCES.html          Full source list (on-site)
README.html           About page (on-site)
assets/
  css/site.css        Shared design system
  css/leaflet.css     Map styles
  js/site.js          Shared behaviour (nav, reveal, analytics, share)
  js/data/history.js  All Volume I content (edit here)
  js/three/           Vendored Three.js + OrbitControls
  js/vendor/          Vendored Leaflet + Lucide
  img/og-default.png  Social share image
_archive/             Pre-rebuild prototype (not published)
```

## Editing content

All Volume I content lives in **`assets/js/data/history.js`**. Edit the arrays/objects there and every page updates automatically. Keep `SOURCES.md` in sync when you add or change a factual claim.

## Accuracy policy

- Every factual claim is indexed in `SOURCES.md`.
- Contested topics are labelled and explained rather than asserted.
- Language avoids conflating distinct events (e.g. the trans-Saharan, Indian Ocean and transatlantic slave trades are treated separately in Volume II).
- Interactive models (3D hairstyles, the pyramid simulator) are **stylised teaching tools**, not reconstructions or portraits; the simulator states its assumptions on-page.

## Enabling analytics

A static site can still show you visitor numbers. This project is wired for **Cloudflare Web Analytics** (free, privacy-friendly, no cookie banner):

1. Deploy the site (see below).
2. In the Cloudflare dashboard, create a Web Analytics site and copy the token.
3. Paste it into the `cf-beacon-token` meta tag in each page (or just `index.html` if you prefer page-level tracking).

Until a token is set, no tracking script loads.

## Deploying (free)

**Cloudflare Pages** or **GitHub Pages** / **Netlify** / **Vercel** — all work with zero config because there is no build step.

Cloudflare Pages (drag-and-drop):
1. Push this folder to a Git repo, or use "Direct Upload".
2. Build command: *(none)* · Output directory: `/`
3. Add your custom domain in the Pages settings.

## Attribution & licensing

- Map tiles © OpenStreetMap contributors © CARTO.
- Three.js, Leaflet and Lucide are used under their respective open-source licences (see `assets/js/*`).
- Only public-domain / openly licensed imagery is used; each asset is credited in `SOURCES.md`.
