"use client";

import Image from "next/image";
import Link from "next/link";
import ServicesCarousel from "@/components/servicesCarousel";

export default function ChatbotIA() {
  return (
    <div className="relative bg-gradient-to-br from-black to-purple-950 text-white overflow-hidden">
      
      {/* 🌌 HERO SECTION - DISTRIBUCIÓN MODERNA */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between relative">
        <div className="md:w-1/2 text-left relative z-10">
          <h1 className="text-6xl font-extrabold text-white leading-tight">
            Chatbots & <span className="text-purple-400">IA Avanzada</span> 🤖  
          </h1>
          <p className="text-lg text-white/80 mt-6">
            Transforma la forma en que interactúas con tus clientes con **asistentes virtuales**  
            que automatizan tareas, mejoran la conversión y optimizan el servicio al cliente.
          </p>
          <Link href="/contact">
            <button className="mt-6 bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl text-lg font-semibold transition transform hover:scale-105">
              Cotizar ahora
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center relative">
          {/* Ilustración con efecto 3D */}
          <Image src="/chatbot-main.png" alt="Chatbot IA" width={500} height={500} className="rounded-xl shadow-lg animate-float" />
        </div>
      </section>

      {/* 🚀 SECCIÓN 1: ¿POR QUÉ UN CHATBOT? */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <h2 className="text-5xl font-extrabold text-white text-center mb-16">
          ¿Por qué implementar un <span className="text-purple-400">Chatbot IA?</span>  
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
              <div className="text-purple-400 text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-white/90">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💬 SECCIÓN 2: TIPOS DE CHATBOTS */}
      <section className="max-w-7xl mx-auto px-6 text-center mt-24 flex flex-col items-center gap-12">
        <h2 className="text-5xl font-extrabold text-white mb-10">
          Explora los <span className="text-purple-400">Tipos de Chatbots</span> IA  
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chatbotTypes.map((type, index) => (
            <div key={index} className="bg-purple-800 text-white px-6 py-4 rounded-lg shadow-md transform hover:scale-105 transition">
              {type}
            </div>
          ))}
        </div>
      </section>

      {/* 🔧 SECCIÓN 3: CÓMO DESARROLLAMOS TU CHATBOT */}
      <section className="max-w-7xl mx-auto px-6 text-center mt-24">
        <h2 className="text-5xl font-extrabold text-white mb-10">
          <span className="text-purple-400">Así desarrollamos</span> tu Chatbot IA  
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {developmentSteps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-900 text-white px-6 py-4 rounded-lg shadow-md transition hover:scale-105 relative"
              style={{
                transform: `translateY(${index % 2 === 0 ? "10px" : "-10px"})`,
              }}
            >
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* 🛠 SECCIÓN 4: CASOS DE USO */}
      <section className="max-w-7xl mx-auto px-6 text-center mt-24">
        <h2 className="text-5xl font-extrabold text-white mb-10">
          <span className="text-purple-400">Casos de Uso</span> en Diferentes Industrias  
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-purple-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="text-2xl font-semibold mb-3">{useCase.title}</h3>
              <p className="text-white/90">{useCase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🎯 SERVICIOS COMPLEMENTARIOS */}
      <section className="max-w-7xl mx-auto px-6 text-center mt-20">
        <h2 className="text-5xl font-extrabold text-white mb-10">
          <span className="text-purple-900">Servicios </span>Complementarios
        </h2>
        <ServicesCarousel />
      </section>
    </div>
  );
}

// Beneficios de un Chatbot IA
const benefits = [
  { icon: "🤖", title: "Automatización Inteligente", description: "Automatiza respuestas y reduce costos de atención al cliente." },
  { icon: "📈", title: "Aumento de Conversión", description: "Mejora la conversión con chatbots de ventas estratégicos." },
  { icon: "💬", title: "Experiencia Personalizada", description: "Brinda una atención única a cada usuario con IA avanzada." },
];

// Tipos de Chatbots
const chatbotTypes = [
  "Chatbots de Atención al Cliente",
  "Asistentes Virtuales con IA",
  "Chatbots de Ventas y Conversión",
  "Chatbots para Reservas y Agendamiento",
  "Automatización con IA en WhatsApp",
  "Integraciones con CRM y Bases de Datos",
];

// Proceso de desarrollo
const developmentSteps = [
  "Definición de Estrategia y Objetivos",
  "Diseño UX/UI de la Conversación",
  "Desarrollo con IA y NLP (Procesamiento de Lenguaje Natural)",
  "Integración con APIs y CRM",
  "Pruebas y Ajustes de Optimización",
  "Despliegue y Soporte Continuo",
];

// Casos de Uso
const useCases = [
  { title: "E-commerce", description: "Automatiza ventas y atención en tiendas online." },
  { title: "Salud y Medicina", description: "Asistentes virtuales para consultas y agendamiento médico." },
  { title: "Finanzas", description: "Chatbots que ayudan con transacciones y asesoría financiera." },
];
