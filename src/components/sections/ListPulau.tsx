"use client";

import { useState } from "react";
import Image from "next/image";

interface Province {
  title: string;
  subTitle: string;
  description: string;
  image: string;
}

const ListProvinsi = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;

  const provinsi: Province[] = [
    {
      title: "Jawa",
      subTitle: "Indonesia",
      description:
        "Pulau Jawa adalah pusat budaya dan sejarah Indonesia, rumah bagi Candi Borobudur, Prambanan, hingga Keraton Yogyakarta",
      image: "/images/Jawa.jpg",
    },
    {
      title: "Kalimantan",
      subTitle: "Indonesia",
      description:
        "Pulau Kalimantan dikenal dengan hutan hujan tropis yang luas, orangutan, dan kekayaan alam seperti tambang batubara",
      image: "/images/Kalimantan.jpg",
    },
    {
      title: "Sulawesi",
      subTitle: "Indonesia",
      description:
        "Pulau Sulawesi terkenal dengan keragaman budaya dan tradisi menariknya seperti rumah tongkonan Toraja",
      image: "/images/Sulawesi.jpg",
    },
    {
      title: "Sumatera",
      subTitle: "Indonesia",
      description:
        "Pulau Sumatera adalah pulau terbesar keenam di dunia dan dikenal dengan keindahan alamnya, termasuk Danau Toba",
      image: "/images/Sumatra.jpg",
    },
    {
      title: "Maluku dan Papua",
      subTitle: "Indonesia",
      description:
        "Wilayah timur Indonesia yang kaya akan budaya bahari, rempah-rempah, dan keindahan alam bawah laut",
      image: "/images/MalukudanPapua.jpg",
    },
    {
      title: "Bali dan Nusa Tenggara",
      subTitle: "Indonesia",
      description:
        "Kepulauan eksotis dengan pantai pink, komodo, dan tradisi tenun yang masih lestari hingga kini",
      image: "/images/BalidanNt.jpg",
    },
  ];

  // Calculate total pages based on actual data
  const totalPages = Math.ceil(provinsi.length / itemsPerPage);

  // Calculate which items to show based on current page
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = Math.min(startIndex + itemsPerPage, provinsi.length);
  const visibleProvinsi: Province[] = provinsi.slice(startIndex, endIndex);

  const handleNextPage = (): void => {
    setCurrentPage((prev: number) => (prev < totalPages ? prev + 1 : 1));
  };

  const handlePrevPage = (): void => {
    setCurrentPage((prev: number) => (prev > 1 ? prev - 1 : totalPages));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/opa.png')",
        backgroundColor: "#f8fafc", // fallback color
      }}
    >
      {/* Main Content - removed overlay */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Left Info Panel */}
          <div className="w-full lg:w-80 lg:flex-shrink-0 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1D5DAA] mb-3 sm:mb-4 leading-tight drop-shadow-lg">
              Pulau Budaya
              <br />
              Indonesia
            </h1>
            <p className="text-[#1D5DAA] text-sm leading-relaxed mb-4 sm:mb-6 max-w-lg lg:max-w-none drop-shadow-md">
              Temukan keunikan budaya Indonesia melalui karakteristik
              menariknya, seperti kerajaan dengan tradisi erat dan upaya kultur
              yang menggugah selera.
            </p>
            <button
              onClick={() => (window.location.href = "/explore")}
              className="bg-white w-full sm:w-auto lg:w-full border-2 border-[#1D5DAA] hover:bg-[#1D5DAA] text-[#1D5DAA] hover:text-white px-5 py-2 rounded-2xl text-sm font-medium transition-colors duration-300"
            >
              Pelajari Lebih Lanjut
            </button>
          </div>

          {/* Province Cards */}
          <div className="flex-1 w-full">
            {/* Pagination Controls */}
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="text-gray-400 text-sm font-medium mr-6">
                {String(currentPage).padStart(2, "0")}/
                {String(totalPages).padStart(2, "0")}
              </div>

              {/* Extended Progress Line - takes up most space */}
              <div className="flex-1 h-0.5 bg-gray-200 rounded-full overflow-hidden mr-6">
                <div
                  className="h-full bg-[#1D5DAA] transition-all duration-300 ease-out"
                  style={{ width: `${(currentPage / totalPages) * 100}%` }}
                />
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrevPage}
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 hover:border-[#1D5DAA] text-gray-600 hover:text-[#1D5DAA] transition-colors duration-200 rounded"
                >
                  <svg
                    className="w-4 h-4"
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
                  onClick={handleNextPage}
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#1D5DAA] border border-[#1D5DAA] hover:bg-[#1a52a0] text-white transition-colors duration-200 rounded"
                >
                  <svg
                    className="w-4 h-4"
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
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 lg:gap-4">
              {visibleProvinsi.map((prov: Province, index: number) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    {/* Background Image */}
                    <Image
                      src={prov.image}
                      alt={prov.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Blue Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D5DAA]/80 via-[#1D5DAA]/30 to-transparent"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 text-white">
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">
                        {prov.title}
                      </h3>
                      <p className="text-sm opacity-90 mb-2 sm:mb-3">
                        {prov.subTitle}
                      </p>

                      {/* Description - shows on hover */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          hoveredIndex === index
                            ? "max-h-24 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-xs leading-relaxed text-white/90">
                          {prov.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProvinsi;
