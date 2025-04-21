import Link from "next/link"

export default function SecondaryHeader() {
  
  return (
    <header className="bg-white/90 dark:bg-black backdrop-blur-md transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <div className="font-medium text-gray-800 dark:text-gray-100">Botopia</div>
          <div className="flex-grow"></div>
          <div className="flex items-center space-x-4">
            {/* Links de navegación ocultos en móvil */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="#"
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Descripción
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                ¿Por qué Botopia?
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Iniciar sesión
              </Link>
            </nav>
            {/* Botón visible siempre */}
            <Link
              href="#"
              className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm"
            >
              Comenzar gratis
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
