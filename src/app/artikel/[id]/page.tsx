import Image from "next/image";
import { notFound } from "next/navigation";
import { artikel } from "@/data/artikel";

export default function DetailArtikelPage({
  params,
}: {
  params: { id: string };
}) {
  const articleId = Number(params.id);
  const currentArticle = artikel.find((a) => a.id === articleId);

  if (!currentArticle) return notFound();

  const sidebarArticles = artikel
    .filter((a) => a.id !== articleId)
    .slice(0, 3)
    .map((a) => ({ id: a.id, title: a.title, image: a.headerImage }));

  return (
    <div className="min-h-screen bg-white">
      <section
        className="h-96 bg-cover bg-center relative"
        style={{
          backgroundImage:
            `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${currentArticle.headerImage})`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Artikel Indonesia
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#1D5DAA] leading-tight">
                {currentArticle.title}
              </h2>
              <p className="text-orange-500 font-bold text-m">
                {currentArticle.date}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-2/3">
                  <p className="text-gray-700 text-m leading-relaxed text-justify">
                    {currentArticle.desc1}
                  </p>
                </div>
                <div className="md:w-1/3">
                  <Image
                    src={currentArticle.image1}
                    alt="First illustration"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 text-m leading-relaxed text-justify">
                {currentArticle.desc2}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 text-m leading-relaxed text-justify">
                {currentArticle.desc3}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3">
                  <Image
                    src={currentArticle.image2}
                    alt="Second illustration"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700 text-m leading-relaxed text-justify">
                    {currentArticle.desc4}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Open Access Article
                </h3>
              </div>
              <div className="space-y-4">
                {sidebarArticles.map((a) => (
                  <a
                    key={a.id}
                    href={`/artikel/${a.id}`}
                    className="flex gap-3 p-3 bg-white rounded-lg hover:shadow-sm transition-shadow cursor-pointer"
                  >
                    <Image
                      src={a.image}
                      alt={a.title}
                      width={400}
                      height={400}
                      quality={90}
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-800 leading-tight line-clamp-3">
                        {a.title}
                      </h4>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}