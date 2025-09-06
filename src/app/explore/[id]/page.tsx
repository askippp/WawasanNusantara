"use client";

import { notFound, useRouter } from "next/navigation";
import { provinsi } from "@/data/pulau";
import Image from "next/image";
import { useState } from "react";

export default function DetailPulauPage({
  params,
}: {
  params: { id: string };
}) {
  const pulauId = Number(params.id);
  const pulau = provinsi.find((p) => p.id === pulauId);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string>("");
  const router = useRouter();

  if (!pulau) return notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${pulau.image})`,
        }}
      >
        <h1 className="text-6xl font-bold text-white">{pulau.title}</h1>
      </div>

      {/* Quote Section with Ornaments */}
      <div className="w-full py-12 relative">
        {/* Ornamen kiri */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-40">
          <Image
            src="/images/image42.png"
            alt="Left ornament"
            fill
            className="object-contain"
          />
        </div>

        {/* Ornamen kanan */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-40">
          <Image
            src="/images/image42.png"
            alt="Right ornament"
            fill
            className="object-contain scale-x-[-1]"
          />
        </div>

        {/* Text Content di tengah */}
        <div className="max-w-2xl mx-auto text-center px-6">
          <p className="text-gray-800 text-base md:text-2xl font-light leading-relaxed">
            {pulau.slogan}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <div className="flex-1 h-px bg-black max-w-40"></div>
          <svg
            className="w-10 h-10 text-black fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 2 L15 9 L22 12 L15 15 L12 22 L9 15 L2 12 L9 9 Z" />
          </svg>
          <div className="flex-1 h-px bg-black max-w-40"></div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="relative z-10">
          <div className="grid grid-cols-12 gap-6 items-start">
            {/* Left Column - Images */}
            <div className="col-span-12 md:col-span-4">
              {pulau.images && pulau.images.length >= 4 ? (
                <div className="grid grid-cols-2 gap-4">
                  {pulau.images.slice(0, 4).map((img, i) => (
                    <div
                      key={i}
                      className={`relative w-full ${
                        i < 2 ? "h-40 md:h-48" : "h-32 md:h-40"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${pulau.title} image ${i + 1}`}
                        fill
                        className="object-cover rounded-lg shadow-md"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative w-full h-48">
                  <Image
                    src={pulau.image}
                    alt={`${pulau.title} default image`}
                    fill
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>

            {/* Right Column - Content */}
            <div className="col-span-12 md:col-span-8 md:pl-8">
              <h2 className="text-5xl md:text-6xl text-black mb-6">
                {pulau.title}
              </h2>

              <div className="space-y-4">
                <p className="text-gray-700 text-m leading-relaxed text-justify">
                  {pulau.detailDesc1}
                </p>
                <p className="text-gray-700 text-m leading-relaxed text-justify">
                  {pulau.detailDesc2}
                </p>
                <p className="text-gray-700 text-m leading-relaxed text-justify">
                  {pulau.detailDesc3}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Provinsi Section */}
        <div className="mt-20 relative">
          <div className="relative">
            <div
              id="provinsi-scroll"
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
            >
              {pulau.provinsi.map((province, idx) => (
                <div
                  key={idx}
                  className="relative min-w-[16rem] h-80 bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  <Image
                    src={province.image}
                    alt={province.text}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-white font-bold text-lg">
                      {province.text}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Prev Button */}
            <button
              onClick={() =>
                document
                  .getElementById("provinsi-scroll")
                  ?.scrollBy({ left: -300, behavior: "smooth" })
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 h-12 bg-transparent flex items-center justify-center"
            >
              <svg
                className="w-8 h-8 text-[#1D5DAA] hover:text-[#154080]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={() =>
                document
                  .getElementById("provinsi-scroll")
                  ?.scrollBy({ left: 300, behavior: "smooth" })
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 h-12 bg-transparent flex items-center justify-center"
            >
              <svg
                className="w-8 h-8 text-[#1D5DAA] hover:text-[#154080]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Budaya Section */}
        <div className="mt-20 relative">
          <div className="flex justify-between items-center mx-10">
            <h3 className="text-3xl font-semibold my-8 text-[#1D5DAA] text-start">
              Discover {pulau.title}&#39;s Cultural Highlights
            </h3>

            {/* ComboBox untuk Tipe Budaya */}
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1D5DAA]"
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">All Types</option>
              {[...new Set(pulau.budaya.map((b) => b.type))].map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <div
              id="budaya-scroll"
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
            >
              {pulau.budaya
                .filter(
                  (culture) => !selectedType || culture.type === selectedType
                )
                .map((culture, idx) => (
                  <div
                    key={idx}
                    className="relative min-w-[16rem] h-80 bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  >
                    <Image
                      src={culture.image}
                      alt={culture.text}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-medium">{culture.text}</p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Prev Button */}
            <button
              onClick={() =>
                document
                  .getElementById("budaya-scroll")
                  ?.scrollBy({ left: -300, behavior: "smooth" })
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 h-12 bg-transparent flex items-center justify-center"
            >
              <svg
                className="w-8 h-8 text-[#1D5DAA] hover:text-[#154080]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={() =>
                document
                  .getElementById("budaya-scroll")
                  ?.scrollBy({ left: 300, behavior: "smooth" })
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 h-12 bg-transparent flex items-center justify-center"
            >
              <svg
                className="w-8 h-8 text-[#1D5DAA] hover:text-[#154080]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Grid Provinsi - muncul di bawah budaya */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold mb-8 text-gray-800 text-center">
            Pulau Lain
          </h3>
          <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {provinsi.map((prov, index) => (
              <div
                key={prov.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => router.push(`/explore/${prov.id}`)}
              >
                <div className="relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  {/* Background Image */}
                  <Image
                    src={prov.image}
                    alt={prov.title}
                    fill
                    className="object-cover"
                  />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                    <h3 className="text-2xl font-bold mb-1">{prov.title}</h3>
                    <p className="text-sm opacity-90 mb-3">{prov.subtitle}</p>

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
}
