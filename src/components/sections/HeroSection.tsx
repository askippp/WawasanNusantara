"use client";

import { useEffect, useState } from "react";
import { destinations } from "@/data/destinations";
import { motion, AnimatePresence } from "framer-motion";
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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${destinations[currentSlide].image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <div className="text-white space-y-4 sm:space-y-6 text-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`title-${currentSlide}`}
                  className="text-4xl sm:text-5xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {destinations[currentSlide].title}
                </motion.h1>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${currentSlide}`}
                  className="text-base sm:text-lg opacity-90 max-w-md mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
                >
                  {destinations[currentSlide].desc}
                </motion.p>
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link
                  href="/explore"
                  className="inline-block bg-white/20 backdrop-blur-md text-white px-6 py-3 sm:px-8 sm:py-4 rounded-[16px] border border-white/30 hover:bg-white/30 transition-all duration-300 font-medium active:scale-95"
                >
                  Jelajahi
                </Link>
              </motion.div>
            </div>

            {/* Mobile Cards Section */}
            <div className="mt-8 sm:mt-12">
              {/* Active Card - Mobile */}
              <div className="flex justify-center mb-6">
                <div className="w-72 h-48 sm:w-80 sm:h-56 rounded-2xl overflow-hidden shadow-lg relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`card-${currentSlide}`}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
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
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <motion.p
                          className="text-sm opacity-80 mb-1 text-white"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          {destinations[currentSlide].subtitle}
                        </motion.p>
                        <motion.h3
                          className="text-xl font-bold text-white"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                        >
                          {destinations[currentSlide].title}
                        </motion.h3>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 border border-white/30 active:scale-95"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
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

                <div className="flex space-x-2">
                  {destinations.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "bg-white w-8"
                          : "bg-white/40 hover:bg-white/60 w-2"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 border border-white/30 active:scale-95"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
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
              </div>

              {/* Mobile Progress Indicator */}
              <div className="flex items-center justify-center mt-4 space-x-4">
                <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden max-w-32">
                  <motion.div
                    className="h-1 bg-white"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${
                        ((currentSlide + 1) / destinations.length) * 100
                      }%`,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`counter-${currentSlide}`}
                    className="text-white font-bold text-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {String(currentSlide + 1).padStart(2, "0")}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content - Desktop */}
            <div className="text-white space-y-6 lg:ml-16">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`desktop-title-${currentSlide}`}
                  className="text-6xl lg:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {destinations[currentSlide].title}
                </motion.h1>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`desktop-desc-${currentSlide}`}
                  className="text-lg lg:text-xl opacity-90 max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
                >
                  {destinations[currentSlide].desc}
                </motion.p>
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link
                  href="/explore"
                  className="inline-block bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-[16px] border border-white/30 hover:bg-white/30 transition-all duration-300 font-medium active:scale-95"
                >
                  Jelajahi
                </Link>
              </motion.div>
            </div>

            {/* Right Content - Desktop Cards */}
            <div className="relative flex flex-col items-end justify-start h-[480px]">
              {/* Cards container */}
              <div className="relative h-[400px] flex items-center justify-end overflow-hidden w-full">
                {/* Active Card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`desktop-card-${currentSlide}`}
                    className="absolute w-64 h-80 rounded-2xl overflow-hidden shadow-lg z-20"
                    initial={{ x: 200, opacity: 0, scale: 0.8 }}
                    animate={{ x: -280, opacity: 1, scale: 1.1 }}
                    exit={{ x: -500, opacity: 0, scale: 0.8 }}
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
                      <motion.p
                        className="text-sm opacity-80 mb-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        {destinations[currentSlide].subtitle}
                      </motion.p>
                      <motion.h3
                        className="text-2xl font-bold"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                      >
                        {destinations[currentSlide].title}
                      </motion.h3>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Next Card */}
                <motion.div
                  key={`next-${(currentSlide + 1) % destinations.length}`}
                  className="absolute w-64 h-80 rounded-2xl overflow-hidden shadow-lg z-10"
                  animate={{ x: 0, opacity: 1, scale: 0.9 }}
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

              {/* Desktop Navigation Controls */}
              <div className="mt-6 flex items-center space-x-4 w-full justify-end">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 border border-white/30 active:scale-95"
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
                  className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 border border-white/30 active:scale-95"
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
                  <motion.div
                    className="h-0.5 bg-white"
                    animate={{
                      width: `${
                        ((currentSlide + 1) / destinations.length) * 100
                      }%`,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`desktop-counter-${currentSlide}`}
                    className="text-white font-bold text-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {String(currentSlide + 1).padStart(2, "0")}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
