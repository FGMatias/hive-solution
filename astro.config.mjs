// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hivesoluciones.com',
  integrations: [
    sitemap({
      // The 404 is not a page to index.
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
