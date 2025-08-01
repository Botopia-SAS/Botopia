"use client";

import { useState, useEffect, ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import IpadModel from "./3D/IpadModel";
import { useRouter, usePathname } from "next/navigation";
import { Typewriter } from "react-simple-typewriter";

// --- Textos escalables y reutilizables ---
const CTA_MAIN = "Comienza tu proyecto con nosotros";
const CTA_BUTTON = "Habla con nuestros asesores";
const INFO_TEXT =
  "Usamos inteligencia artificial y talento especializado para convertir tus ideas en productos excepcionales.";

// --- Botón secundario reutilizable ---
function SecondaryButton({
  children,
  onClick,
  ariaLabel,
}: {
  children: ReactNode;
  onClick: () => void;
  ariaLabel?: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="flex items-center justify-center px-3 py-1.5 rounded-xl border border-purple-700 text-white font-semi-bold text-xs md:text-sm bg-purple-800 hover:bg-purple-700 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
      type="button"
    >
      {children}
    </button>
  );
}

// --- Input CTA estilo Globant con botón de envío ---
function GlobantInputCTA({
  placeholder,
  ariaLabel,
  onSend,
}: {
  placeholder?: string;
  ariaLabel?: string;
  onSend: (value: string) => void;
}) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Permitir enviar con Enter y limpiar input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim()) {
      onSend(value);
      setValue("");
    }
  };

  // UX: Botón de enviar visible solo si hay texto, animación de foco y feedback visual
  return (
    <div
      className={`flex items-center bg-[#f0f4f8] dark:bg-[#18181b] rounded-xl px-3 py-1 w-full max-w-md shadow transition-all duration-200 border-2 ${
        isFocused
          ? "border-purple-400 ring-2 ring-purple-200 dark:ring-purple-900"
          : "border-purple-400"
      }`}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder || "¿Cuál es tu idea?"}
        aria-label={ariaLabel || "Escribe tu idea"}
        className="flex-1 bg-transparent outline-none border-none text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 font-medium text-sm md:text-base px-2 py-2 rounded-xl transition-colors"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        spellCheck={false}
        maxLength={120}
      />
      <span className="text-xs text-gray-400 mr-2 select-none">
        {value.length > 0 ? `${value.length}/120` : ""}
      </span>
      <button
        type="button"
        aria-label="Enviar"
        className="ml-1 flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
        onClick={() => {
          if (value.trim()) {
            onSend(value);
            setValue("");
          }
        }}
        tabIndex={0}
      >
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
          <path
            d="M7 17L17 7M17 7H8M17 7V16"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  // Frases para el efecto typing, fácilmente escalable
  const typingPhrases = [
    // "eficiente para tu",
    // "inteligente para tu",
    "ágil para tu",
    // "escalable para tu",
    // "poderosa para tu",
    "versátil para tu",
    "conectada a tu",
    "optimizada a tu",
    // "a la medida de tu",
    "lista para tu",
    "alineada con tu",
    "creada para tu",
    // "diseñada para tu",
    "potente para tu",
  ];

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Ejecutar al inicio

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  // --- Manejo del envío del input CTA ---
  const handleGlobantCTA = (value: string) => {
    router.push(`/${locale}/contactUs?asesor=1`);
  };

  return (
    <section
      className="w-full flex flex-col items-center justify-center bg-white dark:bg-black text-gray-900 dark:text-white relative px-4 transition-colors duration-300 min-h-[81vh] sm:min-h-[70vh] md:min-h-screen 2xl:mb-[-40%] 2xl:mt-[-30%]"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* --- Columna Izquierda: Texto y CTA --- */}
        <div className="flex-1 flex flex-col justify-center items-start text-left space-y-6 pt-0 sm:pt-0 md:pt-0 lg:ml-2">
          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            <span className="mr-2">Tecnología</span>
            <br />
            <span className="text-primary mr-2">
              <Typewriter
                words={typingPhrases}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1500}
              />
              <br />
              <span className="mr-2">negocio</span>
            </span>
          </h1>
          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg">
            Creamos experiencias digitales de alto impacto que transforman tu
            negocio.
          </p>
          {/* --- Bloque CTA doble --- */}
          <div className="flex flex-col md:flex-row w-full gap-2 mt-2">
            {/* --- Input CTA estilo Globant --- */}
            <div className="flex flex-1 items-center gap-2 max-w-md w-full">
              <GlobantInputCTA
                placeholder="Cuéntanos tu idea o proyecto..."
                ariaLabel="Escribe tu idea o proyecto"
                onSend={handleGlobantCTA}
              />
              {/* Botón secundario alineado a la derecha del input en desktop */}
              <div className="hidden md:flex ml-2 w-full h-full">
                <SecondaryButton
                  onClick={() => router.push(`/${locale}/contactUs?asesor=1`)}
                  ariaLabel="Habla con nuestros asesores"
                >
                  <span className="w-full h-full flex items-center justify-center">
                    {CTA_BUTTON}
                  </span>
                </SecondaryButton>
              </div>
            </div>
            {/* Botón secundario debajo del input en mobile */}
            <div className="flex md:hidden w-full mt-2">
              <SecondaryButton
                onClick={() => router.push(`/${locale}/contactUs?asesor=1`)}
                ariaLabel="Habla con nuestros asesores"
              >
                {CTA_BUTTON}
              </SecondaryButton>
            </div>
          </div>
          {/* --- Texto informativo pequeño --- */}
          <p className="text-xs text-purple-700 dark:text-purple-300 mt-3 max-w-md animate-fadein-sm ">
            {INFO_TEXT}
          </p>
          {/* Animaciones */}
          <style jsx global>{`
            @keyframes fadein-sm {
              from {
                opacity: 0;
                transform: translateY(12px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fadein-sm {
              animation: fadein-sm 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) both;
            }
          `}</style>
        </div>
        {/* --- Columna Derecha: iPad 3D --- */}
        <div className="hidden md:flex flex-1 justify-center items-center h-[400px] w-full md:w-auto md:mt-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
            <ambientLight intensity={1.2} />
            <directionalLight position={[2, 5, 2]} intensity={1} />
            <pointLight position={[0, 0, 2]} intensity={1} color="white" />
            <IpadModel scale={isMobile ? 0.014 : 0.025} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
