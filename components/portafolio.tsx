'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
}

const Portfolio = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      title: 'VohGo',
      description: 'Desarrollo de aplicación personalizada',
      image: '/Portafolio/Vohgo2.svg',
    },
    {
      title: 'FridOOM',
      description: 'Desarrollo de sitio web personalizado',
      image: '/Portafolio/Fridoom2.svg',
    },
    {
      title: 'Startups Calendar',
      description: 'Desarrollo de sitio web personalizado',
      image: '/Portafolio/Calendar2.svg',
    },
    {
      title: 'Alliance',
      description: 'Desarrollo de sitio web personalizado',
      image: '/Portafolio/Alliance2.svg',
    },
    {
      title: 'Driving School',
      description: 'Desarrollo de sitio web personalizado con Dashboard',
      image: '/Portafolio/DS.svg',
    },
    {
      title: 'Planta Femsa Cocacola',
      description: 'Automatización industrial',
      image: '/Portafolio/Cocacola2.svg',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-purple-300 to-purple-700 py-20 text-gray-800 relative">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-300 to-transparent"></div>
      <div className="mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">Portafolio</h2>

        {/* Carrusel con Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="w-full md:w-4/5 lg:w-[90%] mx-auto"
        >
          {portfolioItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center gap-12">

                {/* Imagen con desvanecido SOLO a la derecha */}
                <div className="relative  w-full md:w-1/2 h-[500px] overflow-hidden ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="contain"
                  />
                  {/* Desvanecido solo en la parte derecha */}
                  <div className="absolute inset-y-0 right-0 w-1/3 "></div>
                </div>

                {/* Texto sin fondo adicional */}
                <div className="flex flex-col justify-center w-full md:w-1/2 text-center md:text-left">
                  <h3 className="text-4xl font-semibold text-white">{item.title}</h3>
                  <p className="text-xl text-gray-200 mt-4">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
