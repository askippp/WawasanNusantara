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
    subtitle: "Jawa",
    desc: "Pertunjukan seni tradisional dengan boneka kulit yang dimainkan di balik layar, menceritakan kisah Ramayana dan Mahabharata.",
    image: "/images/WayangKulit.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "RUMAH GADANG",
    subtitle: "Sumatra Barat",
    desc: "Rumah adat Minangkabau dengan atap melengkung menyerupai tanduk kerbau, digunakan untuk tempat tinggal dan acara adat.",
    image: "/images/RumahGadang.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "TARI MAENGKET",
    subtitle: "Sulawesi Utara",
    desc: "Tarian tradisional yang dibawakan untuk merayakan panen, acara syukur, dan penyambutan tamu penting.",
    image: "/images/TariMaengket.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "TARI KECAK",
    subtitle: "Bali",
    desc: "Tarian kolosal khas Bali dengan puluhan penari pria yang duduk melingkar, menceritakan kisah Ramayana.",
    image: "/images/Tari-kecak.png",
    featured: false,
  },
  {
    id: 5,
    title: "TIFA",
    subtitle: "Papua",
    desc: "Alat musik tradisional Papua yang dimainkan dengan cara dipukul, sering digunakan dalam upacara adat dan tarian.",
    image: "/images/TifaPapua.jpg",
    featured: false,
  },
];
