"use client";

import React from "react";

const AboutUs = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundColor: "white",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
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
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-center lg:text-left">
                  <span className="text-[#1D5DAA]">Introduction</span>
                  <br />
                  <span className="text-[#FFA645]">Budaya Digital</span>
                  <br />
                  <span className="text-[#1D5DAA]">Nusantara</span>
                </h2>
              </div>

              <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                <p>
                  Budaya Digital Nusantara adalah sebuah gerakan yang menekankan
                  pentingnya pemanfaatan teknologi digital dalam kehidupan
                  sehari-hari masyarakat Indonesia. Konsep ini menggabungkan
                  nilai-nilai budaya lokal dengan perkembangan teknologi modern
                  untuk menciptakan ekosistem digital yang inklusif, kreatif,
                  dan berdaya saing global.
                </p>

                <p>
                  Inisiatif ini bertujuan untuk memperkuat literasi digital,
                  mendorong kolaborasi antar komunitas, serta melestarikan
                  kearifan lokal melalui media digital agar tetap relevan di era
                  transformasi teknologi.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Animated Circles Section */}
          <div className="relative overflow-hidden rounded-xl order-2 lg:order-2">
            <div className="relative w-full max-w-[320px] h-[320px] mx-auto sm:max-w-[400px] sm:h-[400px] lg:max-w-[500px] lg:h-[500px] xl:max-w-[600px] xl:h-[600px]">
              {/* Central Circle WITH gradient border */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 rounded-full flex items-center justify-center shadow-2xl overflow-hidden relative">
                  {/* Gradient border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1D5DAA] via-[#FFA645] to-[#1D5DAA] p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-24 xl:h-24 rounded-full overflow-hidden">
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
              <div className="absolute inset-2 sm:inset-3 lg:inset-4">
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
                  className="absolute inset-3 sm:inset-4 lg:inset-6 xl:inset-8 rounded-full border-2 sm:border-3 opacity-95"
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
                  className="absolute inset-4 sm:inset-6 lg:inset-8 xl:inset-12 rounded-full border-1 sm:border-2 opacity-80"
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
                className="absolute inset-4 sm:inset-6 lg:inset-8"
                style={{
                  animation: "spin 15s linear infinite",
                }}
              >
                {/* Games Circle - positioned at top */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-40 xl:h-40 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                    style={{
                      animation: "reverse-spin 15s linear infinite",
                      filter: "drop-shadow(0 10px 15px rgba(0, 0, 0, 0.15))",
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
                          <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-12 xl:h-12 bg-black/40 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                            <span className="text-xs sm:text-sm lg:text-base xl:text-2xl">
                              🎮
                            </span>
                          </div>
                        </div>
                        <p className="text-xs sm:text-xs lg:text-sm xl:text-base font-bold text-white drop-shadow-lg">
                          Games
                        </p>
                        <p className="text-xs sm:text-xs lg:text-xs xl:text-sm font-medium text-white/90 drop-shadow-lg">
                          Education
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Circle - positioned at bottom left */}
                <div className="absolute bottom-0 left-0 transform translate-x-6 sm:translate-x-8 lg:translate-x-12 xl:translate-x-16 -translate-y-6 sm:-translate-y-8 lg:-translate-y-12 xl:-translate-y-16">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-40 xl:h-40 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                    style={{
                      animation: "reverse-spin 15s linear infinite",
                      filter: "drop-shadow(0 10px 15px rgba(0, 0, 0, 0.15))",
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
                          <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-12 xl:h-12 bg-black/40 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                            <span className="text-xs sm:text-sm lg:text-base xl:text-2xl">
                              🗺️
                            </span>
                          </div>
                        </div>
                        <p className="text-xs sm:text-xs lg:text-sm xl:text-base font-bold text-white drop-shadow-lg">
                          Explore
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article Circle - positioned at bottom right */}
                <div className="absolute bottom-0 right-0 transform -translate-x-6 sm:-translate-x-8 lg:-translate-x-12 xl:-translate-x-16 -translate-y-6 sm:-translate-y-8 lg:-translate-y-12 xl:-translate-y-16">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-40 xl:h-40 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                    style={{
                      animation: "reverse-spin 15s linear infinite",
                      filter: "drop-shadow(0 10px 15px rgba(0, 0, 0, 0.15))",
                    }}
                  >
                    <img
                      src="images/artikelabout.png"
                      alt="Article"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mb-0.5 sm:mb-1 lg:mb-2 xl:mb-3">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-12 xl:h-12 bg-black/40 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                            <span className="text-xs sm:text-sm lg:text-base xl:text-2xl">
                              📖
                            </span>
                          </div>
                        </div>
                        <p className="text-xs sm:text-xs lg:text-sm xl:text-base font-bold text-white drop-shadow-lg">
                          Article
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

export default AboutUs;
