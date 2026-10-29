// Pusat data topik bukitsimar.com.
// 40 halaman panduan mandiri berbahasa Indonesia, dikelompokkan ke dalam
// lima gugus utama (tiket, akses, kuliner, wisata, rencana).
// Semua konten bersifat independen dan non-komersial; informasi yang belum
// terverifikasi dinyatakan secara eksplisit agar pembaca memeriksa langsung.

export type TopicGroup = 'tiket' | 'akses' | 'kuliner' | 'wisata' | 'rencana';

export interface TopicSection {
  id?: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicFact {
  label: string;
  value: string;
}

export interface TopicContent {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  lead: string;
  updated: string;
  facts?: TopicFact[];
  blocks: TopicSection[];
  faq: TopicFaq[];
  related: string[];
}

export interface Topic {
  id: string;
  slug: string;
  group: TopicGroup;
  ready: boolean;
  content: TopicContent;
}

export const TOPIC_GROUP_LABELS: Record<TopicGroup, string> = {
  tiket: 'Tiket & Kunjungan',
  akses: 'Lokasi & Akses',
  kuliner: 'Kuliner & Kopi',
  wisata: 'Wisata Sekitar',
  rencana: 'Rute & Rencana',
};

export const TOPIC_GROUP_ORDER: TopicGroup[] = ['tiket', 'akses', 'kuliner', 'wisata', 'rencana'];

// Tanggal pemeriksaan sumber umum (Google Maps, situs pemerintah).
export const CHECK_DATE = '20 Oktober 2026';

const ATTRACTION = {
  name: 'Bukit Indah Simarjarunjung',
  short: 'BIS',
  address: 'Butu Bayu Pane Raja, Dolok Pardamean, Kabupaten Simalungun, Sumatera Utara 21163',
  maps: 'https://maps.app.goo.gl/jebnSVTqB8zqffgg7',
  rating: '4,3/5 dari 7.293 ulasan',
};

export const TOPICS: Topic[] = [
  // ============================================================
  // A. TIKET & KUNJUNGAN (9)
  // ============================================================
  {
    id: 'tiket-masuk',
    slug: 'tiket-masuk',
    group: 'tiket',
    ready: true,
    content: {
      metaTitle: 'Harga Tiket Masuk Bukit Indah Simarjarunjung (BIS) 2026',
      metaDescription:
        'Informasi tiket masuk BIS Simarjarunjung: tarif terkini belum terverifikasi, beda antara pintu masuk bernama Simarjarunjung, dan biaya wahana atau spot foto yang dikenakan terpisah.',
      kicker: 'Tiket & Kunjungan',
      h1: 'Harga Tiket Masuk Bukit Indah Simarjarunjung',
      lead: 'Tarif resmi BIS belum diverifikasi panduan ini. Gunakan panduan ini untuk mengetahui apa yang perlu ditanyakan sebelum membayar, dan mengapa satu angka lama tidak boleh dianggap harga loket saat ini.',
      updated: CHECK_DATE,
      facts: [
        { label: 'Status harga', value: 'Belum terverifikasi' },
        { label: 'Cek langsung', value: 'Tanya petugas di loket' },
        { label: 'Sumber snapshot', value: 'Google Maps, 20 Okt 2026' },
      ],
      blocks: [
        {
          id: 'status',
          heading: 'Tarif terkini belum terverifikasi',
          paragraphs: [
            'Pada 20 Oktober 2026, panduan ini tidak menemukan pengumuman resmi yang memuat tarif masuk BIS yang berlaku saat itu. Artikel lama dan ulasan pengunjung sering menyebut angka yang berbeda-beda, dan selisihnya cukup besar antar sumber.',
            'Karena itu, panduan ini tidak mencantumkan satu angka sebagai harga pasti. Tanyakan tiket masuk per orang atau per kendaraan, serta parkir, langsung kepada petugas sebelum membayar.',
          ],
          callout:
            'Jangan menganggap harga dari halaman lawas atau folder foto lama sebagai harga loket hari kunjungan Anda.',
        },
        {
          id: 'beda-tempat',
          heading: 'Satu nama, banyak pintu masuk',
          paragraphs: [
            'Simarjarunjung adalah kawasan luas di Dolok Pardamean. Nama ini dipakai oleh beberapa tempat usaha dan titik pandang yang dikelola secara terpisah, termasuk BIS, Panatapan, Hound Sky, Pinus Hills, dan lainnya.',
            'Tiket yang dibayar di satu pintu belum tentu berlaku di pintu lain. Pastikan Anda berada di pintu Bukit Indah Simarjarunjung (BIS) bila itulah tujuan Anda.',
          ],
        },
        {
          id: 'wahana',
          heading: 'Wahana dan spot foto mungkin dikenakan biaya terpisah',
          paragraphs: [
            'Beberapa struktur foto, ayunan, atau flying fox di kawasan ini kerap memiliki tarif sendiri, terlepas dari tiket masuk.',
            'Tanyakan secara terpisah: tiket masuk, parkir, serta setiap wahana atau spot foto yang ingin digunakan. Catat atau foto struk bila perlu untuk menghindari kekeliruan.',
          ],
        },
      ],
      faq: [
        {
          q: 'Berapa harga tiket masuk BIS hari ini?',
          a: 'Panduan ini belum menemukan tarif resmi yang diverifikasi per 20 Oktober 2026. Tanyakan langsung ke petugas di pintu masuk BIS mengenai tiket masuk, parkir, dan setiap wahana atau spot foto sebelum membayar.',
        },
        {
          q: 'Apakah tiket BIS berlaku untuk semua tempat di Simarjarunjung?',
          a: 'Tidak otomatis. Setiap titik pandang atau tempat usaha di kawasan Simarjarunjung dapat memiliki tiket dan pengelola sendiri. Pastikan pintu masuk yang Anda bayar sesuai dengan tujuan kunjungan.',
        },
        {
          q: 'Apakah ada harga khusus anak atau lansia?',
          a: 'Belum terverifikasi. Bila ada kategori tarif khusus, tanyakan langsung ke petugas beserta bukti usia yang mungkin diminta.',
        },
      ],
      related: ['jam-buka', 'fasilitas', 'wahana', 'wisata-keluarga-aksesibilitas'],
    },
  },
  {
    id: 'jam-buka',
    slug: 'jam-buka',
    group: 'tiket',
    ready: true,
    content: {
      metaTitle: 'Jam Buka Bukit Indah Simarjarunjung (BIS) & Batas Masuk',
      metaDescription:
        'Jam operasional BIS belum terverifikasi: panduan ini menjelaskan mengapa jam kafe di kawasan tidak berlaku untuk seluruh atraksi, serta hal yang perlu dikonfirmasi sebelum berangkat.',
      kicker: 'Tiket & Kunjungan',
      h1: 'Jam Buka Bukit Indah Simarjarunjung',
      lead: 'Listing Google Maps yang diperiksa 20 Oktober 2026 tidak menampilkan jam operasional BIS. Halaman ini membantu Anda mengetahui apa yang harus dikonfirmasi dan mengapa jam kafe tidak bisa dijadikan patokan seluruh kawasan.',
      updated: CHECK_DATE,
      facts: [
        { label: 'Jam operasional', value: 'Belum terverifikasi' },
        { label: 'Batas masuk', value: 'Konfirmasi ke petugas' },
        { label: 'Sumber', value: 'Google Maps, 20 Okt 2026' },
      ],
      blocks: [
        {
          id: 'status',
          heading: 'Jam buka belum tampil di listing Maps',
          paragraphs: [
            'Saat diperiksa 20 Oktober 2026, Google Maps untuk BIS tidak mencantumkan jam buka. Tanpa pengumuman resmi, panduan ini tidak dapat menjamin jam operasional tertentu.',
            'Jam yang kadang muncul di peta mungkin merujuk pada kafe atau warung di dalam kawasan, bukan seluruh area pandang dan struktur foto.',
          ],
          callout:
            'Jangan menggunakan jam buka kafe sebagai jam seluruh atraksi BIS. Konfirmasi hari kunjungan dan batas masuk terakhir kepada petugas.',
        },
        {
          id: 'cahaya',
          heading: 'Waktu terbaik untuk pandangan dan foto',
          paragraphs: [
            'Sebagai titik pandang Danau Toba, BIS sering dikunjungi untuk suasana pagi dan sore. Namun pandangan danau tidak dijamin cerah; kabut dan awan dapat menutupi bentang danau kapan saja.',
            'Bila tujuan utama adalah foto, pertimbangkan waktu kedatangan yang memberi ruang bila cuaca tertutup, dan jangan berangkat dengan jaminan matahari terbit atau terbenam terlihat.',
          ],
        },
      ],
      faq: [
        {
          q: 'Jam berapa BIS buka dan tutup?',
          a: 'Belum terverifikasi per 20 Oktober 2026. Konfirmasi hari buka, jam operasional, dan batas masuk terakhir langsung ke petugas sebelum berangkat.',
        },
        {
          q: 'Apakah boleh datang saat fajar atau setelah gelap?',
          a: 'Tidak ada jaminan akses sebelum fajar maupun setelah gelap. Tanyakan ketentuan akses pagi atau sore kepada pengelola, dan perhatikan penerangan serta keamanan jalan setempat.',
        },
        {
          q: 'Apakah jam berbeda saat akhir pekan atau libur?',
          a: 'Belum terverifikasi. Hari libur dapat berdampak pada keramaian dan ketersediaan petugas; tanyakan kemungkinan perubahan jam saat Anda memeriksa langsung.',
        },
      ],
      related: ['tiket-masuk', 'cuaca-kabut', 'sunrise-sunset', 'durasi-kunjungan'],
    },
  },
  {
    id: 'fasilitas',
    slug: 'fasilitas',
    group: 'tiket',
    ready: true,
    content: {
      metaTitle: 'Fasilitas Bukit Indah Simarjarunjung (BIS): Toilet, Parkir, Mushola',
      metaDescription:
        'Fasilitas BIS seperti toilet, parkir, tempat ibadah, dan area istirahat belum dikonfirmasi untuk hari kunjungan Anda. Halaman ini memandu pertanyaan yang perlu diajukan.',
      kicker: 'Tiket & Kunjungan',
      h1: 'Fasilitas Bukit Indah Simarjarunjung',
      lead: 'Toilet, parkir, makanan, tempat ibadah, dan akses tanpa anak tangga belum dikonfirmasi kondisinya untuk hari kunjungan Anda. Gunakan daftar pertanyaan ini sebelum berangkat, terutama bila membawa anak, lansia, atau pengguna alat bantu mobilitas.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'umum',
          heading: 'Fasilitas yang perlu dipastikan',
          paragraphs: [
            'Kawasan ini kerap disebut memiliki area parkir, toilet, dan warung. Namun foto lama atau daftar fasilitas tidak menjamin ketersediaan layanan hari ini.',
            'Tanyakan secara spesifik: lokasi toilet yang dapat digunakan, ketersediaan tempat ibadah (mushola), pilihan makanan atau minuman, serta cara pembayaran yang diterima.',
          ],
        },
        {
          id: 'akses',
          heading: 'Akses dan permukaan jalur',
          paragraphs: [
            'Beberapa struktur foto berada di area berketinggian dengan tangga atau permukaan tidak rata. Bila membawa anak kecil, lansia, atau pengguna kursi roda, tanyakan permukaan jalur, jumlah tangga, dan jarak dari titik turun kendaraan.',
            'Jangan menggunakan struktur yang ditutup atau dinyatakan tidak layak oleh petugas.',
          ],
          callout:
            'Halaman khusus "BIS untuk anak, lansia & aksesibilitas" membahas pertanyaan persiapan perjalanan yang lebih rinci.',
        },
      ],
      faq: [
        {
          q: 'Apakah tersedia toilet dan mushola di BIS?',
          a: 'Keberadaan dan kondisi toilet serta tempat ibadah belum dikonfirmasi untuk hari kunjungan Anda. Tanyakan langsung ke petugas dan siapkan antisipasi bila fasilitas sedang tidak tersedia.',
        },
        {
          q: 'Apakah ada warung atau penjual makanan?',
          a: 'Kawasan Simarjarunjung umumnya memiliki warung dan kedai kopi, tetapi ketersediaan, jam layanan, dan jenis makanan dapat berubah. Konfirmasi secara langsung dan jangan mengandalkan foto lama.',
        },
        {
          q: 'Bagaimana cara pembayaran yang diterima?',
          a: 'Belum terverifikasi. Tanyakan apakah menerima tunai, transfer, atau pembayaran nontunai, dan siapkan uang tunai sebagai antisipasi di area dengan sinyal terbatas.',
        },
      ],
      related: ['parkir-akses-jalan', 'wisata-keluarga-aksesibilitas', 'tempat-istirahat', 'warung-makan-terdekat'],
    },
  },
  {
    id: 'spot-foto',
    slug: 'spot-foto',
    group: 'tiket',
    ready: true,
    content: {
      metaTitle: 'Spot Foto Terbaik di Bukit Indah Simarjarunjung (BIS)',
      metaDescription:
        'Spot foto di BIS: struktur foto, ayunan, dan rumah pohon dengan latar Danau Toba. Tips cahaya, antrean, dan mengapa ketersediaan struktur perlu dikonfirmasi.',
      kicker: 'Tiket & Kunjungan',
      h1: 'Spot Foto Terbaik di Bukit Indah Simarjarunjung',
      lead: 'Daya tarik utama BIS adalah struktur foto dan titik pandang dengan latar Danau Toba. Halaman ini merangkum jenis spot, timing cahaya, dan cara menghindari kecelewaan bila struktur sedang ditutup.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'jenis',
          heading: 'Jenis spot foto di BIS',
          paragraphs: [
            'BIS dikenal dengan struktur foto bertema, termasuk rumah pohon, ayunan, dan panggung pandang yang menyorongkan latar danau dan perbukitan.',
            'Beberapa spot mungkin dikenakan biaya terpisah atau dibatasi waktu pemakaian saat ramai. Tanyakan ketentuan setiap struktur yang ingin digunakan.',
          ],
        },
        {
          id: 'cahaya',
          heading: 'Cahaya dan antrean',
          paragraphs: [
            'Siang hari umumnya memberi cahaya merata untuk foto latar danau, sedangkan pagi dan sore sering dicari untuk suasana lebih lembut. Kabut dapat muncul kapan saja dan menutupi danau.',
            'Saat akhir pekan atau libur, spot populer sering diantre. Siapkan daftar spot cadangan dan hindari memaksa struktur yang sedang ditutup.',
          ],
          callout:
            'Foto di halaman ini dan di beranda diambil di lokasi berbeda serta tahun berbeda; bukan janji struktur yang sama masih tersedia hari ini.',
        },
      ],
      faq: [
        {
          q: 'Spot foto apa yang wajib di BIS?',
          a: 'Struktur seperti rumah pohon dan ayunan dengan latar Danau Toba sering dicari pengunjung. Ketersediaan dan biaya tiap struktur dapat berubah, jadi tanyakan langsung ke petugas saat kedatangan.',
        },
        {
          q: 'Kapan foto paling bagus?',
          a: 'Pagi dan sore kerap memberi cahaya lebih lembut, tetapi pandangan danau bergantung cuaca dan kabut. Siapkan fleksibilitas bila danau tertutup awan.',
        },
        {
          q: 'Apakah spot foto dikenakan biaya?',
          a: 'Beberapa struktur foto di kawasan ini kerap dikenakan biaya tersendiri. Tanyakan secara terpisah dari tiket masuk sebelum menggunakan.',
        },
      ],
      related: ['rumah-pohon', 'wahana', 'sunrise-sunset', 'rute-fotografi'],
    },
  },
  {
    id: 'rumah-pohon',
    slug: 'rumah-pohon',
    group: 'tiket',
    ready: true,
    content: {
      metaTitle: 'Rumah Pohon Bukit Indah Simarjarunjung (BIS): Cara Masuk & Tips',
      metaDescription:
        'Rumah pohon BIS sebagai struktur foto populer dengan latar Danau Toba: cara mendekat, batasan keselamatan, dan mengapa ketersediaan perlu dikonfirmasi.',
      kicker: 'Tiket & Kunjungan',
      h1: 'Rumah Pohon Bukit Indah Simarjarunjung',
      lead: 'Rumah pohon adalah salah satu struktur foto paling dicari di BIS, dengan latar Danau Toba di kejauhan. Halaman ini membahas cara mendekat, batasan keselamatan, dan hal yang perlu dicek langsung.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'cara',
          heading: 'Mendekati struktur',
          paragraphs: [
            'Rumah pohon berada di dalam area BIS dan umumnya diakses dengan berjalan kaki dari titik turun kendaraan. Jarak dan permukaan jalur dapat bervariasi tergantung titik masuk yang digunakan.',
            'Tanyakan ke petugas lokasi pasti dan kondisi jalur sebelum menuju struktur, terutama bila membawa anak kecil atau lansia.',
          ],
        },
        {
          id: 'aman',
          heading: 'Batasan keselamatan',
          paragraphs: [
            'Gunakan struktur foto hanya bila dinyatakan layak oleh petugas. Hindari bagian yang ditutup, bergoyang, atau berada di tepian tanpa pagar.',
            'Penggunaan struktur foto bisa dikenakan biaya atau batas waktu saat ramai; tanyakan ketentuannya.',
          ],
          callout: 'Jangan naik struktur yang ditutup atau rusak. Keselamatan lebih penting daripada foto.',
        },
      ],
      faq: [
        {
          q: 'Apakah rumah pohon BIS masih ada dan bisa digunakan?',
          a: 'Panduan ini belum memverifikasi kondisi struktur per 20 Oktober 2026. Tanyakan ke petugas saat kedatangan apakah struktur layak digunakan dan apakah dikenakan biaya.',
        },
        {
          q: 'Berapa lama antre rumah pohon?',
          a: 'Tergantung keramaian hari itu. Saat akhir pekan atau libur, antrean bisa panjang; siapkan spot foto cadangan di kawasan BIS.',
        },
      ],
      related: ['spot-foto', 'wahana', 'wisata-keluarga-aksesibilitas'],
    },
  },
  {
    id: 'wahana',
    slug: 'wahana',
    group: 'tiket',
    ready: true,
    content: {
      metaTitle: 'Wahana Ayunan & Flying Fox di BIS Simarjarunjung',
      metaDescription:
        'Wahana di BIS seperti ayunan dan flying fox: operasional, biaya, dan syarat keselamatan belum terverifikasi. Halaman ini memandu pertanyaan sebelum mencoba.',
      kicker: 'Tiket & Kunjungan',
      h1: 'Wahana Ayunan dan Flying Fox di BIS',
      lead: 'Beberapa wahana seperti ayunan dan flying fox kerap tersedia di kawasan Simarjarunjung. Halaman ini membahas operasional, biaya, dan syarat keselamatan yang perlu dikonfirmasi langsung.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'operasional',
          heading: 'Operasional belum terverifikasi',
          paragraphs: [
            'Keberadaan, jam operasional, dan tarif wahana tertentu di BIS belum diverifikasi panduan ini per 20 Oktober 2026. Wahana dapat beroperasi musiman atau tergantung cuaca.',
            'Tanyakan langsung ke pengelola: wahana apa yang beroperasi, berapa biayanya, dan apakah ada batas usia atau berat.',
          ],
        },
        {
          id: 'aman',
          heading: 'Syarat dan keselamatan',
          paragraphs: [
            'Pastikan alat pengaman digunakan dan petugas berada di tempat saat wahana beroperasi. Hindari wahana bila cuaca buruk, berangin kencang, atau struktur terlihat tidak layak.',
            'Perhatikan batas usia, tinggi, dan berat yang berlaku; jangan mendesak pengelola bila Anda atau anggota rombongan tidak memenuhi syarat.',
          ],
          callout: 'Wahana dikenakan biaya terpisah dari tiket masuk. Tanyakan sebelum naik.',
        },
      ],
      faq: [
        {
          q: 'Apakah ada flying fox di BIS?',
          a: 'Kawasan Simarjarunjung sering memiliki wahana seperti ayunan dan flying fox, tetapi operasional dan ketersediaannya belum terverifikasi per 20 Oktober 2026. Konfirmasi langsung ke pengelola di lokasi.',
        },
        {
          q: 'Berapa biaya wahana dan apa syaratnya?',
          a: 'Belum terverifikasi. Tanyakan tarif, batas usia, tinggi, dan berat, serta kepastian alat pengaman digunakan sebelum mencoba.',
        },
      ],
      related: ['tiket-masuk', 'spot-foto', 'wisata-keluarga-aksesibilitas'],
    },
  },
  {
    id: 'sunrise-sunset',
    slug: 'sunrise-sunset',
    group: 'tiket',
    ready: true,
    content: {
      metaTitle: 'Sunrise atau Sunset di Simarjarunjung? Waktu & Pandangan',
      metaDescription:
        'Simarjarunjung sebagai titik pandang Danau Toba: perbandingan sunrise vs sunset, waktu terbaik, dan mengapa kabut dapat menutupi danau.',
      kicker: 'Tiket & Kunjungan',
      h1: 'Sunrise atau Sunset di Simarjarunjung?',
      lead: 'Sebagai titik pandang Danau Toba, BIS kerap dikunjungi untuk suasana pagi atau sore. Halaman ini membandingkan keduanya dan mengingatkan bahwa pandangan danau tidak dijamin cerah.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'banding',
          heading: 'Pagi versus sore',
          paragraphs: [
            'Pagi umumnya memberi udara lebih sejuk dan cahaya lebih lembut, sedangkan sore sering dicari untuk warna langit. Keduanya bergantung pada cuaca dan tidak menjamin danau terlihat jernih.',
            'Kabut pegunungan di Sumatera Utara dapat muncul kapan saja dan menutupi bentang danau, sehingga jangan merencanakan perjalanan dengan jaminan matahari terbit atau terbenam terlihat.',
          ],
        },
        {
          id: 'waktu',
          heading: 'Waktu kedatangan',
          paragraphs: [
            'Bila tujuan utama adalah foto, datanglah dengan ruang waktu cadangan bila cuaca tertutup. Perhatikan pula akses jalan pegunungan yang bisa berkabut atau licin.',
            'Koordinasi dengan jam operasional BIS yang belum terverifikasi; konfirmasi batas masuk terakhir ke petugas.',
          ],
          callout: 'Pandangan Danau Toba bukan jaminan. Cek prakiraan cuaca dan bersiaplah bila danau tertutup awan.',
        },
      ],
      faq: [
        {
          q: 'Lebih bagus sunrise atau sunset di Simarjarunjung?',
          a: 'Keduanya menarik, tetapi tidak ada jaminan danau terlihat. Pagi lebih sejuk, sore sering memberi warna langit. Pilihlah berdasar kenyamanan perjalanan dan cuaca hari itu.',
        },
        {
          q: 'Apakah danau selalu terlihat dari BIS?',
          a: 'Tidak. Awan, kabut, dan hujan dapat membatasi pandangan. Foto lama bukan perkiraan kondisi hari kunjungan Anda.',
        },
      ],
      related: ['cuaca-kabut', 'jam-buka', 'spot-foto', 'rute-fotografi'],
    },
  },
  {
    id: 'cuaca-kabut',
    slug: 'cuaca-kabut',
    group: 'tiket',
    ready: true,
    content: {
      metaTitle: 'Cuaca & Kabut di Simarjarunjung: Musim & Visibilitas',
      metaDescription:
        'Cuaca Simarjarunjung: pola musim, kabut pegunungan, visibilitas Danau Toba, dan persiapan perjalanan yang aman ke titik pandang.',
      kicker: 'Tiket & Kunjungan',
      h1: 'Cuaca dan Kabut di Simarjarunjung',
      lead: 'Simarjarunjung berada di kawasan pegunungan Sumatera Utara dengan cuaca yang bisa berubah cepat. Halaman ini membahas musim, kabut, visibilitas, dan persiapan sebelum berangkat.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'musim',
          heading: 'Pola musim',
          paragraphs: [
            'Sumatera Utara memiliki pola hujan yang bervariasi sepanjang tahun. Musim hujan dapat meningkatkan kabut dan membuat jalan pegunungan lebih licin.',
            'Pantau prakiraan cuaca resmi untuk lokasi Dolok Pardamean beberapa hari sebelum berangkat, bukan hanya perkiraan kota besar terdekat.',
          ],
        },
        {
          id: 'kabut',
          heading: 'Kabut dan visibilitas',
          paragraphs: [
            'Kabut pegunungan sering muncul pagi dan sore, dan dapat menutupi pandangan Danau Toba secara tiba-tiba. Jangan berangkat dengan ekspektasi danau selalu terlihat.',
            'Bila tujuan utama foto, siapkan hari cadangan atau waktu kunjungan yang fleksibel.',
          ],
          callout: 'Cek prakiraan cuaca dan arahan petugas. Bawa pelindung hujan dan alas kaki dengan cengkeraman baik.',
        },
        {
          id: 'aman',
          heading: 'Persiapan aman',
          paragraphs: [
            'Gunakan kendaraan yang layak, perhatikan jalan berkelok dan berkabut, serta isi bahan bakar di lokasi yang Anda cek sendiri.',
            'Hentikan kegiatan bila cuaca memburuk atau struktur ditutup.',
          ],
        },
      ],
      faq: [
        {
          q: 'Bulan apa paling bagus ke Simarjarunjung?',
          a: 'Tidak ada waktu tunggal terjamin. Hindari ekspektasi cuaca ekstrem, pantau prakiraan untuk Dolok Pardamean, dan siapkan fleksibilitas bila kabut menutupi danau.',
        },
        {
          q: 'Apakah kabut selalu menutupi danau?',
          a: 'Sering muncul pagi dan sore, tetapi tidak setiap hari. Pandangan dapat terbuka dan tertutup dalam waktu singkat.',
        },
      ],
      related: ['sunrise-sunset', 'alternatif-saat-hujan', 'jam-buka', 'durasi-kunjungan'],
    },
  },
  {
    id: 'durasi-kunjungan',
    slug: 'durasi-kunjungan',
    group: 'tiket',
    ready: true,
    content: {
      metaTitle: 'Berapa Lama Berkunjung ke BIS Simarjarunjung?',
      metaDescription:
        'Perkiraan durasi kunjungan BIS: opsi 30, 60, dan 120 menit, serta faktor yang memperpanjang waktu seperti foto, kuliner, dan cuaca.',
      kicker: 'Tiket & Kunjungan',
      h1: 'Berapa Lama Berkunjung ke BIS?',
      lead: 'Lama kunjungan ke BIS sangat bervariasi tergantung tujuan, keramaian, dan cuaca. Halaman ini memberi perkiraan 30, 60, dan 120 menit agar Anda bisa merencanakan waktu.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'opsi',
          heading: 'Tiga opsi waktu',
          bullets: [
            '30 menit: singgah cepat untuk foto dari titik pandang utama dan langsung kembali ke kendaraan.',
            '60 menit: foto beberapa struktur, istirahat sejenak, dan menikmati panorama tanpa terburu-buru.',
            '120 menit atau lebih: foto mendalam, menunggu cahaya, kuliner ringan, dan menyambangi titik pandang lain di kawasan.',
          ],
        },
        {
          id: 'faktor',
          heading: 'Apa yang memperpanjang waktu',
          paragraphs: [
            'Antrean di struktur foto populer saat akhir pekan atau libur bisa menambah waktu secara signifikan.',
            'Cuaca tertutup sering membuat pengunjung menunggu pembukaan kabut; bila tidak memiliki hari cadangan, sesuaikan ekspektasi.',
          ],
          callout: 'Hitung waktu perjalanan pulang dan kondisi jalan pegunungan sebelum menentukan lama singgah.',
        },
      ],
      faq: [
        {
          q: 'Berapa lama ideal di BIS?',
          a: 'Bagi sebagian pengunjung 60 menit cukup untuk foto dan panorama. Bila ingin foto mendalam atau kuliner, siapkan 120 menit atau lebih.',
        },
        {
          q: 'Apakah cukup 30 menit?',
          a: 'Cukup bila hanya ingin foto cepat dari titik pandang utama dan tidak antre. Waktu tempuh dari kota terdekat jauh lebih lama dari singgahnya.',
        },
      ],
      related: ['spot-foto', 'cafe-view-danau-toba', 'itinerary-setengah-hari', 'cuaca-kabut'],
    },
  },

  // ============================================================
  // B. LOKASI & AKSES (9)
  // ============================================================
  {
    id: 'lokasi-dan-peta',
    slug: 'lokasi-dan-peta',
    group: 'akses',
    ready: true,
    content: {
      metaTitle: 'Di Mana Lokasi Bukit Indah Simarjarunjung? Alamat & Peta',
      metaDescription:
        'Alamat lengkap BIS di Butu Bayu Pane Raja, Dolok Pardamean, Simalungun, plus pin Google Maps dan tips membedakan pintu masuk bernama Simarjarunjung.',
      kicker: 'Lokasi & Akses',
      h1: 'Di Mana Lokasi Bukit Indah Simarjarunjung?',
      lead: 'BIS berada di Butu Bayu Pane Raja, Dolok Pardamean, Kabupaten Simalungun, Sumatera Utara. Halaman ini memberi alamat, pin peta, dan cara memastikan Anda menuju pintu masuk yang tepat.',
      updated: CHECK_DATE,
      facts: [
        { label: 'Alamat', value: 'Butu Bayu Pane Raja, Dolok Pardamean, Simalungun' },
        { label: 'Kode pos', value: '21163' },
        { label: 'Pin Maps', value: '2.8137612, 98.781632' },
      ],
      blocks: [
        {
          id: 'alamat',
          heading: 'Alamat dan letak',
          paragraphs: [
            'Bukit Indah Simarjarunjung berada di Jl. Simarjarunjung, Butu Bayu Pane Raja, Kecamatan Dolok Pardamean, Kabupaten Simalungun, Sumatera Utara 21163.',
            'Kawasan ini termasuk dalam gugusan titik pandang Danau Toba di sisi timur danau. Pin Google Maps yang diperiksa 20 Oktober 2026: 2.8137612, 98.781632.',
          ],
        },
        {
          id: 'beda',
          heading: 'Pastikan pintu masuk yang tepat',
          paragraphs: [
            'Nama Simarjarunjung dipakai oleh beberapa tempat usaha dan titik pandang yang dikelola terpisah. Gunakan pin BIS, bukan sekadar nama kawasan, untuk navigasi.',
            'Sebelum berangkat, cocokkan pintu masuk dan titik turun dengan petugas atau pengemudi Anda.',
          ],
          callout: 'Pin peta bukan konfirmasi pintu masuk atau kelayakan seluruh rute. Selalu cocokkan dengan pengelola setempat.',
        },
      ],
      faq: [
        {
          q: 'Di mana letak persis BIS?',
          a: 'Di Butu Bayu Pane Raja, Dolok Pardamean, Kabupaten Simalungun, Sumatera Utara 21163. Pin Google Maps (20 Okt 2026): 2.8137612, 98.781632.',
        },
        {
          q: 'Apakah BIS sama dengan Puncak atau Panatapan Simarjarunjung?',
          a: 'Tidak otomatis. BIS, Puncak, dan Panatapan adalah titik pandang berbeda di kawasan Simarjarunjung. Pastikan pintu masuk yang Anda tuju.',
        },
      ],
      related: ['parkir-akses-jalan', 'rute-dari-medan', 'rute-dari-parapat', 'bis-vs-panatapan'],
    },
  },
  {
    id: 'rute-dari-medan',
    slug: 'rute-dari-medan',
    group: 'akses',
    ready: true,
    content: {
      metaTitle: 'Cara ke BIS dari Medan: Rute & Waktu Tempuh',
      metaDescription:
        'Rute Medan ke Bukit Indah Simarjarunjung: arah jalan darat via Pematangsiantar atau Tebing Tinggi, perkiraan waktu tempuh, dan tempat istirahat di jalan.',
      kicker: 'Lokasi & Akses',
      h1: 'Cara ke BIS dari Medan',
      lead: 'Medan adalah pintu masuk utama bagi banyak pengunjung. Halaman ini merangkum arah darat, perkiraan waktu tempuh, dan pertimbangan istirahat menuju titik pandang Danau Toba ini.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'arah',
          heading: 'Arah darat',
          paragraphs: [
            'Dari Medan, perjalanan darat menuju Simalungun umumnya melewati Pematangsiantar atau jalur via Tebing Tinggi, lalu menyambung ke arah Danau Toba dan titik pandang di Dolok Pardamean.',
            'Rute pasti dan kondisi jalan perlu dicek dengan peta sebelum berangkat, karena ada beberapa jalur alternatif tergantung titik awal di Medan.',
          ],
        },
        {
          id: 'waktu',
          heading: 'Waktu tempuh',
          paragraphs: [
            'Perkiraan umum perjalanan darat Medan ke kawasan Danau Toba bagian timur dapat mencapai beberapa jam, bergantung rute, lalu lintas, dan kondisi jalan pegunungan.',
            'Jangan mengandalkan satu angka lama; tanyakan pengemudi atau periksa aplikasi navigasi untuk hari kunjungan Anda.',
          ],
          callout: 'Isi bahan bakar di lokasi yang Anda cek sendiri dan siapkan istirahat karena jalan pegunungan berkelok.',
        },
        {
          id: 'istirahat',
          heading: 'Tempat istirahat di jalan',
          paragraphs: [
            'Kota seperti Pematangsiantar dapat menjadi titik istirahat, makan, dan mengisi bahan bakar sebelum mendaki ke titik pandang.',
            'Baca juga halaman "Tempat istirahat di jalan Simarjarunjung" untuk opsi dekat kawasan.',
          ],
        },
      ],
      faq: [
        {
          q: 'Berapa lama dari Medan ke BIS?',
          a: 'Perkiraan umum beberapa jam dengan kendaraan darat, tergantung rute dan lalu lintas. Periksa navigasi untuk hari kunjungan Anda; panduan ini tidak menjamin satu angka tertentu.',
        },
        {
          q: 'Lewat mana lebih baik dari Medan?',
          a: 'Biasanya via Pematangsiantar atau Tebing Tinggi menyambung ke Danau Toba. Cocokkan rute dengan aplikasi peta dan kondisi jalan hari itu.',
        },
      ],
      related: ['lokasi-dan-peta', 'parkir-akses-jalan', 'tempat-istirahat', 'rute-medan-sipiso-bis'],
    },
  },
  {
    id: 'rute-dari-parapat',
    slug: 'rute-dari-parapat',
    group: 'akses',
    ready: true,
    content: {
      metaTitle: 'Cara ke BIS dari Parapat: Rute & Sambungan Danau Toba',
      metaDescription:
        'Rute Parapat ke BIS Simarjarunjung: perjalanan dari tepi Danau Toba, penyambungan perjalanan pulang, dan tips menjadikannya bagian tur danau.',
      kicker: 'Lokasi & Akses',
      h1: 'Cara ke BIS dari Parapat',
      lead: 'Parapat berada di tepi Danau Toba dan sering menjadi basis bagi wisatawan. Halaman ini membahas rute darat ke BIS, penyambungan perjalanan, dan cara memadukannya dengan tur danau.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'arah',
          heading: 'Dari tepi danau ke titik pandang',
          paragraphs: [
            'Dari Parapat, perjalanan darat menuju titik pandang di sisi timur danau melewati jalan yang berkelok dan naik turun. Waktu tempuh bervariasi tergantung rute dan kondisi jalan.',
            'Gunakan navigasi dan isi bahan bakar sebelum menjauh dari pusat keramaian danau.',
          ],
        },
        {
          id: 'sambung',
          heading: 'Menyambung perjalanan pulang',
          paragraphs: [
            'BIS dapat dijadikan salah satu titik dalam tur Danau Toba yang lebih panjang. Setelah foto, Anda bisa kembali ke Parapat atau meneruskan ke arah Pematangsiantar.',
            'Rencanakan waktu tempuh pulang dan kondisi jalan pegunungan, terutama bila cuaca berkabut.',
          ],
          callout: 'Jangan menumpuk terlalu banyak titik dalam satu hari; kualitas kunjungan lebih baik dari kejar-kejaran waktu.',
        },
      ],
      faq: [
        {
          q: 'Berapa lama dari Parapat ke BIS?',
          a: 'Beberapa jam dengan kendaraan darat tergantung rute dan lalu lintas. Periksa navigasi untuk hari kunjungan Anda.',
        },
        {
          q: 'Bisaakah BIS dijadikan bagian tur Danau Toba?',
          a: 'Ya. Banyak wisatawan memadukannya dengan Parapat, Samosir, atau Pematangsiantar. Sesuaikan dengan waktu tempuh dan kondisi jalan.',
        },
      ],
      related: ['lokasi-dan-peta', 'itinerary-bis-tigaras', 'rute-dari-pematangsiantar', 'pantai-paris-tigaras'],
    },
  },
  {
    id: 'rute-dari-pematangsiantar',
    slug: 'rute-dari-pematangsiantar',
    group: 'akses',
    ready: true,
    content: {
      metaTitle: 'Cara ke BIS dari Pematangsiantar: Rute & Istirahat',
      metaDescription:
        'Rute Pematangsiantar ke BIS: jalan darat menuju titik pandang Danau Toba, perkiraan waktu, dan titik istirahat sebelum mendaki.',
      kicker: 'Lokasi & Akses',
      h1: 'Cara ke BIS dari Pematangsiantar',
      lead: 'Pematangsiantar adalah kota terdekat yang sering menjadi titik istirahat sebelum menuju titik pandang. Halaman ini merangkum rute dan persiapan perjalanan.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'arah',
          heading: 'Rute darat',
          paragraphs: [
            'Dari Pematangsiantar, perjalanan darat menuju Dolok Pardamean dan titik pandang Simarjarunjung melewati jalan yang naik turun dan berkelok.',
            'Kota ini menjadi tempat baik untuk makan, mengisi bahan bakar, dan memeriksa kondisi kendaraan sebelum mendaki.',
          ],
        },
        {
          id: 'waktu',
          heading: 'Waktu dan persiapan',
          paragraphs: [
            'Waktu tempuh bervariasi; periksa navigasi untuk hari kunjungan. Suhu pegunungan bisa lebih sejuk dari kota.',
            'Bawa pelindung hujan dan perhatikan kabut terutama pagi dan sore.',
          ],
          callout: 'Isi bahan bakar di Pematangsiantar; SPBU di area pegunungan bisa lebih jarang.',
        },
      ],
      faq: [
        {
          q: 'Berapa lama dari Pematangsiantar ke BIS?',
          a: 'Perkiraan umum beberapa jam tergantung rute dan lalu lintas. Periksa navigasi untuk hari kunjungan Anda.',
        },
        {
          q: 'Apakah Pematangsiantar tempat istirahat yang baik?',
          a: 'Ya, sebagai kota terdekat dengan fasilitas makan dan bahan bakar sebelum mendaki ke titik pandang.',
        },
      ],
      related: ['lokasi-dan-peta', 'rute-dari-medan', 'tempat-istirahat', 'makan-siang-simarjarunjung'],
    },
  },
  {
    id: 'rute-dari-berastagi',
    slug: 'rute-dari-berastagi',
    group: 'akses',
    ready: true,
    content: {
      metaTitle: 'Cara ke BIS dari Berastagi: Jalur Pegunungan',
      metaDescription:
        'Rute Berastagi ke BIS: jalur pegunungan lintas dataran tinggi, tempat menarik di sepanjang jalan, dan pertimbangan waktu tempuh.',
      kicker: 'Lokasi & Akses',
      h1: 'Cara ke BIS dari Berastagi',
      lead: 'Berastagi berada di dataran tinggi Karo dan sering dijadikan titik awal wisata Sumatera Utara. Halaman ini membahas jalur pegunungan menuju BIS dan tempat menarik di sepanjang jalan.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'arah',
          heading: 'Lintas dataran tinggi',
          paragraphs: [
            'Dari Berastagi, perjalanan ke arah Danau Toba dan titik pandang di sisi timur melewati jalur pegunungan yang panjang dan berkelok.',
            'Rute ini dapat dipadukan dengan wisata Karo, tetapi waktu tempuh cukup jauh; rencanakan dengan realistis.',
          ],
        },
        {
          id: 'waktu',
          heading: 'Waktu dan kehati-hatian',
          paragraphs: [
            'Jalan pegunungan membutuhkan kehati-hatian, terutama di tikungan dan saat kabut. Periksa navigasi dan kondisi kendaraan.',
            'Siapkan istirahat dan bahan bakar di kota yang Anda lewati.',
          ],
          callout: 'Jangan menumpuk Berastagi dan BIS dalam satu hari yang terlalu padat; kualitas lebih baik bila fleksibel.',
        },
      ],
      faq: [
        {
          q: 'Berapa lama dari Berastagi ke BIS?',
          a: 'Perjalanan lintas pegunungan cukup jauh dan bervariasi. Periksa navigasi untuk hari kunjungan Anda; panduan ini tidak menjamin satu angka.',
        },
        {
          q: 'Apakah bisa singgah wisata lain di jalan?',
          a: 'Bisa, terutama di kawasan Karo. Namun sesuaikan dengan waktu tempuh agar tidak terburu-buru di jalan pegunungan.',
        },
      ],
      related: ['lokasi-dan-peta', 'rute-dari-medan', 'rute-fotografi', 'itinerary-setengah-hari'],
    },
  },
  {
    id: 'rute-dari-sidamanik',
    slug: 'rute-dari-sidamanik',
    group: 'akses',
    ready: true,
    content: {
      metaTitle: 'Cara ke BIS dari Sidamanik: Kebun Teh & Kopi',
      metaDescription:
        'Rute Sidamanik ke BIS: menyambungkan Kebun Teh Bahbutong dan kedai kopi, perkiraan waktu, dan cara merangkai wisata alam.',
      kicker: 'Lokasi & Akses',
      h1: 'Cara ke BIS dari Sidamanik',
      lead: 'Sidamanik dikenal dengan kebun teh dan kopi. Halaman ini membahas rute ke BIS serta cara merangkai perjalanan melalui kebun teh dan kedai kopi di sepanjang jalan.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'arah',
          heading: 'Dari kebun teh ke titik pandang',
          paragraphs: [
            'Dari Sidamanik, perjalanan ke BIS dapat dipadukan dengan singgah Kebun Teh Bahbutong dan kedai kopi lokal.',
            'Waktu tempuh bervariasi; periksa navigasi dan siapkan istirahat di titik kuliner.',
          ],
        },
        {
          id: 'rangkai',
          heading: 'Merangkai wisata',
          paragraphs: [
            'Banyak pengunjung menjadikan Sidamanik–BIS sebagai satu rangkaian wisata alam: teh di pagi hari, lalu titik pandang danau di siang atau sore.',
            'Baca halaman "Kebun Teh Bahbutong" dan "Kopi View Danau Toba" untuk memperkaya rute.',
          ],
          callout: 'Sesuaikan urutan dengan cuaca; kabut sore dapat menutupi danau.',
        },
      ],
      faq: [
        {
          q: 'Berapa lama dari Sidamanik ke BIS?',
          a: 'Bervariasi tergantung rute dan singgahan. Periksa navigasi untuk hari kunjungan Anda.',
        },
        {
          q: 'Bisa singgah kebun teh dalam perjalanan?',
          a: 'Ya, Sidamanik dan Kebun Teh Bahbutong sering dirangkai dengan BIS dalam satu hari wisata alam.',
        },
      ],
      related: ['kebun-teh-bahbutong', 'cafe-view-danau-toba', 'itinerary-bis-sidamanik', 'lokasi-dan-peta'],
    },
  },
  {
    id: 'transportasi-umum',
    slug: 'transportasi-umum',
    group: 'akses',
    ready: true,
    content: {
      metaTitle: 'Transportasi Umum ke Simarjarunjung: Bus & Sambungan',
      metaDescription:
        'Transportasi umum ke Simarjarunjung: status rute bus dan sambungan lokal belum terverifikasi. Halaman ini menjelaskan batasan dan cara memeriksa langsung.',
      kicker: 'Lokasi & Akses',
      h1: 'Transportasi Umum ke Simarjarunjung',
      lead: 'Ketersediaan rute bus reguler dan sambungan terakhir ke titik pandang belum diverifikasi panduan ini. Halaman ini menjelaskan batasan dan pertanyaan yang harus diajukan agar tidak terjebak di tengah jalan.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'status',
          heading: 'Belum terverifikasi',
          paragraphs: [
            'Panduan ini tidak menemukan jadwal bus reguler yang terverifikasi langsung ke pintu BIS per 20 Oktober 2026. Rute angkutan umum di pedesaan dapat berubah tanpa pengumuman tetap.',
            'Bila menggunakan transportasi umum, tanyakan rute, titik turun terdekat, waktu tunggu, dan cara melanjutkan ke titik pandang.',
          ],
          callout: 'Jangan berasumsi ada angkutan langsung ke pintu masuk. Siapkan rencana sambungan dan perjalanan pulang.',
        },
        {
          id: 'tips',
          heading: 'Pertanyaan sebelum berangkat',
          bullets: [
            'Rute bus atau angkot apa yang beroperasi ke arah Dolok Pardamean?',
            'Di mana titik turun terdekat dan bagaimana melanjutkan ke BIS?',
            'Berapa waktu tunggu dan bagaimana mengatur perjalanan pulang?',
          ],
        },
      ],
      faq: [
        {
          q: 'Apakah ada bus langsung ke BIS?',
          a: 'Belum terverifikasi per 20 Oktober 2026. Tanyakan rute angkutan umum, titik turun terdekat, dan sambungan ke titik pandang kepada pengelola transportasi setempat.',
        },
        {
          q: 'Bagaimana kalau tidak membawa kendaraan sendiri?',
          a: 'Banyak pengunjung menggunakan kendaraan sewa atau travel. Konfirmasi rute, harga, dan pengaturan pulang sebelum menyetujui perjalanan.',
        },
      ],
      related: ['parkir-akses-jalan', 'lokasi-dan-peta', 'wisata-keluarga-aksesibilitas', 'rute-dari-pematangsiantar'],
    },
  },
  {
    id: 'parkir-akses-jalan',
    slug: 'parkir-akses-jalan',
    group: 'akses',
    ready: true,
    content: {
      metaTitle: 'Parkir & Akses Jalan ke BIS Simarjarunjung',
      metaDescription:
        'Parkir dan akses jalan BIS: informasi area parkir, kendaraan yang sesuai, kemiringan jalan, dan kehati-hatian di jalur pegunungan.',
      kicker: 'Lokasi & Akses',
      h1: 'Parkir dan Akses Jalan ke BIS',
      lead: 'Kawasan ini diakses dengan jalan darat pegunungan. Halaman ini membahas area parkir, jenis kendaraan, kemiringan jalan, dan kehati-hatian yang perlu diperhatikan.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'parkir',
          heading: 'Area parkir',
          paragraphs: [
            'BIS umumnya memiliki area parkir, tetapi kapasitas dan kondisinya dapat berubah tergantung hari dan cuaca. Tanyakan ketersediaan dan tarif parkir langsung ke petugas.',
            'Saat libur, area parkir bisa penuh; pertimbangkan waktu kedatangan lebih awal.',
          ],
        },
        {
          id: 'jalan',
          heading: 'Kondisi jalan',
          paragraphs: [
            'Jalan menuju titik pandang berkelok dan naik turun. Pastikan kendaraan layak, rem berfungsi baik, dan pengemudi mengenal jalur pegunungan.',
            'Kabut dan jalan licin saat hujan perlu diwaspadai, terutama pagi dan sore.',
          ],
          callout: 'Isi bahan bakar di kota yang Anda cek sendiri; SPBU di area pegunungan bisa lebih jarang.',
        },
      ],
      faq: [
        {
          q: 'Apakah ada tempat parkir di BIS?',
          a: 'Umumnya tersedia area parkir, tetapi kapasitas dan tarif belum terverifikasi. Tanyakan langsung ke petugas saat kedatangan.',
        },
        {
          q: 'Apakah jalan bisa dilalui kendaraan biasa?',
          a: 'Jalan darat umum menuju kawasan dapat dilalui kendaraan, tetapi berkelok dan naik turun. Pastikan kendaraan layak dan waspada kabut serta jalan licin.',
        },
      ],
      related: ['lokasi-dan-peta', 'fasilitas', 'transportasi-umum', 'wisata-keluarga-aksesibilitas'],
    },
  },
  {
    id: 'wisata-keluarga-aksesibilitas',
    slug: 'wisata-keluarga-aksesibilitas',
    group: 'akses',
    ready: true,
    content: {
      metaTitle: 'BIS untuk Anak, Lansia & Aksesibilitas',
      metaDescription:
        'Kunjungan BIS bersama anak, lansia, atau pengguna alat bantu mobilitas: pertanyaan akses, permukaan jalur, dan batasan yang jujur.',
      kicker: 'Lokasi & Akses',
      h1: 'BIS untuk Anak, Lansia & Aksesibilitas',
      lead: 'BIS dapat dikunjungi keluarga, tetapi kemiringan dan struktur foto perlu persiapan. Halaman ini membedah pertanyaan akses secara jujur tanpa spekulasi.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'pertanyaan',
          heading: 'Pertanyaan persiapan',
          paragraphs: [
            'Bila membawa anak kecil, lansia, atau pengguna kursi roda, tanyakan permukaan jalur, jumlah tangga, jarak dari titik turun, toilet yang dapat digunakan, dan bantuan yang tersedia.',
            'Jangan mengasumsikan seluruh area ramah kursi roda; bagian tertentu mungkin hanya dapat dijangkau dengan berjalan kaki menanjak.',
          ],
        },
        {
          id: 'batas',
          heading: 'Batasan yang jujur',
          paragraphs: [
            'Panduan ini belum memverifikasi rute tanpa anak tangga atau fasilitas akses disabilitas di BIS per 20 Oktober 2026.',
            'Gunakan struktur foto hanya bila dinyatakan layak; hindari tepian dan area ditutup.',
          ],
          callout: 'Keamanan anak dan lansia lebih utama dari foto. Pantau cuaca dan kelelahan selama kunjungan.',
        },
      ],
      faq: [
        {
          q: 'Apakah BIS ramah kursi roda?',
          a: 'Belum terverifikasi per 20 Oktober 2026. Tanyakan permukaan jalur, tangga, dan bantuan yang tersedia langsung ke petugas sebelum berangkat.',
        },
        {
          q: 'Apakah aman untuk anak kecil?',
          a: 'BIS dapat dikunjungi keluarga, tetapi awasi anak di area berketinggian dan struktur foto. Gunakan struktur hanya bila dinyatakan layak petugas.',
        },
      ],
      related: ['fasilitas', 'parkir-akses-jalan', 'tiket-masuk', 'alternatif-saat-hujan'],
    },
  },

  // ============================================================
  // C. KULINER & KOPI (5)
  // ============================================================
  {
    id: 'warung-makan-terdekat',
    slug: 'warung-makan-terdekat',
    group: 'kuliner',
    ready: true,
    content: {
      metaTitle: 'Warung Makan Dekat Bukit Indah Simarjarunjung',
      metaDescription:
        'Warung makan di sekitar BIS: pilihan makanan di dalam kawasan dan di jalan Simarjarunjung, beda jalan kaki dan berkendara, serta hal yang perlu dicek.',
      kicker: 'Kuliner & Kopi',
      h1: 'Warung Makan Dekat Bukit Indah Simarjarunjung',
      lead: 'Kawasan Simarjarunjung umumnya memiliki warung dan kedai. Halaman ini membedakan pilihan di dalam kawasan dengan di jalan raya, serta hal yang perlu dikonfirmasi sebelum makan.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'dalam',
          heading: 'Di dalam kawasan',
          paragraphs: [
            'Beberapa warung atau kedai kopi sering berada di dalam area wisata, dekat titik pandang. Jarak tempuh dari struktur foto bervariasi.',
            'Ketersediaan, jenis makanan, dan jam layanan dapat berubah; konfirmasi secara langsung.',
          ],
        },
        {
          id: 'jalanan',
          heading: 'Di sepanjang jalan Simarjarunjung',
          paragraphs: [
            'Warung di tepi jalan raya umumnya lebih mudah dijangkau kendaraan dan cocok sebagai tempat singgah pulang.',
            'Pisahkan antara warung di dalam kawasan (jalan kaki) dan di jalan raya (berkendara) agar tidak salah perkiraan waktu.',
          ],
          callout: 'Tanya jenis makanan, harga, jam layanan, dan cara pembayaran sebelum memesan.',
        },
      ],
      faq: [
        {
          q: 'Apakah ada warung di dalam BIS?',
          a: 'Kawasan Simarjarunjung umumnya memiliki warung, tetapi ketersediaan dan jam layanan belum terverifikasi. Konfirmasi langsung saat kedatangan.',
        },
        {
          q: 'Di mana makan terdekat kalau lapar setelah foto?',
          a: 'Warung di dalam kawasan untuk singgah cepat, atau warung tepi jalan untuk akses kendaraan saat pulang. Sesuaikan dengan waktu dan rute Anda.',
        },
      ],
      related: ['cafe-view-danau-toba', 'makan-siang-simarjarunjung', 'tempat-istirahat', 'kuliner-khas-simalungun'],
    },
  },
  {
    id: 'cafe-view-danau-toba',
    slug: 'cafe-view-danau-toba',
    group: 'kuliner',
    ready: true,
    content: {
      metaTitle: 'Cafe View Danau Toba di Simarjarunjung',
      metaDescription:
        'Kedai kopi dengan pemandangan Danau Toba di Simarjarunjung: kapan waktu terbaik, contoh kedai seperti Kopi KENN, dan tips singgah sambil istirahat.',
      kicker: 'Kuliner & Kopi',
      h1: 'Cafe View Danau Toba di Simarjarunjung',
      lead: 'Salah satu cara menikmati kawasan ini adalah duduk di kedai kopi sambil memandang Danau Toba. Halaman ini membahas waktu terbaik, contoh kedai, dan cara singgah.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'waktu',
          heading: 'Kapan waktu terbaik',
          paragraphs: [
            'Pagi dan sore sering dicari untuk cahaya lembut dan suasana tenang, tetapi pandangan danau bergantung cuaca dan kabut.',
            'Jangan berangkat dengan jaminan danau terlihat; nikmati kopi dan suasana pegunungan meski danau tertutup awan.',
          ],
        },
        {
          id: 'contoh',
          heading: 'Contoh kedai di sekitar',
          paragraphs: [
            'Beberapa kedai kopi dikenal di sepanjang jalur Simarjarunjung, misalnya Kopi KENN dan kedai lokal seperti "Op Diko" yang kerap disebut sebagai tempat singgah.',
            'Nama dan keberadaan kedai dapat berubah; gunakan peta untuk menemukan lokasi terkini dan baca ulasan terbaru sebelum datang.',
          ],
          callout: 'Panduan ini tidak mengiklankan kedai tertentu. Pilihlah berdasarkan lokasi, jam, dan ulasan yang Anda verifikasi sendiri.',
        },
      ],
      faq: [
        {
          q: 'Di mana cafe view Danau Toba di Simarjarunjung?',
          a: 'Beberapa kedai kopi berada di sepanjang jalur Simarjarunjung, termasuk yang kerap disebut seperti Kopi KENN. Gunakan peta untuk lokasi terkini karena nama kedai dapat berubah.',
        },
        {
          q: 'Waktu apa paling enak ngopi sambil lihat danau?',
          a: 'Pagi dan sore umumnya nyaman, tetapi pandangan danau tidak dijamin. Nikmati suasana pegunungan meski kabut menutupi danau.',
        },
      ],
      related: ['warung-makan-terdekat', 'makan-siang-simarjarunjung', 'tempat-istirahat', 'rute-dari-sidamanik'],
    },
  },
  {
    id: 'makan-siang-simarjarunjung',
    slug: 'makan-siang-simarjarunjung',
    group: 'kuliner',
    ready: true,
    content: {
      metaTitle: 'Tempat Makan Siang di Jalur Simarjarunjung',
      metaDescription:
        'Makan siang saat berkunjung ke BIS: cara menyambung foto dengan makanan, pilihan dekat jalur, dan tips menghindari kelebihan waktu perjalanan.',
      kicker: 'Kuliner & Kopi',
      h1: 'Tempat Makan Siang di Jalur Simarjarunjung',
      lead: 'Bagi pengunjung yang datang dari kota terjauh, makan siang sering menyatu dengan kunjungan. Halaman ini membedakan pilihan makan siang dari sekadar singgah kopi.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'sambut',
          heading: 'Menyambung foto dan makan',
          paragraphs: [
            'Pilihan makan siang biasanya berada di warung tepi jalan atau restoran di sekitar jalur menuju danau, bukan hanya di dalam area foto.',
            'Tentukan apakah Anda ingin makan sebelum foto (perjalanan pergi), sesudah foto (perjalanan pulang), atau di tengah rute.',
          ],
        },
        {
          id: 'tips',
          heading: 'Tips menghindari kelebihan waktu',
          paragraphs: [
            'Warung tepi jalan lebih mudah dijangkau kendaraan dan cocok untuk makan siang tanpa memutar balik.',
            'Konfirmasi jam layanan karena sebagian warung mungkin tutup di luar jam sibuk.',
          ],
          callout: 'Bedakan "cafe view" (istirahat singkat) dari "makan siang" (hidangan utama) agar rencana waktu realistis.',
        },
      ],
      faq: [
        {
          q: 'Di mana makan siang saat ke BIS?',
          a: 'Warung atau restoran di sepanjang jalur menuju danau, baik saat pergi maupun pulang. Pilih berdasarkan rute dan jam layanan yang Anda cek.',
        },
        {
          q: 'Apakah bisa makan siang di dalam kawasan BIS?',
          a: 'Ada warung di dalam kawasan, tetapi kapasitas dan jenis hidangan terbatas. Untuk makan siang utama, warung tepi jalan biasanya lebih praktis.',
        },
      ],
      related: ['warung-makan-terdekat', 'cafe-view-danau-toba', 'tempat-istirahat', 'kuliner-khas-simalungun'],
    },
  },
  {
    id: 'kuliner-khas-simalungun',
    slug: 'kuliner-khas-simalungun',
    group: 'kuliner',
    ready: true,
    content: {
      metaTitle: 'Kuliner Khas Simalungun di Sekitar Danau Toba',
      metaDescription:
        'Kuliner khas Simalungun dan Batak di sekitar Danau Toba: konteks budaya kuliner, contoh hidangan, dan tempat terverifikasi untuk mencoba.',
      kicker: 'Kuliner & Kopi',
      h1: 'Kuliner Khas Simalungun di Sekitar Danau Toba',
      lead: 'Kawasan Danau Toba memiliki tradisi kuliner Batak dan Simalungun yang kaya. Halaman ini memberi konteks budaya serta contoh hidangan, tanpa spekulasi nama tempat yang belum diverifikasi.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'konteks',
          heading: 'Konteks kuliner',
          paragraphs: [
            'Masakan Batak dikenal dengan bahan seperti andaliman (merica Batak), ikan dari danau, dan hidangan berbasis babi atau ayam sesuai tradisi setempat.',
            'Simalungun memiliki variasi kulinernya sendiri dalam rumpun Batak. Makanan ini bagian dari pengalaman budaya, bukan sekadar isi perut.',
          ],
        },
        {
          id: 'coba',
          heading: 'Di mana mencobanya',
          paragraphs: [
            'Warung dan restoran di kota seperti Pematangsiantar atau di sekitar jalur danau sering menyajikan hidangan lokal.',
            'Panduan ini tidak mencantumkan nama tempat spesifik yang belum diverifikasi. Pilihlah berdasarkan lokasi, ulasan terbaru, dan kebutuhan diet Anda.',
          ],
          callout: 'Tanya bahan makanan dan alergi sebelum memesan, serta perhatikan kebersihan dan jam layanan.',
        },
      ],
      faq: [
        {
          q: 'Apa kuliner khas Simalungun yang bisa dicoba?',
          a: 'Masakan dalam rumpun Batak dengan andaliman, ikan danau, dan hidangan ayam atau babi sesuai tradisi. Coba di warung atau restoran lokal yang Anda verifikasi sendiri.',
        },
        {
          q: 'Apakah ada tempat makan khas dekat BIS?',
          a: 'Warung di sekitar jalur danau sering menyajikan hidangan lokal. Panduan ini tidak mencantumkan nama tertentu yang belum diverifikasi; gunakan ulasan terbaru.',
        },
      ],
      related: ['warung-makan-terdekat', 'makan-siang-simarjarunjung', 'cafe-view-danau-toba', 'rute-dari-pematangsiantar'],
    },
  },
  {
    id: 'tempat-istirahat',
    slug: 'tempat-istirahat',
    group: 'kuliner',
    ready: true,
    content: {
      metaTitle: 'Tempat Istirahat di Jalan Simarjarunjung',
      metaDescription:
        'Tempat istirahat di sepanjang jalan Simarjarunjung: kopi, toilet, area berhenti, dan titik singgah saat pergi maupun pulang.',
      kicker: 'Kuliner & Kopi',
      h1: 'Tempat Istirahat di Jalan Simarjarunjung',
      lead: 'Perjalanan ke titik pandang sering panjang dan berkelok. Halaman ini merangkum opsi istirahat — kopi, toilet, area berhenti — agar perjalanan lebih nyaman.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'opsi',
          heading: 'Jenis tempat istirahat',
          bullets: [
            'Kedai kopi untuk berhenti sejenak menikmati panorama.',
            'Warung untuk makan ringan atau kebutuhan toilet.',
            'Area berhenti di tepi jalan yang aman, bukan sembarang bahu jalan.',
          ],
        },
        {
          id: 'pulang',
          heading: 'Saat perjalanan pulang',
          paragraphs: [
            'Titik istirahat saat pulang membantu menghindari lelah di jalan pegunungan yang berkelok.',
            'Isi bahan bakar dan periksa kendaraan di kota yang Anda lewati sebelum kembali ke jalur utama.',
          ],
          callout: 'Jangan berhenti di tikungan buta. Pilih area yang aman dan tidak menghalangi lalu lintas.',
        },
      ],
      faq: [
        {
          q: 'Di mana bisa istirahat di jalan ke Simarjarunjung?',
          a: 'Kedai kopi dan warung tersebar di sepanjang jalur. Pilih area berhenti yang aman, dan isi bahan bakar di kota yang Anda lewati.',
        },
        {
          q: 'Perlu istirahat saat pulang?',
          a: 'Sangat disarankan, terutama setelah hari panjang dan jalan pegunungan berkelok. Berhentilah di tempat aman, jangan di tikungan buta.',
        },
      ],
      related: ['cafe-view-danau-toba', 'warung-makan-terdekat', 'makan-siang-simarjarunjung', 'parkir-akses-jalan'],
    },
  },

  // ============================================================
  // D. WISATA SEKITAR (11)
  // ============================================================
  {
    id: 'bis-vs-panatapan',
    slug: 'bis-vs-panatapan',
    group: 'wisata',
    ready: true,
    content: {
      metaTitle: 'BIS vs Panatapan Simarjarunjung: Bedanya?',
      metaDescription:
        'Perbedaan Bukit Indah Simarjarunjung (BIS) dan Panatapan Simarjarunjung: lokasi, panorama, fasilitas, dan tips memilih titik pandang.',
      kicker: 'Wisata Sekitar',
      h1: 'BIS vs Panatapan Simarjarunjung',
      lead: 'BIS dan Panatapan sering tertukar karena berada di kawasan sama. Halaman ini membedakan keduanya agar Anda menuju titik pandang yang sesuai kebutuhan.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'beda',
          heading: 'Dua titik pandang berbeda',
          paragraphs: [
            'Bukit Indah Simarjarunjung (BIS) dan Panatapan Simarjarunjung adalah tempat berbeda dengan pengelola dan tiket yang bisa berbeda pula.',
            'Keduanya menawarkan pandangan Danau Toba, tetapi suasana, struktur foto, dan fasilitas tidak identik.',
          ],
        },
        {
          id: 'pilih',
          heading: 'Cara memilih',
          paragraphs: [
            'Bila tujuan utama struktur foto bertema dan area wisata, BIS kerap lebih dicari.',
            'Bila menginginkan titik pandang lain, Panatapan bisa menjadi alternatif. Pastikan pintu masuk yang Anda tuju sesuai rencana.',
          ],
          callout: 'Gunakan pin masing-masing, bukan sekadar nama kawasan, untuk navigasi.',
        },
      ],
      faq: [
        {
          q: 'Apa beda BIS dan Panatapan Simarjarunjung?',
          a: 'Keduanya titik pandang berbeda di kawasan Simarjarunjung dengan pengelola dan tiket yang bisa berbeda. Tanyakan pintu masuk yang tepat sesuai tujuan.',
        },
        {
          q: 'Lebih bagus yang mana?',
          a: 'Tergantung tujuan: BIS dikenal dengan struktur foto, Panatapan sebagai titik pandang lain. Bandingkan dan pilih yang sesuai rencana Anda.',
        },
      ],
      related: ['lokasi-dan-peta', 'puncak-simarjarunjung', 'spot-foto', 'hound-sky'],
    },
  },
  {
    id: 'hound-sky',
    slug: 'hound-sky',
    group: 'wisata',
    ready: true,
    content: {
      metaTitle: 'Hound Sky Simarjarunjung: Titik Pandang & Foto',
      metaDescription:
        'Hound Sky Simarjarunjung sebagai titik pandang terpisah: perbandingan dengan BIS, akses, dan cara menyambungkannya dalam satu kunjungan.',
      kicker: 'Wisata Sekitar',
      h1: 'Hound Sky Simarjarunjung',
      lead: 'Hound Sky adalah salah satu titik pandang di kawasan Simarjarunjung yang kerap dibandingkan dengan BIS. Halaman ini membahas akses dan cara menyambungkannya.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'posisi',
          heading: 'Titik pandang terpisah',
          paragraphs: [
            'Hound Sky dikelola secara terpisah dari BIS, sehingga tiket dan fasilitas belum tentu sama.',
            'Beberapa pengunjung menyambungkan BIS dan Hound Sky dalam satu hari bila waktu dan rute memungkinkan.',
          ],
        },
        {
          id: 'akses',
          heading: 'Akses dan penyambungan',
          paragraphs: [
            'Gunakan pin masing-masing untuk navigasi dan konfirmasi jarak serta kondisi jalan antar titik.',
            'Jangan asumsikan satu tiket berlaku untuk keduanya.',
          ],
          callout: 'Keberadaan dan operasional Hound Sky dapat berubah; verifikasi dengan peta dan ulasan terbaru sebelum datang.',
        },
      ],
      faq: [
        {
          q: 'Apa itu Hound Sky Simarjarunjung?',
          a: 'Salah satu titik pandang di kawasan Simarjarunjung, dikelola terpisah dari BIS. Tiket dan fasilitas belum tentu sama; verifikasi dengan peta terkini.',
        },
        {
          q: 'Bisa gabung BIS dan Hound Sky sehari?',
          a: 'Bisa bila waktu dan rute memungkinkan. Gunakan pin masing-masing dan konfirmasi jarak serta kondisi jalan antar titik.',
        },
      ],
      related: ['bis-vs-panatapan', 'puncak-simarjarunjung', 'spot-foto', 'lokasi-dan-peta'],
    },
  },
  {
    id: 'puncak-simarjarunjung',
    slug: 'puncak-simarjarunjung',
    group: 'wisata',
    ready: true,
    content: {
      metaTitle: 'Puncak Simarjarunjung: Puncak & Panorama',
      metaDescription:
        'Puncak Simarjarunjung sebagai titik pandang berbeda: membedakan dari BIS, panorama alam, dan cara menghindari kebingungan nama.',
      kicker: 'Wisata Sekitar',
      h1: 'Puncak Simarjarunjung',
      lead: 'Nama "Puncak Simarjarunjung" muncul dalam pencarian namun belum tentu merujuk ke BIS. Halaman ini membantu membedakan dan mengenali panorama alam kawasan.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'nama',
          heading: 'Menghindari kebingungan nama',
          paragraphs: [
            'Istilah "puncak" kadang digunakan longgar untuk titik pandang pegunungan di kawasan ini, dan bisa merujuk ke lebih dari satu tempat.',
            'Pastikan pin dan nama tempat usaha yang tepat sebelum navigasi agar tidak salah tujuan.',
          ],
        },
        {
          id: 'panorama',
          heading: 'Panorama alam',
          paragraphs: [
            'Kawasan Simarjarunjung secara umum menawarkan bentang Danau Toba dan perbukitan. Kualitas pandangan bergantung cuaca dan kabut.',
            'Bandingkan dengan BIS atau Panatapan bila ingin titik pandang spesifik.',
          ],
          callout: 'Gunakan pin tempat, bukan hanya kata "puncak", untuk menghindari salah alamat.',
        },
      ],
      faq: [
        {
          q: 'Apakah Puncak Simarjarunjung sama dengan BIS?',
          a: 'Tidak otomatis. "Puncak" bisa merujuk ke lebih dari satu titik pandang. Pastikan nama dan pin tempat usaha yang tepat sebelum berangkat.',
        },
        {
          q: 'Apa yang dilihat di Puncak Simarjarunjung?',
          a: 'Bentang Danau Toba dan perbukitan, tergantung cuaca. Pandangan tidak dijamin cerah karena kabut pegunungan.',
        },
      ],
      related: ['bis-vs-panatapan', 'hound-sky', 'pinus-hills', 'lokasi-dan-peta'],
    },
  },
  {
    id: 'pinus-hills',
    slug: 'pinus-hills',
    group: 'wisata',
    ready: true,
    content: {
      metaTitle: 'Pinus Hills Simarjarunjung: Hutan Pinus & View',
      metaDescription:
        'Pinus Hills Simarjarunjung sebagai titik pandang berbeda: suasana hutan pinus, akses, dan penyambungan dengan BIS.',
      kicker: 'Wisata Sekitar',
      h1: 'Pinus Hills Simarjarunjung',
      lead: 'Pinus Hills adalah salah satu titik pandang di kawasan Simarjarunjung dengan suasana hutan pinus. Halaman ini membahas akses dan perbedaannya dengan BIS.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'suasana',
          heading: 'Suasana hutan pinus',
          paragraphs: [
            'Berbeda dengan BIS yang dikenal struktur foto, Pinus Hills menawarkan suasana hutan pinus dan pandangan yang lebih asri.',
            'Pengelolaan dan fasilitas kemungkinan terpisah; verifikasi dengan peta dan ulasan terbaru.',
          ],
        },
        {
          id: 'akses',
          heading: 'Akses dan penyambungan',
          paragraphs: [
            'Gunakan pin masing-masing dan konfirmasi jarak serta kondisi jalan dari BIS.',
            'Bila ingin foto berbeda suasana, Pinus Hills dapat menjadi tambahan dalam satu kunjungan.',
          ],
          callout: 'Keberadaan dan operasional dapat berubah; periksa sebelum datang.',
        },
      ],
      faq: [
        {
          q: 'Apa itu Pinus Hills Simarjarunjung?',
          a: 'Titik pandang di kawasan Simarjarunjung dengan suasana hutan pinus, dikelola terpisah dari BIS. Verifikasi dengan peta terkini.',
        },
        {
          q: 'Bisa gabung dengan BIS?',
          a: 'Bisa bila waktu memungkinkan. Gunakan pin masing-masing dan konfirmasi jarak serta kondisi jalan.',
        },
      ],
      related: ['bis-vs-panatapan', 'hound-sky', 'tekosima-hills', 'salsabila-hills'],
    },
  },
  {
    id: 'tekosima-hills',
    slug: 'tekosima-hills',
    group: 'wisata',
    ready: true,
    content: {
      metaTitle: 'Tekosima Hills Simarjarunjung: Spot Pandang',
      metaDescription:
        'Tekosima Hills Simarjarunjung sebagai titik pandang: fasilitas, akses, dan cara menyambungkannya dengan rute BIS.',
      kicker: 'Wisata Sekitar',
      h1: 'Tekosima Hills Simarjarunjung',
      lead: 'Tekosima Hills termasuk deretan titik pandang di Simarjarunjung. Halaman ini membahas fasilitas, akses, dan penyambungan dengan BIS.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'profil',
          heading: 'Profil singkat',
          paragraphs: [
            'Tekosima Hills adalah titik pandang yang dikelola terpisah, dengan fasilitas dan tiket yang bisa berbeda dari BIS.',
            'Beberapa pengunjung menyambungkannya dengan titik pandang lain di kawasan yang sama.',
          ],
        },
        {
          id: 'akses',
          heading: 'Akses',
          paragraphs: [
            'Gunakan pin masing-masing dan konfirmasi jarak serta kondisi jalan.',
            'Jangan asumsikan satu tiket berlaku untuk semua titik pandang di Simarjarunjung.',
          ],
          callout: 'Verifikasi keberadaan dan operasional dengan peta serta ulasan terbaru sebelum datang.',
        },
      ],
      faq: [
        {
          q: 'Apa itu Tekosima Hills?',
          a: 'Titik pandang di kawasan Simarjarunjung, dikelola terpisah dari BIS. Verifikasi dengan peta terkini sebelum berkunjung.',
        },
        {
          q: 'Apakah satu tiket berlaku untuk semua hills?',
          a: 'Tidak otomatis. Setiap titik pandang dapat memiliki tiket sendiri. Pastikan pintu masuk yang Anda bayar sesuai tujuan.',
        },
      ],
      related: ['pinus-hills', 'salsabila-hills', 'bis-vs-panatapan', 'spot-foto'],
    },
  },
  {
    id: 'salsabila-hills',
    slug: 'salsabila-hills',
    group: 'wisata',
    ready: true,
    content: {
      metaTitle: 'Salsabila Hills Simarjarunjung: Titik Pandang',
      metaDescription:
        'Salsabila Hills Simarjarunjung sebagai titik pandang: ciri khas, akses, dan perbedaannya dengan titik pandang lain di kawasan.',
      kicker: 'Wisata Sekitar',
      h1: 'Salsabila Hills Simarjarunjung',
      lead: 'Salsabila Hills termasuk deretan titik pandang di Simarjarunjung. Halaman ini membahas ciri khas dan cara membedakannya dari BIS serta hills lain.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'ciri',
          heading: 'Ciri khas',
          paragraphs: [
            'Seperti titik pandang lain di kawasan, Salsabila Hills dikelola terpisah dan menawarkan panorama danau dari sudut berbeda.',
            'Fasilitas dan tiket dapat berbeda; verifikasi dengan peta dan ulasan terbaru.',
          ],
        },
        {
          id: 'beda',
          heading: 'Membedakan dari yang lain',
          paragraphs: [
            'Gunakan pin tempat usaha yang tepat untuk menghindari kebingungan nama "hills" yang banyak di kawasan ini.',
            'Bandingkan jarak, fasilitas, dan suasana sebelum memilih.',
          ],
          callout: 'Keberadaan dan operasional dapat berubah; periksa sebelum datang.',
        },
      ],
      faq: [
        {
          q: 'Apa itu Salsabila Hills?',
          a: 'Titik pandang di kawasan Simarjarunjung, dikelola terpisah dari BIS. Verifikasi dengan peta terkini sebelum berkunjung.',
        },
        {
          q: 'Bedanya dengan BIS atau Pinus Hills?',
          a: 'Setiap hills memiliki pengelola, fasilitas, dan sudut pandang berbeda. Gunakan pin masing-masing dan bandingkan sebelum memilih.',
        },
      ],
      related: ['tekosima-hills', 'pinus-hills', 'bis-vs-panatapan', 'puncak-simarjarunjung'],
    },
  },
  {
    id: 'panorama-sipintuangin',
    slug: 'panorama-sipintuangin',
    group: 'wisata',
    ready: true,
    content: {
      metaTitle: 'Panorama Sipintuangin: Titik Pandang & Foto',
      metaDescription:
        'Panorama Sipintuangin sebagai titik pandang di sekitar Simarjarunjung: akses, foto, dan penyambungan rute.',
      kicker: 'Wisata Sekitar',
      h1: 'Panorama Sipintuangin',
      lead: 'Sipintuangin adalah titik pandang di sekitar kawasan Danau Toba timur yang kerap disebut bersama Simarjarunjung. Halaman ini membahas akses dan foto.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'posisi',
          heading: 'Letak dan akses',
          paragraphs: [
            'Sipintuangin berada di deretan titik pandang di sisi timur Danau Toba, tidak selalu dalam satu pintu masuk dengan BIS.',
            'Gunakan pin masing-masing dan konfirmasi rute serta kondisi jalan.',
          ],
        },
        {
          id: 'foto',
          heading: 'Foto dan waktu',
          paragraphs: [
            'Seperti titik pandang pegunungan lain, foto terbaik bergantung cahaya dan cuaca; kabut dapat menutupi danau.',
            'Bila merangkai beberapa titik pandang, susun urutan berdasar jarak dan waktu tempuh.',
          ],
          callout: 'Verifikasi keberadaan dan operasional dengan peta serta ulasan terbaru.',
        },
      ],
      faq: [
        {
          q: 'Di mana Panorama Sipintuangin?',
          a: 'Di deretan titik pandang sisi timur Danau Toba, tidak selalu satu pintu dengan BIS. Gunakan pin masing-masing untuk navigasi.',
        },
        {
          q: 'Bisa digabung dengan BIS?',
          a: 'Bisa bila rute dan waktu memungkinkan. Susun urutan berdasar jarak dan waktu tempuh antar titik.',
        },
      ],
      related: ['bis-vs-panatapan', 'rute-fotografi', 'puncak-simarjarunjung', 'hound-sky'],
    },
  },
  {
    id: 'kebun-teh-bahbutong',
    slug: 'kebun-teh-bahbutong',
    group: 'wisata',
    ready: true,
    content: {
      metaTitle: 'Kebun Teh Bahbutong Sidamanik',
      metaDescription:
        'Kebun Teh Bahbutong Sidamanik: panorama perkebunan teh, aturan kunjungan, akses dari BIS, dan cara merangkai wisata alam.',
      kicker: 'Wisata Sekitar',
      h1: 'Kebun Teh Bahbutong Sidamanik',
      lead: 'Kebun Teh Bahbutong di Sidamanik menawarkan hamparan teh dan udara sejuk, sering dirangkai dengan BIS. Halaman ini membahas aturan, akses, dan penyambungan.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'profil',
          heading: 'Profil singkat',
          paragraphs: [
            'Kebun Teh Bahbutong berada di Sidamanik, kawasan perkebunan teh di dataran tinggi dekat Danau Toba.',
            'Suasana berbeda dari BIS: hamparan teh, jalur menurun, dan udara pegunungan yang sejuk.',
          ],
        },
        {
          id: 'akses',
          heading: 'Akses dan aturan',
          paragraphs: [
            'Gunakan peta untuk menemukan lokasi dan konfirmasi aturan kunjungan, jam, serta apakah ada biaya masuk atau parkir.',
            'Bila menyambungkan dari BIS, hitung waktu tempuh dan kondisi jalan pegunungan.',
          ],
          callout: 'Hormati aturan perkebunan dan jangan merusak tanaman. Verifikasi operasional sebelum datang.',
        },
      ],
      faq: [
        {
          q: 'Di mana Kebun Teh Bahbutong?',
          a: 'Di Sidamanik, kawasan perkebunan teh dekat Danau Toba. Gunakan peta untuk lokasi dan konfirmasi aturan kunjungan.',
        },
        {
          q: 'Bisa dari BIS lalu ke kebun teh?',
          a: 'Bisa, keduanya sering dirangkai. Hitung waktu tempuh dan kondisi jalan pegunungan, serta konfirmasi aturan kebun teh.',
        },
      ],
      related: ['rute-dari-sidamanik', 'cafe-view-danau-toba', 'itinerary-bis-sidamanik', 'air-terjun-bah-biak'],
    },
  },
  {
    id: 'air-terjun-bah-biak',
    slug: 'air-terjun-bah-biak',
    group: 'wisata',
    ready: true,
    content: {
      metaTitle: 'Air Terjun Bah Biak Sidamanik',
      metaDescription:
        'Air Terjun Bah Biak Sidamanik: akses, jalur trek, keamanan, dan penyambungan dengan rute teh serta BIS.',
      kicker: 'Wisata Sekitar',
      h1: 'Air Terjun Bah Biak Sidamanik',
      lead: 'Air Terjun Bah Biak di Sidamanik sering dirangkai dengan wisata alam Danau Toba. Halaman ini membahas akses, jalur, dan keamanan.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'akses',
          heading: 'Akses dan jalur',
          paragraphs: [
            'Air terjun ini berada di Sidamanik, dekat kawasan perkebunan teh. Akses dan kondisi jalur perlu diverifikasi dengan peta dan warga setempat.',
            'Beberapa air terjun memerlukan jalan kaki menurun; pastikan kendaraan diparkir di tempat aman.',
          ],
        },
        {
          id: 'aman',
          heading: 'Keamanan',
          paragraphs: [
            'Hindari mendekati tepian air terjun saat debit tinggi atau hujan lebat. Gunakan alas kaki dengan cengkeraman baik.',
            'Konfirmasi kondisi jalur dan izin area sebelum trekking.',
          ],
          callout: 'Jangan memaksa jalur licin atau tertutup. Keamanan lebih utama dari foto.',
        },
      ],
      faq: [
        {
          q: 'Di mana Air Terjun Bah Biak?',
          a: 'Di Sidamanik, dekat perkebunan teh. Verifikasi akses dan jalur dengan peta serta warga setempat sebelum datang.',
        },
        {
          q: 'Bisa dari BIS ke air terjun?',
          a: 'Bisa dalam satu rangkaian wisata alam Sidamanik. Hitung waktu tempuh dan waspada jalur pegunungan serta trekking.',
        },
      ],
      related: ['kebun-teh-bahbutong', 'rute-dari-sidamanik', 'itinerary-bis-sidamanik', 'alternatif-saat-hujan'],
    },
  },
  {
    id: 'pantai-paris-tigaras',
    slug: 'pantai-paris-tigaras',
    group: 'wisata',
    ready: true,
    content: {
      metaTitle: 'Pantai Paris Tigaras: Wisata Tepi Danau',
      metaDescription:
        'Pantai Paris Tigaras di tepi Danau Toba: aktivitas tepi danau, istirahat, dan penyambungan dengan rute BIS dalam satu hari.',
      kicker: 'Wisata Sekitar',
      h1: 'Pantai Paris Tigaras',
      lead: 'Tigaras dikenal dengan tepian Danau Toba yang tenang, termasuk area "Pantai Paris". Halaman ini membahas aktivitas dan penyambungan dengan BIS.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'profil',
          heading: 'Tepi danau yang tenang',
          paragraphs: [
            'Tigaras berada di tepi Danau Toba dengan suasana lebih tenang dibanding titik pandang pegunungan.',
            'Area ini cocok sebagai pelengkap setelah foto di BIS: istirahat, menikmati tepi danau, atau makan.',
          ],
        },
        {
          id: 'rangkai',
          heading: 'Menyambung dengan BIS',
          paragraphs: [
            'BIS dan Tigaras dapat dirangkai dalam satu hari: foto di bukit lalu turun ke tepi danau.',
            'Hitung waktu tempuh antar lokasi dan kondisi jalan. Baca "Rute sehari BIS dan Tigaras" untuk struktur lebih rinci.',
          ],
          callout: 'Verifikasi fasilitas tepi danau dan jam layanan dengan peta serta ulasan terbaru.',
        },
      ],
      faq: [
        {
          q: 'Di mana Pantai Paris Tigaras?',
          a: 'Di tepi Danau Toba, area Tigaras. Gunakan peta untuk lokasi dan konfirmasi fasilitas sebelum datang.',
        },
        {
          q: 'Bisa gabung BIS dan Tigaras sehari?',
          a: 'Bisa. BIS untuk foto bukit, lalu turun ke tepi danau Tigaras untuk istirahat. Hitung waktu tempuh antar lokasi.',
        },
      ],
      related: ['itinerary-bis-tigaras', 'rute-dari-parapat', 'air-terjun-bah-biak', 'lokasi-dan-peta'],
    },
  },
  {
    id: 'rute-sipiso-piso',
    slug: 'rute-sipiso-piso',
    group: 'wisata',
    ready: true,
    content: {
      metaTitle: 'Air Terjun Sipiso-piso dari Simarjarunjung',
      metaDescription:
        'Rute Sipiso-piso dari Simarjarunjung: jarak jauh, titik singgah, dan pertimbangan waktu tempuh dalam satu perjalanan.',
      kicker: 'Wisata Sekitar',
      h1: 'Air Terjun Sipiso-piso dari Simarjarunjung',
      lead: 'Sipiso-piso adalah air terjun ikonik di sisi utara Danau Toba, cukup jauh dari Simarjarunjung. Halaman ini membahas rute, jarak, dan waktu tempuh.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'jarak',
          heading: 'Jarak dan waktu',
          paragraphs: [
            'Sipiso-piso berada di sisi utara danau, jauh dari Simarjarunjung di sisi timur. Perjalanan lintas danau membutuhkan waktu tempuh yang tidak singkat.',
            'Jangan mengandalkan satu angka lama; periksa navigasi untuk hari kunjungan Anda.',
          ],
        },
        {
          id: 'rangkai',
          heading: 'Menyambung dalam rute panjang',
          paragraphs: [
            'Beberapa wisatawan menjadikannya bagian rute panjang Medan–Sipiso-piso–BIS.',
            'Baca "Rute Medan, Sipiso-piso dan BIS" untuk struktur perjalanan yang lebih rinci.',
          ],
          callout: 'Ini perjalanan panjang; rencanakan istirahat, bahan bakar, dan malam penginapan bila perlu.',
        },
      ],
      faq: [
        {
          q: 'Berapa jauh Sipiso-piso dari Simarjarunjung?',
          a: 'Cukup jauh karena berada di sisi utara danau. Waktu tempuh bervariasi; periksa navigasi untuk hari kunjungan Anda.',
        },
        {
          q: 'Bisa BIS dan Sipiso-piso sehari?',
          a: 'Mungkin dalam rute panjang lintas danau, tetapi melelahkan. Pertimbangkan penginapan di antara jika tidak terbiasa menyetir jauh.',
        },
      ],
      related: ['rute-medan-sipiso-bis', 'panorama-sipintuangin', 'itinerary-bis-tigaras', 'lokasi-dan-peta'],
    },
  },

  // ============================================================
  // E. RUTE & RENCANA (6)
  // ============================================================
  {
    id: 'itinerary-setengah-hari',
    slug: 'itinerary-setengah-hari',
    group: 'rencana',
    ready: true,
    content: {
      metaTitle: 'Itinerary Setengah Hari di Simarjarunjung',
      metaDescription:
        'Rencana setengah hari di Simarjarunjung: cocok untuk siapa, titik singgah, foto, kopi, dan penyesuaian bila cuaca buruk.',
      kicker: 'Rute & Rencana',
      h1: 'Itinerary Setengah Hari di Simarjarunjung',
      lead: 'Bagi yang datang dari kota terdekat, setengah hari cukup untuk menikmati BIS dengan santai. Halaman ini memberi struktur ringkas.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'untuk',
          heading: 'Cocok untuk siapa',
          paragraphs: [
            'Pengunjung dari Pematangsiantar atau sekitar danau yang ingin foto dan panorama tanpa menginap.',
            'Cocok untuk keluarga dengan waktu terbatas atau yang menyambungkan dengan agenda danau lain.',
          ],
        },
        {
          id: 'alur',
          heading: 'Alur singgah',
          bullets: [
            'Datang ke BIS dan foto dari titik pandang utama (60–90 menit).',
            'Istirahat di kedai kopi dengan view danau (30 menit).',
            'Singgah warung tepi jalan saat pulang bila lapar.',
          ],
        },
        {
          id: 'cuaca',
          heading: 'Bila cuaca buruk',
          paragraphs: [
            'Bila kabut menutupi danau, nikmati suasana pegunungan dan kopi daripada memaksa foto.',
            'Baca "Alternatif wisata saat hujan" untuk opsi lain.',
          ],
          callout: 'Hitung waktu perjalanan pulang; jangan terlalu sore di jalan pegunungan berkabut.',
        },
      ],
      faq: [
        {
          q: 'Cukupkah setengah hari ke BIS?',
          a: 'Cukup untuk foto dan panorama santai bila berangkat dari kota terdekat. Tambah waktu bila ingin kuliner mendalam.',
        },
        {
          q: 'Apa saja yang dilakukan dalam setengah hari?',
          a: 'Foto di titik pandang utama, istirahat kopi view danau, dan singgah warung saat pulang.',
        },
      ],
      related: ['durasi-kunjungan', 'cafe-view-danau-toba', 'alternatif-saat-hujan', 'rute-dari-pematangsiantar'],
    },
  },
  {
    id: 'itinerary-bis-tigaras',
    slug: 'itinerary-bis-tigaras',
    group: 'rencana',
    ready: true,
    content: {
      metaTitle: 'Rute Sehari BIS dan Tigaras',
      metaDescription:
        'Rencana sehari BIS dan Pantai Paris Tigaras: bukit lalu tepi danau, waktu tempuh, makan, dan penyesuaian cuaca.',
      kicker: 'Rute & Rencana',
      h1: 'Rute Sehari BIS dan Tigaras',
      lead: 'Padukan foto di bukit dengan istirahat di tepi Danau Toba. Halaman ini memberi struktur sehari penuh BIS–Tigaras.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'untuk',
          heading: 'Cocok untuk siapa',
          paragraphs: [
            'Pengunjung yang ingin variasi: pandang bukit di pagi/siang, lalu tepi danau yang tenang di sore hari.',
            'Cocok untuk keluarga atau rombongan yang ingin tidak terburu-buru.',
          ],
        },
        {
          id: 'alur',
          heading: 'Alur sehari',
          bullets: [
            'Pagi/siang: foto di BIS dan kedai kopi (2–3 jam).',
            'Makan siang di warung tepi jalan menuju danau.',
            'Sore: turun ke Tigaras, nikmati tepi danau dan istirahat.',
          ],
        },
        {
          id: 'waktu',
          heading: 'Waktu dan cuaca',
          paragraphs: [
            'Hitung waktu tempuh BIS–Tigaras dan kondisi jalan pegunungan.',
            'Bila hujan, tepi danau tetap bisa dinikmati asal aman; baca "Alternatif saat hujan".',
          ],
          callout: 'Jangan menumpuk terlalu banyak titik; kualitas lebih baik dari kejar waktu.',
        },
      ],
      faq: [
        {
          q: 'Bisa BIS dan Tigaras sehari?',
          a: 'Bisa. Foto bukit lalu turun ke tepi danau Tigaras. Hitung waktu tempuh antar lokasi dan kondisi jalan.',
        },
        {
          q: 'Kapan ke Tigaras paling enak?',
          a: 'Sore hari untuk istirahat di tepi danau setelah foto di bukit. Sesuaikan dengan cuaca.',
        },
      ],
      related: ['pantai-paris-tigaras', 'itinerary-setengah-hari', 'makan-siang-simarjarunjung', 'alternatif-saat-hujan'],
    },
  },
  {
    id: 'itinerary-bis-sidamanik',
    slug: 'itinerary-bis-sidamanik',
    group: 'rencana',
    ready: true,
    content: {
      metaTitle: 'Rute Sehari BIS dan Sidamanik',
      metaDescription:
        'Rencana sehari BIS dan Sidamanik: bukit, kebun teh, air terjun, dan kopi. Waktu tempuh, makan, dan penyesuaian cuaca.',
      kicker: 'Rute & Rencana',
      h1: 'Rute Sehari BIS dan Sidamanik',
      lead: 'Sidamanik menawarkan teh, air terjun, dan kopi yang melengkapi BIS. Halaman ini memberi struktur sehari penuh wisata alam.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'untuk',
          heading: 'Cocok untuk siapa',
          paragraphs: [
            'Pengunjung yang menyukai wisata alam: bukit, perkebunan teh, dan air terjun dalam satu hari.',
            'Cocok untuk fotografer lanskap dan keluarga yang ingin variasi.',
          ],
        },
        {
          id: 'alur',
          heading: 'Alur sehari',
          bullets: [
            'Pagi: BIS untuk foto dan panorama danau.',
            'Siang: Kebun Teh Bahbutong dan makan di Sidamanik.',
            'Sore: Air Terjun Bah Biak atau kedai kopi sebelum pulang.',
          ],
        },
        {
          id: 'waktu',
          heading: 'Waktu dan kehati-hatian',
          paragraphs: [
            'Hitung waktu tempuh antar titik dan kondisi jalur pegunungan serta trekking air terjun.',
            'Waspadai kabut dan jalan licin; baca "Alternatif saat hujan".',
          ],
          callout: 'Gunakan pin masing-masing; jangan asumsikan satu tiket berlaku untuk semua tempat.',
        },
      ],
      faq: [
        {
          q: 'Bisa BIS dan Sidamanik sehari?',
          a: 'Bisa. Padukan foto bukit dengan kebun teh dan air terjun. Hitung waktu tempuh dan kondisi jalan.',
        },
        {
          q: 'Apa saja di Sidamanik?',
          a: 'Kebun Teh Bahbutong, Air Terjun Bah Biak, dan kedai kopi lokal. Verifikasi akses masing-masing.',
        },
      ],
      related: ['kebun-teh-bahbutong', 'air-terjun-bah-biak', 'cafe-view-danau-toba', 'rute-dari-sidamanik'],
    },
  },
  {
    id: 'rute-medan-sipiso-bis',
    slug: 'rute-medan-sipiso-bis',
    group: 'rencana',
    ready: true,
    content: {
      metaTitle: 'Rute Medan, Sipiso-piso & BIS',
      metaDescription:
        'Rute panjang Medan–Sipiso-piso–BIS: lintas Danau Toba, waktu tempuh, istirahat, dan tips menginap di antara.',
      kicker: 'Rute & Rencana',
      h1: 'Rute Medan, Sipiso-piso & BIS',
      lead: 'Rute panjang yang menghubungkan ibu kota provinsi, air terjun ikonik utara danau, dan titik pandang timur. Halaman ini membahas pengaturan waktu.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'untuk',
          heading: 'Cocok untuk siapa',
          paragraphs: [
            'Pengunjung dari Medan yang ingin lintas danau dalam satu perjalanan panjang.',
            'Lebih baik dilakukan dalam dua hari dengan penginapan di antaranya.',
          ],
        },
        {
          id: 'alur',
          heading: 'Alur panjang',
          bullets: [
            'Hari 1: Medan ke Sipiso-piso (utara danau), menginap di sekitar danau.',
            'Hari 2: menuju sisi timur, foto di BIS, lalu kembali.',
          ],
        },
        {
          id: 'waktu',
          heading: 'Waktu dan persiapan',
          paragraphs: [
            'Waktu tempuh lintas danau panjang; periksa navigasi untuk hari kunjungan.',
            'Siapkan bahan bakar, istirahat, dan malam penginapan bila perlu.',
          ],
          callout: 'Ini perjalanan melelahkan; jangan memaksakan pulang di hari yang sama bila lelah.',
        },
      ],
      faq: [
        {
          q: 'Bisa Medan–Sipiso-piso–BIS dalam satu hari?',
          a: 'Mungkin tetapi melelahkan karena lintas danau panjang. Pertimbangkan penginapan di antara untuk perjalanan lebih aman.',
        },
        {
          q: 'Berapa lama total rute ini?',
          a: 'Beberapa jam lintas danau, bervariasi per rute dan lalu lintas. Periksa navigasi; panduan tidak menjamin satu angka.',
        },
      ],
      related: ['rute-sipiso-piso', 'rute-dari-medan', 'itinerary-bis-tigaras', 'rute-fotografi'],
    },
  },
  {
    id: 'rute-fotografi',
    slug: 'rute-fotografi',
    group: 'rencana',
    ready: true,
    content: {
      metaTitle: 'Rute Fotografi Danau Toba dari Simarjarunjung',
      metaDescription:
        'Rute fotografi Danau Toba dari Simarjarunjung: waktu terbaik, sudut pandang, titik singgah, dan antisipasi kabut.',
      kicker: 'Rute & Rencana',
      h1: 'Rute Fotografi Danau Toba dari Simarjarunjung',
      lead: 'Bagi fotografer, BIS dan titik pandang sekitarnya menawarkan sudut beragam. Halaman ini merangkum waktu, sudut, dan antisipasi cuaca.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'waktu',
          heading: 'Waktu terbaik',
          paragraphs: [
            'Pagi dan sore sering memberi cahaya lembut, tetapi pandangan danau tidak dijamin karena kabut.',
            'Siapkan fleksibilitas dan jangan bergantung pada satu jam tertentu.',
          ],
        },
        {
          id: 'sudut',
          heading: 'Sudut dan titik',
          bullets: [
            'BIS: struktur foto dengan latar danau.',
            'Titik pandang lain (Panatapan, Hound Sky, Sipintuangin): sudut berbeda.',
            'Tepi danau Tigaras: refleksi danau tenang.',
          ],
        },
        {
          id: 'kabut',
          heading: 'Antisipasi kabut',
          paragraphs: [
            'Kabut pegunungan dapat menutupi danau tiba-tiba. Gunakan waktu menunggu untuk detail tanaman, kabut, atau suasana.',
            'Baca "Cuaca & kabut" untuk persiapan lengkap.',
          ],
          callout: 'Bawa lensa dan perlindungan hujan; jangan memaksa foto saat kondisi tidak aman.',
        },
      ],
      faq: [
        {
          q: 'Kapan foto Danau Toba terbaik dari BIS?',
          a: 'Pagi dan sore umumnya lembut, tetapi danau bisa tertutup kabut. Siapkan fleksibilitas waktu.',
        },
        {
          q: 'Titik mana yang wajib untuk fotografer?',
          a: 'BIS untuk struktur foto, lalu titik pandang lain seperti Panatapan atau Sipintuangin untuk variasi sudut. Verifikasi akses masing-masing.',
        },
      ],
      related: ['spot-foto', 'sunrise-sunset', 'cuaca-kabut', 'panorama-sipintuangin'],
    },
  },
  {
    id: 'alternatif-saat-hujan',
    slug: 'alternatif-saat-hujan',
    group: 'rencana',
    ready: true,
    content: {
      metaTitle: 'Alternatif Wisata Saat Hujan di Simarjarunjung',
      metaDescription:
        'Opsi saat hujan di Simarjarunjung: batalkan atau tunda, nikmati kopi, dan tempat tertutup di sekitar danau.',
      kicker: 'Rute & Rencana',
      h1: 'Alternatif Wisata Saat Hujan di Simarjarunjung',
      lead: 'Cuaca pegunungan bisa berubah cepat. Halaman ini memberi opsi bila hujan turun saat kunjungan, tanpa memaksakan foto di tengah kabut.',
      updated: CHECK_DATE,
      blocks: [
        {
          id: 'tunda',
          heading: 'Tunda atau batalkan foto bukit',
          paragraphs: [
            'Bila hujan dan kabut tebal, foto dari titik pandang bukit biasanya tidak optimal dan jalur licin berbahaya.',
            'Pertimbangkan menunda ke hari lain yang lebih cerah bila fleksibel.',
          ],
        },
        {
          id: 'kopi',
          heading: 'Nikmati kopi dan tepi danau',
          paragraphs: [
            'Kedai kopi dengan view danau tetap nyaman saat gerimis, asal aman secara cuaca.',
            'Tepi danau seperti Tigaras bisa dinikmati saat hujan ringan, dengan catatan keamanan.',
          ],
          callout: 'Hindari tepian dan struktur licin saat hujan lebat. Keselamatan lebih utama.',
        },
        {
          id: 'dalam',
          heading: 'Opsi tertutup',
          paragraphs: [
            'Warung dan restoran di kota sekitar danau menawarkan tempat tertutup untuk istirahat dan makan.',
            'Baca "Tempat istirahat di jalan Simarjarunjung" untuk opsi singgah.',
          ],
        },
      ],
      faq: [
        {
          q: 'Hujan turun, apa yang dilakukan?',
          a: 'Tunda foto bukit ke hari lebih cerah bila fleksibel, atau nikmati kopi dan tepi danau saat aman. Hindari jalur licin dan struktur tertutup saat hujan lebat.',
        },
        {
          q: 'Apakah BIS tutup saat hujan?',
          a: 'Jam operasional belum terverifikasi; konfirmasi ke petugas. Yang pasti, jangan memaksakan foto di tengah kabut dan jalur licin.',
        },
      ],
      related: ['cuaca-kabut', 'cafe-view-danau-toba', 'tempat-istirahat', 'itinerary-setengah-hari'],
    },
  },
];

// ------------------------------------------------------------
// Helper functions
// ------------------------------------------------------------
export function topicSlugs(): string[] {
  return TOPICS.filter((t) => t.ready).map((t) => t.slug);
}

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug && t.ready);
}

export function topicsByGroup(group: TopicGroup): Topic[] {
  return TOPICS.filter((t) => t.group === group && t.ready);
}

export function labelForSlug(slug: string): string {
  const t = TOPICS.find((x) => x.slug === slug);
  return t ? t.content.h1 : slug;
}

export { ATTRACTION };
