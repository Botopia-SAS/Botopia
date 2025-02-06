"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false); // Estado del popup
  const t = useTranslations("Hero");
  const locale = useLocale();

  // Mostrar el popup solo si no se ha visto antes (usa localStorage)
  useEffect(() => {
    localStorage.removeItem("seenPopup"); // Elimina el registro para pruebas
    console.log("Ejecutando useEffect para el popup...");
    const hasSeenPopup = localStorage.getItem("seenPopup");
    if (!hasSeenPopup) {
      setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("seenPopup", "true"); // Guarda que ya se mostró
      }, 1500);
    }
  }, []);

  return (
    <section className="md:mt-8 bg-gradient-to-b from-black to-purple-800 text-white relative justify-center items-center">
      <div className="container pt-32 lg:pt-56 lg:py-16 px-4 md:mx-28 items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Contenedor del título y subtítulo */}
          <div className="lg:w-1/2 lg:text-left text-center">
            <h1 className="text-3xl below700:text-xl font-bold mb-4 lg:text-5xl lg:mb-12">
              {t("title.part1")} <br />
              <span className="text-purple-400">
                {t("title.highlight1")}
              </span>{" "}
              {t("title.and")}{" "}
              <span className="text-purple-400">{t("title.highlight2")}</span>
            </h1>
            <p className="text-lg lg:text-2xl lg:mb-20 below700:text-base">
              <br />
              {t("subtitle.part1")}{" "}
              <span className="font-bold">{t("subtitle.part2")}</span>{" "}
              <br className="hidden lg:block" />
              {t("subtitle.part3")}
            </p>

            {/* Botones */}
            <div className="flex flex-col lg:flex-row justify-start lg:justify-start space-y-6 lg:space-y-0 lg:space-x-6 lg:mt-14 mt-6">
              <a
                href="#"
                className="border-2 border-[#9165f3] text-[#9165f3] py-3 px-6 rounded-md font-semibold hover:bg-purple-500 hover:text-white"
              >
                {t("buttons.contactSales")}
              </a>
              <Link
                href={`/${locale}/demos`}
                className="border border-black shadow-lg jump-button bg-white text-black py-3 px-6 rounded-md font-semibold hover:bg-purple-600"
              >
                {t("buttons.tryUsFree")}
              </Link>
            </div>
          </div>

          {/* Contenedor de imágenes desktop */}
          <div className="hidden lg:w-1/2 lg:relative lg:flex lg:justify-end flex-wrap lg:items-center gap-4 lg:py-0 py-10 pt-32 px-10">
            <img
              src="/astronave.svg"
              alt={t("images.mainAlt")}
              className="hidden lg:block max-w-full max-h-[400px] lg:w-auto lg:h-96 lg:relative lg:z-20 top-8"
            />
            <img
              src="/chatbot.png"
              alt={t("images.icon1Alt")}
              className="absolute w-40 lg:w-48 h-auto lg:top-14 lg:right-80 animate-float"
              style={{ animationDelay: "4s" }}
            />
            <img
              src="/paginaweb.png"
              alt={t("images.icon2Alt")}
              className="absolute w-40 lg:w-48 lg:h-auto right-56 lg:-left-4 animate-float lg:top-80"
              style={{ animationDelay: "3s" }}
            />
            <img
              src="/app.png"
              alt={t("images.icon3Alt")}
              className="absolute w-40 lg:w-48 lg:h-auto top-96 lg:top-0 lg:right-7 animate-float"
              style={{ animationDelay: "2s" }}
            />
            <img
              src="/icon4.png"
              alt={t("images.icon4Alt")}
              className="absolute w-40 lg:w-48 lg:h-auto top-96 right-56 lg:-top-20 lg:right-40 animate-float"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>

      {/* Popup Automático (solo aparece una vez por sesión) */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative w-[380px] bg-white text-gray-900 p-6 rounded-2xl shadow-2xl animate-fade-in flex flex-col items-center text-center">
            {/* Imagen Superior */}
            <img
              src="/popup-image.svg"
              alt="Promoción"
              className="w-32 h-32 mb-4"
            />

            {/* Botón de Cerrar */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
            >
              ✖
            </button>

            {/* Contenido del Popup */}
            <h2 className="text-2xl font-bold mb-2">
              🚀 ¡Prueba Gratis Nuestro Chatbot!{" "}
            </h2>
            <p className="text-gray-700 mb-4 text-left">
              ✅ <span className="">Responde consultas en segundos</span> <br />
              ✅ <span className="">Funciona en WhatsApp y Web</span> <br />✅{" "}
              <span className="">
                Configuración en minutos, sin necesidad de código
              </span>
            </p>

            {/* Botón de Acción */}
            <Link
              href={`https://www.botopia.tech/es/demos/whatsapp-bot-demo`}
              className="bg-purple-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-purple-600 w-full block"
            >
              ¡Empieza Ahora!
            </Link>

            {/* Nota */}
            <p className="text-xs mt-3 text-gray-400">
              ¡Comencemos a transformar el futuro juntos!
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
