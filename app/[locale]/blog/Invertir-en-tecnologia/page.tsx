"use client";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function BlogPage() {
  const router = useRouter();
  const t = useTranslations("Blog1"); // Cargar las traducciones desde el JSON

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-[#0a051e] text-white px-6 md:px-20">
      {/* 🚀 Hero Section */}
      <div className="relative z-10 flex w-full max-w-7xl pt-36 mx-auto py-16 flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white text-center">
          🚨 {t("title")}
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl text-justify leading-relaxed">
          {t("intro")}
          <br />
          <strong className="block mt-2 text-center">{t("highlight")}</strong>
        </p>
      </div>



      {/* 📖 Contenido del Blog */}
      <div className="w-full max-w-7xl px-6 md:px-12 py-12 space-y-10 bg-[#1a0c44] rounded-2xl shadow-xl border border-purple-500">
        {/* 📹 Video en lugar de imagen */}
        <video
          className="rounded-xl w-full h-auto object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Blog/Invertir.mp4" type="video/mp4" />
          {t("videoNotSupported")}
        </video>

        {/* Secciones del Blog */}
        <div className="space-y-8">
          {[1, 2, 3, 4, 5].map((index) => (
            <article key={index} className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                {t(`section${index}.title`)}
              </h2>
              <p className="text-gray-300 text-justify">{t(`section${index}.content1`)}</p>
              <p className="text-gray-300 text-justify">{t(`section${index}.content2`)}</p>
            </article>
          ))}
        </div>

        {/* 🏆 Caso de Éxito: LensPR */}
        <section className="bg-purple-900 p-6 rounded-xl shadow-lg border border-purple-500">
          <h2 className="text-2xl font-bold">{t("caseStudy.title")}</h2>

          {/* 📹 Video del caso de éxito */}
          <video className="rounded-xl w-full h-auto mt-4" autoPlay loop muted playsInline>
            <source src="/Blog/Lenspr.mp4" type="video/mp4" />
            {t("videoNotSupported")}
          </video>

          <p className="text-gray-300 mt-4 text-justify">{t("caseStudy.description")}</p>
          <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
            <li>📉 <strong>{t("caseStudy.point1")}</strong></li>
            <li>🚀 <strong>{t("caseStudy.point2")}</strong></li>
            <li>✅ <strong>{t("caseStudy.point3")}</strong></li>
          </ul>
        </section>
      </div>

      {/* 📩 Call to Action */}
      <section className="w-full max-w-7xl mt-12 text-center">
        <h2 className="text-2xl font-bold text-white">{t("cta.title")}</h2>
        <p className="text-gray-300 mt-4 text-justify max-w-2xl mx-auto">
          {t("intro")}
        </p>
        <button
          className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition rounded-xl text-white shadow-lg"
          onClick={() => router.push(`/${navigator.language.split("-")[0]}/contactUs`)}
        >
          {t("cta.button")}
        </button>
      </section>

      {/* 🔙 Botón de Regreso */}
      <div className="mt-10 w-full text-center max-w-7xl">
        <button
          className="px-6 py-3 bg-gray-700 rounded-xl text-white hover:bg-gray-600 transition w-full md:w-auto"
          onClick={() => router.push(`/${navigator.language.split("-")[0]}/blog`)}
        >
          {t("backToBlog")}
        </button>
      </div>
    </div>
  );
}
