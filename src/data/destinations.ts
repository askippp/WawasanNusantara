export interface Destination {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  featured: boolean;
}

export const destinations: Destination[] = [
  {
    id: 1,
    title: "WAYANG KULIT",
    subtitle: "Java",
    desc: "Pertunjukan bayangan tradisional dengan cerita epik",
    image: "/images/WayangKulit.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "RUMAH GADANG",
    subtitle: "Sumatra",
    desc: "Rumah adat Minangkabau dengan atap gonjong khas",
    image: "/images/RumahGadang.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "TARI MAENGKET",
    subtitle: "Sulawesi Selatan",
    desc: "Tarian penyambutan dari Toraja dengan musik tradisional",
    image: "/images/TariMaengket.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "TARI KECAK",
    subtitle: "Bali",
    desc: "Tarian Ramayana khas Bali dengan puluhan penari pria",
    image: "/images/Tari-kecak.png",
    featured: false,
  },
  {
    id: 5,
    title: "TIFA",
    subtitle: "Papua",
    desc: "Alat musik pukul tradisional Papua",
    image: "/images/TifaPapua.jpg",
    featured: false,
  },
];