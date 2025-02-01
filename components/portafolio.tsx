'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
}

const Portfolio = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      title: 'Planta Femsa Cocacola',
      description:
        'Automatizamos la planta de retrolavado en Coca-Cola FEMSA mediante PLCs, optimizando el proceso y desarrollando una interfaz HMI personalizada.',
      image: '/Portafolio/Cocacola.svg',
    },
    {
      title: 'VohGo',
      description:
        'Vohgo es una app para Android y iOS que facilita la compra rápida de componentes eléctricos, con una interfaz intuitiva y entregas en tiempo récord.',
      image: '/Portafolio/Vohgo.svg',
    },
    {
      title: 'FridOOM',
      description:
        'FridOOM centraliza y administra la información financiera de una persona en un solo lugar, transformando su vida financiera y generando un impacto positivo.',
      image: '/Portafolio/Fridoom.svg',
    },
    {
      title: 'Startups Calendar',
      description:
        'Plataforma que simplifica la gestión de eventos en el ecosistema emprendedor, permitiendo a los organizadores difundir actividades y a los usuarios inscribirse de forma ágil.',
      image: '/Portafolio/Calendar.svg',
    },
    {
      title: 'Alliance',
      description:
        'Plataforma médica que conecta profesionales y pacientes, permitiendo mostrar servicios, contactar y agendar citas de manera ágil.',
      image: '/Portafolio/Alliance.svg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? portfolioItems.length - 1 : prev - 1
    );
  };

  const { title, description, image } = portfolioItems[currentIndex];

  return (
    <section className="bg-gradient-to-b from-white to-purple-400 py-16 text-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        {/* Título */}
        <h2 className="text-4xl font-bold text-center mb-10">Portafolio</h2>

        {/*
          Contenedor principal:
          - flex-col en mobile
          - flex-row en pantallas md y mayores
          - items-center para alinear verticalmente en escritorio
          - gap: espacio entre imagen y recuadro
        */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          
          {/* Imagen sin recuadro, ni borde */}
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto md:mx-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
            />
          </div>

          {/*
            Recuadro semitransparente:
            - Con una ALTURA MÍNIMA (min-h-[350px]) para mantener tamaño constante
            - Se expande si el texto es mayor
            - bg-white/20 + backdrop-blur-sm para efecto difuminado
          */}
          <div className="bg-white/20 backdrop-blur-sm rounded-md p-6 shadow-sm max-w-md w-full min-h-[350px] mx-auto md:mx-0 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="mb-6">{description}</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <button
                onClick={handlePrev}
                className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
              >
                ← Anterior
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
              >
                Siguiente →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
