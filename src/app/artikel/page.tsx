"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { artikel as artikelData } from "@/data/artikel";

const ListArtikel = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

  // Array gambar yang berbeda untuk setiap card
  const cardImages = [
    "/images/makanan.png",     // Card pertama
    "/images/wayang.png",      // Card kedua  
    "/images/tradisi.png",     // Card ketiga
    "/images/gotong.png" // Card keempat
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/artikel.png"
          alt="Artikel Indonesia"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gelap biar teks jelas */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
            Artikel Indonesia
          </h1>
        </div>
      </div>

      {/* Container utama */}
      <div className="container mx-auto px-6 py-12">
        {/* Judul Bagian */}
        <div className="mb-12 text-start">
          <h2 className="text-3xl font-bold text-[#1D5DAA]">
            Sajian Artikel Populer di Indonesia
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artikelData.map((artikelItem, index) => (
            <div key={artikelItem.id} className="group">
              <div
                className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                onMouseEnter={() => setHoveredIndex(artikelItem.id)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-65 overflow-hidden">
                  <Image
                    src={cardImages[index % cardImages.length]}
                    alt={artikelItem.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-white/20 py-3 flex items-baseline-last justify-center transition-opacity duration-300 ${
                      hoveredIndex === artikelItem.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <button
                      className="bg-transparent border-2 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 hover:border-white/50 transition-all transform hover:scale-105"
                      onClick={() => router.push(`/artikel/${artikelItem.id}`)}
                    >
                      Baca Selengkapnya
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-5 bg-white border-t-0 border-gray-100">
                <h3 className="font-semibold text-[#1D5DAA] mb-3 leading-tight line-clamp-2">
                  {artikelItem.title}
                </h3>

                {/* Date Information */}
                <div className="flex items-center text-sm text-orange-500">
                  <span>{artikelItem.date}</span>
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