"use client";

const AboutUs = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundColor: "white",
      }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-[#1D5DAA]">Introduction</span>
                <br />
                <span className="text-[#FFA645]">Budaya Digital</span>
                <br />
                <span className="text-[#1D5DAA]">Nusantara</span>
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 text-sm lg:text-base leading-relaxed">
              <p>
                The Indonesia International Smart City Expo & Forum (IISCEF) is
                an annual international exhibition and forum that brings
                together government leaders, technology providers, distributors,
                and industry professionals in one strategic platform.
              </p>

              <p>
                Organized by PT Napindo Media Ashatama, IISCEF drives digital
                transformation through smart city.
              </p>
            </div>
          </div>

          {/* Right Content */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
