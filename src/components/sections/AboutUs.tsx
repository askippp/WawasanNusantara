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
            <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] mx-auto">
              {/* Central Circle WITH gradient border */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full flex items-center justify-center shadow-2xl overflow-hidden relative">
                  {/* Gradient border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1D5DAA] via-[#FFA645] to-[#1D5DAA] p-0.5 sm:p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full overflow-hidden">
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
              <div className="absolute inset-2 sm:inset-3 md:inset-4 lg:inset-6">
                {/* Outer Ring */}
                <div
                  className="absolute inset-0 rounded-full border-2 sm:border-3 md:border-4 opacity-90"
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
                  className="absolute inset-2 sm:inset-3 md:inset-4 lg:inset-6 rounded-full border-2 sm:border-3 opacity-95"
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
                  className="absolute inset-4 sm:inset-6 md:inset-8 lg:inset-10 rounded-full border-1 sm:border-2 opacity-80"
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
                className="absolute inset-3 sm:inset-4 md:inset-6 lg:inset-8"
                style={{
                  animation: "spin 15s linear infinite",
                }}
              >
                {/* Games Circle - positioned at top */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                    style={{
                      animation: "reverse-spin 15s linear infinite",
                      filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))",
                    }}
                  >
                    <img
                      src="images/game.png"
                      alt="Games"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mb-0.5 sm:mb-1">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-black/40 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                            <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                              🎮
                            </span>
                          </div>
                        </div>
                        <p className="text-xs sm:text-xs md:text-sm lg:text-sm font-bold text-white drop-shadow-lg">
                          Games
                        </p>
                        <p className="text-xs sm:text-xs md:text-xs lg:text-xs font-medium text-white/90 drop-shadow-lg">
                          Education
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Explore Circle - positioned at bottom left */}
                <div className="absolute bottom-0 left-0 transform translate-x-2 sm:translate-x-3 md:translate-x-4 lg:translate-x-6 -translate-y-2 sm:-translate-y-3 md:-translate-y-4 lg:-translate-y-6">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                    style={{
                      animation: "reverse-spin 15s linear infinite",
                      filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))",
                    }}
                  >
                    <img
                      src="images/exploreabout.png"
                      alt="Explore"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mb-0.5 sm:mb-1">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-black/40 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                            <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                              🗺️
                            </span>
                          </div>
                        </div>
                        <p className="text-xs sm:text-xs md:text-sm lg:text-sm font-bold text-white drop-shadow-lg">
                          Explore
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article Circle - positioned at bottom right */}
                <div className="absolute bottom-0 right-0 transform -translate-x-2 sm:-translate-x-3 md:-translate-x-4 lg:-translate-x-6 -translate-y-2 sm:-translate-y-3 md:-translate-y-4 lg:-translate-y-6">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                    style={{
                      animation: "reverse-spin 15s linear infinite",
                      filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))",
                    }}
                  >
                    <img
                      src="images/artikelabout.png"
                      alt="Article"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mb-0.5 sm:mb-1">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-black/40 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                            <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                              📖
                            </span>
                          </div>
                        </div>
                        <p className="text-xs sm:text-xs md:text-sm lg:text-sm font-bold text-white drop-shadow-lg">
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

          /* Ensure proper spacing on small screens */
          .grid > div:first-child {
            margin-bottom: 2rem;
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

export default AboutUs;
