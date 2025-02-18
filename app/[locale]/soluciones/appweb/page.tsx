"use client";

import Image from "next/image";
import Link from "next/link";
import ServicesCarousel from "@/components/servicesCarousel";

export default function AppWeb() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-purple-950 text-white">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-20 px-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl font-extrabold mb-6 text-purple-400">
            <span className="text-white">Apps Web</span> <br /> Eficientes y Escalables
          </h1>
          <p className="text-lg text-white mb-6">
            Construimos aplicaciones web modernas, escalables y seguras.  
            Desde el diseño hasta el despliegue en la nube, te acompañamos en cada paso.
          </p>
          <Link href="/contact">
            <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl text-lg font-semibold transition">
              Cotizar ahora
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image src="/appWEB.png" alt="App Web" width={500} height={500} className="rounded-xl animate-float" />
        </div>
      </section>

      {/* Antes de desarrollar tu App Web */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap gap-8 mt-10">
        <h2 className="text-5xl font-extrabold text-center text-white w-full -mt-16 mb-20">
          <span className="text-purple-400">Antes de desarrollar</span> tu App Web, considera:
        </h2>
        {considerations.map((item, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-lg flex items-center space-x-4 w-full md:w-[48%] lg:w-[30%] hover:scale-105 transition">
            <div className="bg-purple-600 p-4 rounded-full text-white text-3xl">{item.icon}</div>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
          </div>
        ))}
      </section>

      {/* Innovación sin Límites - Imagen alineada a la izquierda */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 mt-20">
        <div className="md:w-[40%] flex justify-start">
          <Image src="/weblimites.png" alt="Innovación sin Límites" width={500} height={500} className="rounded-xl animate-float" />
        </div>
        <div className="md:w-[60%] text-left">
          <h2 className="text-5xl font-extrabold text-white mb-6">
            <span className="text-purple-400">Innovación</span> sin Límites
          </h2>
          <p className="text-lg text-white mb-12">
            No se trata solo de desarrollar una app, sino de crear <span className="text-white font-bold">una experiencia </span>  
            que revolucione la forma en que interactúas con tus clientes.  
            Cada clic, cada pantalla y cada función deben tener un propósito claro.
          </p>
          <ul className="list-disc list-inside text-white">
            {innovationList.map((point, index) => (
              <li key={index} className="mb-2">{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Así creamos tu App Web - Imagen a la derecha, cuadros flotantes más separados */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 mt-20">
        <div className="md:w-[50%] text-left">
          <h2 className="text-5xl font-extrabold text-white mb-16 -mt-24">
            <span className="text-purple-400">Así creamos</span> tu App Web
          </h2>
          <p className="text-lg text-white mb-10">
            Nuestro proceso de desarrollo es ágil y eficiente, asegurando que cada detalle  
            de tu aplicación web esté optimizado para el rendimiento y la escalabilidad.
          </p>
          
          {/* Contenedor de cuadros flotantes bien distribuidos */}
          <div className="relative w-full h-[380px]">
            {developmentSteps.map((step, index) => (
              <div key={index} className={`absolute p-4 w-60 text-center rounded-xl shadow-lg text-white animate-float transition
                ${index === 0 ? "bg-purple-700 top-0 left-0" : ""}
                ${index === 1 ? "bg-purple-600 top-20 left-64" : ""}
                ${index === 2 ? "bg-purple-700 top-40 left-16" : ""}
                ${index === 3 ? "bg-purple-600 top-56 left-80" : ""}
                ${index === 4 ? "bg-purple-700 top-72 left-20" : ""}
                ${index === 5 ? "bg-purple-600 top-88 left-96" : ""}
              `}>
                <p className="text-sm font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-[45%] flex justify-end">
          <Image src="/web.png" alt="Proceso Desarrollo App Web" width={500} height={500} className="rounded-xl animate-float" />
        </div>
      </section>

      {/* Servicios Complementarios (Carrusel) */}
      <section className="max-w-7xl mx-auto flex flex-col gap-8 mt-10">
        <h2 className="text-5xl font-extrabold text-center text-white">
          Servicios <span className="text-purple-400">Complementarios</span>
        </h2>
        <ServicesCarousel />
      </section>
    </div>
  );
}

// Datos para la sección "Antes de desarrollar tu App Web"
const considerations = [
  { icon: "🎯", title: "Definir los objetivos del proyecto." },
  { icon: "👨‍💻", title: "Elegir la tecnología adecuada." },
  { icon: "🔗", title: "Integración con otros sistemas." },
  { icon: "⚡", title: "Optimización de rendimiento." },
  { icon: "🔒", title: "Garantizar seguridad y privacidad." },
  { icon: "☁️", title: "Despliegue en la nube." },
  { icon: "📈", title: "Escalabilidad y mantenimiento." },
  { icon: "🚀", title: "Estrategia de lanzamiento y marketing." },
];

// Innovación sin Límites
const innovationList = [
  "Apps con IA y machine learning.",
  "Notificaciones y engagement optimizado.",
  "Diseños modernos y adaptables.",
  "Integraciones con múltiples servicios.",
  "Automatización y eficiencia operativa.",
];

// Pasos del desarrollo (Distribución mejorada)
const developmentSteps = [
  "Análisis de requerimientos y planificación.",
  "Diseño UI/UX centrado en la experiencia de usuario.",
  "Desarrollo con tecnologías modernas (Next.js, React, Node.js, etc.).",
  "Integración con APIs y bases de datos.",
  "Pruebas de calidad y optimización.",
  "Despliegue en servidores y monitoreo continuo.",
];