export interface Destination {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  featured: boolean;
}

export const destinations: Destination[] = [
  {
    id: 1,
    title: "WAYANG KULIT",
    subtitle: "Java",
    image: "/images/WayangKulit.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "RUMAH GADANG",
    subtitle: "Sumatra",
    image: "/images/RumahGadang.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "TARI MAENGKET",
    subtitle: "Sulawesi Selatan",
    image: "/images/TariMaengket.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "TARI KECAK",
    subtitle: "Bali",
    image: "/images/Tari-kecak.png",
    featured: false,
  },
  {
    id: 5,
    title: "TIFA",
    subtitle: "Papua",
    image: "/images/TifaPapua.jpg",
    featured: false,
  },
];