"use client";

const Footer = () => {
  return (
   <div className="bg-[#1D5DAA] py-6">
      <div className="container mx-auto max-w-6xl">
        {/* Event Info */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">
            INTERMEDIA Information Technology Competition IITC 2025
          </h3>
          <div className="flex items-center justify-center text-white/90 text-sm mb-2">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            UKM Intermedia Universitas Amikom Purwokerto
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Us */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4 border-b border-orange-400 pb-2 inline-block">
              Contact Us
            </h4>
            <div className="space-y-3 text-white/90 text-sm">
              <div className="font-medium">A Pangkat 3</div>

              <div className="flex items-start">
                <svg
                  className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Jl. Bambu Hitam No.3, RT.3/RW.1, Bambu Apus, Kec. Cipayung, 
                  Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13890
                </span>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>aPangkat3@gmail.com</span>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+62 858 9485 3481</span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4 border-b border-orange-400 pb-2 inline-block">
              Follow Us
            </h4>
            <div className="space-y-3 text-white/90 text-sm">
              <div className="text-white/70 text-xs mb-4"></div>

              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>aPangkat3</span>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>aPangkat3team</span>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.956.575-.105 1.073-.396 1.073-.883 0-.437-.018-1.888-.018-3.503-2.783.542-3.512-.675-3.731-1.297-.125-.318-.666-1.297-1.139-1.555-.389-.21-.944-.728-.017-.746.875-.017 1.5.803 1.708 1.138 1.001 1.683 2.598 1.209 3.237.916.102-.728.395-1.209.719-1.487-2.512-.286-5.14-1.258-5.14-5.584 0-1.235.446-2.247 1.138-3.038-.113-.285-.498-1.453.113-3.027 0 0 .963-.307 3.113 1.159.901-.252 1.868-.378 2.835-.378.967 0 1.934.126 2.835.378 2.15-1.466 3.113-1.159 3.113-1.159.611 1.574.226 2.742.113 3.027.692.791 1.138 1.803 1.138 3.038 0 4.344-2.646 5.298-5.175 5.584.408.351.775 1.027.775 2.082 0 1.505-.018 2.717-.018 3.09 0 .487.498.796 1.073.883C20.708 21.637 24 17.339 24 12.25 24 5.896 18.854.75 12.5.75z" />
                </svg>
                <span>aPangkat3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;