# Vedran UX Portfolio (Lite)

Lightweight Vite + React + Tailwind project. Add your images to `src/assets/` then run:

```bash
npm install
npm run dev
```

## Images to add
Place these files in `src/assets/` (keep names the same or update imports in `src/PortfolioSite.jsx`):
- profile.jpg
- anytime-all.png
- anytime-phones.png
- camelback.avif
- menu.png
- wire-1.png
- wire-2.png

## Deploy
- Netlify: `npm run build` then deploy `dist/`
- Vercel: import repo → deploy

## Contact form
Set your Formspree ID in `src/PortfolioSite.jsx`:
```js
const FORMSPREE_ID = "your_form_id_here";
```
