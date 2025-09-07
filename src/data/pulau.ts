export interface pulau {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  slogan: string;
  images: string[];
  detailDesc1: string;
  detailDesc2: string;
  detailDesc3: string;
  destinations: number;
  image: string;
  provinsi: {
    image: string;
    text: string;
  }[];
  budaya: {
    type: string;
    image: string;
    text: string;
  }[];
}

export const provinsi: pulau[] = [
  {
    id: 1,
    title: "Jawa",
    subtitle: "Indonesia",
    description:
      "Pulau Jawa adalah pusat budaya dan sejarah Indonesia, rumah bagi Candi Borobudur, Prambanan, hingga Keraton Yogyakarta",
    slogan:
      "Jawa bukan hanya sekedar tempat, Jawa adalah suasana hati, Jawa magis, Jawa adalah keadaan pikiran tropis",
    images: [
      "https://images.unsplash.com/photo-1599551634107-95ce4e763232?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amF3YXxlbnwwfHwwfHx8MA%3D%3D",
      "/images/BOROBUDUR.jpg",
      "/images/Jawa.jpg",
      "/images/wayang.png",
    ],
    detailDesc1:
      "Rasakan keajaiban matahari terbit di tepi kawah Gunung Bromo, ketika cahaya keemasan perlahan menyinari lautan pasir yang luas. Udara pegunungan yang sejuk dan kabut tipis menambah suasana dramatis yang menakjubkan.",
    detailDesc2:
      "Menjelajahi masa lalu dengan mengunjungi keagungan Candi Borobudur dan Prambanan. Nikmati panorama indah dari puncak Borobudur dan temukan kisah legendaris yang terukir di dinding megah Prambanan.",
    detailDesc3:
      "Akhiri petualangan dengan wisata kuliner di Jalan Malioboro. Cicipi manisnya gudeg, hidangan khas Yogyakarta berbahan dasar nangka, yang menjadi simbol kehangatan tradisi Jawa.",
    destinations: 156,
    image:
      "https://images.unsplash.com/photo-1620549146396-9024d914cd99?w=500&auto=format&fit=crop&q=60",
    provinsi: [
      {
        image:
          "https://images.unsplash.com/photo-1590930754517-64d5fffa06ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9uYXN8ZW58MHx8MHx8fDA%3D",
        text: "DKI Jakarta",
      },
      {
        image:
          "https://images.unsplash.com/photo-1571048231310-ee1152ec6094?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFuZHVuZ3xlbnwwfHwwfHx8MA%3D%3D",
        text: "Jawa Barat",
      },
      {
        image:
          "https://images.unsplash.com/photo-1739500671488-996f0a691f79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a290YSUyMGxhbWElMjBzZW1hcmFuZ3xlbnwwfHwwfHx8MA%3D%3D",
        text: "Jawa Tengah",
      },
      {
        image:
          "https://images.unsplash.com/photo-1631795617958-3ddcf718d6aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW9neWFrYXJ0YXxlbnwwfHwwfHx8MA%3D%3D",
        text: "DI Yogyakarta",
      },
      {
        image:
          "https://images.unsplash.com/photo-1566176553949-872b2a73e04e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VyYWJheWF8ZW58MHx8MHx8fDA%3D",
        text: "Jawa Timur",
      },
      {
        image:
          "https://images.unsplash.com/photo-1566205865731-51803de32a35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhbnRlbnxlbnwwfHwwfHx8MA%3D%3D",
        text: "Banten",
      },
    ],
    budaya: [
      {
        type: "Musik Tradisional",
        image:
          "https://images.unsplash.com/photo-1670179716479-93dadc7a6093?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtZWxhbnxlbnwwfHwwfHx8MA%3D%3D",
        text: "Gamelan - Alat musik tradisional dengan instrumen perkusi",
      },
      {
        type: "Seni Tekstil",
        image:
          "https://images.unsplash.com/photo-1586319826907-1ff4aadbaddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmF0aWt8ZW58MHx8MHx8fDA%3D",
        text: "Batik - Seni kain tradisional dengan teknik canting dan cap",
      },
      {
        type: "Seni Pertunjukan",
        image:
          "https://images.unsplash.com/photo-1662793524504-bd11271b4b56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F5YW5nfGVufDB8fDB8fHww",
        text: "Wayang Kulit - Pertunjukan bayangan dengan cerita epik",
      },
      {
        type: "Tarian Tradisional",
        image: "/images/kudalumping.png",
        text: "Kuda Lumping - Tarian dengan properti kuda anyaman",
      },
      {
        type: "Tarian Tradisional",
        image:
          "https://images.unsplash.com/photo-1709614503171-c18df73d4078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVvZyUyMHBvbm9yb2dvfGVufDB8fDB8fHww",
        text: "Reog Ponorogo - Tarian topeng singa dengan hiasan besar",
      },
      {
        type: "Senjata Tradisional",
        image: "/images/keris.png",
        text: "Keris - Senjata tradisional dengan nilai spiritual",
      },
      {
        type: "Musik Tradisional",
        image:
          "https://images.unsplash.com/photo-1691229219602-f3634d8ff4b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5na2x1bmd8ZW58MHx8MHx8fDA%3D",
        text: "Angklung - Alat musik bambu khas Jawa Barat",
      },
      {
        type: "Seni Pertunjukan",
        image: "/images/sinden.png",
        text: "Sinden - Penyanyi tradisional dalam pertunjukan wayang",
      },
      {
        type: "Upacara Adat",
        image: "/images/resentaun.png",
        text: "Upacara Seren Taun - Ritual syukur panen masyarakat Sunda",
      },
      {
        type: "Tarian Tradisional",
        image: "/images/bendhaya.png",
        text: "Tari Bedhaya - Tari sakral keraton Jawa",
      },
      {
        type: "Kuliner",
        image:
          "https://images.unsplash.com/photo-1706145461918-b6810c3fbba2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmFzaSUyMHR1bXBlbmd8ZW58MHx8MHx8fDA%3D",
        text: "Tumpeng - Hidangan nasi kerucut untuk perayaan",
      },
      {
        type: "Transportasi",
        image:
          "https://images.unsplash.com/photo-1610008130210-5ffbe6c4d0a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVjYWt8ZW58MHx8MHx8fDA%3D",
        text: "Becak - Transportasi tradisional dengan tiga roda",
      },
    ],
  },
  {
     id: 2,
title: "Sulawesi",
subtitle: "Indonesia",
description:
  "Pulau Sulawesi terkenal dengan keragaman budaya dan tradisi menariknya seperti rumah tongkonan Toraja",
slogan:
  "Sulawesi, tanah di mana laut dan budaya berpadu, eksotis dan penuh kejutan",
images: [
  "/images/sulawesi1.jpg",
  "/images/sulawesi2.jpg", 
  "/images/sulawesi3.jpg",
  "/images/sulawesi4.jpg",
],
detailDesc1:
  "Jelajahi Tana Toraja dengan rumah adat tongkonan yang megah dan situs pemakaman di tebing batu, warisan budaya yang masih terjaga hingga kini.",
detailDesc2:
  "Menyelam di Taman Laut Bunaken dengan keindahan terumbu karang yang menakjubkan. Nikmati keragaman biota laut yang menjadi surga bagi para penyelam dunia.",
detailDesc3:
  "Tutup perjalanan dengan kuliner khas Sulawesi seperti coto Makassar yang gurih dan ikan bakar yang segar, cita rasa yang mencerminkan kekayaan budaya pulau ini.",
destinations: 95,
image: "/images/sulawesii.jpg",
provinsi: [
  {
    image: "/images/sulsel.jpg",
    text: "Sulawesi Selatan",
  },
  {
    image: "/images/sulut.jpg", 
    text: "Sulawesi Utara",
  },  
  {
    image: "/images/sulteng.jpg",
    text: "Sulawesi Tengah",
  },
  {
    image: "/images/sulbar.jpg",
    text: "Sulawesi Barat",
  },
  {
    image: "/images/sultengga.jpg",
    text: "Sulawesi Tenggara",
  },
],
budaya: [
  {
    type: "Arsitektur",
    image: "/images/tongkonan.jpg",
    text: "Rumah Adat Tongkonan - Arsitektur tradisional dengan atap melengkung",
  },
  {
    type: "Pakaian Tradisional",
    image: "/images/pakaiantoraja.jpg",
    text: "Pakaian Tradisional Toraja - Kain tenun dengan motif khas",
  },
  {
    type: "Tarian Tradisional",
    image: "/images/tari.jpg",
    text: "Tari Ma'gellu - Tarian penyambutan dari Toraja",
  },
  {
    type: "Kuliner",
    image: "/images/cotomakasar.jpg",
    text: "Coto Makassar - Sup daging sapi dengan bumbu kacang",
  },
  {
    type: "Kerajinan",
    image: "/images/anyaman.jpg",
    text: "Kerajinan Khas Sulawesi - Ukiran kayu dan anyaman",
  },
  {
    type: "Upacara Adat",
    image: "/images/pemakaman.jpg",
    text: "Rambu Solo - Upacara pemakaman adat Toraja",
  },
  {
    type: "Seni Tekstil",
    image: "/images/tenun.jpg",
    text: "Kain Tenun Sutra - Sutra alam dengan motif tradisional",
  },
  {
    type: "Tarian Tradisional",
    image: "/images/makarena.jpg",
    text: "Tari Pakarena - Tarian gemulai dari Makassar",
  },
  {
    type: "Transportasi",
    image: "/images/kapal.jpg",
    text: "Perahu Phinisi - Kapal tradisional suku Bugis",
  },
  {
    type: "Senjata Tradisional",
    image: "/images/keris.jpg",
    text: "Keris Bugis - Senjata tradisional dengan ukiran detail",
  },
  {
    type: "Kerajinan",
    image: "/images/ukiran.jpg",
    text: "Ukiran Toraja - Ornamen rumah dengan simbol spiritual",
  },
  {
    type: "Tarian Tradisional",
    image: "/images/katrili.jpg",
    text: "Tari Katrili - Pengaruh budaya Spanyol di Minahasa",
  },
  {
    type: "Kuliner",
    image: "/images/makanankhas.jpg",
    text: "Masakan Manado - Cita rasa pedas dengan bahan segar",
  },
  {
    type: "Permainan Tradisional",
    image: "/images/bakiak.jpg",
    text: "Bakiak - Permainan tradisional dari Sulawesi Utara",
  },
  {
    type: "Tarian Tradisional",
    image: "/images/lulo.jpg",
    text: "Tari Lulo - Tarian pergaulan dari Sulawesi Tenggara",
  },
],
  },
  {
    id: 3,
title: "Sumatera",
subtitle: "Indonesia",
description:
  "Pulau Sumatera adalah pulau terbesar keenam di dunia dan dikenal dengan keindahan alamnya, termasuk Danau Toba",
slogan: "Sumatera, liar dan megah, tanah legenda dan rasa yang mendunia",
images: [
  "/images/sumatra1.jpg",
  "/images/sumatra2.jpg",
  "/images/sumatra3.jpg",
  "/images/sumatra4.jpg",
],
detailDesc1:
  "Nikmati pesona Danau Toba, danau vulkanik terbesar di dunia, dan jelajahi Pulau Samosir di tengahnya yang sarat dengan budaya Batak.",
detailDesc2:
  "Trekking ke hutan Bukit Lawang untuk bertemu langsung dengan orangutan Sumatera di habitat aslinya, pengalaman langka yang tak terlupakan.",
detailDesc3:
  "Lengkapi perjalanan dengan menikmati kuliner Padang, mulai dari rendang yang mendunia hingga gulai yang kaya rempah, cita rasa khas Sumatera.",
destinations: 123,
image: "/images/mainsumatra.jpg",
provinsi: [
  {
    image: "/images/masjidaceh.jpg",
    text: "Aceh",
  },
  {
    image: "/images/danautoba.jpg",
    text: "Sumatera Utara",
  },
  {
    image: "/images/jamgadang.jpg",
    text: "Sumatera Barat",
  },
  {
    image: "/images/istana.jpg",
    text: "Riau",
  },
  {
    image: "/images/candi.jpg",
    text: "Jambi",
  },
  {
    image: "/images/jembatan.jpg",
    text: "Sumatera Selatan",
  },
  {
    image: "/images/pantai.jpg",
    text: "Bangka Belitung",
  },
  {
    image: "/images/krakatau.jpg",
    text: "Lampung",
  },
],
budaya: [
  {
    type: "Kuliner",
    image: "/images/rendang.jpg",
    text: "Rendang - Hidangan daging dengan bumbu rempah khas Minang",
  },
  {
    type: "Tarian Tradisional",
    image: "/images/taripiring.jpg",
    text: "Tari Piring - Tarian dengan piring yang berputar",
  },
  {
    type: "Seni Tekstil",
    image: "/images/ulos.jpg",
    text: "Ulos Batak - Kain tenun dengan makna spiritual",
  },
  {
    type: "Arsitektur",
    image: "/images/gadang.jpg",
    text: "Rumah Gadang - Arsitektur dengan atap gonjong",
  },
  {
    type: "Tarian Tradisional",
    image: "/images/saman.jpg",
    text: "Tari Saman - Tarian seribu tangan dari Aceh",
  },
  {
    type: "Tarian Tradisional",
    image: "/images/tortor.jpg",
    text: "Tari Tor-Tor - Tarian ritual suku Batak",
  },
  {
    type: "Seni Tekstil",
    image: "/images/songket.jpg",
    text: "Songket Palembang - Kain tenun benang emas",
  },
  {
    type: "Musik Tradisional",
    image: "/images/gordang.jpg",
    text: "Gordang Sambilan - Sembilan drum besar Batak",
  },
  {
    type: "Tarian Tradisional",
    image: "/images/taripayung.jpg",
    text: "Tari Payung - Tarian percintaan Minangkabau",
  },
  {
    type: "Musik Tradisional",
    image: "/images/rapai.jpg",
    text: "Rapai - Alat musik perkusi tradisional Aceh",
  },
  {
    type: "Tarian Tradisional",
    image: "/images/tariaceh.jpg",
    text: "Tari Seudati - Tarian heroik dari Aceh",
  },
  {
    type: "Seni Bela Diri",
    image: "/images/silatpadang.jpg",
    text: "Silek - Silat Minangkabau sebagai seni bela diri",
  },
  {
    type: "Tarian Tradisional",
    image: "/images/duabelas.jpg",
    text: "Tari Serampang Dua Belas - Tarian pergaulan Melayu",
  },
  {
    type: "Seni Tekstil",
    image: "/images/tenunsongket.jpg",
    text: "Tenun Songket - Kain tradisional dengan benang emas",
  },
  {
    type: "Tarian Tradisional",
    image: "/images/tarinias.jpg",
    text: "Tari Legu Gambe - Tarian penyambutan dari Nias",
  },
],
  },
  {
    id: 4,
title: "Kalimantan",
subtitle: "Indonesia",
description:
  "Pulau Kalimantan, juga dikenal sebagai Borneo, terkenal dengan hutan hujan tropisnya yang lebat dan keanekaragaman hayati.",
slogan:
  "Kalimantan, jantung hijau Indonesia dengan hutan purba dan sungai yang tak berujung",
images: [
  "/images/mahakam.jpg",
  "/images/orangutan.jpg",
  "/images/hutan.jpg",
  "/images/dayak.jpg",
],
detailDesc1:
  "Susuri Sungai Mahakam dengan perahu sambil melihat kehidupan masyarakat lokal di rumah panggung dan budaya Dayak yang kental.",
detailDesc2:
  "Jelajahi Taman Nasional Tanjung Puting untuk bertemu orangutan, bekantan, dan berbagai satwa eksotis lain di tengah hutan hujan tropis.",
detailDesc3:
  "Akhiri petualangan dengan menyaksikan seni tari, kerajinan manik, dan keramahan masyarakat Dayak yang mencerminkan kekayaan budaya Kalimantan.",
destinations: 67,
image: "/images/mainkelimantan.jpg",
provinsi: [
  {
    image: "/images/derawan.jpg",
    text: "Kalimantan Timur",
  },
  {
    image: "/images/tamanorangutan.jpeg",
    text: "Kalimantan Tengah",
  },
  {
    image: "/images/tugu.jpg",
    text: "Kalimantan Barat",
  },
  {
    image: "/images/jualan.jpg",
    text: "Kalimantan Selatan",
  },
  {
    image: "/images/gunungputih.jpg",
    text: "Kalimantan Utara",
  },
],
budaya: [
  {
    type: "Tarian Tradisional",
    image: "/images/taridayak.jpg",
    text: "Tari Dayak - Tarian ritual dengan kostum tradisional",
  },
  {
    type: "Seni Topeng",
    image: "/images/topeng.jpg",
    text: "Topeng Dayak - Topeng untuk upacara adat",
  },
  {
    type: "Senjata Tradisional",
    image: "/images/mandau.jpeg",
    text: "Mandau - Senjata tradisional dengan ukiran khas",
  },
  {
    type: "Perhiasan",
    image: "/images/perhiasan.jpeg",
    text: "Perhiasan Tradisional - Manik-manik dan bulu burung",
  },
  {
    type: "Arsitektur",
    image: "/images/rumahpanjang.jpg",
    text: "Rumah Panjang Dayak - Hunian komunal tradisional",
  },
  {
    type: "Tarian Tradisional",
    image: "/images/tarigantar.jpg",
    text: "Tari Gantar - Tarian dengan bambu dan tongkat",
  },
  {
    type: "Upacara Adat",
    image: "/images/tiwah.jpg",
    text: "Upacara Tiwah - Ritual kematian suku Dayak",
  },
  {
    type: "Seni Tekstil",
    image: "/images/kainsasirangan.jpg",
    text: "Kain Sasirangan - Kain tenun khas Banjar",
  },
  {
    type: "Tarian Tradisional",
    image: "/images/baksakembang.jpg",
    text: "Tari Baksa Kembang - Tarian penyambutan Banjar",
  },
  {
    type: "Kerajinan",
    image: "/images/ukirandayak.jpg",
    text: "Ukiran Dayak - Seni pahat dengan motif alam",
  },
  {
    type: "Tarian Tradisional",
    image: "/images/tarimanasai.jpg",
    text: "Tari Manasai - Tarian pergaulan masyarakat Dayak",
  },
  {
    type: "Pengobatan Tradisional",
    image: "/images/balian.jpg",
    text: "Balian - Dukun tradisional dalam pengobatan Dayak",
  },
  {
    type: "Tarian Tradisional",
    image: "/images/tarihudog.jpg",
    text: "Tari Hudog - Tarian untuk mengusir roh jahat",
  },
  {
    type: "Seni Tekstil",
    image: "/images/tenundayak.jpeg",
    text: "Tenun Ikat Dayak - Kain tradisional dengan motif khas",
  },  
  {
    type: "Musik Tradisional",
    image: "/images/sape.jpg",
    text: "Sape - Alat musik petik tradisional Dayak",
  },
],
  },
  {
     id: 5,
title: "Papua",
subtitle: "Indonesia",
description:
  "Pulau Papua adalah pulau terbesar kedua di dunia, dikenal dengan budaya uniknya dan keindahan alam yang luar biasa.",
slogan:
  "Papua, surga terakhir di ujung timur Indonesia, liar dan mempesona",
images: [
  "/images/lembah.jpg",
  "/images/rajaampat.jpg",
  "/images/sukudani.jpg",
  "/images/sevensummit.jpg",
],
detailDesc1:
  "Jelajahi Raja Ampat dengan laut biru jernih dan terumbu karang yang menjadi salah satu pusat keanekaragaman hayati laut terbaik di dunia.",
detailDesc2:
  "Menapaki Lembah Baliem dan berinteraksi dengan suku Dani yang masih menjaga tradisi leluhur mereka di tengah alam Papua yang megah.",
detailDesc3:
  "Tantang diri dengan mendaki Puncak Carstensz, salah satu dari Seven Summits, untuk menikmati panorama pegunungan Papua yang spektakuler.",
destinations: 48,
image: "/images/papuamain.jpg",
provinsi: [
  {
    image: "/images/rampat.jpg",
    text: "Papua Barat",
  },
  {
    image: "/images/puncakpapua.jpg",
    text: "Papua",
  },
],
budaya: [
  {
    type: "Pakaian Tradisional",
    image: "/images/koteka.jpg",
    text: "Koteka - Penutup kemaluan tradisional pria Papua",
  },
  {
    type: "Tarian Tradisional",
    image: "/images/tariperang.jpg",
    text: "Tari Perang - Tarian tradisional suku Dani",
  },
  {
    type: "Kerajinan",
    image: "/images/ukiranpapua.jpeg",
    text: "Ukiran Asmat - Seni pahat kayu terkenal dunia",
  },
  {
    type: "Kerajinan",
    image: "/images/tasnoken.jpg",
    text: "Noken - Tas rajutan yang diakui UNESCO",
  },
  {
    type: "Arsitektur",
    image: "/images/honai.jpg",
    text: "Rumah Honai - Hunian tradisional berbentuk bulat",
  },
  {
    type: "Tarian Tradisional",
    image: "/images/yospan.jpg",
    text: "Tari Yospan - Tarian persahabatan dan kegembiraan",
  },
  {
    type: "Upacara Adat",
    image: "/images/pestabab.jpg",
    text: "Pesta Babi - Upacara adat dengan hidangan babi",
  },
  {
    type: "Musik Tradisional",
    image: "/images/tifa.jpg",
    text: "Tifa - Alat musik pukul tradisional Papua",
  },
  {
    type: "Upacara Adat",
    image: "/images/bakarbatu.jpg",
    text: "Upacara Bakar Batu - Ritual dengan membakar batu",
  },
  {
    type: "Tarian Tradisional",
    image: "/images/tarisuanggi.jpeg",
    text: "Tari Suanggi - Tarian tentang roh perempuan",
  },
  {
    type: "Perhiasan",
    image: "/images/manik.jpg",
    text: "Manik-manik Papua - Perhiasan tradisional",
  },
  {
    type: "Tarian Tradisional",
    image: "/images/selamatdatang.jpeg",
    text: "Tari Selamat Datang - Penyambutan tamu",
  },
  {
    type: "Upacara Adat",
    image: "/images/penyembuhan.jpg",
    text: "Upacara Adat - Ritual penyembuhan dan inisiasi",
  },
  {
    type: "Senjata Tradisional",
    image: "/images/panah.jpg",
    text: "Panah dan Busur - Senjata tradisional berburu",
  },
  {
    type: "Tarian Tradisional",
    image: "/images/musyoh.jpg",
    text: "Tari Musyoh - Tarian untuk mengusir arwah gentayangan",
  },
],
  },
  {
    id: 6,
    title: "Bali dan Nusa Tenggara",
    subtitle: "Indonesia",
    description:
      "Wilayah ini terdiri dari Pulau Bali, Nusa Tenggara Barat, dan Nusa Tenggara Timur. Dikenal dengan keindahan pantai, budaya, serta destinasi wisata dunia seperti Bali, Lombok, dan Labuan Bajo yang menjadi pintu gerbang menuju Taman Nasional Komodo.",
    images: [
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1590398083585-d5f48aac43d3?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1588666309996-81c3a957b7cc?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1588666309990-5d74425c6f3a?w=500&auto=format&fit=crop&q=60",
    ],
    slogan:
      "Bali dan Nusa Tenggara, surga tropis dengan laut biru, pantai eksotis, dan budaya yang memesona",
    detailDesc1:
      "Nikmati keindahan pura dan sawah berundak di Bali, tempat di mana spiritualitas dan alam berpadu dengan harmonis.",
    detailDesc2:
      "Berlayar ke Taman Nasional Komodo untuk melihat naga purba Komodo sekaligus menyelam di laut biru dengan terumbu karang yang menakjubkan.",
    detailDesc3:
      "Santai di pantai Lombok atau mendaki Gunung Rinjani untuk menyaksikan matahari terbit di atas awan, pengalaman sempurna menutup perjalanan.",
    destinations: 142,
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D",
    provinsi: [
      {
        image:
          "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=300&auto=format&fit=crop&q=60",
        text: "Bali",
      },
      {
        image:
          "https://images.unsplash.com/photo-1590398083585-d5f48aac43d3?w=300&auto=format&fit=crop&q=60",
        text: "Nusa Tenggara Barat",
      },
      {
        image:
          "https://images.unsplash.com/photo-1588666309996-81c3a957b7cc?w=300&auto=format&fit=crop&q=60",
        text: "Nusa Tenggara Timur",
      },
    ],
    budaya: [
      {
        type: "Tarian Tradisional",
        image:
          "https://images.unsplash.com/photo-1544531585-9847b68c8c9a?w=300&auto=format&fit=crop&q=60",
        text: "Tari Kecak - Tarian dengan cerita Ramayana",
      },
      {
        type: "Tarian Tradisional",
        image:
          "https://images.unsplash.com/photo-1544531585-9847b68c8c9a?w=300&auto=format&fit=crop&q=60",
        text: "Tari Legong - Tarian klasik Bali yang anggun",
      },
      {
        type: "Seni Tekstil",
        image:
          "https://images.unsplash.com/photo-1565200026606-52af19bc8f56?w=300&auto=format&fit=crop&q=60",
        text: "Batik dan Tenun Ikat - Kain tradisional dengan motif khas",
      },
      {
        type: "Upacara Adat",
        image:
          "https://images.unsplash.com/photo-1572981779307-38f8b9c6a5c0?w=300&auto=format&fit=crop&q=60",
        text: "Upacara Ngaben - Ritual kremasi Hindu Bali",
      },
      {
        type: "Seni Patung",
        image:
          "https://images.unsplash.com/photo-1572981779307-38f8b9c6a5c0?w=300&auto=format&fit=crop&q=60",
        text: "Ogoh-Ogoh - Patung raksasa untuk perayaan Nyepi",
      },
      {
        type: "Seni Tekstil",
        image:
          "https://images.unsplash.com/photo-1565200026606-52af19bc8f56?w=300&auto=format&fit=crop&q=60",
        text: "Tenun Lombok - Kain tradisional suku Sasak",
      },
      {
        type: "Tarian Tradisional",
        image:
          "https://images.unsplash.com/photo-1544531585-9847b68c8c9a?w=300&auto=format&fit=crop&q=60",
        text: "Budaya Suku Manggarai - Tradisi Caci (tari cambuk)",
      },
      {
        type: "Tarian Tradisional",
        image:
          "https://images.unsplash.com/photo-1544531585-9847b68c8c9a?w=300&auto=format&fit=crop&q=60",
        text: "Tari Barong - Pertarungan antara kebaikan dan kejahatan",
      },
      {
        type: "Ritual Keagamaan",
        image:
          "https://images.unsplash.com/photo-1572981779307-38f8b9c6a5c0?w=300&auto=format&fit=crop&q=60",
        text: "Canang Sari - Persembahan harian umat Hindu Bali",
      },
      {
        type: "Seni Bela Diri",
        image:
          "https://images.unsplash.com/photo-1544531585-9847b68c8c9a?w=300&auto=format&fit=crop&q=60",
        text: "Peresean - Seni ketangkasan dengan rotan dari Lombok",
      },
      {
        type: "Tarian Tradisional",
        image:
          "https://images.unsplash.com/photo-1544531585-9847b68c8c9a?w=300&auto=format&fit=crop&q=60",
        text: "Tari Gandrung - Tarian pergaulan dari Banyuwangi",
      },
      {
        type: "Musik Tradisional",
        image:
          "https://images.unsplash.com/photo-1511376868136-6ce7e4f3d7c3?w=300&auto=format&fit=crop&q=60",
        text: "Gending Rare - Musik tradisional Bali",
      },
      {
        type: "Seni Tekstil",
        image:
          "https://images.unsplash.com/photo-1565200026606-52af19bc8f56?w=300&auto=format&fit=crop&q=60",
        text: "Tenun Sumba - Kain ikat dengan motif mythologi",
      },
      {
        type: "Tarian Tradisional",
        image:
          "https://images.unsplash.com/photo-1544531585-9847b68c8c9a?w=300&auto=format&fit=crop&q=60",
        text: "Tari Lelambatan - Tarian perang dari Flores",
      },
      {
        type: "Upacara Adat",
        image:
          "https://images.unsplash.com/photo-1572981779307-38f8b9c6a5c0?w=300&auto=format&fit=crop&q=60",
        text: "Upacara Potong Jari - Tradisi dukacita suku Dani",
      },
    ],
  },
];
