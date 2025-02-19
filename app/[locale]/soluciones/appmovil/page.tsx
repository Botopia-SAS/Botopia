"use client";

import Image from "next/image";
import Link from "next/link";
import ServicesCarousel from "@/components/servicesCarousel";

export default function AppMovil() {
  return (
    <div className="bg-gradient-to-br from-purple-400 to-purple-950 text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 text-center flex flex-col md:flex-row items-center justify-between py-20">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl font-extrabold mb-6 text-purple-800">
            <span className="text-white">Apps Móviles</span> <br /> Innovadoras
          </h1>
          <p className="text-lg text-white mb-6">
            Lleva tu negocio a la palma de la mano de tus clientes con
            soluciones móviles diseñadas a la medida. Desde la estrategia hasta
            la publicación en tiendas, creamos experiencias digitales
            impactantes.
          </p>
          <Link href="/contactUs">
            <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl text-lg font-semibold transition">
              Cotizar ahora
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/appM.png"
            alt="App Móvil"
            width={500}
            height={500}
            className="rounded-xl animate-float"
          />
        </div>
      </section>

      {/* Beneficios */}
      <section className="max-w-7xl mx-auto px-6 text-center -mt-16">
        <h2 className="text-5xl font-extrabold text-white mb-20">
          ¿Por qué tu negocio <br /> necesita una{" "}
          <span className="text-purple-900">App Móvil</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition"
            >
              <div className="text-purple-400 text-5xl mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tipos de Apps - Cuadros Flotantes */}
      <section className="max-w-7xl mx-auto px-6 text-center mt-20 flex flex-col md:flex-row items-center gap-28">
        <Image
          src="/movil.png"
          alt="Tipos de Apps"
          width={450}
          height={450}
          className="rounded-xl md:order-2 animate-float mt-10"
        />
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl font-extrabold text-white mb-6">
            Crea tu <span className="text-purple-900">solución</span> móvil{" "}
          </h2>
          <p className="text-lg text-white mb-14">
            Cada empresa tiene necesidades únicas, por eso creamos apps
            personalizadas que optimizan procesos, mejoran la interacción con
            los clientes y elevan tu marca al siguiente nivel.
          </p>
          <div className="relative flex flex-wrap gap-4">
            {appTypes.map((type, index) => (
              <div
                key={index}
                className={`bg-purple-${
                  index % 2 === 0 ? "700" : "500"
                } text-white px-6 py-4 rounded-lg shadow-md animate-float`}
                style={{
                  position: "relative",
                  top: `${index % 4 === 5 ? "10px" : "-10px"}`,
                  left: `${index % 1 === 0 ? "-10px" : "10px"}`,
                }}
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Complementarios (Carrusel) */}
      <section className="max-w-7xl mx-auto px-6 text-center mt-20">
        <h2 className="text-5xl font-extrabold text-white mb-10">
          <span className="text-purple-900">Servicios </span>Complementarios
        </h2>
        <ServicesCarousel />
      </section>
    </div>
  );
}

// Datos para la página
const benefits = [
  {
    icon: "🔥",
    title: "Mayor Engagement",
    description:
      "Aumenta la conexión con tus clientes a través de experiencias móviles intuitivas.",
  },
  {
    icon: "⚡",
    title: "Optimización Empresarial",
    description:
      "Automatiza procesos clave para mejorar la eficiencia y reducir costos.",
  },
  {
    icon: "🌎",
    title: "Expansión Global",
    description:
      "Escala tu negocio y llega a nuevos mercados con una app accesible en todo el mundo.",
  },
];

const appTypes = [
  "E-commerce",
  "Sistemas ERP para empresas",
  "Redes sociales",
  "Aplicaciones educativas",
  "Salud y bienestar",
  "Finanzas y banca",
  "Entrega a domicilio",
  "Transporte y movilidad",
];
