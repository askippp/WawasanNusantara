"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { provinsi as provinsiData } from "@/data/pulau";

// Tambahan type biar getVisibleProvinces lebih jelas
type VisibleProvince = (typeof provinsiData)[number] & {
  isActive: boolean;
  position: number;
};

const Explore = () => {
  const [activeProvinceIndex, setActiveProvinceIndex] = useState<number>(2);
  const router = useRouter();

  const nextProvinceSlide = () => {
    setActiveProvinceIndex((prev) => (prev + 1) % provinsiData.length);
  };

  const prevProvinceSlide = () => {
    setActiveProvinceIndex(
      (prev) => (prev - 1 + provinsiData.length) % provinsiData.length
    );
  };

  const getVisibleProvinces = (): VisibleProvince[] => {
    const result: VisibleProvince[] = [];
    const totalCards = 5;
    const startIndex = activeProvinceIndex - 2;

    for (let i = 0; i < totalCards; i++) {
      const index =
        (startIndex + i + provinsiData.length) % provinsiData.length;
      result.push({
        ...provinsiData[index],
        isActive: i === 2,
        position: i,
      });
    }

    return result;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="h-64 md:h-96 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/explore.png')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4">
              Jelajahi Indonesia
            </h1>
            <p className="text-sm md:text-lg lg:text-xl opacity-90">
              Temukan keajaiban Nusantara dari Sabang sampai Merauke
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-8 md:py-12 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div className="group">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors duration-300">
                34
              </h3>
              <p className="text-gray-600 font-medium text-sm md:text-base">
                Provinsi
              </p>
            </div>
            <div className="group">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-1 md:mb-2 group-hover:text-green-600 transition-colors duration-300">
                17.508
              </h3>
              <p className="text-gray-600 font-medium text-sm md:text-base">
                Pulau
              </p>
            </div>
            <div className="group">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-1 md:mb-2 group-hover:text-purple-600 transition-colors duration-300">
                1.340
              </h3>
              <p className="text-gray-600 font-medium text-sm md:text-base">
                Suku Bangsa
              </p>
            </div>
            <div className="group">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-1 md:mb-2 group-hover:text-orange-600 transition-colors duration-300">
                718
              </h3>
              <p className="text-gray-600 font-medium text-sm md:text-base">
                Bahasa Daerah
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:mb-20">
            {/* Header Section - Mobile Responsive */}
            <div className="mb-8 md:mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1 mb-6 md:mb-0">
                  <p className="text-[#1D5DAA] font-bold text-sm md:text-lg tracking-wide mb-2 md:mb-3">
                    DAFTAR
                  </p>
                  <div className="flex flex-col md:flex-row md:items-center mb-2">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1D5DAA] mb-3 md:mb-0 md:mr-8">
                      Pulau Besar Indonesia
                    </h2>
                    <div className="flex-1 flex flex-col">
                      <div className="relative h-px bg-gray-300 mb-1">
                        <div
                          className="absolute left-0 top-0 h-px bg-gray-800 transition-all duration-300"
                          style={{
                            width: `${
                              ((activeProvinceIndex + 1) /
                                provinsiData.length) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-xs md:text-sm font-bold text-gray-800">
                        {String(activeProvinceIndex + 1).padStart(2, "0")}/
                        {String(provinsiData.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">
                    Jelajahi keindahan dan keberagaman budaya Indonesia
                  </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center md:justify-start space-x-3 md:ml-8">
                  <button
                    onClick={prevProvinceSlide}
                    className="w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 hover:scale-105 shadow-sm"
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-gray-600"
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
                    className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg"
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-white"
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
            </div>

            {/* Province Slider - Mobile Responsive */}
            <div className="relative">
              {/* Mobile View - Single Card */}
              <div className="block md:hidden">
                <div className="flex justify-center">
                  {getVisibleProvinces()
                    .filter((province) => province.isActive)
                    .map((province) => (
                      <div
                        key={province.id}
                        className="relative bg-white rounded-2xl overflow-hidden shadow-lg w-80 h-96 max-w-full cursor-pointer"
                        onClick={() => router.push(`/explore/${province.id}`)}
                      >
                        <div className="relative h-full overflow-hidden">
                          <Image
                            src={province.image}
                            alt={province.title}
                            fill
                            className="object-cover transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {province.title}
                            </h3>
                            <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-3">
                              {province.description}
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

              {/* Desktop View - Multiple Cards */}
              <div className="hidden md:flex justify-center items-end space-x-4 overflow-hidden">
                {getVisibleProvinces().map((province) => (
                  <div
                    key={province.id}
                    className={`relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer ${
                      province.isActive
                        ? "w-80 h-96 transform scale-105 shadow-2xl"
                        : "w-64 h-80 opacity-75 hover:opacity-90"
                    }`}
                    onClick={() => router.push(`/explore/${province.id}`)}
                  >
                    <div className="relative h-full overflow-hidden">
                      <Image
                        src={province.image}
                        alt={province.title}
                        fill
                        className="object-cover transition-transform duration-500"
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

              {/* Mobile Dots Indicator */}
              <div className="flex md:hidden justify-center mt-6 space-x-2">
                {provinsiData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProvinceIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeProvinceIndex
                        ? "bg-blue-600 w-6"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;