'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const Portfolio = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      title: 'VohGo',
      description: 'Desarrollo de aplicación personalizada',
      image: '/Portafolio/Vohgo2.svg',
    },
    {
      title: 'fridoom',
      description: 'Fridoom es una plataforma de gestión financiera automatizada que permite a los usuarios registrar y monitorear sus ingresos y egresos de manera inteligente. Su enfoque está basado en el concepto de open banking, lo que significa que puede integrarse con diversas fuentes de información bancaria para ofrecer un control financiero en tiempo real.',
      image: '/Portafolio/fridoom.png',
      link: 'https://www.fridoom.com',
    },
    {
      title: 'Startups Calendar',
      description: 'Desarrollo de sitio web personalizado',
      image: '/Portafolio/Calendar2.svg',
      link: 'https://www.startupscalendar.com',
    },
    {
      title: 'Alliance',
      description: 'Desarrollo de sitio web personalizado',
      image: '/Portafolio/Alliance2.svg',
      link: 'https://alliance-ebon.vercel.app',
    },
    {
      title: 'Driving School',
      description: 'Desarrollo de sitio web personalizado con Dashboard',
      image: '/Portafolio/DS.svg',
      link: 'https://driving-school-mocha.vercel.app',
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
      <div className="mx-auto px-6 max-w-screen-xl">
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
              <div className="flex flex-col md:flex-row items-center gap-12 rounded-3xl p-8 shadow-lg">

                {/* Contenedor de Imagen con Degradado */}
                <div className="relative w-full md:w-1/2 h-[500px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="contain"
                    className="relative z-10"
                  />
                  {/* Degradado en la parte derecha para el efecto de desvanecido */}
                  <div className="absolute inset-y-0 right-0 w-1/3 "></div>
                </div>

                {/* Contenedor de Texto */}
                <div className="flex flex-col justify-center w-full md:w-1/2 text-center md:text-left px-6">
                  <h3 className="text-4xl font-semibold text-white">{item.title}</h3>
                  <p className="text-xl text-gray-200 mt-4">{item.description}</p>

                  {/* Botón de "Visita el sitio web" si tiene link */}
                  {item.link && (
                    <Link href={item.link} target="_blank" rel="noopener noreferrer">
                      <button className="mt-6 bg-white text-purple-700 font-bold py-3 px-6 rounded-full hover:bg-purple-600 hover:text-white transition">
                        Visita el sitio web
                      </button>
                    </Link>
                  )}
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
