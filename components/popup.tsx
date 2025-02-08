"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);
  const locale = useLocale();

  // Mostrar el popup solo si no se ha visto en la sesión actual
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("seenPopup");
    if (!hasSeenPopup) {
      setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("seenPopup", "true"); // Se borra cuando se cierra la pestaña
      }, 1500);
    }
  }, []);

  if (!showPopup) return null; // Si el popup no debe mostrarse, no renderizar nada

  return (
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
          🚀 ¡Prueba Gratis Nuestro Chatbot!
        </h2>
        <p className="text-gray-700 mb-4">
          ✅ <span className="font-bold">Responde consultas en segundos</span>{" "}
          <br />✅ <span className="font-bold">Funciona en WhatsApp y Web</span>{" "}
          <br />✅{" "}
          <span className="font-bold">
            Configuración en minutos, sin necesidad de código
          </span>
        </p>

        {/* Botón de Acción */}
        <a
          href="https://botopia-5mvketyum-david-espejos-projects.vercel.app/en/demos/whatsapp-bot-demo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-purple-600 w-full block"
        >
          ¡Probar Gratis Ahora!
        </a>

        {/* Nota */}
        <p className="text-xs mt-3 text-gray-400">
          * Aplican términos y condiciones.
        </p>
      </div>
    </div>
  );
}
