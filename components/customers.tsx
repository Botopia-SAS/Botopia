"use client";
import React from "react";
import { useTranslations } from "next-intl";

const clientes = [
  "/cocacola.svg",
  "/startupscalendar1.svg",
  "/gip.svg",
  "/eltambor.svg",
  "/drivingschool.svg",
  "/fridoom.svg",
];

export default function Clientes() {
  const t = useTranslations("Clientes"); // Hook para traducir los textos

  return (
    <section className="bg-[#6b21a8] py-12">
      <div className="mx-auto w-full text-center justify-center align-middle">
          <button
            className="shadow-md shadow-gray-700 text-xl md:text-3xl font-light text-center mb-8 text-white py-2 px-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full hover:scale-105 transition-transform"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {t("title")}
          </button>
        {/* Carrusel animado */}
        <div className="relative overflow-hidden w-full h-32 py-8">
          {/* Degradado en los bordes */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              zIndex: 10,
            }}
          />
          {/* Contenedor animado */}
          <div className="flex w-[500%] md:w-[235%] animate-marquee">
            {clientes.concat(clientes).map((cliente, index) => (
              <div
                key={index}
                className="min-w-[100px] md:min-w-[300px] md:h-[60px] flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={cliente}
                  alt={t("images.alt", { index: index + 1 })}
                  className="h-auto max-h-[100px] w-48 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
