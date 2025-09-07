"use client";

import React from "react";
import { useRouter } from "next/navigation";

const AnimatedCirclesComponent = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="images/AboutPage.jpg"
            alt="Indonesian Culture Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl font-bold mb-8 drop-shadow-2xl">
            Tentang Kami
          </h1>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#1D5DAA] mb-4">
              Mengapa Memilih <span className="text-[#FFA645]">Kami?</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
              Misi kami lebih dari sekadar memamerkan tradisi. Kami menghadirkan
              budaya lebih dekat kepada Anda melalui teknologi dan inovasi.
              Temukan mengapa platform kami adalah tempat terbaik untuk
              menjelajahi dan melestarikan warisan budaya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Interactive Learning Card */}
            <div className="bg-gradient-to-br from-blue-200 to-blue-300 text-gray-800 rounded-3xl p-6 relative overflow-hidden min-h-[320px] hover:transform hover:scale-105 hover:from-blue-500 hover:to-blue-700 hover:text-white transition-all duration-300 shadow-xl group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <img
                    src="images/GamesAbout.png"
                    alt="Gaming Controller"
                    className="w-8 h-8 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-orange-500 group-hover:text-orange-300 transition-all duration-300">
                  Pembelajaran Interaktif
                </h3>
                <p className="text-sm leading-relaxed text-gray-700 group-hover:text-white/90 transition-all duration-300">
                  Kami menyediakan konten budaya yang menyenangkan dan menarik
                  seperti permainan, kuis, dan cerita untuk membuat pembelajaran
                  tentang tradisi menjadi mengasyikkan dan berkesan.
                </p>
              </div>

              <div className="absolute bottom-6 left-6">
                <button
                  onClick={() => router.push("/game")}
                  className="bg-white text-blue-700 px-6 py-3 text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:transform hover:scale-105"
                >
                  Jelajahi Sekarang
                </button>
              </div>
            </div>

            {/* Rich Cultural Content Card */}
            <div className="bg-gradient-to-br from-blue-200 to-blue-300 text-gray-800 rounded-3xl p-6 relative overflow-hidden min-h-[320px] hover:transform hover:scale-105 hover:from-blue-500 hover:to-blue-700 hover:text-white transition-all duration-300 shadow-xl group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <img
                    src="images/BooksAbout.png"
                    alt="Book"
                    className="w-8 h-8 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-orange-500 group-hover:text-orange-300 transition-all duration-300">
                  Konten Budaya Kaya
                </h3>
                <p className="text-sm leading-relaxed text-gray-700 group-hover:text-white/90 transition-all duration-300">
                  Dari makanan tradisional, tarian, musik, dan pakaian hingga
                  cerita rakyat, platform kami menawarkan berbagai macam
                  khazanah budaya dalam satu tempat.
                </p>
              </div>

              <div className="absolute bottom-6 left-6">
                <button
                  onClick={() => router.push("/artikel")}
                  className="bg-white text-blue-700 px-6 py-3 text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:transform hover:scale-105"
                >
                  Jelajahi Sekarang
                </button>
              </div>
            </div>

            {/* Accessible Anywhere Card */}
            <div className="bg-gradient-to-br from-blue-200 to-blue-300 text-gray-800 rounded-3xl p-6 relative overflow-hidden min-h-[320px] hover:transform hover:scale-105 hover:from-blue-500 hover:to-blue-700 hover:text-white transition-all duration-300 shadow-xl group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <img
                    src="images/ExploreAbouts.png"
                    alt="Mobile Device"
                    className="w-8 h-8 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-orange-500 group-hover:text-orange-300 transition-all duration-300">
                  Dapat Diakses Kapan Saja
                </h3>
                <p className="text-sm leading-relaxed text-gray-700 group-hover:text-white/90 transition-all duration-300">
                  Platform digital kami memungkinkan Anda menjelajahi warisan
                  budaya Indonesia kapan saja dan di mana saja, langsung dari
                  perangkat Anda.
                </p>
              </div>

              <div className="absolute bottom-6 left-6">
                <button
                  onClick={() => router.push("/explore")}
                  className="bg-white text-blue-700 px-6 py-3 text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:transform hover:scale-105"
                >
                  Jelajahi Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section with Enhanced Animated Circles - FULLY RESPONSIVE */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-4 sm:space-y-6 relative order-1 lg:order-1">
              {/* Background Image positioned at top-left corner - hidden on mobile */}
              <div className="hidden lg:block absolute -top-10 -left-10 w-64 h-64 opacity-10 pointer-events-none">
                <img
                  src="images/NUSPHERE_LOGO.png"
                  alt="Background"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Content with relative positioning */}
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-8 text-center lg:text-left">
                  <span className="text-[#1D5DAA]">Pengenalan</span>
                  <br />
                  <span className="text-[#FFA645]">Budaya Digital</span>
                  <br />
                  <span className="text-[#1D5DAA]">Nusantara</span>
                </h2>

                <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed text-justify lg:text-left">
                  <p>
                    Budaya Digital Nusantara adalah sebuah gerakan yang
                    menekankan pentingnya pemanfaatan teknologi digital dalam
                    kehidupan sehari-hari masyarakat Indonesia. Konsep ini
                    menggabungkan nilai-nilai budaya lokal dengan perkembangan
                    teknologi modern untuk menciptakan ekosistem digital yang
                    inklusif, kreatif, dan berdaya saing global.
                  </p>

                  <p>
                    Inisiatif ini bertujuan untuk memperkuat literasi digital,
                    mendorong kolaborasi antar komunitas, serta melestarikan
                    kearifan lokal melalui media digital agar tetap relevan di
                    era transformasi teknologi.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Animated Circles Section - FULLY RESPONSIVE */}
            <div className="relative overflow-hidden rounded-xl order-2 lg:order-2">
              <div className="relative w-full max-w-[280px] h-[280px] mx-auto sm:max-w-[320px] sm:h-[320px] md:max-w-[400px] md:h-[400px] lg:max-w-[500px] lg:h-[500px] xl:max-w-[600px] xl:h-[600px]">
                {/* Central Circle WITH gradient border - RESPONSIVE */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 rounded-full flex items-center justify-center shadow-2xl overflow-hidden relative">
                    {/* Gradient border */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1D5DAA] via-[#FFA645] to-[#1D5DAA] p-0.5 sm:p-1">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-24 xl:h-24 rounded-full overflow-hidden">
                          <img
                            src="images/NUSPHERE_FULL.png"
                            alt="Digital Nusantara Logo"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Pulsing glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1D5DAA]/20 to-[#FFA645]/20 animate-pulse"></div>
                  </div>
                </div>

                {/* Animated Gradient Orbit Rings - RESPONSIVE */}
                <div className="absolute inset-2 sm:inset-3 md:inset-4 lg:inset-4">
                  {/* Outer Ring */}
                  <div
                    className="absolute inset-0 rounded-full border-2 sm:border-3 lg:border-4 opacity-90"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0%, #4A7FE7 25%, #FFB366 50%, #4A7FE7 75%, transparent 100%)",
                      animation: "spin 20s linear infinite",
                      WebkitMask:
                        "radial-gradient(circle, transparent 48%, black 50%, black 52%, transparent 54%)",
                      mask: "radial-gradient(circle, transparent 48%, black 50%, black 52%, transparent 54%)",
                    }}
                  ></div>

                  {/* Middle Ring */}
                  <div
                    className="absolute inset-2 sm:inset-3 md:inset-4 lg:inset-6 xl:inset-8 rounded-full border-2 sm:border-3 opacity-95"
                    style={{
                      background:
                        "conic-gradient(from 180deg, transparent 0%, #FFB366 25%, #4A7FE7 50%, #FFB366 75%, transparent 100%)",
                      animation: "spin-reverse 15s linear infinite",
                      WebkitMask:
                        "radial-gradient(circle, transparent 46%, black 48%, black 52%, transparent 54%)",
                      mask: "radial-gradient(circle, transparent 46%, black 48%, black 52%, transparent 54%)",
                    }}
                  ></div>

                  {/* Inner Ring */}
                  <div
                    className="absolute inset-3 sm:inset-4 md:inset-6 lg:inset-8 xl:inset-12 rounded-full border-1 sm:border-2 opacity-80"
                    style={{
                      background:
                        "conic-gradient(from 90deg, transparent 0%, #4A7FE7 25%, #FFB366 50%, #4A7FE7 75%, transparent 100%)",
                      animation: "spin 25s linear infinite",
                      WebkitMask:
                        "radial-gradient(circle, transparent 44%, black 46%, black 54%, transparent 56%)",
                      mask: "radial-gradient(circle, transparent 44%, black 46%, black 54%, transparent 56%)",
                    }}
                  ></div>
                </div>

                {/* Rotating Container for Orbiting Content Circles - RESPONSIVE */}
                <div
                  className="absolute inset-3 sm:inset-4 md:inset-6 lg:inset-8 hover-pause-animation"
                  style={{
                    animation: "spin 15s linear infinite",
                  }}
                >
                  {/* Games Circle - positioned at top - RESPONSIVE */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-40 xl:h-40 rounded-full shadow-xl lg:shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                      style={{
                        animation: "reverse-spin 15s linear infinite",
                        filter: "drop-shadow(0 8px 12px rgba(0, 0, 0, 0.15))",
                      }}
                    >
                      <img
                        src="images/game.png"
                        alt="Games"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="mb-0.5 sm:mb-1 lg:mb-2">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-12 xl:h-12 bg-black/40 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                              <span className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-2xl">
                                🎮
                              </span>
                            </div>
                          </div>
                          <p className="text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base font-bold text-white drop-shadow-lg">
                            Permainan
                          </p>
                          <p className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm font-medium text-white/90 drop-shadow-lg">
                            Edukasi
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map Circle - positioned at bottom left - RESPONSIVE */}
                  <div className="absolute bottom-0 left-0 transform translate-x-4 sm:translate-x-5 md:translate-x-8 lg:translate-x-12 xl:translate-x-16 -translate-y-4 sm:-translate-y-5 md:-translate-y-8 lg:-translate-y-12 xl:-translate-y-16">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-40 xl:h-40 rounded-full shadow-xl lg:shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                      style={{
                        animation: "reverse-spin 15s linear infinite",
                        filter: "drop-shadow(0 8px 12px rgba(0, 0, 0, 0.15))",
                      }}
                    >
                      <img
                        src="images/exploreabout.png"
                        alt="Explore"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="mb-0.5 sm:mb-1 lg:mb-2 xl:mb-3">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-12 xl:h-12 bg-black/40 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                              <span className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-2xl">
                                🗺️
                              </span>
                            </div>
                          </div>
                          <p className="text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base font-bold text-white drop-shadow-lg">
                            Jelajahi
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Education Circle - positioned at bottom right - RESPONSIVE */}
                  <div className="absolute bottom-0 right-0 transform -translate-x-4 sm:-translate-x-5 md:-translate-x-8 lg:-translate-x-12 xl:-translate-x-16 -translate-y-4 sm:-translate-y-5 md:-translate-y-8 lg:-translate-y-12 xl:-translate-y-16">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-40 xl:h-40 rounded-full shadow-xl lg:shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                      style={{
                        animation: "reverse-spin 15s linear infinite",
                        filter: "drop-shadow(0 8px 12px rgba(0, 0, 0, 0.15))",
                      }}
                    >
                      <img
                        src="images/artikelabout.png"
                        alt="Education"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="mb-0.5 sm:mb-1 lg:mb-2 xl:mb-3">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-12 xl:h-12 bg-black/40 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                              <span className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-2xl">
                                📖
                              </span>
                            </div>
                          </div>
                          <p className="text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base font-bold text-white drop-shadow-lg">
                            Artikel
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CSS for animations */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes reverse-spin {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .hover\\:pause-animation:hover {
          animation-play-state: paused !important;
        }

        .hover\\:pause-animation:hover * {
          animation-play-state: paused !important;
        }

        /* Additional mobile optimizations */
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedCirclesComponent;
