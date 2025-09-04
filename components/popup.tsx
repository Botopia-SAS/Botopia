"use client";

import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function GiveawayPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const locale = useLocale();
  const t = useTranslations("Popup");

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("seenGiveawayPopup");
    if (!hasSeenPopup) {
      setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("seenGiveawayPopup", "true");
      }, 1500);
    }
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative w-[400px] bg-white text-gray-900 p-6 rounded-2xl shadow-2xl animate-fade-in flex flex-col items-center text-center">
        {/* Imagen Superior (Cambia la imagen según tu preferencia) */}
        <img
          src="/giveaway-image.svg"
          alt="Giveaway Botopia"
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
        <h2 className="text-2xl font-bold mb-2">{t("title")}</h2>
        <p
          className="text-gray-700 mb-4"
          dangerouslySetInnerHTML={{ __html: t("description") }}
        />
        <p className="text-sm font-semibold text-purple-600 mb-4">{t("cta")}</p>
        {/* Botón hacia ContactUs */}
        <Link
          href={`/${locale}/contactUs`}
          className="bg-purple-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-purple-600 w-full block"
        >
          {t("button")}
        </Link>
        {/* Nota de condiciones */}
        <p className="text-xs mt-3 text-gray-400">{t("note")}</p>
      </div>
    </div>
  );
}
