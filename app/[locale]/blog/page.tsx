"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export default function HeroSection() {
  const router = useRouter(); // ✅ Para manejar la navegación
  const [email, setEmail] = useState("");

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center"
      style={{
        background: `linear-gradient(to bottom, #0a051e 20%, #1a0c44 60%, rgba(255, 255, 255, 0) 100%)`,
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
            podcasts antes que nadie!
          </p>

          {/* Formulario de suscripción con FormSubmit */}
          <form
            className="mt-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
            action="https://formsubmit.co/contacto@botopia.tech" // Reemplázalo con tu correo
            method="POST"
            onSubmit={(e) => {
              setTimeout(() => {
                setEmail(""); // Borra el campo después de enviarlo
              }, 100);
            }}
          >
            {/* Campo de Email */}
            <input
              type="email"
              name="email"
              required
              placeholder="Tu correo electrónico"
              className="p-3 border border-gray-300 rounded-xl text-black w-full sm:w-auto focus:ring-2 focus:ring-[#450161]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Botón de Enviar */}
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition rounded-xl text-white shadow-lg"
            >
              Suscribirme
            </button>

            {/* Configuración Oculta para FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="Nueva suscripción al Newsletter"
            />
            <input
              type="hidden"
              name="message"
              value="Un usuario quiere suscribirse al Newsletter de Botopia."
            />
            <input
              type="hidden"
              name="_next"
              value="https://www.botopia.tech/es/blog"
            />
          </form>
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
            onClick={() => {
              const section = document.getElementById("ultimos-blogs");
              if (section) {
                const yOffset = -120; // Ajusta este valor según el tamaño de tu navbar
                const y =
                  section.getBoundingClientRect().top +
                  window.scrollY +
                  yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
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
          <button
            className="mt-auto px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-500 transition"
            onClick={() =>
              window.open(
                "https://www.youtube.com/@Botopia-SAS/playlists",
                "_blank"
              )
            }
          >
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
          {/* Redes sociales */}
          <div className="flex justify-center space-x-4 w-full mt-4">
            {[
              {
                Icon: FaFacebook,
                url: "https://www.facebook.com/profile.php?id=61572382125372",
              },
              {
                Icon: FaInstagram,
                url: "https://www.instagram.com/botopia.tech/",
              },
              {
                Icon: FaLinkedin,
                url: "https://co.linkedin.com/company/botopiasas",
              },
              { Icon: FaTwitter, url: "https://x.com/BotopiaSAS" },
              {
                Icon: FaTiktok,
                url: "https://www.tiktok.com/@botopia.tech",
              },
              {
                Icon: FaYoutube,
                url: "https://www.youtube.com/@Botopia-SAS",
              },
            ].map(({ Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="text-white text-2xl sm:text-3xl hover:text-purple-700 transition" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 🚀 Sección de Blogs de prueba */}
      <div className="relative z-10 max-w-7xl mx-auto px-10 mt-20 mb-20">
        <h2
          id="ultimos-blogs"
          className="text-4xl font-bold text-white text-center mb-6"
        >
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
