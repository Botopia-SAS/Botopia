'use client'; // Si necesitas interactividad

export default function Header() {
  return (
    <header className="bg-black text-white">
      {/* Sección Superior */}
      <div className="bg-black py-2">
        <div className="container mx-auto flex justify-between items-center text-sm px-4">
          <div>
            <span>📞 +57 (322) 871 6267</span>
            <span className="mx-4">✉️ contacto@botopia.tech</span>
          </div>
          <div>Impulsamos tu negocio con tecnología personalizada</div>
        </div>
      </div>

      {/* Sección Inferior */}
      <div className="py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logotipo */}
          <div className="text-2xl font-bold">
            <img src="/logo.svg" alt="Bogotpia Logo" className="h-10" />
          </div>

          {/* Menú de Navegación */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-[#9165f3]">Inicio</a>
            <a href="#" className="hover:text-[#9165f3]">Nuestras Soluciones</a>
            <a href="#" className="hover:text-[#9165f3]">Nosotros</a>
            <a href="#" className="hover:text-[#9165f3]">Blog / Podcast</a>
          </nav>

          {/* Selector de Idioma y Botón */}
          <div className="flex items-center space-x-4">
            <select className="bg-gray-800 text-white border-none rounded-md px-2 py-1">
              <option value="es">Spanish</option>
              <option value="en">English</option>
            </select>
            <a
              href="#"
              className="bg-[#9165f3] text-white font-bold py-2 px-4 rounded-full hover:bg-pink-600"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
