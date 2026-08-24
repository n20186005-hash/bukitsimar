# Panduan Bukit Indah Simarjarunjung

Situs informasi wisata independen dan non-profit untuk Bukit Indah Simarjarunjung (BIS), Kabupaten Simalungun, Sumatera Utara. Antarmuka dan konten publik menggunakan Bahasa Indonesia.

## Teknologi

- Astro + TypeScript
- Tailwind CSS melalui `@tailwindcss/vite`
- pnpm
- Cloudflare Workers Static Assets melalui Wrangler
- Tanpa basis data, login, atau CMS

## Menjalankan proyek

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

Untuk pengembangan lokal:

```bash
pnpm dev
```

## Domain / `site`

Domain produksi hanya diatur pada konstanta `SITE` di `astro.config.mjs`. Selama belum ada domain final, biarkan `SITE = undefined`.

- proyek tetap dapat dibangun tanpa domain;
- canonical dan `og:url` dihilangkan saat tidak ada `site`;
- `og:image` menggunakan path relatif;
- integrasi `@astrojs/sitemap` hanya diaktifkan ketika `site` sudah diisi;
- tidak ada domain contoh yang disisipkan sebagai fallback.

Setelah domain tersedia, ubah hanya:

Tetapkan konstanta `SITE` ke URL produksi yang sebenarnya setelah domain final tersedia. Jangan menambahkan URL contoh atau domain sementara.

lalu jalankan build kembali.

## Cloudflare Worker

`wrangler.jsonc` menyajikan direktori `./dist` sebagai Static Assets. Setelah login Cloudflare dan menyesuaikan nama Worker bila perlu:

```bash
pnpm deploy
```

## Privasi dan analitik

GA4 `G-HXM22WWPKP` tidak dimuat otomatis. Skrip Google Analytics baru dimuat setelah pengguna mengaktifkan Cookie analitik pada `/cookies/`. Pilihan disimpan di `localStorage` dengan kunci `bis-cookie-consent`.

Google Maps adalah embed pihak ketiga terpisah dan menggunakan locale Indonesia (`id`).

## Sumber editorial utama

Konten diringkas dan dibandingkan dari sumber publik pemerintah/pariwisata, sumber ilmiah, UNESCO, data peta publik, dan dokumentasi visual berlisensi. Informasi yang mudah berubah—tarif, jam buka, kondisi jalan, fasilitas, rating—ditandai agar diperiksa kembali sebelum perjalanan.

Rincian hak gambar ada di [`PHOTO-CREDITS.md`](./PHOTO-CREDITS.md).
