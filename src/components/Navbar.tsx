"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 px-4 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/20 backdrop-blur-md rounded-xl px-6 py-3 shadow-lg border border-white/30">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/NUSPHERE.png"
                  alt="Nusantara Provinces"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-bold text-xl tracking-wide">
                  NUSPHERE
                </span>
                <div className="text-white/80 text-xs font-medium -mt-1">
                  A PANGKAT 3
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-white font-medium hover:text-blue-200 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white font-medium hover:text-blue-200 transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/explore"
                className="text-white font-medium hover:text-blue-200 transition-colors duration-200"
              >
                Explore
              </Link>
              <Link
                href="/artikel"
                className="text-white font-medium hover:text-blue-200 transition-colors duration-200"
              >
                Artikel
              </Link>
              <Link
                href="/kontak"
                className="text-white font-medium hover:text-blue-200 transition-colors duration-200"
              >
                Kontak
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
                className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                  isMenuOpen ? "transform rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
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
            <div className="space-y-4 border-t border-white/20 pt-4">
              <Link
                href="/"
                className="block py-2 text-white font-medium hover:text-blue-200 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block py-2 text-white font-medium hover:text-blue-200 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/explore"
                className="block py-2 text-white font-medium hover:text-blue-200 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Explore
              </Link>
              <Link
                href="/artikel"
                className="block py-2 text-white font-medium hover:text-blue-200 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Artikel
              </Link>
              <Link
                href="/kontak"
                className="block py-2 text-white font-medium hover:text-blue-200 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
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
