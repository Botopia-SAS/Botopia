'use client'; // Para interactividad

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'; 
import { useState, useEffect } from 'react';

export default function Header() {
  const t = useTranslations("Header");
  const router = useRouter(); // Para manejar cambios de idioma
  const pathname = usePathname(); // Obtiene la ruta actual incluyendo el idioma
  const [currentLanguage, setCurrentLanguage] = useState('es'); // Estado del idioma actual
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú

  // Actualizar el estado del idioma al cargar la página
  useEffect(() => {
    const locale = pathname.split('/')[1]; // Extraer el idioma de la ruta
    setCurrentLanguage(locale || 'es'); // Predeterminado a español si no hay idioma
  }, [pathname]);

  // Cambio de idioma
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    router.push(`/${selectedLanguage}`); // Redirigir a la versión en otro idioma
  };

  // Navegación a diferentes páginas
  const navigateTo = (path: string) => {
    router.push(`/${currentLanguage}${path}`); // Agregar el idioma actual en la ruta
    setIsMenuOpen(false); // Cerrar menú en móviles
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm text-white">
      {/* Sección Superior */}
      <div className="bg-black py-2">
        <div className="container mx-auto flex justify-between items-center text-sm px-4">
          <div className='text-sm below700:text-xs md:text-base'>
            <span>📞 +57 (322) 871 6267</span>
            <span className="mx-6">✉️ contacto@botopia.tech</span>
          </div>  
          <div className="hidden md:block">{t("phrase")}</div>
        </div>
      </div>

      {/* Sección Inferior */}
      <div className="py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logotipo */}
          <div className="text-2xl font-bold">
            <img src="/logo.svg" alt="Botopia Logo" className="h-6 lg:h-12 cursor-pointer" onClick={() => navigateTo('/')} />
          </div>

          {/* Selector de Idioma */}
          <div className="lg:flex lg:items-center lg:space-x-4">
            <select
              value={currentLanguage}
              onChange={handleLanguageChange}
              className="bg-gray-800 text-white border-none rounded-md px-4 py-1 below700:mr-2"
            >
              <option value="es">{t('Languages.Spanish')}</option>
              <option value="en">{t('Languages.English')}</option>
              <option value="pt">{t('Languages.Portuguese')}</option>
            </select>
          </div>

          {/* Menú de Navegación */}
          <nav className="hidden lg:flex space-x-6">
            <button onClick={() => navigateTo('/')} className="hover:text-[#9165f3] py-2">{t("menu.home")}</button>
            <button onClick={() => navigateTo('/solutions')} className="hover:text-[#9165f3] py-2">{t("menu.ourSolutions")}</button>
            <button onClick={() => navigateTo('/about')} className="hover:text-[#9165f3] py-2">{t("menu.aboutUs")}</button>
            <button onClick={() => navigateTo('/blog')} className="hover:text-[#9165f3] py-2 px-2">Blog/Podcast</button>
            <button onClick={() => navigateTo('/contact')} className="bg-[#9165f3] text-white font-bold py-2 px-2 rounded-full hover:bg-pink-600">
              {t("menu.contact")}
            </button>
          </nav>

          {/* Botón para abrir/cerrar el menú en móviles */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

          {/* Menú de Navegación en móviles */}
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden absolute top-0 left-0 w-full bg-black space-y-4 z-50 p-6`}>
            {/* Botón para cerrar el menú */}
            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)} className="text-white focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Enlaces del menú */}
            <button onClick={() => navigateTo('/')} className="block text-center hover:text-[#9165f3] py-2">
              {t("menu.home")}
            </button>
            <button onClick={() => navigateTo('/solutions')} className="block text-center hover:text-[#9165f3] py-2">
              {t("menu.ourSolutions")}
            </button>
            <button onClick={() => navigateTo('/about')} className="block text-center hover:text-[#9165f3] py-2">
              {t("menu.aboutUs")}
            </button>
            <button onClick={() => navigateTo('/blog')} className="block text-center hover:text-[#9165f3] py-2">
              Blog / Podcast
            </button>
            <button onClick={() => navigateTo('/contact')} className="block text-center bg-[#9165f3] text-white font-bold py-2 px-4 rounded-full hover:bg-pink-600">
              {t("menu.contact")}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
