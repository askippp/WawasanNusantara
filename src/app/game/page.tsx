"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const GamePage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const router = useRouter();

  const handleCardClick = (cardIndex: number) => {
    setSelectedCard(selectedCard === cardIndex ? null : cardIndex);
  };

  const handlePlayClick = (route: string, e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large decorative circles */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue-400/10"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-blue-300/15"></div>
        <div className="absolute top-1/3 -right-20 w-64 h-64 rounded-full bg-white/5"></div>
        <div className="absolute bottom-1/4 -left-16 w-48 h-48 rounded-full bg-blue-200/10"></div>

        {/* Additional circles matching the design */}
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-blue-300/20"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-blue-400/15"></div>
        <div className="absolute top-1/2 left-10 w-40 h-40 rounded-full bg-white/10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          {/* Title */}
          <div className="mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              <br />
              Permainan Seru
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-white/95 leading-tight">
              Budaya Indonesia
            </h2>
          </div>

          {/* Game Cards Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Cards arranged horizontally */}
            <div className="relative flex items-center justify-center space-x-4">
              {/* Quiz Card - Left */}
              <div
                className="relative z-10"
                onMouseEnter={() => setHoveredIndex(1)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCardClick(1)}
              >
                <div
                  className={`
                  ${selectedCard === 1 ? "w-96 h-96" : "w-80 h-80"} rounded-3xl 
                  ${
                    selectedCard === 1
                      ? "bg-gradient-to-b from-amber-500 to-amber-700"
                      : "bg-gradient-to-b from-amber-600 to-amber-800"
                  }
                  shadow-2xl transform transition-all duration-500 cursor-pointer relative overflow-hidden
                  ${
                    hoveredIndex === 1
                      ? "scale-105 -translate-y-2"
                      : "hover:scale-102"
                  }
                  ${selectedCard === 1 ? "scale-105 -translate-y-2" : ""}
                `}
                >
                  {/* Quiz Card Content */}
                  <div className="p-6 h-full flex flex-col relative z-10">
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white text-left mb-4">
                          Kuis
                        </h3>

                        {/* Play button - shows when card is selected */}
                        {selectedCard === 1 && (
                          <div className="absolute top-6 right-6">
                            <button
                              className="bg-white text-amber-600 px-6 py-2 rounded-full font-bold text-sm hover:bg-white/90 transition-all duration-200"
                              onClick={(e) => handlePlayClick("/game/quiz", e)}
                            >
                              Main
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Quiz Icon Card */}
                  <div className="absolute bottom-4 right-4 left-4 top-20 transition-all duration-500">
                    <div className="relative h-full flex items-center justify-center">
                      {/* Sparkle decoration */}
                      <div className="absolute top-4 left-4 text-white text-3xl"></div>

                      {/* Quiz card - larger */}
                      <div className="w-32 h-40 bg-orange-400 rounded-2xl shadow-lg transform rotate-12 flex items-center justify-center border-4 border-white relative">
                        <div className="w-24 h-32 bg-yellow-300 rounded-xl border-2 border-white/70 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-orange-800 font-bold text-xs mb-1">
                              KUIS!
                            </div>
                            <div className="w-6 h-6 bg-orange-600 rounded mx-auto flex items-center justify-center">
                              <span className="text-white text-xs">K</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Small "Knowledge" card */}
                      <div className="w-24 h-28 bg-orange-300 rounded-2xl shadow-lg transform -rotate-6 translate-x-16 -translate-y-8 absolute flex items-center justify-center border-3 border-white/50">
                        <div className="text-sm font-bold text-orange-900 text-center leading-tight">
                          <div>Uji</div>
                          <div>Pengetahuan</div>
                          <div>Anda</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Memory - Center */}
              <div
                className="relative z-20"
                onMouseEnter={() => setHoveredIndex(2)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCardClick(2)}
              >
                <div
                  className={`
                  ${selectedCard === 2 ? "w-96 h-96" : "w-80 h-80"} rounded-3xl 
                  ${
                    selectedCard === 2
                      ? "bg-gradient-to-b from-orange-400 to-red-500"
                      : "bg-gradient-to-b from-orange-500 to-red-600"
                  }
                  shadow-2xl transform transition-all duration-500 cursor-pointer relative overflow-hidden
                  ${
                    hoveredIndex === 2
                      ? "scale-105 -translate-y-2"
                      : "hover:scale-102"
                  }
                  ${selectedCard === 2 ? "scale-105 -translate-y-2" : ""}
                `}
                >
                  {/* Card Memory Content */}
                  <div className="p-6 h-full flex flex-col relative z-10">
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white text-left mb-1">
                          Kartu
                        </h3>
                        <h3 className="text-xl font-bold text-white text-left mb-4">
                          Memori
                        </h3>

                        {/* Play button - shows when card is selected */}
                        {selectedCard === 2 && (
                          <div className="absolute top-6 right-6">
                            <button
                              className="bg-white text-orange-600 px-6 py-2 rounded-full font-bold text-sm hover:bg-white/90 transition-all duration-200"
                              onClick={(e) =>
                                handlePlayClick("/game/memory", e)
                              }
                            >
                              Main
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Memory Cards Stack - repositioned and made larger */}
                  <div className="absolute bottom-4 right-4 left-4 top-20 transition-all duration-500">
                    <div className="relative h-full flex items-center justify-center">
                      {/* Sparkle decoration */}
                      <div className="absolute top-4 left-4 text-white text-3xl"></div>

                      {/* Main memory card - larger */}
                      <div className="w-32 h-40 bg-purple-600 rounded-2xl shadow-lg transform rotate-0 flex items-center justify-center border-4 border-white relative">
                        <div className="w-24 h-32 bg-cyan-300 rounded-xl border-2 border-white/70 flex items-center justify-center">
                          <div className="w-10 h-16 bg-purple-600 rounded-full opacity-90"></div>
                        </div>
                      </div>

                      {/* Small stacked cards */}
                      <div className="w-24 h-28 bg-red-400 rounded-2xl shadow-lg transform -rotate-12 translate-x-16 -translate-y-8 absolute flex items-center justify-center border-3 border-white/50">
                        <div className="text-sm font-bold text-red-900 text-center leading-tight">
                          <div>Cocokkan</div>
                          <div>Kartu</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guess the Picture - Right */}
              <div
                className="relative z-10"
                onMouseEnter={() => setHoveredIndex(3)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCardClick(3)}
              >
                <div
                  className={`
                  ${selectedCard === 3 ? "w-96 h-96" : "w-80 h-80"} rounded-3xl 
                  ${
                    selectedCard === 3
                      ? "bg-gradient-to-b from-green-400 to-green-600"
                      : "bg-gradient-to-b from-green-500 to-green-700"
                  }
                  shadow-2xl transform transition-all duration-500 cursor-pointer relative overflow-hidden
                  ${
                    hoveredIndex === 3
                      ? "scale-105 -translate-y-2"
                      : "hover:scale-102"
                  }
                  ${selectedCard === 3 ? "scale-105 -translate-y-2" : ""}
                `}
                >
                  {/* Guess Card Content */}
                  <div className="p-6 h-full flex flex-col relative z-10">
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white text-left mb-1">
                          Tebak
                        </h3>
                        <h3 className="text-xl font-bold text-white text-left mb-4">
                          Gambar
                        </h3>

                        {/* Play button - shows when card is selected */}
                        {selectedCard === 3 && (
                          <div className="absolute top-6 right-6">
                            <button
                              className="bg-white text-[#FF9B00] px-6 py-2 rounded-full font-bold text-sm hover:bg-white/90 transition-all duration-200"
                              onClick={(e) => handlePlayClick("/game/guess", e)}
                            >
                              Main
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Guess Cards - Made larger and repositioned */}
                  <div className="absolute bottom-4 right-4 left-4 top-20 transition-all duration-500">
                    <div className="relative h-full flex items-center justify-center">
                      {/* Sparkle decoration */}
                      <div className="absolute top-4 left-4 text-white text-3xl"></div>

                      {/* Question mark card - larger */}
                      <div className="w-32 h-40 bg-green-400 rounded-2xl shadow-lg transform rotate-12 flex items-center justify-center border-4 border-white relative">
                        <div className="w-24 h-32 bg-yellow-300 rounded-xl border-2 border-white/70 flex items-center justify-center">
                          <span className="text-green-800 text-4xl font-bold">
                            ?
                          </span>
                        </div>
                      </div>

                      {/* Small "Guess What" card - repositioned */}
                      <div className="w-24 h-28 bg-green-300 rounded-2xl shadow-lg transform -rotate-6 translate-x-16 -translate-y-8 absolute flex items-center justify-center border-3 border-white/50">
                        <div className="text-sm font-bold text-green-900 text-center leading-tight">
                          <div>Tebak</div>
                          <div>Apa</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-16">
            <p className="text-white/80 text-lg">
              Pilih permainan Anda dan mulai belajar tentang budaya Indonesia!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
