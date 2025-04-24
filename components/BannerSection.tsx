"use client"
import { useEffect, useState } from 'react';

const banners = [
  {
    type: 'visionpro',
    title: 'Presentamos nuestro nuevo soporte de desarrollo',
    subtitle: 'Creamos tu aplicación en ',
    highlight: 'VisionOS',
    note: 'Disponible únicamente en Estados Unidos y Canadá',
    bgColor: 'bg-black',
    textColor: 'text-white',
    accentColor: 'text-purple-400',
    image: '/images/visionpro.svg'
  },
  {
    type: 'whatsapp',
    title: 'Prueba nuestra herramienta de customer engagement',
    subtitle: 'Sin APIs, sin procesos complicados.\nSolo tu WhatsApp y un QR',
    bgColor: 'bg-[#F9E8D9]',
    textColor: 'text-gray-900',
    accentColor: 'text-[#1B365D]',
    image: '/images/whatsapp.svg'
  },
  {
    type: 'engineering',
    title: 'A veces es más fácil contratar un equipo de ingeniería que contratar un proyecto',
    subtitle: 'Muchas veces la mejor solución que puedes encontrar es tener un equipo 100% dedicado a tu empresa',
    bgColor: 'bg-[#5D2EBC]',
    textColor: 'text-white',
    accentColor: 'text-[#F9E8D9]',
    image: '/images/engineering.svg'
  }
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
    <div className="w-full flex justify-center items-center py-8 bg-transparent">
      <div className="relative w-full max-w-7xl overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentBanner * 100}%)`,
          }}
        >
          {banners.map((banner, index) => (
            <div key={index} className="w-full flex-shrink-0 flex justify-center">
              <div className={`${banner.bgColor} rounded-2xl flex flex-col md:flex-row items-center justify-between 
    p-6 md:p-10 shadow-lg w-[90%] max-w-6xl`}>

                {/* TÍTULO y SUBTÍTULO */}
                <div className="flex-1 space-y-3 text-center md:text-left order-1">
                  <h2 className={`text-xl md:text-3xl font-extrabold leading-tight ${banner.accentColor}`}>
                    {banner.title}
                  </h2>
                  <p className={`whitespace-pre-line text-sm md:text-lg ${banner.textColor}`}>
                    {banner.subtitle}
                    {banner.highlight && <span className="font-bold"> {banner.highlight}</span>}
                  </p>
                </div>

                {/* IMAGEN */}
                <div className="flex-1 flex justify-center mt-4 md:mt-0 order-2">
                  <img
                    src={banner.image}
                    alt={banner.type}
                    className="max-h-32 md:max-h-48 object-contain"
                  />
                </div>

                {/* NOTE: Solo debajo en móvil */}
                {banner.note && (
                  <div className="order-3 mt-4 md:mt-0">
                    <p className="text-xs italic text-gray-300 text-center md:text-left">
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
