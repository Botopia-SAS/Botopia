"use client";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter(); // ✅ Para manejar la navegación

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center"
      style={{
        background: `linear-gradient(to bottom, #0a051e 20%, #1a0c44 60%, rgba(255, 255, 255, 0) 100%), url('/fondoBlog.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* 🚀 Sección Principal */}
      <div className="relative z-10 flex w-full max-w-7xl mx-auto px-10 items-center mt-40">
        {/* Texto a la izquierda */}
        <div className="w-1/2 flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Todo para amantes de la tecnología
          </h1>
          <p className="mt-4 text-lg text-white">
            Suscríbete a nuestro Newsletter para recibir nuestros blogs y
            podcast antes que nadie!
          </p>
          <button
            onClick={() => router.push("/blog")}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition rounded-xl text-white shadow-lg"
          >
            Suscribirme
          </button>
        </div>

        {/* Imagen a la derecha */}
        <div className="w-1/2 flex justify-center items-center">
          <div
            className="w-full h-[400px] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: "url('/Microfono.svg')" }}
          ></div>
        </div>
      </div>

      {/* 🔥 Secciones inferiores (Blogs - Podcasts - Redes Sociales) */}
      <div className="relative z-10 flex justify-center max-w-5xl mx-auto space-x-8 mt-12 items-stretch">
        {/* Sección Blogs */}
        <div className="w-1/3 bg-[#1a0c44] p-6 rounded-2xl shadow-lg text-center border border-purple-500 hover:scale-105 transition flex flex-col h-full">
          <div className="flex-grow">
            <h2 className="text-xl font-semibold text-white">Blogs</h2>
            <p className="text-gray-300 mt-2">
              Artículos sobre tecnología, IA y automatización.
            </p>
          </div>
          <button
            onClick={() => router.push("/blog")}
            className="mt-auto px-6 py-3 bg-purple-600 rounded-lg text-white hover:bg-purple-500 transition"
          >
            Ver Blogs
          </button>
        </div>

        {/* Sección Podcasts */}
        <div className="w-1/3 bg-[#1a0c44] p-6 rounded-2xl shadow-lg text-center border border-blue-500 hover:scale-105 transition flex flex-col h-full">
          <div className="flex-grow">
            <h2 className="text-xl font-semibold text-white">Podcasts</h2>
            <p className="text-gray-300 mt-2">
              Charlas con expertos y mentores de todas las áreas.
            </p>
          </div>
          <button className="mt-auto px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-500 transition">
            Escuchar
          </button>
        </div>

        {/* Sección Redes Sociales */}
        <div className="w-1/3 bg-[#1a0c44] p-6 rounded-2xl shadow-lg text-center border border-pink-500 hover:scale-105 transition flex flex-col h-full">
          <div className="flex-grow">
            <h2 className="text-xl font-semibold text-white">Redes Sociales</h2>
            <p className="text-gray-300 mt-2">
              Conéctate con nuestra comunidad en línea.
            </p>
          </div>
          <button className="mt-auto px-6 py-3 bg-pink-600 rounded-lg text-white hover:bg-pink-500 transition">
            Seguirnos
          </button>
        </div>
      </div>

      {/* 🚀 Sección de Blogs de prueba */}
      <div className="relative z-10 max-w-7xl mx-auto px-10 mt-20 mb-20">
        <h2 className="text-4xl font-bold text-white text-center mb-6">
          Últimos Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Blog 1 */}
          <div
            onClick={() => router.push("/blog/automatizacion")}
            className="relative cursor-pointer h-64 bg-cover bg-center rounded-lg overflow-hidden group"
            style={{ backgroundImage: "url('/blog1.jpg')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition"></div>
            <div className="relative z-10 p-6 text-white">
              <h3 className="text-2xl font-semibold">
                Cómo mejorar la automatización en Next.js
              </h3>
              <p className="text-gray-300">Febrero 10, 2024 - Juan Pérez</p>
            </div>
          </div>

          {/* Blog 2 */}
          <div
            onClick={() => router.push("/blog/api-nextjs")}
            className="relative cursor-pointer h-64 bg-cover bg-center rounded-lg overflow-hidden group"
            style={{ backgroundImage: "url('/blog2.jpg')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition"></div>
            <div className="relative z-10 p-6 text-white">
              <h3 className="text-2xl font-semibold">
                Integrando API con Next.js
              </h3>
              <p className="text-gray-300">Febrero 15, 2024 - María López</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
