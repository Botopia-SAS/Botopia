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
    <section className="bg-[#6b21a8] to-black py-12">
      <div className="mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          {t("title")}
        </h2>
        {/* Carrusel animado */}
        <div className="relative overflow-hidden w-full h-32 py-8">
          {/* Degradado en los bordes */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(107, 33, 168, 1) 0%, rgba(107, 33, 168, 0) 20%, rgba(107, 33, 168, 0) 80%, rgba(107, 33, 168, 1) 100%)",
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
