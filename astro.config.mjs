import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://www.tankrich.com',
  build: {
    // The whole site is under ~30KB of CSS. Inlining it removes two
    // render-blocking stylesheet requests per page.
    inlineStylesheets: 'always',
  },
  compressHTML: true,
});
