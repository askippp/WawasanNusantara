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
    title: "Jati",
    subtitle: "Bali",
    image: "/images/BOROBUDUR.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Raja Ampat",
    subtitle: "Papua",
    image: "/images/BOROBUDUR.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "BUNGO TUNGGAL",
    subtitle: "Sumatera",
    image: "/images/BOROBUDUR.jpg",
    featured: false,
  },
];