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
    title: "BOROBUDUR",
    subtitle: "Java",
    image: "/images/BOROBUDUR.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "BUNAKEN",
    subtitle: "Sulawesi",
    image: "/images/BOROBUDUR.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "ORANGUTAN KALIMANTAN",
    subtitle: "Kalimantan",
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