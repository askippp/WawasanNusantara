"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  provinsi as provinsiData,
  provinsi as ProvinsiType,
} from "@/data/provinsi";

const Explore: React.FC = () => {
  const [activeProvinceIndex, setActiveProvinceIndex] = useState<number>(2); // Start with middle card active

  const nextProvinceSlide = () => {
    setActiveProvinceIndex((prev) => (prev + 1) % provinsiData.length);
  };

  const prevProvinceSlide = () => {
    setActiveProvinceIndex(
      (prev) => (prev - 1 + provinsiData.length) % provinsiData.length
    );
  };

  const getVisibleProvinces = (): (ProvinsiType & {
    isActive: boolean;
    position: number;
  })[] => {
    const result: (ProvinsiType & { isActive: boolean; position: number })[] =
      [];
    const totalCards = 5;
    const startIndex = activeProvinceIndex - 2;

    for (let i = 0; i < totalCards; i++) {
      const index =
        (startIndex + i + provinsiData.length) % provinsiData.length;
      result.push({
        ...provinsiData[index],
        isActive: i === 2, // Middle card is active
        position: i,
      });
    }

    return result;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="h-96 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('images/explore.png')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Explore Indonesia
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Temukan keajaiban Nusantara dari Sabang sampai Merauke
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                34
              </h3>
              <p className="text-gray-600 font-medium">Provinsi</p>
            </div>
            <div className="group">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                17.508
              </h3>
              <p className="text-gray-600 font-medium">Pulau</p>
            </div>
            <div className="group">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                1.340
              </h3>
              <p className="text-gray-600 font-medium">Suku Bangsa</p>
            </div>
            <div className="group">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                718
              </h3>
              <p className="text-gray-600 font-medium">Bahasa Daerah</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Province Section */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-12">
              <div className="flex-1">
                <p className="text-blue-600 font-semibold text-lg tracking-wide mb-3">
                  DAFTAR
                </p>
                <div className="flex items-center mb-2">
                  <h2 className="text-4xl font-bold text-gray-800 mr-8">
                    Provinsi Indonesia
                  </h2>
                  <div className="flex-1 flex flex-col">
                    <div className="relative h-px bg-gray-300 mb-1">
                      <div
                        className="absolute left-0 top-0 h-px bg-gray-800 transition-all duration-300"
                        style={{
                          width: `${
                            ((activeProvinceIndex + 1) / provinsiData.length) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-gray-800">
                      {String(activeProvinceIndex + 1).padStart(2, "0")}/
                      {String(provinsiData.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-base">
                  Jelajahi keindahan dan keberagaman budaya Indonesia
                </p>
              </div>

              <div className="flex space-x-3 ml-8">
                <button
                  onClick={prevProvinceSlide}
                  className="w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:scale-105 shadow-sm"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextProvinceSlide}
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Province Slider */}
            <div className="flex justify-center items-end space-x-4 overflow-hidden">
              {getVisibleProvinces().map((province) => (
                <div
                  key={province.id}
                  className={`relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer ${
                    province.isActive
                      ? "w-80 h-96 transform scale-105 shadow-2xl"
                      : "w-64 h-80 opacity-75 hover:opacity-90"
                  }`}
                  onClick={() =>
                    setActiveProvinceIndex(
                      (activeProvinceIndex -
                        2 +
                        province.position +
                        provinsiData.length) %
                        provinsiData.length
                    )
                  }
                >
                  <div className="relative h-full overflow-hidden">
                    <Image
                      src={province.image}
                      alt={province.title}
                      fill
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3
                        className={`font-bold text-white mb-2 transition-all duration-300 ${
                          province.isActive ? "text-2xl" : "text-xl"
                        }`}
                      >
                        {province.title}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-3">
                        {province.isActive ? province.description : ""}
                      </p>
                      <span className="text-white/80 text-sm">
                        {province.destinations} Destinasi
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Destination Slider Section */}
          <div className="mt-20">
            <DestinationSlider />
          </div>
        </div>
      </section>
    </div>
  );
};

// Destination Slider Component
interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  rating: number;
}

const DestinationSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with middle card active

  const destinations: Destination[] = [
    {
      id: "borobudur",
      name: "Borobudur",
      image:
        "https://images.unsplash.com/photo-1555400267-c903ab4f4e8b?w=500&h=400&fit=crop",
      description:
        "Candi Buddha terbesar di dunia dengan relief yang menakjubkan dan pemandangan sunrise yang spektakuler di Magelang, Jawa Tengah.",
      location: "Magelang, Jawa Tengah",
      rating: 4.8,
    },
    {
      id: "raja-ampat",
      name: "Raja Ampat",
      image:
        "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=500&h=400&fit=crop",
      description:
        "Surga bawah laut dengan keanekaragaman hayati terkaya di dunia. Destinasi impian para penyelam dan pecinta alam.",
      location: "Papua Barat",
      rating: 4.9,
    },
    {
      id: "lake-toba",
      name: "Lake Toba",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
      description:
        "Danau vulkanik terbesar di Indonesia dengan Pulau Samosir di tengahnya. Menawarkan keindahan alam dan budaya Batak yang autentik.",
      location: "Sumatera Utara",
      rating: 4.7,
    },
    {
      id: "bromo",
      name: "Mount Bromo",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      description:
        "Gunung berapi aktif dengan lautan pasir dan sunrise yang memukau. Pengalaman mendaki yang tak terlupakan di Jawa Timur.",
      location: "Jawa Timur",
      rating: 4.6,
    },
    {
      id: "komodo",
      name: "Komodo Island",
      image:
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=500&h=400&fit=crop",
      description:
        "Rumah bagi komodo, kadal terbesar di dunia. Taman nasional dengan keindahan alam yang menakjubkan dan pantai pink yang eksotis.",
      location: "Nusa Tenggara Timur",
      rating: 4.8,
    },
    {
      id: "bali-rice-terraces",
      name: "Jatiluwih Rice Terraces",
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=500&h=400&fit=crop",
      description:
        "Sawah terasering yang indah dengan sistem irigasi tradisional Subak. Warisan dunia UNESCO yang mempesona di Bali.",
      location: "Tabanan, Bali",
      rating: 4.5,
    },
    {
      id: "bunaken",
      name: "Bunaken",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=400&fit=crop",
      description:
        "Taman laut nasional dengan terumbu karang yang spektakuler. Surganya para penyelam dengan biodiversitas laut yang luar biasa.",
      location: "Sulawesi Utara",
      rating: 4.7,
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + destinations.length) % destinations.length
    );
  };

  const getVisibleDestinations = () => {
    const result = [];
    const totalCards = 5;
    const startIndex = activeIndex - 2;

    for (let i = 0; i < totalCards; i++) {
      const index =
        (startIndex + i + destinations.length) % destinations.length;
      result.push({
        ...destinations[index],
        isActive: i === 2,
        position: i,
      });
    }

    return result;
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-8">
        <div></div>
        <div className="flex space-x-3">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:scale-105 shadow-sm"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex justify-center items-end space-x-4 overflow-hidden">
        {getVisibleDestinations().map((destination) => (
          <div
            key={destination.id}
            className={`relative bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer ${
              destination.isActive
                ? "w-80 h-96 shadow-2xl"
                : "w-64 h-80 opacity-75 hover:opacity-90"
            }`}
            onClick={() =>
              setActiveIndex(
                (activeIndex - 2 + destination.position + destinations.length) %
                  destinations.length
              )
            }
          >
            <Image
              src={destination.image}
              alt={destination.name}
              fill
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3
                className={`font-bold text-white mb-2 transition-all duration-300 ${
                  destination.isActive ? "text-2xl" : "text-xl"
                }`}
              >
                {destination.name}
              </h3>
              <span className="text-white/80 text-sm">
                {destination.location}
              </span>
              {destination.isActive && (
                <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-3">
                  {destination.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;