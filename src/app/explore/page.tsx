"use client";

import React, { useState } from "react";

interface Province {
  id: string;
  name: string;
  image: string;
  description: string;
  attractions: number;
}

const Explore: React.FC = () => {
  const [activeProvinceIndex, setActiveProvinceIndex] = useState(2); // Start with middle card active

  const provinces: Province[] = [
    {
      id: "jawa",
      name: "Jawa",
      image: "images/Jawa.jpg",
      description:
        "Pulau Jawa menawarkan warisan budaya yang kaya dengan candi-candi bersejarah seperti Borobudur dan Prambanan.",
      attractions: 125,
    },
    {
      id: "sulawesi",
      name: "Sulawesi",
      image: "images/Sulawesi.jpg",
      description:
        "Sulawesi memukau dengan keindahan alamnya yang eksotis, dari danau Toba hingga taman nasional yang menawan.",
      attractions: 89,
    },
    {
      id: "kalimantan",
      name: "Kalimantan",
      image: "images/Kalimantan.jpg",
      description:
        "Sumatera menawarkan petualangan tak terbatas dengan hutan hujan tropis dan satwa liar yang menakjubkan.",
      attractions: 156,
    },
    {
      id: "sumatra",
      name: "Sumatra",
      image: "images/Sumatra.jpg",
      description:
        "Kalimantan adalah rumah bagi orangutan dan memiliki hutan hujan yang masih asri dengan keanekaragaman hayati luar biasa.",
      attractions: 78,
    },
    {
      id: "maluku dan papua",
      name: "Maluku dan Papua",
      image: "images/MalukudanPapua.jpg",
      description:
        "Papua menawarkan keindahan alam yang masih perawan dengan Raja Ampat yang terkenal di seluruh dunia.",
      attractions: 65,
    },
    {
      id: "bali dan nusa tenggara",
      name: "Bali dan Nusa Tenggara",
      image: "images/BalidanNt.jpg",
      description:
        "Bali terkenal dengan budaya Hindu yang kental, pura-pura yang indah, dan pantai-pantai yang memukau.",
      attractions: 210,
    },
  ];

  const nextProvinceSlide = () => {
    setActiveProvinceIndex((prev) => (prev + 1) % provinces.length);
  };

  const prevProvinceSlide = () => {
    setActiveProvinceIndex(
      (prev) => (prev - 1 + provinces.length) % provinces.length
    );
  };

  const getVisibleProvinces = () => {
    const result = [];
    const totalCards = 5;
    const startIndex = activeProvinceIndex - 2;

    for (let i = 0; i < totalCards; i++) {
      const index = (startIndex + i + provinces.length) % provinces.length;
      result.push({
        ...provinces[index],
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
                38
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
            {/* Section Header */}
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
                    {/* Progress Line */}
                    <div className="relative h-px bg-gray-300 mb-1">
                      <div
                        className="absolute left-0 top-0 h-px bg-gray-800 transition-all duration-300"
                        style={{
                          width: `${
                            ((activeProvinceIndex + 1) / provinces.length) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                    {/* Counter below the line */}
                    <span className="text-sm font-bold text-gray-800">
                      {String(activeProvinceIndex + 1).padStart(2, "0")}/
                      {String(provinces.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-base">
                  Jelajahi keindahan dan keberagaman budaya Indonesia
                </p>
              </div>

              {/* Navigation Buttons */}
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

            {/* Province Slider Container */}
            <div className="flex justify-center items-end space-x-4 overflow-hidden">
              {getVisibleProvinces().map((province, index) => (
                <div
                  key={`${province.id}-${province.position}`}
                  className={`relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer ${
                    province.isActive
                      ? "w-80 h-96 transform scale-105 shadow-2xl"
                      : "w-64 h-80 opacity-75 hover:opacity-90"
                  }`}
                  onClick={() =>
                    setActiveProvinceIndex(
                      (activeProvinceIndex - 2 + index + provinces.length) %
                        provinces.length
                    )
                  }
                >
                  {/* Image Container */}
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={province.image}
                      alt={province.name}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                    {/* Attractions Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-sm font-semibold text-gray-800">
                        {province.attractions}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3
                        className={`font-bold text-white mb-2 transition-all duration-300 ${
                          province.isActive ? "text-2xl" : "text-xl"
                        }`}
                      >
                        {province.name}
                      </h3>

                      <div className="flex items-center text-white/80 mb-3">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        <span className="text-sm">
                          {province.attractions} Destinasi
                        </span>
                      </div>

                      {/* Active Card Content */}
                      {province.isActive && (
                        <div className="animate-fadeIn">
                          <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-3">
                            {province.description}
                          </p>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Jelajahi Sekarang →
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Destination Slider Section */}
          <div className="mt-20">
            <div className="flex items-center justify-between mb-12">
              <div>
                <p className="text-orange-600 font-semibold text-lg mb-2 tracking-wide">
                  TOP DESTINATIONS
                </p>
                <h2 className="text-4xl font-bold text-gray-800">
                  Destinasi Wisata Populer
                </h2>
                <p className="text-gray-600 mt-2 text-base">
                  Temukan tempat-tempat menakjubkan di Indonesia
                </p>
              </div>
            </div>

            <DestinationSlider />
          </div>

          {/* Statistics */}
          {/* Statistics moved to top after hero section */}
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
        isActive: i === 2, // Middle card is active
        position: i,
      });
    }

    return result;
  };

  return (
    <div className="relative">
      {/* Navigation Buttons */}
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

      {/* Slider Container */}
      <div className="flex justify-center items-end space-x-4 overflow-hidden">
        {getVisibleDestinations().map((destination, index) => (
          <div
            key={`${destination.id}-${destination.position}`}
            className={`relative bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer ${
              destination.isActive
                ? "w-80 h-96 shadow-2xl"
                : "w-64 h-80 opacity-75 hover:opacity-90"
            }`}
            onClick={() =>
              setActiveIndex(
                (activeIndex - 2 + index + destinations.length) %
                  destinations.length
              )
            }
          >
            {/* Image Container */}
            <div className="relative h-full overflow-hidden">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

              {/* Rating Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                <svg
                  className="w-4 h-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-semibold text-gray-800">
                  {destination.rating}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className={`font-bold text-white mb-2 transition-all duration-300 ${
                    destination.isActive ? "text-2xl" : "text-xl"
                  }`}
                >
                  {destination.name}
                </h3>

                <div className="flex items-center text-white/80 mb-3">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm">{destination.location}</span>
                </div>

                {/* Active Card Content */}
                {destination.isActive && (
                  <div className="animate-fadeIn">
                    <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-3">
                      {destination.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-orange-600 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
