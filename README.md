# Navastha website

Static marketing site for Navastha — A New State of Focus.
React + TypeScript + Vite + Tailwind + Framer Motion. No backend, no keys.

    npm install
    npm run dev
    npm run build

Colours live as CSS variables in `src/index.css` (change the brand there).
Deploys to GitHub Pages via `.github/workflows/deploy.yml`.

## Pages and features

- `index.html` - the single-page site (React). Sections live in `src/components/`.
- `src/config.ts` - support email, site URL and the optional early-access endpoint. Change values here only.
- `public/privacy.html`, `terms.html`, `support.html`, `delete-account.html`, `404.html` - plain pages with the shared `pages.css` and `pages.js` (light/dark switch).
- `public/sitemap.xml`, `robots.txt`, `manifest.webmanifest`, `og-image.png` - search and share previews.
- `docs/WAITLIST_SETUP.md` - optional: collect early-access emails in a Google Sheet.

When you change what the app collects, update `public/privacy.html` and `public/delete-account.html` first.
