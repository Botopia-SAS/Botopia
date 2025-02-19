"use client";
import { useRouter } from "next/navigation";

export default function BlogComingSoon() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a051e] to-[#1a0c44] flex flex-col justify-center items-center text-white px-6 text-center">
      {/* Encabezado */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in">
        🚀 ¡Grandes cosas están en camino!
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl animate-slide-up">
        Estamos trabajando en contenido increíble para ti. Muy pronto podrás
        explorar nuestros blogs sobre tecnología, IA y automatización. 🎉
      </p>

      {/* Imagen con efecto glitch */}
      <div className="relative mt-10">
        <img
          src="/blog-coming-soon.png"
          alt="Blog Coming Soon"
          className="w-80 md:w-96 rounded-lg shadow-xl animate-glitch"
        />
      </div>

      {/* Animación de carga */}
      <div className="flex space-x-2 mt-6 animate-pulse">
        <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
      </div>

      {/* Botón para volver */}
      <button
        onClick={() => router.push("/")}
        className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition rounded-xl text-white shadow-lg text-lg font-semibold"
      >
        Volver al Inicio
      </button>
    </div>
  );
}
