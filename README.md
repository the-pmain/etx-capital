# ETX Capital — developer app

Vite + React (JavaScript) rebuild of [etx-marketing.com](https://etx-marketing.com/). Dark navy/gold career site, RU default, EN under `/en/`.

```bash
npm install
npm run dev
```

App: http://localhost:5173/

## Layout of the code

```
src/
  config/site.js          Company facts (email, phone, HH, hours, address)
  data/jobs.js            All vacancies — add a role here
  i18n/ru.js · en.js      UI copy and page text
  lib/paths.js            Locale-aware URLs
  lib/lead.js             POST /api/lead
  components/ui           Button, Logo, Icon, layout primitives
  components/layout       Header, Footer, cookie bar, toast
  components/scene        Photo atmosphere (scrim + grain + Ken Burns)
  components/forms        Lead form + honeypot
  pages/                  One file per route
  layouts/SiteLayout.jsx  Shared chrome
```

How to change things quickly:

| Task | File |
|---|---|
| New vacancy | `src/data/jobs.js` |
| New language string | `src/i18n/ru.js` and `src/i18n/en.js` |
| Colors / type | `src/styles/index.css` `@theme` |
| Phone, address, HH links | `src/config/site.js` |
| New page | add a file in `src/pages/`, register in `src/App.jsx` |

## Lead form

Dev server mocks `POST /api/lead` and logs the payload. Point production at PHP or a webhook with `VITE_LEAD_ENDPOINT`.

Honeypot field: `company`. Paused jobs open a toast instead of HH.ru.

## Photos

Drop JPGs into `public/scenes/` using the names in `public/scenes/README.txt`. Favicon is already in `public/favicon.svg`.
