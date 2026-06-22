# tankrich.com

Official website of **Tankrich AI Consulting** — a specialist AI consultancy based in Melbourne, Australia, serving clients worldwide.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Deployed on Cloudflare Pages. Push to `main` to auto-deploy.

## Editing Content

- **Services** — edit `src/data/products.ts` (`services` array).
- **Case studies** — edit `src/data/projects.ts` (`caseStudies` array). Each entry follows the STAR method: `situation`, `task`, `action`, `result`. Keep results qualitative unless you have verified metrics.
- **SEO / structured data** — `src/layouts/BaseLayout.astro` (meta tags + JSON-LD Organization schema).
- **LLM discoverability** — `public/llms.txt` and `public/llms-full.txt`.
