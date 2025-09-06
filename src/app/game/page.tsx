"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const GamePage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

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
              Fun Games
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-white/95 leading-tight">
              of Indonesian Culture
            </h2>
          </div>

          {/* Game Cards Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Cards arranged horizontally like the image */}
            <div className="relative flex items-center justify-center space-x-4">
              {/* Quiz Card - Left */}
              <div
                className="relative z-10"
                onMouseEnter={() => setHoveredIndex(1)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => router.push("/game/quiz")}
              >
                <div
                  className={`
                  w-80 h-80 rounded-3xl bg-gradient-to-b from-amber-600 to-amber-800
                  shadow-2xl transform transition-all duration-300 cursor-pointer relative overflow-hidden
                  ${
                    hoveredIndex === 1
                      ? "scale-105 -translate-y-2"
                      : "hover:scale-102"
                  }
                `}
                >
                  {/* Quiz Card Content */}
                  <div className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-white text-left">
                        Quiz
                      </h3>
                    </div>
                  </div>

                  {/* Quiz Icon Card */}
                  <div className="absolute bottom-8 left-8">
                    <div className="w-20 h-24 bg-orange-400 rounded-xl shadow-lg transform -rotate-12 flex items-center justify-center border-4 border-white/50">
                      <div className="text-center">
                        <div className="text-white font-bold text-sm mb-1">
                          QUIZ!
                        </div>
                        <div className="w-6 h-6 bg-white/30 rounded mx-auto"></div>
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
                onClick={() => router.push("/game/memory")}
              >
                <div
                  className={`
                  w-96 h-96 rounded-3xl bg-gradient-to-b from-orange-500 to-red-600
                  shadow-2xl transform transition-all duration-300 cursor-pointer relative overflow-hidden
                  ${
                    hoveredIndex === 2
                      ? "scale-105 -translate-y-2"
                      : "hover:scale-102"
                  }
                `}
                >
                  {/* Card Memory Content */}
                  <div className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-white text-left mb-2">
                        Card
                      </h3>
                      <h3 className="text-3xl font-bold text-white text-left">
                        Memory
                      </h3>

                      <div className="mt-8">
                        <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-200">
                          Play
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Memory Cards Stack - positioned to match image */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8">
                    <div className="relative flex justify-center">
                      {/* Stack of colorful cards fanned out */}
                      <div className="w-20 h-28 bg-red-500 rounded-xl shadow-lg border-4 border-white absolute transform -rotate-12 -translate-x-12"></div>
                      <div className="w-20 h-28 bg-cyan-400 rounded-xl shadow-lg border-4 border-white absolute transform -rotate-6 -translate-x-6"></div>
                      <div className="w-20 h-28 bg-purple-600 rounded-xl shadow-lg border-4 border-white absolute transform rotate-0"></div>
                      <div className="w-20 h-28 bg-green-400 rounded-xl shadow-lg border-4 border-white absolute transform rotate-6 translate-x-6">
                        {/* White curved pattern on green card */}
                        <div className="absolute inset-3 flex items-center justify-center">
                          <div className="w-10 h-16 bg-white rounded-full opacity-90"></div>
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
                onClick={() => router.push("/game/guess")}
              >
                <div
                  className={`
                  w-80 h-80 rounded-3xl bg-gradient-to-b from-amber-600 to-amber-800
                  shadow-2xl transform transition-all duration-300 cursor-pointer relative overflow-hidden
                  ${
                    hoveredIndex === 3
                      ? "scale-105 -translate-y-2"
                      : "hover:scale-102"
                  }
                `}
                >
                  {/* Guess Card Content */}
                  <div className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white text-left mb-1">
                        Guess the
                      </h3>
                      <h3 className="text-2xl font-bold text-white text-left">
                        Picture
                      </h3>
                    </div>
                  </div>

                  {/* Guess Cards - positioned like in image */}
                  <div className="absolute bottom-8 right-8">
                    <div className="relative">
                      {/* Sparkle decoration */}
                      <div className="absolute -top-4 -left-4 text-white text-2xl">
                        ✨
                      </div>

                      {/* Question mark card */}
                      <div className="w-16 h-20 bg-green-500 rounded-lg shadow-lg transform rotate-12 flex items-center justify-center border-3 border-white relative">
                        <div className="w-12 h-16 bg-yellow-300 rounded border-2 border-white/70 flex items-center justify-center">
                          <span className="text-green-800 text-xl font-bold">
                            ?
                          </span>
                        </div>
                      </div>

                      {/* Small "Guess What" card */}
                      <div className="w-14 h-16 bg-green-400 rounded-lg shadow-lg transform -rotate-6 translate-x-8 -translate-y-4 absolute flex items-center justify-center border-2 border-white/50">
                        <div className="text-xs font-bold text-yellow-900 text-center leading-tight">
                          <div>Guess</div>
                          <div>What</div>
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
              Choose your game and start learning about Indonesian culture!
            </p>
          </div>
        </div>
      </div>

      {/* Click handlers for navigation */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {/* Quiz clickable area */}
        <div
          className="absolute top-1/2 left-1/4 w-64 h-72 transform -translate-y-1/2 -translate-x-1/2 pointer-events-auto cursor-pointer"
          onClick={() => router.push("/game/quiz")}
        ></div>

        {/* Memory clickable area */}
        <div
          className="absolute top-1/2 left-1/2 w-72 h-96 transform -translate-y-1/2 -translate-x-1/2 pointer-events-auto cursor-pointer"
          onClick={() => router.push("/game/memory")}
        ></div>

        {/* Guess clickable area */}
        <div
          className="absolute top-1/2 right-1/4 w-64 h-72 transform -translate-y-1/2 translate-x-1/2 pointer-events-auto cursor-pointer"
          onClick={() => router.push("/game/guess")}
        ></div>
      </div>
    </div>
  );
};

export default GamePage;
