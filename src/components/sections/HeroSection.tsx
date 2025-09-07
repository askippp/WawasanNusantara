"use client";

import { useEffect, useState } from "react";
import { destinations } from "@/data/destinations";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + destinations.length) % destinations.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${destinations[currentSlide].image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content - Shifted more to the right */}
            <div className="text-white space-y-6 lg:ml-16">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                {destinations[currentSlide].title}
              </h1>
              <p className="text-lg lg:text-xl opacity-90 max-w-lg">
                {destinations[currentSlide].desc}
              </p>
              <Link
                href="/explore"
                className="inline-block bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-[16px] border border-white/30 hover:bg-white/30 transition-all duration-300 font-medium"
              >
                Explore
              </Link>
            </div>

            {/* Right Content - Cards remain unchanged */}
            <div className="relative flex flex-col items-end justify-start h-[480px]">
              {/* Cards container */}
              <div className="relative h-[400px] flex items-center justify-end overflow-hidden w-full">
                {/* Active Card */}
                <motion.div
                  key={destinations[currentSlide].id}
                  className="absolute w-64 h-80 rounded-2xl overflow-hidden shadow-lg"
                  initial={{ x: 200, opacity: 0, scale: 0.8 }}
                  animate={{ x: -280, opacity: 1, scale: 1.1, zIndex: 20 }}
                  exit={{ x: -200, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${destinations[currentSlide].image})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm opacity-80 mb-1">
                      {destinations[currentSlide].subtitle}
                    </p>
                    <h3 className="text-2xl font-bold">
                      {destinations[currentSlide].title}
                    </h3>
                  </div>
                </motion.div>

                {/* Next Card */}
                <motion.div
                  key={
                    destinations[(currentSlide + 1) % destinations.length].id
                  }
                  className="absolute w-64 h-80 rounded-2xl overflow-hidden shadow-lg"
                  initial={{ x: 400, opacity: 0, scale: 0.8 }}
                  animate={{ x: 0, opacity: 1, scale: 0.9, zIndex: 10 }}
                  exit={{ x: -200, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${
                        destinations[(currentSlide + 1) % destinations.length]
                          .image
                      })`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm opacity-80 mb-1">
                      {
                        destinations[(currentSlide + 1) % destinations.length]
                          .subtitle
                      }
                    </p>
                    <h3 className="text-2xl font-bold">
                      {
                        destinations[(currentSlide + 1) % destinations.length]
                          .title
                      }
                    </h3>
                  </div>
                </motion.div>
              </div>

              {/* Navigation Controls */}
              <div className="mt-6 flex items-center space-x-4 w-full justify-end">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/30"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/30"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                <div className="flex-1 h-0.5 bg-white/20 rounded-full overflow-hidden mx-4">
                  <div
                    className="h-0.5 bg-white transition-all duration-500"
                    style={{
                      width: `${
                        ((currentSlide + 1) / destinations.length) * 100
                      }%`,
                    }}
                  />
                </div>

                <div className="text-white font-bold text-2xl">
                  {String(currentSlide + 1).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;