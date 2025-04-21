// components/BannerSection.tsx

"use client"
import { useEffect, useState } from 'react';

const BannerSection = () => {
  const banners = [
    { imageUrl: '/images/banner1.png', alt: 'Banner 1', text: 'La única tarjeta para Petlovers de corazón' },
    { imageUrl: '/images/banner2.png', alt: 'Banner 2', text: 'Tu mejor opción para servicios digitales' },
    { imageUrl: '/images/banner3.png', alt: 'Banner 3', text: 'Aprovecha nuestras promociones exclusivas' }
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 7000); // Cambiar cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden relative">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentBanner * 33.33}%)`,
          width: `${banners.length * 100}%`, // Aseguramos que el contenedor tenga el ancho correcto
        }}
      >
        {banners.map((banner, index) => (
          <div key={index} className="w-full">
            <div className="relative p-4 md:p-32 md:m-12 rounded-lg">
              <img
                src={banner.imageUrl}
                alt={banner.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSection;
