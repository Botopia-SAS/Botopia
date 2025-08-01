"use client";
import { useEffect, useState } from "react";

const banners = [
  {
    type: "visionpro",
    title: "Presentamos nuestro nuevo soporte de desarrollo",
    subtitle: "Creamos tu aplicación en ",
    highlight: "VisionOS",
    note: "Disponible únicamente en Estados Unidos y Canadá",
    image: "/images/visionpro.svg",
    variant: "dark" as const,
  },
  {
    type: "whatsapp",
    title: "Prueba nuestra herramienta de customer engagement",
    subtitle: "Sin APIs, sin procesos complicados.\nSolo tu WhatsApp y un QR",
    image: "/images/whatsapp.svg",
    variant: "light" as const,
  },
  {
    type: "engineering",
    title:
      "A veces es más fácil contratar un equipo de ingeniería que contratar un proyecto",
    subtitle:
      "Muchas veces la mejor solución que puedes encontrar es tener un equipo 100% dedicado a tu empresa",
    image: "/images/engineering.svg",
    variant: "dark" as const,
  },
];

const BannerSection = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full flex justify-center items-center py-2 md:py-4 bg-cover bg-center bg-white dark:bg-black transition-colors duration-300 md:mt-[-10%] mb:pb-0 md:mb-0 mt-[-20%]"
      // style={{ backgroundImage: "url('/Hero/Fondo2.svg')" }}
    >
      <div className="relative w-full max-w-7xl overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentBanner * 100}%)`,
          }}
        >
          {banners.map((banner, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex justify-center"
            >
              <div
                className={
                  `rounded-2xl flex flex-col md:flex-row items-center justify-between p-2 md:p-4 shadow-none w-[90%] max-w-6xl transition-colors duration-300 ` +
                  (banner.variant === "dark"
                    ? "bg-black bg-opacity-90 text-white dark:bg-black dark:text-white"
                    : "bg-[#F9E8D9] bg-opacity-90 text-gray-900 dark:bg-[#23232a] dark:text-gray-100")
                }
              >
                {/* TÍTULO y SUBTÍTULO */}
                <div className="flex-1 space-y-1 text-center md:text-left order-1 md:ml-10">
                  <h2
                    className={
                      `text-base md:text-2xl font-extrabold leading-tight ` +
                      (banner.variant === "dark"
                        ? "text-purple-400 dark:text-purple-300"
                        : "text-[#1B365D] dark:text-purple-300")
                    }
                  >
                    {banner.title}
                  </h2>
                  <p
                    className={
                      `whitespace-pre-line text-xs md:text-base ` +
                      (banner.variant === "dark"
                        ? "text-white dark:text-gray-200"
                        : "text-gray-900 dark:text-gray-100")
                    }
                  >
                    {banner.subtitle}
                    {banner.highlight && (
                      <span className="font-bold text-purple-400 dark:text-purple-400">
                        {" "}
                        {banner.highlight}
                      </span>
                    )}
                  </p>
                </div>
                {/* IMAGEN */}
                <div className="flex-1 flex justify-center mt-2 md:mt-0 order-2">
                  <img
                    src={banner.image}
                    alt={banner.type}
                    className="max-h-16 md:max-h-24 object-contain"
                  />
                </div>
                {/* NOTE: Solo debajo en móvil */}
                {banner.note && (
                  <div className="order-3 mt-1 md:mt-0">
                    <p className="text-xs italic text-gray-400 dark:text-gray-300 text-center md:text-left">
                      {banner.note}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
