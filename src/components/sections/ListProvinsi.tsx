"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { provinsi } from "@/data/provinsi";

const ListProvinsi = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative bg-white">
      {/* Background Image with 10% Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('/images/AboutPage.jpg')",
        }}
      ></div>

      {/* Content Overlay */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Info Panel */}
            <div className="lg:w-80 flex-shrink-0 flex flex-col justify-between h-full">
              <h1 className="text-3xl font-bold text-[#1D5DAA] mt-12 mb-4 leading-tight">
                Provinsi Budaya
                <br />
                Indonesia
              </h1>
              <p className="text-[#1D5DAA] text-sm leading-relaxed mb-6">
                Temukan keunikan budaya Indonesia melalui karakteristik
                menariknya, seperti kerajaan dengan tradisi erat dan upaya
                kultur yang menggugah selera.
              </p>
              <button className="bg-white w-full border-2 border-[#1D5DAA] hover:bg-[#1D5DAA] text-[#1D5DAA] hover:border-[#1D5DAA] hover:text-white px-5 py-2 rounded-2xl text-sm font-medium transition-colors duration-300">
                Learn More
              </button>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-end gap-4 mt-6">
                <button onClick={scrollLeft} className="h-12 bg-transparent">
                  <svg
                    className="w-8 h-8 text-[#1D5DAA] group-hover:text-white"
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

                <button onClick={scrollRight} className="h-12 bg-transparent">
                  <svg
                    className="w-8 h-8 text-[#1D5DAA] group-hover:text-white"
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

            <div className="flex-1 relative overflow-hidden">
              <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide w-full"
              >
                {provinsi.map((prov, index) => (
                  <div
                    key={prov.id}
                    className="group cursor-pointer flex-shrink-0 w-72"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="relative h-90 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                      <Image
                        src={prov.image}
                        alt={prov.title}
                        fill
                        className="object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#1D5DAA]/80 via-[#1D5DAA]/30 to-transparent"></div>

                      <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                        <h3 className="text-2xl font-bold mb-1">
                          {prov.title}
                        </h3>
                        <p className="text-sm opacity-90 mb-3">
                          {prov.subtitle}
                        </p>

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
      </div>
    </div>
  );
};

export default ListProvinsi;
