"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface DemoProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  demoLink: string;
}

const demoProducts: DemoProduct[] = [
  {
    id: "1",
    title: "E-commerce Personalizado",
    description: "Explora cómo nuestra solución de e-commerce puede transformar tu negocio.",
    image: "/dumpster-solid-w.svg",
    demoLink: "#",
  },
  {
    id: "2",
    title: "Chat-Bot de WhatsApp",
    description: "Descubre cómo integramos IA en tus plataformas para optimizar procesos.",
    image: "/robot-solid-w.svg",
    demoLink: "#",
  },
  {
    id: "3",
    title: "Sitios Web a Medida",
    description: "Crea sitios web personalizados y optimizados para tus necesidades.",
    image: "/globe-solid-w.svg",
    demoLink: "#",
  },
];

export default function DemosPage() {
  const t = useTranslations("Demos"); // Hook para traducir los textos

  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black text-white pt-24">
      {/* Hero Section */}
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
        <p className="text-lg mb-4">{t("description")}</p>
      </section>

      {/* Lista de Demos */}
      <section id="demo-products" className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoProducts.map((product) => (
            <div
              key={product.id}
              className="bg-black rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-gray-400 mb-4">{product.description}</p>
              <a
                href={product.demoLink}
                className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600"
              >
                {t("viewDemo")}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="bg-purple-800 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">{t("contactTitle")}</h2>
        <p className="text-gray-300 mb-8">{t("contactDescription")}</p>
        <a
          href="/contact"
          className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600"
        >
          {t("contactButton")}
        </a>
      </section>
    </div>
  );
}
