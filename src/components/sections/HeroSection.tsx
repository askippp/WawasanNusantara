"use client";

import { useState } from "react";

interface Destination {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  featured: boolean;
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const destinations: Destination[] = [
    {
      id: 1,
      title: "BOROBUDUR",
      subtitle: "Magelang Regency, Central Java",
      image:
        "https://images.unsplash.com/photo-1705905343745-6d901a93e946?q=80&w=449&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: true,
    },
    {
      id: 2,
      title: "BALI",
      subtitle: "Uluwatu Temple",
      image:
        "https://images.unsplash.com/photo-1587015539329-5f95ae6c1ee8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dWx1d2F0dXxlbnwwfHwwfHx8MA%3D%3D",
      featured: false,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + destinations.length) % destinations.length
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage:
            "url('/images/BOROBUDUR.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h1 className="text-7xl lg:text-8xl font-bold leading-tight">
                BOROBUDUR
              </h1>
              <p className="text-lg lg:text-xl opacity-90 max-w-lg">
                Lorem ipsum placeholder or dummy text used in typesetting and
                graphic design for previewing layouts. It features scrambled
                Latin text, which emphasizes the design over content of the
                layout.
              </p>
              <button className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 font-medium">
                Explore
              </button>
            </div>

            {/* Right Content - Destination Cards */}
            <div className="relative">
              <div className="flex space-x-4 justify-center lg:justify-end">
                {destinations.map((destination, index) => (
                  <div
                    key={destination.id}
                    className={`relative rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 ${
                      destination.featured ? "w-72 h-80" : "w-64 h-72 mt-8"
                    }`}
                  >
                    {/* Card Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${destination.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    </div>

                    {/* Heart Icon */}
                    <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
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
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>

                    {/* Card Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm opacity-80 mb-1">
                        {destination.subtitle}
                      </p>
                      <h3 className="text-2xl font-bold">
                        {destination.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
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

            {/* Page Indicator */}
            <div className="ml-8 text-white font-bold text-xl">01</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
