import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Isi URL produksi yang sebenarnya hanya pada konstanta SITE ini.
// Biarkan undefined sebelum domain final dipilih; build tetap berjalan tanpa URL palsu.
const SITE = undefined;

export default defineConfig({
  site: SITE,
  output: 'static',
  integrations: SITE ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
