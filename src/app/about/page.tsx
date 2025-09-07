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

      {/* Introduction Section with Mobile Optimized Animated Circles */}
      <section className="py-16 px-4 bg-white">
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
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-center lg:text-left">
                  <span className="text-[#1D5DAA]">Pengenalan</span>
                  <br />
                  <span className="text-[#FFA645]">Budaya Digital</span>
                  <br />
                  <span className="text-[#1D5DAA]">Nusantara</span>
                </h2>

                <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
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

            {/* Mobile Optimized Animated Circles Section */}
            <div className="relative overflow-hidden rounded-xl order-2 lg:order-2 px-4 sm:px-0">
              <div className="relative w-full aspect-square max-w-[250px] xs:max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[480px] mx-auto">
                {/* Central Circle WITH gradient border */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full flex items-center justify-center shadow-lg overflow-hidden relative">
                    {/* Gradient border */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1D5DAA] via-[#FFA645] to-[#1D5DAA] p-0.5">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full overflow-hidden">
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

                {/* Animated Gradient Orbit Rings */}
                <div className="absolute inset-1 xs:inset-2 sm:inset-2 md:inset-3 lg:inset-4">
                  {/* Outer Ring */}
                  <div
                    className="absolute inset-0 rounded-full border-1 xs:border-2 sm:border-2 md:border-3 opacity-80"
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
                    className="absolute inset-1 xs:inset-2 sm:inset-2 md:inset-3 lg:inset-4 rounded-full border-1 xs:border-2 sm:border-2 opacity-85"
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
                    className="absolute inset-2 xs:inset-3 sm:inset-4 md:inset-5 lg:inset-6 rounded-full border-1 sm:border-2 opacity-70"
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

                {/* Rotating Container for Orbiting Content Circles */}
                <div
                  className="absolute inset-2 xs:inset-3 sm:inset-3 md:inset-4 lg:inset-6"
                  style={{
                    animation: "spin 15s linear infinite",
                  }}
                >
                  {/* Games Circle - positioned at top */}
                  <div className="absolute -top-3 xs:-top-4 sm:-top-4 md:-top-5 lg:-top-6 left-1/2 transform -translate-x-1/2">
                    <div
                      className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
                      style={{
                        animation: "reverse-spin 15s linear infinite",
                        filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15))",
                      }}
                    >
                      <img
                        src="images/game.png"
                        alt="Games"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="mb-0 xs:mb-0.5 sm:mb-1">
                            <div className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-black/30 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                              <span className="text-xs xs:text-xs sm:text-sm md:text-base">
                                🎮
                              </span>
                            </div>
                          </div>
                          <p className="text-xs xs:text-xs sm:text-xs md:text-sm font-bold text-white drop-shadow-md hidden xs:block">
                            Permainan
                          </p>
                          <p className="text-xs xs:text-xs sm:text-xs font-medium text-white/80 drop-shadow-md hidden sm:block">
                            Edukasi
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Explore Circle - positioned at bottom left */}
                  <div className="absolute -bottom-3 xs:-bottom-4 sm:-bottom-4 md:-bottom-5 lg:-bottom-6 -left-3 xs:-left-4 sm:-left-4 md:-left-5 lg:-left-6 transform rotate-45">
                    <div
                      className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
                      style={{
                        animation: "reverse-spin 15s linear infinite",
                        filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15))",
                      }}
                    >
                      <img
                        src="images/exploreabout.png"
                        alt="Explore"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="mb-0 xs:mb-0.5 sm:mb-1">
                            <div className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-black/30 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                              <span className="text-xs xs:text-xs sm:text-sm md:text-base">
                                🗺️
                              </span>
                            </div>
                          </div>
                          <p className="text-xs xs:text-xs sm:text-xs md:text-sm font-bold text-white drop-shadow-md hidden xs:block">
                            Jelajahi
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Article Circle - positioned at bottom right */}
                  <div className="absolute -bottom-3 xs:-bottom-4 sm:-bottom-4 md:-bottom-5 lg:-bottom-6 -right-3 xs:-right-4 sm:-right-4 md:-right-5 lg:-right-6 transform -rotate-45">
                    <div
                      className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
                      style={{
                        animation: "reverse-spin 15s linear infinite",
                        filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15))",
                      }}
                    >
                      <img
                        src="images/artikelabout.png"
                        alt="Article"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="mb-0 xs:mb-0.5 sm:mb-1">
                            <div className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-black/30 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                              <span className="text-xs xs:text-xs sm:text-sm md:text-base">
                                📖
                              </span>
                            </div>
                          </div>
                          <p className="text-xs xs:text-xs sm:text-xs md:text-sm font-bold text-white drop-shadow-md hidden xs:block">
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

        /* Mobile-first responsive design */
        @media (max-width: 475px) {
          .container {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }

          /* Ensure circles don't overflow on very small screens */
          .grid > div:last-child {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
        }

        @media (min-width: 475px) and (max-width: 640px) {
          .container {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
        }

        /* Custom breakpoint for extra small screens */
        @media (min-width: 375px) {
          .xs\\:w-3 {
            width: 0.75rem;
          }
          .xs\\:h-3 {
            height: 0.75rem;
          }
          .xs\\:w-8 {
            width: 2rem;
          }
          .xs\\:h-8 {
            height: 2rem;
          }
          .xs\\:w-10 {
            width: 2.5rem;
          }
          .xs\\:h-10 {
            height: 2.5rem;
          }
          .xs\\:w-12 {
            width: 3rem;
          }
          .xs\\:h-12 {
            height: 3rem;
          }
          .xs\\:max-w-\\[280px\\] {
            max-width: 280px;
          }
          .xs\\:inset-2 {
            top: 0.5rem;
            right: 0.5rem;
            bottom: 0.5rem;
            left: 0.5rem;
          }
          .xs\\:inset-3 {
            top: 0.75rem;
            right: 0.75rem;
            bottom: 0.75rem;
            left: 0.75rem;
          }
          .xs\\:border-2 {
            border-width: 2px;
          }
          .xs\\:-top-4 {
            top: -1rem;
          }
          .xs\\:-bottom-4 {
            bottom: -1rem;
          }
          .xs\\:-left-4 {
            left: -1rem;
          }
          .xs\\:-right-4 {
            right: -1rem;
          }
          .xs\\:mb-0\\.5 {
            margin-bottom: 0.125rem;
          }
          .xs\\:text-xs {
            font-size: 0.75rem;
            line-height: 1rem;
          }
          .xs\\:block {
            display: block;
          }
        }

        /* Tablet adjustments */
        @media (min-width: 641px) and (max-width: 1024px) {
          .grid {
            gap: 3rem;
          }
        }

        /* Ensure smooth animations on all devices */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedCirclesComponent;
