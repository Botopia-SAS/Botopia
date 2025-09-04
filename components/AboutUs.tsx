import Link from "next/link";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

export default function AboutUs() {
  const locale = useLocale();
  const t = useTranslations("AboutUs");

  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Título Principal */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-800 leading-tight">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl max-w-5xl mx-auto text-gray-600 leading-relaxed text-center">
            {t("intro.1")}
            <span className="text-purple-600 font-semibold">
              {t("intro.company")}
            </span>
            {t("intro.2")}
          </p>
        </div>

        {/* Secciones de Misión, Visión y Propuesta de Valor */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Misión */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {t("mission.title")}
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-justify">
              {t("mission.text")}
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌟</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {t("vision.title")}
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-justify">
              {t("vision.text")}
            </p>
          </div>

          {/* Propuesta de Valor */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💎</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {t("commitment.title")}
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-justify">
              {t("commitment.text")}
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link
            href={`/${locale}/contactUs`}
            className="inline-block bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
