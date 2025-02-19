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
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm text-white px-4 md:px-2">
      <div className="bg-black py-2">
        <div className="container mx-auto flex justify-between items-center text-sm ">
          <div className="text-sm md:text-base">
            <a
              href="tel:3228726267"
              className="hover:text-purple-400 transition"
            >
              📞 +57 (322) 872 6267
            </a>
            <a
              href="mailto:contacto@botopia.tech"
              className="mx-6 hidden lg:inline hover:text-purple-400 transition"
            >
              ✉️ contacto@botopia.tech
            </a>
          </div>
          <span className="lg:hidden text-sm">
            <a
              href="mailto:contacto@botopia.tech"
              className="hover:text-purple-400 transition"
            >
              ✉️ contacto@botopia.tech
            </a>
          </span>
          <div className="hidden md:block text-base">{t("phrase")}</div>
        </div>
      </div>

      {/* Barra principal */}
      <div className="py-4">
        <div className="container mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <img
            src="/logo.svg"
            alt="Botopia Logo"
            className="h-6 lg:h-10 cursor-pointer"
            onClick={() => router.push(`/${currentLanguage}`)}
          />

          {/* Menú Desktop centrado */}
          <nav className="hidden lg:flex gap-10 absolute left-1/2 transform -translate-x-1/2 text-lg">
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

              {/* Menú desplegable estilo "Imaginamos" */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full  bg-black shadow-xl rounded-lg p-8 w-[1900px] max-w-screen-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                <div className="grid grid-cols-4 space-x-12 text-white">
                  {/* Consultoría & Estrategia */}
                  <div>
                    <h3 className="text-lg font-extrabold text-purple-400 flex items-center">
                      Consultoría & Estrategia
                    </h3>
                    <hr className="border-purple-400 w-auto" />
                    <ul className="space-y-2 py-4 font-semibold">
                      <li>Spin Off Empresarial</li>
                      <li>Innovación y Transformación Digital</li>
                      <li>Metodología Ágiles</li>
                      <li>Consultoría de Negocios</li>
                    </ul>
                  </div>

                  {/* Tecnología */}
                  <div>
                    <h3 className="text-lg font-extrabold text-purple-400 flex items-center">
                      Tecnología
                    </h3>
                    <hr className="border-purple-400 w-auto" />
                    <ul className="space-y-2 py-4 font-semibold">
                      <li>Tecnología a la Medida</li>
                      <li>Desarrollo de Sitio Web</li>
                      <li>Aplicaciones Móviles</li>
                      <li>Infraestructura Cloud</li>
                      <li>Desarrollo MVP</li>
                      <li>Desarrollo E-commerce</li>
                      <li>Integración AI</li>
                    </ul>
                  </div>

                  {/* Diseño */}
                  <div>
                    <h3 className="text-lg font-extrabold text-purple-400 flex items-center">
                      Diseño
                    </h3>
                    <hr className="border-purple-500 w-auto" />
                    <ul className="space-y-2 py-4 font-semibold">
                      <li>Diseño UX/UI</li>
                      <li>Branding & Naming</li>
                    </ul>
                  </div>

                  {/* Marketing */}
                  <div>
                    <h3 className="text-lg font-extrabold text-purple-400 flex items-center">
                      Marketing
                    </h3>
                    <hr className="border-purple-400 w-auto" />
                    <ul className="space-y-2 py-4 font-semibold">
                      <li>Marketing Digital</li>
                      <li>Growth Marketing</li>
                      <li>E-commerce Marketing</li>
                      <li>SEO</li>
                      <li>Automatización</li>
                    </ul>
                  </div>
                </div>

                {/* Botón de CTA */}
                <div className="flex justify-center mt-6">
                  <button className="bg-purple-400 text-white font-bold py-3 px-4 rounded-full hover:bg-[#e60073] transition">
                    Explorar más
                  </button>
                </div>
              </div>
            </div>

            {/* Menú Nosotros */}
            <div className="relative group">
              <button className="hover:text-[#9165f3] py-2 flex items-center">
                {t("menu.aboutUs")} <span className="ml-1 text-lg">▾</span>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-black shadow-lg rounded-lg p-4 flex flex-col opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 pointer-events-auto">
                <Link
                  href={`/${currentLanguage}/about/quienes-somos`}
                  className="hover:bg-purple-700 hover:text-white px-4 py-2 rounded-md"
                >
                  Quiénes somos
                </Link>

                <Link
                  href={`/${currentLanguage}/about/casos-de-exito`}
                  className="hover:bg-purple-700 hover:text-white px-4 py-2 rounded-md"
                >
                  Casos de éxito
                </Link>
              </div>
            </div>

            <button
              onClick={() => router.push(`/${currentLanguage}/blog`)}
              className="hover:text-[#9165f3] py-2"
            >
              Blog/Podcast
            </button>
          </nav>

          {/* Botones de la derecha */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Selector de idioma */}
            <select
              value={currentLanguage}
              onChange={handleLanguageChange}
              className="bg-black text-white border border-gray-600 rounded-lg h-10 px-2"
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

          <div className="lg:hidden flex ml- px-4">
            {/* Selector de idioma */}
            <select
              value={currentLanguage}
              onChange={handleLanguageChange}
              className="bg-black text-white border border-gray-600 rounded-lg h-6"
            >
              <option value="es">{t("Languages.Spanish")}</option>
              <option value="en">{t("Languages.English")}</option>
              <option value="pt">{t("Languages.Portuguese")}</option>
            </select>
          </div>
          {/* Botón menú mobile */}
          <button
            className="lg:hidden text-3xl mb-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Menú Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black p-4 shadow-lg z-40">
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => router.push(`/${currentLanguage}`)}
              className="hover:text-[#9165f3] py-2"
            >
              {t("menu.home")}
            </button>
            <button
              onClick={() => router.push(`/${currentLanguage}`)}
              className="hover:text-[#9165f3] py-2"
            >
              {t("menu.ourSolutions")}
            </button>
            <button
              onClick={() => router.push(`/${currentLanguage}`)}
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
            <button
              onClick={() => router.push(`/${currentLanguage}/contact`)}
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
