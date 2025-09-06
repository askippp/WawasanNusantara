export interface provinsi {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  destinations: number;
  image: string;
}

export const provinsi: provinsi[] = [
  {
    id: 1,
    title: "Jawa",
    subtitle: "Indonesia",
    description:
      "Pulau Jawa adalah pusat budaya dan sejarah Indonesia, rumah bagi Candi Borobudur, Prambanan, hingga Keraton Yogyakarta",
    destinations: 156,
    image:
      "https://images.unsplash.com/photo-1620549146396-9024d914cd99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9yb2J1ZHVyfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "Sulawesi",
    subtitle: "Indonesia",
    description:
      "Pulau Sulawesi terkenal dengan keragaman budaya dan tradisi menariknya seperti rumah tongkonan Toraja",
    destinations: 95,
    image:
      "https://images.unsplash.com/photo-1675206362603-b3c3c3ca47c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VsYXdlc2l8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Sumatera",
    subtitle: "Indonesia",
    description:
      "Pulau Sumatera adalah pulau terbesar keenam di dunia dan dikenal dengan keindahan alamnya, termasuk Danau Toba",
    destinations: 123,
    image:
      "https://images.unsplash.com/photo-1723152727871-e8b3f828eeac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1bWF0ZXJhfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    title: "Kalimantan",
    subtitle: "Indonesia",
    description:
      "Pulau Kalimantan, juga dikenal sebagai Borneo, terkenal dengan hutan hujan tropisnya yang lebat dan keanekaragaman hayati.",
    destinations: 67,
    image:
      "https://images.unsplash.com/photo-1582719472025-5c5c5c5c5c5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FsaW1hbnRhbml8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    title: "Papua",
    subtitle: "Indonesia",
    description:
      "Pulau Papua adalah pulau terbesar kedua di dunia, dikenal dengan budaya uniknya dan keindahan alam yang luar biasa.",
    destinations: 48,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFwdWF8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    title: "Bali dan Nusa Tenggara",
    subtitle: "Indonesia",
    description:
      "Wilayah ini terdiri dari Pulau Bali, Nusa Tenggara Barat, dan Nusa Tenggara Timur. Dikenal dengan keindahan pantai, budaya, serta destinasi wisata dunia seperti Bali, Lombok, dan Labuan Bajo yang menjadi pintu gerbang menuju Taman Nasional Komodo.",
    destinations: 142,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
];
