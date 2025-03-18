"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const t = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState("es");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const locale = pathname.split("/")[1];
    setCurrentLanguage(locale || "es");
  }, [pathname]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    router.push(`/${selectedLanguage}`);
  };

  return (
    <header className="fixed top-10 left-[30px] right-[30px] w-[calc(100%-60px)] z-40 bg-[rgba(79,7,134,0.7)] backdrop-blur-md shadow-lg rounded-full px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src="/logo.svg"
          alt="Botopia Logo"
          className="h-6 lg:h-10 cursor-pointer"
          onClick={() => router.push(`/${currentLanguage}`)}
        />
      </div>

      {/* 
        Selector de idioma en MÓVILES:
        Lo mostramos solo en pantallas pequeñas con "lg:hidden".
        En escritorio, sigue apareciendo en la sección "Selector de idioma y Contacto".
      */}
      <div className="lg:hidden ml-4">
        <select
          value={currentLanguage}
          onChange={handleLanguageChange}
          className="bg-white text-black border border-gray-600 rounded-lg h-8 px-2"
        >
          <option value="es">{t("Languages.Spanish")}</option>
          <option value="en">{t("Languages.English")}</option>
          <option value="pt">{t("Languages.Portuguese")}</option>
        </select>
      </div>

      {/* Menú Principal (Solo en Escritorio) */}
      <nav className="hidden lg:flex gap-10 text-lg absolute left-1/2 transform -translate-x-1/2 text-white">
        <button
          onClick={() => router.push(`/${currentLanguage}`)}
          className="hover:text-[#9165f3] py-2"
        >
          {t("menu.home")}
        </button>

        {/* Nuestras Soluciones */}
        <div className="relative group">
          <button className="hover:text-purple-400 py-2 flex items-center">
            {t("menu.ourSolutions")} <span className="ml-1 text-xl">▾</span>
          </button>

          {/* Menú desplegable estilo "Mega Menu" */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-full bg-black shadow-xl rounded-lg p-8 w-[1200px] max-w-screen-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
            {/* Grid de 4 columnas: ajusta según necesites */}
            <div className="grid grid-cols-4 gap-8 text-white text-sm font-normal leading-relaxed">
              {/* Consultoría & Estrategia */}
              <div>
                <div className="flex items-center mb-2">
                  {/* Ícono del apartado */}
                  <img
                    src="/icons/consultoria.svg"
                    alt="Icono consultoría"
                    className="h-5 w-5 mr-2"
                  />
                  {/* Título con línea inferior */}
                  <h3 className="relative text-purple-300">
                    Consultoría & Estrategia
                    <span className="block absolute left-0 -bottom-1 h-[2px] w-full bg-purple-400" />
                  </h3>
                </div>

                {/* Opciones */}
                <ul className="space-y-1 mt-4">
                  <li className="hover:text-purple-400 cursor-pointer">
                    Spin Off Empresarial
                  </li>
                  <li className="hover:text-purple-400 cursor-pointer">
                    Innovación y Transformación Digital
                  </li>
                  <li className="hover:text-purple-400 cursor-pointer">
                    Metodologías Ágiles
                  </li>
                  <li className="hover:text-purple-400 cursor-pointer">
                    Consultoría de Negocios
                  </li>
                </ul>
              </div>

              {/* Tecnología */}
              <div>
                <div className="flex items-center mb-2">
                  <img
                    src="/icons/tecnologia.svg"
                    alt="Icono tecnología"
                    className="h-5 w-5 mr-2"
                  />
                  <h3 className="relative text-purple-300">
                    Tecnología
                    <span className="block absolute left-0 -bottom-1 h-[2px] w-full bg-purple-400" />
                  </h3>
                </div>

                <ul className="space-y-1 mt-4">
                  <li className="hover:text-purple-400 cursor-pointer">
                    Tecnología a la Medida
                  </li>
                  <li className="hover:text-purple-400 cursor-pointer">
                    Desarrollo de Sitio Web
                  </li>
                  <li className="hover:text-purple-400 cursor-pointer">
                    Aplicaciones Móviles
                  </li>
                  <li className="hover:text-purple-400 cursor-pointer">
                    Infraestructura Cloud
                  </li>
                  <li className="hover:text-purple-400 cursor-pointer">
                    Desarrollo MVP
                  </li>
                  <li className="hover:text-purple-400 cursor-pointer">
                    Desarrollo E-commerce
                  </li>
                  <li className="hover:text-purple-400 cursor-pointer">
                    Integración AI
                  </li>
                </ul>
              </div>

              {/* Diseño */}
              <div>
                <div className="flex items-center mb-2">
                  <img
                    src="/icons/diseno.svg"
                    alt="Icono diseño"
                    className="h-5 w-5 mr-2"
                  />
                  <h3 className="relative text-purple-300">
                    Diseño
                    <span className="block absolute left-0 -bottom-1 h-[2px] w-full bg-purple-400" />
                  </h3>
                </div>

                <ul className="space-y-1 mt-4">
                  <li className="hover:text-purple-400 cursor-pointer">
                    Diseño UX/UI
                  </li>
                  <li className="hover:text-purple-400 cursor-pointer">
                    Branding & Naming
                  </li>
                </ul>
              </div>

              {/* Marketing */}
              <div>
                <div className="flex items-center mb-2">
                  <img
                    src="/icons/marketing.svg"
                    alt="Icono marketing"
                    className="h-5 w-5 mr-2"
                  />
                  <h3 className="relative text-purple-300">
                    Marketing
                    <span className="block absolute left-0 -bottom-1 h-[2px] w-full bg-purple-400" />
                  </h3>
                </div>

                <ul className="space-y-1 mt-4">
                  <li className="hover:text-purple-400 cursor-pointer">
                    Marketing Digital
                  </li>
                  <li className="hover:text-purple-400 cursor-pointer">
                    Growth Marketing
                  </li>
                  <li className="hover:text-purple-400 cursor-pointer">
                    E-commerce Marketing
                  </li>
                  <li className="hover:text-purple-400 cursor-pointer">SEO</li>
                  <li className="hover:text-purple-400 cursor-pointer">
                    Automatización
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Nosotros */}
        <div className="relative group">
          <button className="hover:text-[#9165f3] py-2 flex items-center">
            {t("menu.aboutUs")} <span className="ml-1 text-lg">▾</span>
          </button>

          <div
            className="absolute left-1/2 transform -translate-x-1/2 top-full
               bg-black shadow-lg rounded-lg p-4 w-56 text-white
               text-sm font-normal leading-relaxed
               opacity-0 invisible group-hover:opacity-100 group-hover:visible
               transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto"
          >
            {/* Encabezado con ícono y línea inferior */}
            <div className="flex items-center mb-2">
              <img
                src="/icons/nosotros.svg"
                alt="Icono de Nosotros"
                className="h-5 w-5 mr-2"
              />
              <h3 className="relative text-lg text-purple-300">
                {" "}
                {/* Título grande */}
                Nosotros
                {/* Línea debajo del título */}
                <span className="block absolute left-0 -bottom-1 h-[2px] w-full bg-purple-400" />
              </h3>
            </div>

            {/* Opciones de Nosotros */}
            <ul className="space-y-1 mt-4">
              <li>
                <Link
                  href={`/${currentLanguage}/about/quienes-somos`}
                  className="block hover:bg-purple-700 hover:text-white px-4 py-2 rounded-md"
                >
                  Quiénes somos
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLanguage}/about/casos-de-exito`}
                  className="block hover:bg-purple-700 hover:text-white px-4 py-2 rounded-md"
                >
                  Casos de éxito
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <button
          onClick={() => router.push(`/${currentLanguage}/blog`)}
          className="hover:text-[#9165f3] py-2"
        >
          Blog/Podcast
        </button>
      </nav>

      {/* Selector de idioma y Contacto (solo Escritorio) */}
      <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
        <select
          value={currentLanguage}
          onChange={handleLanguageChange}
          className="bg-white text-black border border-gray-600 rounded-lg h-10 px-2"
        >
          <option value="es">{t("Languages.Spanish")}</option>
          <option value="en">{t("Languages.English")}</option>
          <option value="pt">{t("Languages.Portuguese")}</option>
        </select>

        <button
          onClick={() => router.push(`/${currentLanguage}/contactUs`)}
          className="bg-[#9165f3] text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-600"
        >
          {t("menu.contact")}
        </button>
      </div>

      {/* Botón Menú Móvil */}
      <button
        className="lg:hidden text-3xl text-white ml-4"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? "✖" : "☰"}
      </button>

      {/* Menú Móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black p-4 shadow-lg z-40">
          <nav className="flex flex-col space-y-4 text-white">
            <button
              onClick={() => router.push(`/${currentLanguage}`)}
              className="hover:text-[#9165f3] py-2"
            >
              {t("menu.home")}
            </button>
            <button
              onClick={() => router.push(`/${currentLanguage}/solutions`)}
              className="hover:text-[#9165f3] py-2"
            >
              {t("menu.ourSolutions")}
            </button>
            <button
              onClick={() => router.push(`/${currentLanguage}/about`)}
              className="hover:text-[#9165f3] py-2"
            >
              {t("menu.aboutUs")}
            </button>
            <button
              onClick={() => router.push(`/${currentLanguage}/blog`)}
              className="hover:text-[#9165f3] py-2"
            >
              Blog/Podcast
            </button>
            {/* 
              Eliminamos el selector de idioma de aquí,
              pues ahora está arriba en móviles.
            */}
            <button
              onClick={() => router.push(`/${currentLanguage}/contactUs`)}
              className="bg-[#9165f3] text-white font-bold py-2 px-4 rounded-full hover:bg-pink-600"
            >
              {t("menu.contact")}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
