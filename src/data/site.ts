// Nama situs terpusat mengikuti format: "Nama objek + Kota/Kawasan + Panduan Wisata".
// Dipakai oleh semua title halaman, og:site_name, dan (bila ada) manifest.
export const SITE_NAME = 'Bukit Indah Simarjarunjung Danau Toba — Panduan Wisata';

// Sub-halaman (legal, 404, dll) menambahkan ' | SITE_NAME' di belakang judulnya.
export function withSiteName(title: string): string {
  return `${title} | ${SITE_NAME}`;
}
