"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Simple detection berdasarkan scroll position
      // Anda bisa customize values ini sesuai dengan section di website
      if (scrollY > 100 && scrollY < 800) {
        // Misalnya di section ini background putih/terang
        setIsDarkSection(false);
      } else if (scrollY > 1200 && scrollY < 2000) {
        // Section lain yang terang
        setIsDarkSection(false);
      } else {
        // Default dark section
        setIsDarkSection(true);
      }
    };

    // Jalankan saat pertama load
    handleScroll();

    // Event listener untuk scroll
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dynamic classes
  const getTextColor = () => (isDarkSection ? "text-white" : "text-gray-900");
  const getHoverColor = () =>
    isDarkSection ? "hover:text-blue-200" : "hover:text-blue-600";
  const getHamburgerColor = () => (isDarkSection ? "bg-white" : "bg-gray-900");
  const getSubtextColor = () =>
    isDarkSection ? "text-white/80" : "text-gray-600";

  return (
    <nav className="fixed w-full top-0 z-50 px-4 py-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`bg-white/20 backdrop-blur-md rounded-xl px-6 py-3 shadow-lg border transition-all duration-300 ${
            isDarkSection ? "border-white/30" : "border-gray-200/50"
          }`}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                <Image
                  src="/images/NUSPHERE.png"
                  alt="Nusantara Provinces"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-bold text-lg sm:text-xl tracking-wide transition-colors duration-300 ${getTextColor()}`}
                >
                  NUSPHERE
                </span>
                <div
                  className={`text-xs font-medium -mt-1 transition-colors duration-300 ${getSubtextColor()}`}
                >
                  A PANGKAT 3
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={`font-medium transition-colors duration-300 ${getTextColor()} ${getHoverColor()}`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`font-medium transition-colors duration-300 ${getTextColor()} ${getHoverColor()}`}
              >
                About
              </Link>
              <Link
                href="/explore"
                className={`font-medium transition-colors duration-300 ${getTextColor()} ${getHoverColor()}`}
              >
                Explore
              </Link>
              <Link
                href="/artikel"
                className={`font-medium transition-colors duration-300 ${getTextColor()} ${getHoverColor()}`}
              >
                Artikel
              </Link>
            </div>

            {/* Language Switcher */}
            <div className="hidden md:block">
              <div className="bg-white/90 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors duration-200 cursor-pointer">
                ID / EN
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex flex-col space-y-1.5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 transition-all duration-300 ${getHamburgerColor()} ${
                  isMenuOpen ? "transform rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 transition-all duration-300 ${getHamburgerColor()} ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 transition-all duration-300 ${getHamburgerColor()} ${
                  isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isMenuOpen ? "max-h-96 mt-4" : "max-h-0"
            }`}
          >
            <div
              className={`space-y-4 border-t pt-4 transition-colors duration-300 ${
                isDarkSection ? "border-white/20" : "border-gray-200"
              }`}
            >
              <Link
                href="/"
                className={`block py-2 font-medium transition-colors duration-300 ${getTextColor()} ${getHoverColor()}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block py-2 font-medium transition-colors duration-300 ${getTextColor()} ${getHoverColor()}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/explore"
                className={`block py-2 font-medium transition-colors duration-300 ${getTextColor()} ${getHoverColor()}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Explore
              </Link>
              <Link
                href="/artikel"
                className={`block py-2 font-medium transition-colors duration-300 ${getTextColor()} ${getHoverColor()}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Artikel
              </Link>
              
              <div className="pt-2">
                <div className="bg-white/90 text-gray-700 px-4 py-2 rounded-full text-sm font-medium inline-block">
                  ID / EN
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
