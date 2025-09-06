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
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 relative">
            {/* Background Image positioned at top-left corner */}
            <div className="absolute -top-10 -left-10 w-64 h-64 opacity-10 pointer-events-none">
              <img
                src="images/NUSPHERE_LOGO.png"
                alt="Background"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content with relative positioning */}
            <div className="relative z-10">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  <span className="text-[#1D5DAA]">Introduction</span>
                  <br />
                  <span className="text-[#FFA645]">Budaya Digital</span>
                  <br />
                  <span className="text-[#1D5DAA]">Nusantara</span>
                </h2>
              </div>

              <div className="space-y-4 text-gray-700 text-sm lg:text-base leading-relaxed">
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
          <div className="relative overflow-hidden rounded-xl">
            <div className="relative w-[500px] h-[500px] mx-auto lg:w-[600px] lg:h-[600px]">
              {/* Central Circle WITHOUT gradient - just plain image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full flex items-center justify-center shadow-2xl overflow-hidden bg-white">
                  <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden">
                    <img
                      src="images/NUSPHERE_FULL.png"
                      alt="Digital Nusantara Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Animated Gradient Orbit Rings */}
              <div className="absolute inset-4">
                {/* Outer Ring */}
                <div
                  className="absolute inset-0 rounded-full border-4 opacity-90"
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
                  className="absolute inset-6 lg:inset-8 rounded-full border-3 opacity-95"
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
                  className="absolute inset-8 lg:inset-12 rounded-full border-2 opacity-80"
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
                className="absolute inset-8 hover-pause-animation"
                style={{
                  animation: "spin 15s linear infinite",
                }}
              >
                {/* Games Circle - positioned at top */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                  <div
                    className="w-24 h-24 lg:w-40 lg:h-40 rounded-full shadow-2xl drop-shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                    style={{
                      animation: "reverse-spin 15s linear infinite",
                      filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))",
                    }}
                  >
                    <img
                      src="images/game.png"
                      alt="Games"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mb-1 lg:mb-2">
                          <div className="w-6 h-6 lg:w-12 lg:h-12 bg-black/40 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                            <span className="text-sm lg:text-2xl">🎮</span>
                          </div>
                        </div>
                        <p className="text-xs lg:text-base font-bold text-white drop-shadow-lg">
                          Games
                        </p>
                        <p className="text-xs lg:text-sm font-medium text-white/90 drop-shadow-lg">
                          Education
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Circle - positioned at bottom left */}
                <div className="absolute bottom-0 left-0 transform translate-x-12 lg:translate-x-16 -translate-y-12 lg:-translate-y-16">
                  <div
                    className="w-24 h-24 lg:w-40 lg:h-40 rounded-full shadow-2xl drop-shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                    style={{
                      animation: "reverse-spin 15s linear infinite",
                      filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))",
                    }}
                  >
                    <img
                      src="images/exploreabout.png"
                      alt="Explore"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mb-1 lg:mb-3">
                          <div className="w-6 h-6 lg:w-12 lg:h-12 bg-black/40 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                            <span className="text-sm lg:text-2xl">🗺️</span>
                          </div>
                        </div>
                        <p className="text-xs lg:text-base font-bold text-white drop-shadow-lg">
                          Explore
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education Circle - positioned at bottom right */}
                <div className="absolute bottom-0 right-0 transform -translate-x-12 lg:-translate-x-16 -translate-y-12 lg:-translate-y-16">
                  <div
                    className="w-24 h-24 lg:w-40 lg:h-40 rounded-full shadow-2xl drop-shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                    style={{
                      animation: "reverse-spin 15s linear infinite",
                      filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))",
                    }}
                  >
                    <img
                      src="images/artikelabout.png"
                      alt="Education"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mb-1 lg:mb-3">
                          <div className="w-6 h-6 lg:w-12 lg:h-12 bg-white/95 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm shadow-lg">
                            <span className="text-sm lg:text-2xl">📚</span>
                          </div>
                        </div>
                        <p
                          className="text-xs lg:text-base font-bold text-white drop-shadow-2xl"
                          style={{
                            textShadow:
                              "2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)",
                          }}
                        >
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
      `}</style>
    </div>
  );
};

export default AboutUs;
