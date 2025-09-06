export interface provinsi {
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
    image: string;
    text: string;
  }[];
}

export const provinsi: provinsi[] = [
  {
    id: 1,
    title: "Jawa",
    subtitle: "Indonesia",
    description:
      "Pulau Jawa adalah pusat budaya dan sejarah Indonesia, rumah bagi Candi Borobudur, Prambanan, hingga Keraton Yogyakarta",
    slogan:
      "Jawa bukan hanya sekedar tempat, Jawa adalah suasana hati, Jawa magis, Jawa adalah keadaan pikiran tropis",
    images: [
      "/images/BOROBUDUR.jpg",
      "/images/PRAMBANAN.jpg",
      "/images/MALIOBORO.jpg",
      "/images/GUNUNG_BROMO.jpg",
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
      { image: "/images/jakarta.jpg", text: "DKI Jakarta" },
      { image: "/images/jawa_barat.jpg", text: "Jawa Barat" },
      { image: "/images/jawa_tengah.jpg", text: "Jawa Tengah" },
      { image: "/images/DIY.jpg", text: "DI Yogyakarta" },
      { image: "/images/jawa_timur.jpg", text: "Jawa Timur" },
      { image: "/images/banten.jpg", text: "Banten" },
    ],
    budaya: [
      {
        image: "/images/gamelan.jpg",
        text: "Gamelan - Alat musik tradisional dengan instrumen perkusi",
      },
      {
        image: "/images/batik.jpg",
        text: "Batik - Seni kain tradisional dengan teknik canting dan cap",
      },
      {
        image: "/images/wayang.jpg",
        text: "Wayang Kulit - Pertunjukan bayangan dengan cerita epik",
      },
      {
        image: "/images/kuda_lumping.jpg",
        text: "Kuda Lumping - Tarian dengan properti kuda anyaman",
      },
      {
        image: "/images/reog.jpg",
        text: "Reog Ponorogo - Tarian topeng singa dengan hiasan besar",
      },
      {
        image: "/images/keris.jpg",
        text: "Keris - Senjata tradisional dengan nilai spiritual",
      },
      {
        image: "/images/angklung.jpg",
        text: "Angklung - Alat musik bambu khas Jawa Barat",
      },
      {
        image: "/images/sinden.jpg",
        text: "Sinden - Penyanyi tradisional dalam pertunjukan wayang",
      },
      {
        image: "/images/upacara_seren_taun.jpg",
        text: "Upacara Seren Taun - Ritual syukur panen masyarakat Sunda",
      },
      {
        image: "/images/tari_bedhaya.jpg",
        text: "Tari Bedhaya - Tari sakral keraton Jawa",
      },
      {
        image: "/images/jathilan.jpg",
        text: "Jathilan - Tari kuda kepang dengan unsur spiritual",
      },
      {
        image: "/images/candi.jpg",
        text: "Arsitektur Candi - Warisan kerajaan Hindu-Buddha",
      },
      {
        image: "/images/keraton.jpg",
        text: "Keraton - Istana kerajaan dengan nilai filosofis",
      },
      {
        image: "/images/tumpeng.jpg",
        text: "Tumpeng - Hidangan nasi kerucut untuk perayaan",
      },
      {
        image: "/images/becak.jpg",
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
      "/images/tana_toraja.jpg",
      "/images/bunaken.jpg",
      "/images/makassar.jpg",
      "/images/wakatobi.jpg",
    ],
    detailDesc1:
      "Jelajahi Tana Toraja dengan rumah adat tongkonan yang megah dan situs pemakaman di tebing batu, warisan budaya yang masih terjaga hingga kini.",
    detailDesc2:
      "Menyelam di Taman Laut Bunaken dengan keindahan terumbu karang yang menakjubkan. Nikmati keragaman biota laut yang menjadi surga bagi para penyelam dunia.",
    detailDesc3:
      "Tutup perjalanan dengan kuliner khas Sulawesi seperti coto Makassar yang gurih dan ikan bakar yang segar, cita rasa yang mencerminkan kekayaan budaya pulau ini.",
    destinations: 95,
    image:
      "https://images.unsplash.com/photo-1675206362603-b3c3c3ca47c6?w=500&auto=format&fit=crop&q=60",
    provinsi: [
      { image: "/images/sulsel.jpg", text: "Sulawesi Selatan" },
      { image: "/images/sulut.jpg", text: "Sulawesi Utara" },
      { image: "/images/sulteng.jpg", text: "Sulawesi Tengah" },
      { image: "/images/sulbar.jpg", text: "Sulawesi Barat" },
      { image: "/images/seltra.jpg", text: "Sulawesi Tenggara" },
    ],
    budaya: [
      {
        image: "/images/tongkonan.jpg",
        text: "Rumah Adat Tongkonan - Arsitektur tradisional dengan atap melengkung",
      },
      {
        image: "/images/pakaian_toraja.jpg",
        text: "Pakaian Tradisional Toraja - Kain tenun dengan motif khas",
      },
      {
        image: "/images/tari_maengket.jpg",
        text: "Tari Ma'gellu - Tarian penyambutan dari Toraja",
      },
      {
        image: "/images/sulawesi_makanan.jpg",
        text: "Coto Makassar - Sup daging sapi dengan bumbu kacang",
      },
      {
        image: "/images/kerajinan_sulawesi.jpg",
        text: "Kerajinan Khas Sulawesi - Ukiran kayu dan anyaman",
      },
      {
        image: "/images/rambu_solo.jpg",
        text: "Rambu Solo - Upacara pemakaman adat Toraja",
      },
      {
        image: "/images/kain_tenun_sulawesi.jpg",
        text: "Kain Tenun Sutra - Sutra alam dengan motif tradisional",
      },
      {
        image: "/images/tari_pakarena.jpg",
        text: "Tari Pakarena - Tarian gemulai dari Makassar",
      },
      {
        image: "/images/perahu_phinisi.jpg",
        text: "Perahu Phinisi - Kapal tradisional suku Bugis",
      },
      {
        image: "/images/keris_bugis.jpg",
        text: "Keris Bugis - Senjata tradisional dengan ukiran detail",
      },
      {
        image: "/images/ukiran_toraja.jpg",
        text: "Ukiran Toraja - Ornamen rumah dengan simbol spiritual",
      },
      {
        image: "/images/tari_katrili.jpg",
        text: "Tari Katrili - Pengaruh budaya Spanyol di Minahasa",
      },
      {
        image: "/masakan_manado.jpg",
        text: "Masakan Manado - Cita rasa pedas dengan bahan segar",
      },
      {
        image: "/images/bambu_gila.jpg",
        text: "Bambu Gila - Permainan tradisional dari Maluku",
      },
      {
        image: "/images/tari_loro_blonyo.jpg",
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
      "/images/danau_toba.jpg",
      "/images/bukit_lawang.jpg",
      "/images/medan.jpg",
      "/images/padang.jpg",
    ],
    detailDesc1:
      "Nikmati pesona Danau Toba, danau vulkanik terbesar di dunia, dan jelajahi Pulau Samosir di tengahnya yang sarat dengan budaya Batak.",
    detailDesc2:
      "Trekking ke hutan Bukit Lawang untuk bertemu langsung dengan orangutan Sumatera di habitat aslinya, pengalaman langka yang tak terlupakan.",
    detailDesc3:
      "Lengkapi perjalanan dengan menikmati kuliner Padang, mulai dari rendang yang mendunia hingga gulai yang kaya rempah, cita rasa khas Sumatera.",
    destinations: 123,
    image:
      "https://images.unsplash.com/photo-1723152727871-e8b3f828eeac?w=500&auto=format&fit=crop&q=60",
    provinsi: [
      { image: "/images/aceh.jpg", text: "Aceh" },
      { image: "/images/sumut.jpg", text: "Sumatera Utara" },
      { image: "/images/sumbar.jpg", text: "Sumatera Barat" },
      { image: "/images/riau.jpg", text: "Riau" },
      { image: "/images/jambi.jpg", text: "Jambi" },
      { image: "/images/sumsel.jpg", text: "Sumatera Selatan" },
      { image: "/images/babel.jpg", text: "Bangka Belitung" },
      { image: "/images/lampung.jpg", text: "Lampung" },
    ],
    budaya: [
      {
        image: "/images/rendang.jpg",
        text: "Rendang - Hidangan daging dengan bumbu rempah khas Minang",
      },
      {
        image: "/images/tari_padang.jpg",
        text: "Tari Piring - Tarian dengan piring yang berputar",
      },
      {
        image: "/images/ulos.jpg",
        text: "Ulos Batak - Kain tenun dengan makna spiritual",
      },
      {
        image: "/images/rumah_adat_minang.jpg",
        text: "Rumah Gadang - Arsitektur dengan atap gonjong",
      },
      {
        image: "/images/sasadu.jpg",
        text: "Tari Saman - Tarian seribu tangan dari Aceh",
      },
      {
        image: "/images/tari_tor_tor.jpg",
        text: "Tari Tor-Tor - Tarian ritual suku Batak",
      },
      {
        image: "/images/songket.jpg",
        text: "Songket Palembang - Kain tenun benang emas",
      },
      {
        image: "/images/gordang_sambilan.jpg",
        text: "Gordang Sambilan - Sembilan drum besar Batak",
      },
      {
        image: "/images/tari_payung.jpg",
        text: "Tari Payung - Tarian percintaan Minangkabau",
      },
      {
        image: "/images/rapai.jpg",
        text: "Rapai - Alat musik perkusi tradisional Aceh",
      },
      {
        image: "/images/tari_seudati.jpg",
        text: "Tari Seudati - Tarian heroik dari Aceh",
      },
      {
        image: "/images/silek.jpg",
        text: "Silek - Silat Minangkabau sebagai seni bela diri",
      },
      {
        image: "/images/tari_serampang_duabelas.jpg",
        text: "Tari Serampang Dua Belas - Tarian pergaulan Melayu",
      },
      {
        image: "/images/tenun_songket.jpg",
        text: "Tenun Songket - Kain tradisional dengan benang emas",
      },
      {
        image: "/images/tari_legu_gambo.jpg",
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
      "/images/tanjung_puting.jpg",
      "/images/dayak.jpg",
      "/images/borneo_river.jpg",
    ],
    detailDesc1:
      "Susuri Sungai Mahakam dengan perahu sambil melihat kehidupan masyarakat lokal di rumah panggung dan budaya Dayak yang kental.",
    detailDesc2:
      "Jelajahi Taman Nasional Tanjung Puting untuk bertemu orangutan, bekantan, dan berbagai satwa eksotis lain di tengah hutan hujan tropis.",
    detailDesc3:
      "Akhiri petualangan dengan menyaksikan seni tari, kerajinan manik, dan keramahan masyarakat Dayak yang mencerminkan kekayaan budaya Kalimantan.",
    destinations: 67,
    image:
      "https://images.unsplash.com/photo-1582719472025-5c5c5c5c5c5c?w=500&auto=format&fit=crop&q=60",
    provinsi: [
      { image: "/images/kaltim.jpg", text: "Kalimantan Timur" },
      { image: "/images/kalteng.jpg", text: "Kalimantan Tengah" },
      { image: "/images/kalbar.jpg", text: "Kalimantan Barat" },
      { image: "/images/kalsel.jpg", text: "Kalimantan Selatan" },
      { image: "/images/kaltara.jpg", text: "Kalimantan Utara" },
    ],
    budaya: [
      {
        image: "/images/dayak_tari.jpg",
        text: "Tari Dayak - Tarian ritual dengan kostum tradisional",
      },
      {
        image: "/images/dayak_topeng.jpg",
        text: "Topeng Dayak - Topeng untuk upacara adat",
      },
      {
        image: "/images/mandau.jpg",
        text: "Mandau - Senjata tradisional dengan ukiran khas",
      },
      {
        image: "/images/perhiasan_dayak.jpg",
        text: "Perhiasan Tradisional - Manik-manik dan bulu burung",
      },
      {
        image: "/images/dayak_rumah.jpg",
        text: "Rumah Panjang Dayak - Hunian komunal tradisional",
      },
      {
        image: "/images/tari_gantar.jpg",
        text: "Tari Gantar - Tarian dengan bambu dan tongkat",
      },
      {
        image: "/images/upacara_tiwah.jpg",
        text: "Upacara Tiwah - Ritual kematian suku Dayak",
      },
      {
        image: "/images/sasirangan.jpg",
        text: "Kain Sasirangan - Kain tenun khas Banjar",
      },
      {
        image: "/images/tari_baksa_kembang.jpg",
        text: "Tari Baksa Kembang - Tarian penyambutan Banjar",
      },
      {
        image: "/images/ukiran_dayak.jpg",
        text: "Ukiran Dayak - Seni pahat dengan motif alam",
      },
      {
        image: "/images/tari_manasai.jpg",
        text: "Tari Manasai - Tarian pergaulan masyarakat Dayak",
      },
      {
        image: "/images/balian.jpg",
        text: "Balian - Dukun tradisional dalam pengobatan Dayak",
      },
      {
        image: "/images/tari_hudog.jpg",
        text: "Tari Hudog - Tarian untuk mengusir roh jahat",
      },
      {
        image: "/images/tenun_ikat_dayak.jpg",
        text: "Tenun Ikat Dayak - Kain tradisional dengan motif khas",
      },
      {
        image: "/images/musik_sape.jpg",
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
      "/images/raja_ampat.jpg",
      "/images/lemba_baliem.jpg",
      "/images/puncak_carstensz.jpg",
      "/images/papua_hutan.jpg",
    ],
    detailDesc1:
      "Jelajahi Raja Ampat dengan laut biru jernih dan terumbu karang yang menjadi salah satu pusat keanekaragaman hayati laut terbaik di dunia.",
    detailDesc2:
      "Menapaki Lembah Baliem dan berinteraksi dengan suku Dani yang masih menjaga tradisi leluhur mereka di tengad alam Papua yang megah.",
    detailDesc3:
      "Tantang diri dengan mendaki Puncak Carstensz, salah satu dari Seven Summits, untuk menikmati panorama pegunungan Papua yang spektakuler.",
    destinations: 48,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60",
    provinsi: [
      { image: "/images/papua_barat.jpg", text: "Papua Barat" },
      { image: "/images/papua.jpg", text: "Papua" },
    ],
    budaya: [
      {
        image: "/images/koteka.jpg",
        text: "Koteka - Penutup kemaluan tradisional pria Papua",
      },
      {
        image: "/images/tari_perang_papua.jpg",
        text: "Tari Perang - Tarian tradisional suku Dani",
      },
      {
        image: "/images/ukiran_asmat.jpg",
        text: "Ukiran Asmat - Seni pahat kayu terkenal dunia",
      },
      {
        image: "/images/noken.jpg",
        text: "Noken - Tas rajutan yang diakui UNESCO",
      },
      {
        image: "/images/rumah_honai.jpg",
        text: "Rumah Honai - Hunian tradisional berbentuk bulat",
      },
      {
        image: "/images/tari_yospan.jpg",
        text: "Tari Yospan - Tarian persahabatan dan kegembiraan",
      },
      {
        image: "/images/pesta_babi.jpg",
        text: "Pesta Babi - Upacara adat dengan hidangan babi",
      },
      {
        image: "/images/tifa.jpg",
        text: "Tifa - Alat musik pukul tradisional Papua",
      },
      {
        image: "/images/upacara_arak.jpg",
        text: "Upacara Arak - Ritual dengan minuman tradisional",
      },
      {
        image: "/images/tari_suanggi.jpg",
        text: "Tari Suanggi - Tarian tentang roh perempuan",
      },
      {
        image: "/images/manik_papua.jpg",
        text: "Manik-manik Papua - Perhiasan tradisional",
      },
      {
        image: "/images/tari_selamat_datang.jpg",
        text: "Tari Selamat Datang - Penyambutan tamu",
      },
      {
        image: "/images/upacara_adat_papua.jpg",
        text: "Upacara Adat - Ritual penyembuhan dan inisiasi",
      },
      {
        image: "/images/panah_papua.jpg",
        text: "Panah dan Busur - Senjata tradisional berburu",
      },
      {
        image: "/images/tari_musyoh.jpg",
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
      "/images/bali_pura.jpg",
      "/images/lombok_rinjani.jpg",
      "/images/komodo.jpg",
      "/images/labuan_bajo.jpg",
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
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    provinsi: [
      { image: "/images/bali.jpg", text: "Bali" },
      { image: "/images/ntb.jpg", text: "Nusa Tenggara Barat" },
      { image: "/images/ntt.jpg", text: "Nusa Tenggara Timur" },
    ],
    budaya: [
      {
        image: "/images/tari_kecak.jpg",
        text: "Tari Kecak - Tarian dengan cerita Ramayana",
      },
      {
        image: "/images/tari_legong.jpg",
        text: "Tari Legong - Tarian klasik Bali yang anggun",
      },
      {
        image: "/images/batik_bali.jpg",
        text: "Batik dan Tenun Ikat - Kain tradisional dengan motif khas",
      },
      {
        image: "/images/upacara_ngaben.jpg",
        text: "Upacara Ngaben - Ritual kremasi Hindu Bali",
      },
      {
        image: "/images/ogoh_ogoh.jpg",
        text: "Ogoh-Ogoh - Patung raksasa untuk perayaan Nyepi",
      },
      {
        image: "/images/tenun_lombok.jpg",
        text: "Tenun Lombok - Kain tradisional suku Sasak",
      },
      {
        image: "/images/komodo_culture.jpg",
        text: "Budaya Suku Manggarai - Tradisi Caci (tari cambuk)",
      },
      {
        image: "/images/tari_barong.jpg",
        text: "Tari Barong - Pertarungan antara kebaikan dan kejahatan",
      },
      {
        image: "/images/canang_sari.jpg",
        text: "Canang Sari - Persembahan harian umat Hindu Bali",
      },
      {
        image: "/images/peresean.jpg",
        text: "Peresean - Seni ketangkasan dengan rotan dari Lombok",
      },
      {
        image: "/images/tari_jaipong.jpg",
        text: "Tari Gandrung - Tarian pergaulan dari Banyuwangi",
      },
      {
        image: "/images/gending_rare.jpg",
        text: "Gending Rare - Musik tradisional Bali",
      },
      {
        image: "/images/tenun_sumba.jpg",
        text: "Tenun Sumba - Kain ikat dengan motif mythologi",
      },
      {
        image: "/images/tari_lelambatan.jpg",
        text: "Tari Lelambatan - Tarian perang dari Flores",
      },
      {
        image: "/images/upacara_potong_jari.jpg",
        text: "Upacara Potong Jari - Tradisi dukacita suku Dani",
      },
    ],
  },
];