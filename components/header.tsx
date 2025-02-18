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

  useEffect(() => {
    const locale = pathname.split("/")[1];
    setCurrentLanguage(locale || "es");
  }, [pathname]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    router.push(`/${selectedLanguage}`);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm text-white">
      <div className="bg-black py-2">
        <div className="container mx-auto flex justify-between items-center text-sm px-4">
          <div className="text-sm md:text-base">
            <span>📞 +57 (322) 871 6267</span>
            <span className="mx-6">✉️ contacto@botopia.tech</span>
          </div>
          <div className="hidden md:block">{t("phrase")}</div>
        </div>
      </div>

      <div className="py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-2xl font-bold">
            <img
              src="/logo.svg"
              alt="Botopia Logo"
              className="h-6 lg:h-12 cursor-pointer"
              onClick={() => router.push(`/${currentLanguage}`)}
            />
          </div>

          <nav className="hidden lg:flex space-x-6 relative">
            <button onClick={() => router.push(`/${currentLanguage}`)} className="hover:text-[#9165f3] py-2">
              {t("menu.home")}
            </button>

            {/* Nuestras Soluciones */}
            <div className="relative group">
              <button className="hover:text-[#9165f3] py-2 flex items-center">
                {t("menu.ourSolutions")} <span className="ml-1 text-lg">▾</span>
              </button>
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-black shadow-lg rounded-lg p-4 w-[500px] max-w-screen-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 pointer-events-auto">
                <h2 className="text-lg font-bold text-purple-400 text-center mb-2">Tecnología</h2>
                <hr className="border-purple-500 w-1/3 mx-auto mb-4" />
                <div className="grid grid-cols-2 gap-2 text-left">
                  {[
                    { name: "Aplicaciones Móviles", path: "/soluciones/appmovil" },
                    { name: "Aplicaciones Web", path: "/soluciones/appweb" },
                    { name: "Chatbot o Integraciones de IA", path: "/soluciones/chatbot" },
                    { name: "E-commerce", path: "/soluciones/ecommerce" },
                    { name: "Integración API Básica", path: "/soluciones/api" },
                    { name: "Landing Page estándar", path: "/soluciones/landing" },
                    { name: "Plataformas SaaS", path: "/soluciones/saas" },
                    { name: "Proyectos Especiales", path: "/soluciones/proyectos" },
                    { name: "Sitio Web Corporativo", path: "/soluciones/corporativo" },
                    { name: "Software a la Medida", path: "/soluciones/software" }
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={`/${currentLanguage}${item.path}`}
                      className="bg-black/50 p-2 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white transition block text-center"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Menú Nosotros */}
            <div className="relative group">
              <button className="hover:text-[#9165f3] py-2 flex items-center">
                {t("menu.aboutUs")} <span className="ml-1 text-lg">▾</span>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-black shadow-lg rounded-lg p-4 flex flex-col opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 pointer-events-auto">
                <Link href={`/${currentLanguage}/about/quienes-somos`} className="hover:bg-purple-700 hover:text-white px-4 py-2 rounded-md">
                  Quiénes somos
                </Link>
                
                <Link href={`/${currentLanguage}/about/casos-de-exito`} className="hover:bg-purple-700 hover:text-white px-4 py-2 rounded-md">
                  Casos de éxito
                </Link>
              </div>
            </div>

            <button onClick={() => router.push(`/${currentLanguage}/blog`)} className="hover:text-[#9165f3] py-2">
              Blog/Podcast
            </button>

            <button onClick={() => router.push(`/${currentLanguage}/contact`)} className="bg-[#9165f3] text-white font-bold py-2 px-2 rounded-full hover:bg-pink-600">
              {t("menu.contact")}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}