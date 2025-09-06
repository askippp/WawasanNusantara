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
          <h1 className="text-6xl font-bold mb-8 drop-shadow-2xl">About Us</h1>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-[#1D5DAA] mb-4">
              Why Choose <span className="text-[#FFA645]">Us?</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
              Our Mission Goes Beyond Just Showcasing Traditions. We Bring
              Culture Closer To You Through Technology And Innovation. Discover
              Why Our Platform Is The Best Place To Explore And Preserve
              Heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  Interactive Learning
                </h3>
                <p className="text-sm leading-relaxed text-gray-700 group-hover:text-white/90 transition-all duration-300">
                  We Provide Fun And Engaging Cultural Content Such As Games,
                  Quizzes, And Stories To Make Learning About Traditions
                  Exciting And Memorable.
                </p>
              </div>

              <div className="absolute bottom-6 left-6">
                <button
                  onClick={() => router.push("/game")}
                  className="bg-white text-blue-700 px-6 py-3 text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:transform hover:scale-105"
                >
                  Explore Now
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
                  Rich Cultural Content
                </h3>
                <p className="text-sm leading-relaxed text-gray-700 group-hover:text-white/90 transition-all duration-300">
                  From Traditional Foods, Dances, Music, And Clothing To Folk
                  Tales Our Platform Offers A Wide Variety Of Cultural Treasures
                  In One Place.
                </p>
              </div>

              <div className="absolute bottom-6 left-6">
                <button
                  onClick={() => router.push("/artikel")}
                  className="bg-white text-blue-700 px-6 py-3 text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:transform hover:scale-105"
                >
                  Explore Now
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
                  Accessible Anywhere
                </h3>
                <p className="text-sm leading-relaxed text-gray-700 group-hover:text-white/90 transition-all duration-300">
                  Our Digital Platform Allows You To Explore Indonesia@agoss
                  Cultural Heritage Anytime And Anywhere, Directly From Your
                  Device.
                </p>
              </div>

              <div className="absolute bottom-6 left-6">
                <button
                  onClick={() => router.push("/explore")}
                  className="bg-white text-blue-700 px-6 py-3 text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:transform hover:scale-105"
                >
                  Explore Now
                </button>
              </div>
            </div>

            {/* Interactive Map Card */}
            <div className="bg-gradient-to-br from-blue-200 to-blue-300 text-gray-800 rounded-3xl p-6 relative overflow-hidden min-h-[320px] hover:transform hover:scale-105 hover:from-blue-500 hover:to-blue-700 hover:text-white transition-all duration-300 shadow-xl group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <img
                    src="images/MapAbout.png"
                    alt="Location Pin"
                    className="w-8 h-8 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-orange-500 group-hover:text-orange-300 transition-all duration-300">
                  Interactive Map
                </h3>
                <p className="text-sm leading-relaxed text-gray-700 group-hover:text-white/90 transition-all duration-300">
                  Explore Indonesia@agoss Diverse Culture Through Our Interactive
                  Map. Simply Click On A Region To Discover Its Traditional
                  Foods, Dances, Music, Clothing, And Folk Stories.
                </p>
              </div>

              <div className="absolute bottom-6 left-6">
                <button className="bg-white text-blue-700 px-6 py-3 text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:transform hover:scale-105">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section with Enhanced Animated Circles - MODIFIED TO MATCH AboutUs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                  <span className="text-[#1D5DAA]">Introduction</span>
                  <br />
                  <span className="text-[#FFA645]">Budaya Digital</span>
                  <br />
                  <span className="text-[#1D5DAA]">Nusantara</span>
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed">
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

            {/* Enhanced Animated Circles Section - MODIFIED TO MATCH AboutUs */}
            <div className="relative overflow-hidden rounded-xl">
              <div className="relative w-[500px] h-[500px] mx-auto lg:w-[600px] lg:h-[600px]">
                {/* Central Circle - Updated to match AboutUs */}
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

                {/* Animated Gradient Orbit Rings - Updated to match AboutUs */}
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

                {/* Rotating Container for Orbiting Content Circles - Updated to match AboutUs */}
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
      `}</style>
    </div>
  );
};

export default AnimatedCirclesComponent;
