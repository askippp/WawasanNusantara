import { notFound } from "next/navigation";
import { provinsi } from "@/data/pulau";
import Image from "next/image";

export default function DetailPulauPage({
  params,
}: {
  params: { id: string };
}) {
  const pulauId = Number(params.id);
  const pulau = provinsi.find((p) => p.id === pulauId);

  if (!pulau) return notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${pulau.image})`,
        }}
      >
        <h1 className="text-6xl font-bold text-white">{pulau.title}</h1>
      </div>

      {/* Quote Section with Ornaments */}
      <div className="w-full py-12 relative">
        {/* Ornamen kiri */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-50 h-40 md:w-40 md:h-40">
          <Image
            src="/images/image42.png"
            alt="Left ornament"
            fill
            className="object-contain"
          />
        </div>

        {/* Ornamen kanan */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-40 md:w-40 md:h-40">
          <Image
            src="/images/image42.png"
            alt="Right ornament"
            fill
            className="object-contain scale-x-[-1]"
          />
        </div>

        {/* Text Content di tengah */}
        <div className="max-w-2xl mx-auto text-center px-6">
          <p className="text-gray-800 text-base md:text-2xl font-light leading-relaxed">
            {pulau.slogan}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <div className="flex-1 h-px bg-black max-w-40"></div>
          <svg
            className="w-10 h-10 text-black fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 2 L15 9 L22 12 L15 15 L12 22 L9 15 L2 12 L9 9 Z" />
          </svg>
          <div className="flex-1 h-px bg-black max-w-40"></div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-6 py-16">
        {/* Large decorative background text */}
        <div className="relative">
          {/* Content Grid */}
          <div className="relative z-10">
            <div className="grid grid-cols-12 gap-6 items-start">
              {/* Left Column - Images */}
              <div className="col-span-12 md:col-span-4">
                {pulau.images && pulau.images.length >= 4 ? (
                  <div className="grid grid-cols-2 gap-4">
                    {/* Gambar 1 */}
                    <div className="relative w-full h-40 md:h-48">
                      <Image
                        src={pulau.images[0]}
                        alt={`${pulau.title} image 1`}
                        fill
                        className="object-cover rounded-lg shadow-md"
                      />
                    </div>

                    {/* Gambar 2 */}
                    <div className="relative w-full h-40 md:h-48">
                      <Image
                        src={pulau.images[1]}
                        alt={`${pulau.title} image 2`}
                        fill
                        className="object-cover rounded-lg shadow-md"
                      />
                    </div>

                    {/* Gambar 3 */}
                    <div className="relative w-full h-32 md:h-40">
                      <Image
                        src={pulau.images[2]}
                        alt={`${pulau.title} image 3`}
                        fill
                        className="object-cover rounded-lg shadow-md"
                      />
                    </div>

                    {/* Gambar 4 */}
                    <div className="relative w-full h-32 md:h-40">
                      <Image
                        src={pulau.images[3]}
                        alt={`${pulau.title} image 4`}
                        fill
                        className="object-cover rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-48">
                    <Image
                      src={pulau.image}
                      alt={`${pulau.title} default image`}
                      fill
                      className="object-cover rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>

              {/* Right Column - Content */}
              <div className="col-span-12 md:col-span-8 md:pl-8">
                {/* Title */}
                <h2 className="text-5xl md:text-6xl text-black mb-6">
                  {pulau.title}
                </h2>

                {/* Content paragraphs */}
                <div className="space-y-4">
                  <p className="text-gray-700 text-m leading-relaxed text-justify">
                    {pulau.detailDesc1 ||
                      `Experience the magical beauty of ${pulau.title}, where ancient traditions meet stunning natural landscapes. From pristine beaches to majestic mountains, every corner tells a story of rich cultural heritage and breathtaking scenery.`}
                  </p>

                  <p className="text-gray-700 text-m leading-relaxed text-justify">
                    {pulau.detailDesc2 ||
                      `Discover the authentic local cuisine that reflects generations of culinary wisdom. Each dish carries the essence of local ingredients and traditional cooking methods, creating flavors that are both unique and memorable.`}
                  </p>

                  <p className="text-gray-700 text-m leading-relaxed text-justify">
                    {pulau.detailDesc3 ||
                      `Immerse yourself in the warm hospitality of the local people and witness traditional ceremonies that have been preserved for centuries. This is more than just a destination - it's a journey through living history and vibrant culture.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
