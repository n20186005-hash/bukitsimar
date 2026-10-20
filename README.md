# Panduan Bukit Indah Simarjarunjung

Panduan independen berbahasa Indonesia untuk BIS di Dolok Pardamean, Simalungun. Tidak berafiliasi dengan pengelola atau menyediakan pemesanan.

## Pengembangan dan penerbitan

Node 24.19.0, pnpm 11.22.0. Jalankan `pnpm install --frozen-lockfile`, `pnpm check`, dan `pnpm build`. Produksi menggunakan Astro statis dan Cloudflare Worker `bukitsimar` dengan ASSETS `run_worker_first`. `pnpm deploy` membangun lalu menerbitkan; penerbitan dilakukan terpisah oleh pemilik proyek.

Domain kanonis: `https://bukitsimar.com/`. Worker mengalihkan HTTP dan www dengan path/query terjaga serta mengembalikan 404 nyata dengan noindex. `dist/` merupakan hasil build yang tidak dilacak sesuai konvensi awal; semua sumber dan aset publik disimpan di Git.

## Halaman dan informasi

Rute yang dipertahankan: `/`, `/privacy/`, `/terms/`, `/cookies/`, serta halaman kesalahan. Hanya halaman utama masuk sitemap. Semua halaman memiliki judul, canonical dan alternate bahasa Indonesia. Tidak ada bahasa tambahan.

Pemeriksaan editorial 20 Oktober 2026: lokasi dan snapshot Maps dibedakan dari jadwal pengelola. Tarif dan jam terkini belum terverifikasi. Materi Indonesia.travel dipakai untuk konteks titik pandang Danau Toba dan alamat kawasan, bukan jaminan layanan, cuaca atau operasi spot foto. Tidak ada harga, jam mingguan, rating atau penawaran yang diserialisasi sebagai schema.

## Privasi

Google Analytics hanya dimuat setelah pilihan eksplisit melalui `/cookies/`. Kunci baru `bukitsimar_cookie_preferences` tidak mengimpor izin lama. Penarikan izin menonaktifkan analitik segera; kegagalan penulisan permanen memakai veto sessionStorage jika tersedia dan pesan cakupan yang jujur. Tidak memuat ulang ke izin lama. Tidak ada akun, kontak, pembayaran, pemesanan atau iframe peta. Maps hanya tautan eksternal.

## Foto

Lihat [PHOTO-CREDITS.md](PHOTO-CREDITS.md). Foto lama tidak membuktikan kondisi atau operasi saat ini; foto dari Samosir diberi label konteks lokasi berbeda. Atribusi dan tautan lisensi terlihat pada halaman.
