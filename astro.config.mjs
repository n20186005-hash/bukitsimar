import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// URL produksi yang sebenarnya. Diisi agar canonical, OG absolut, dan sitemap
// terbit dengan benar (tanpa ini Google mudah mengindeks versi http://).
const SITE = 'https://bukitsimar.com';

export default defineConfig({
  site: SITE,
  output: 'static',
  integrations: SITE ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
