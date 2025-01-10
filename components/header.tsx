'use client'; // Si necesitas interactividad

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú
  return (
    <header className="bg-black text-white">
      {/* Sección Superior */}
      <div className="bg-black py-2">
        <div className="container mx-auto flex justify-between items-center text-sm px-4">
          <div>
            <span>📞 +57 (322) 871 6267</span>
            <span className="mx-12">✉️ contacto@botopia.tech</span>
          </div>
          <div className="hidden lg:block">Impulsamos tu negocio con tecnología personalizada</div>
        </div>
      </div>

      {/* Sección Inferior */}
      <div className="py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logotipo */}
          <div className="text-2xl font-bold">
            <img src="/logo.svg" alt="Bogotpia Logo" className="h-6 md:h-10 lg:h-12" />
          </div>

          {/* Selector de Idioma y Botón */}
          <div className="md:flex md:items-center md:space-x-4">
            <select className="bg-gray-800 text-white border-none rounded-md px-4 py-1">
              <option value="es">Español</option>
              <option value="en">Inglés</option>
            </select>
          </div>

          {/* Menú de Navegación */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-[#9165f3] py-2">Inicio</a>
            <a href="#" className="hover:text-[#9165f3] py-2">Nuestras Soluciones</a>
            <a href="#" className="hover:text-[#9165f3] py-2">Nosotros</a>
            <a href="#" className="hover:text-[#9165f3] py-2 px-2">Blog / Podcast</a>
            <a
              href="#"
              className="bg-[#9165f3] text-white font-bold py-2 px-2 rounded-full hover:bg-pink-600"
            >
              Contáctanos
            </a>
          </nav>

          {/* Botón para abrir/cerrar el menú en móviles */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

          {/* Menú de Navegación en móviles */}
          <nav
            className={`${isMenuOpen ? 'block' : 'hidden'
              } md:hidden absolute top-0 left-0 w-full bg-black space-y-4 z-50 p-6`}
          >
            {/* Botón para cerrar el menú */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Enlaces del menú */}
            <a href="#" className="block text-center hover:text-[#9165f3] py-2">
              Inicio
            </a>
            <a href="#" className="block text-center hover:text-[#9165f3] py-2">
              Nuestras Soluciones
            </a>
            <a href="#" className="block text-center hover:text-[#9165f3] py-2">
              Nosotros
            </a>
            <a href="#" className="block text-center hover:text-[#9165f3] py-2">
              Blog / Podcast
            </a>
            <a
              href="#"
              className="block text-center bg-[#9165f3] text-white font-bold py-2 px-4 rounded-full hover:bg-pink-600"
            >
              Contáctanos
            </a>
          </nav>

        </div>
      </div>
    </header>
  );
}
