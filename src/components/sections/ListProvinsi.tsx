"use client";

import { useState } from "react";
import Image from "next/image";

const ListProvinsi = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const provinsi = [
    {
      title: "Jawa",
      subTitle: "Indonesia",
      description:
        "Pulau Jawa adalah pusat budaya dan sejarah Indonesia, rumah bagi Candi Borobudur, Prambanan, hingga Keraton Yogyakarta",
      image:
        "https://images.unsplash.com/photo-1620549146396-9024d914cd99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9yb2J1ZHVyfGVufDB8fDB8fHww",
    },
    {
      title: "Sulawesi",
      subTitle: "Indonesia",
      description:
        "Pulau Sulawesi terkenal dengan keragaman budaya dan tradisi menariknya seperti rumah tongkonan Toraja",
      image:
        "https://images.unsplash.com/photo-1675206362603-b3c3c3ca47c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VsYXdlc2l8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Sumatera",
      subTitle: "Indonesia",
      description:
        "Pulau Sumatera adalah pulau terbesar keenam di dunia dan dikenal dengan keindahan alamnya, termasuk Danau Toba",
      image:
        "https://images.unsplash.com/photo-1723152727871-e8b3f828eeac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1bWF0ZXJhfGVufDB8fDB8fHww",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundColor: "white",
      }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Info Panel */}
          <div className="lg:w-80 flex-shrink-0">
            <h1 className="text-3xl font-bold text-[#1D5DAA] mt-12 mb-4 leading-tight">
              Provinsi Budaya
              <br />
              Indonesia
            </h1>
            <p className="text-[#1D5DAA] text-sm leading-relaxed mb-6">
              Temukan keunikan budaya Indonesia melalui karakteristik
              menariknya, seperti kerajaan dengan tradisi erat dan upaya kultur
              yang menggugah selera.
            </p>
            <button className="bg-white w-full border-2 border-[#1D5DAA] hover:bg-[#1D5DAA] text-[#1D5DAA] hover:border-[#1D5DAA] hover:text-white px-5 py-2 rounded-2xl text-sm font-medium transition-colors duration-300">
              Learn More
            </button>
          </div>

          {/* Province Cards */}
          <div className="flex-1 grid md:grid-cols-3 gap-4">
            {provinsi.map((prov, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  {/* Background Image */}
                  <Image
                    src={prov.image}
                    alt={prov.title}
                    fill
                    className="object-cover"
                  ></Image>

                  {/* Blue Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D5DAA]/80 via-[#1D5DAA]/30 to-transparent"></div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                    <h3 className="text-2xl font-bold mb-1">{prov.title}</h3>
                    <p className="text-sm opacity-90 mb-3">{prov.subTitle}</p>

                    {/* Description - shows on hover */}
                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        hoveredIndex === index
                          ? "max-h-24 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-xs leading-relaxed text-white/90">
                        {prov.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProvinsi;
