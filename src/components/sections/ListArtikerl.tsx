"use client";

import Image from "next/image";
import { useState } from "react";

const ListArtikel = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const artikelData = [
    {
      title: "Wayang Kulit dan Seni Pertunjukan Tradisional",
      date: "10 Juni 2022",
      image: "https://tribratanews.polri.go.id/web/image/blog.post/55721/image",
    },
    {
      title: "Keragaman Kuliner Nusantara",
      date: "12 Mei 2022",
      image:
        "https://images.unsplash.com/photo-1539755530862-00f623c00f52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kb25lc2lhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Tradisi Upacara Adat Unik di Indonesia",
      date: "9 Juni 2022",
      image:
        "https://images.unsplash.com/photo-1671333139941-d58af6b159bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kb25lc2lhbCUyMHRyYWRpdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Gotong Royong: Nilai Sosial Masyarakat Indonesia",
      date: "12 September 2022",
      image:
        "https://images.unsplash.com/photo-1610093703375-6d8fd641294b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        <div className="mb-12 text-start">
          <h2 className="text-3xl font-bold text-[#375E83] mb-4">
            Sajian Artikel Populer di Indonesia
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artikelData.map((artikel, index) => (
            <div key={index} className="group">
              {/* Image Container with Hover Effects */}
              <div
                className="relative cursor-pointer rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={artikel.image}
                    alt={artikel.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-white/20 py-3 flex items-baseline-last justify-center transition-opacity duration-300 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <button className="bg-transparent border-2 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 hover:border-white/50 transition-all transform hover:scale-105">
                      Read More
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Container - DI LUAR div utama */}
              <div className="p-5 bg-white border-t-0 border-gray-100">
                <h3 className="font-semibold text-[#1D5DAA] mb-3 leading-tight line-clamp-2">
                  {artikel.title}
                </h3>

                {/* Date Information */}
                <div className="flex items-center text-sm text-orange-500">
                  <span>{artikel.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListArtikel;
