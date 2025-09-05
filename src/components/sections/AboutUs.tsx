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
               Budaya Digital Nusantara adalah sebuah gerakan yang menekankan pentingnya pemanfaatan teknologi digital dalam kehidupan 
               sehari-hari masyarakat Indonesia. Konsep ini menggabungkan nilai-nilai 
               budaya lokal dengan perkembangan teknologi modern untuk menciptakan ekosistem digital yang inklusif, kreatif, dan berdaya saing global.
              </p>

              <p>
                Inisiatif ini bertujuan untuk memperkuat literasi digital, mendorong kolaborasi antar komunitas, serta melestarikan kearifan lokal melalui 
                edia digital agar tetap relevan di era transformasi teknologi.
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
