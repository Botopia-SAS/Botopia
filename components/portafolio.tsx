"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

// Importa los estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const Portfolio = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      title: "fridoom",
      description:
        "Fridoom es una plataforma de gestión financiera automatizada que permite a los usuarios registrar y monitorear sus ingresos y egresos de manera inteligente. Su enfoque está basado en el concepto de open banking, lo que significa que puede integrarse con diversas fuentes de información bancaria para ofrecer un control financiero en tiempo real.",
      image: "/Portafolio/fridoom.png",
      link: "https://www.fridoom.com",
    },
    {
      title: "VohGo",
      description: "Vohgo es una app móvil diseñada para revolucionar la compra y venta de componentes electrónicos de manera rápida, accesible y eficiente. Desarrollamos una plataforma intuitiva que conecta vendedores y compradores, optimizando el proceso de comercialización con una experiencia fluida y segura.",
      image: "/Portafolio/Vohgo2.svg",
    },
    {
      title: "Startups Calendar",
      description: "Startups Calendar es una plataforma donde emprendedores y entusiastas del ecosistema tech pueden descubrir y postular eventos de startups en un solo lugar. Desarrollamos un sitio web rápido, intuitivo y sin costos operativos.",
      image: "/Portafolio/Calendar2.svg",
      link: "https://www.startupscalendar.com",
    },
    {
      title: "LensPR",
      description:
        "Para LF Consulting SAS - LensPR, desarrollamos un sitio web con un dashboard intuitivo y optimizado para SEO, permitiendo actualizaciones rápidas sin conocimientos técnicos. La plataforma mejora su presencia digital y facilita la captación de clientes.",
      image: "/Portafolio/LensPR.svg",
      link: "https://lfconsultingsas-lens-pr-pgweb.vercel.app/es",
    },
    {
      title: "Alliance",
      description: "Alliance Medical Supplies es una plataforma diseñada para facilitar el acceso a dispositivos médicos y medicamentos de alta calidad. Desarrollamos un sitio web intuitivo que permite a instituciones de salud y profesionales médicos descubrir, gestionar y adquirir productos innovadores de forma eficiente.",
      image: "/Portafolio/Alliance2.svg",
      link: "https://alliance-ebon.vercel.app",
    },
    {
      title: "Driving School",
      description:
        "Desarrollamos el sitio web de Driving School Palm Beach, una plataforma moderna con reservas en línea, gestión de instructores y pagos integrados, optimizando la administración y mejorando la experiencia de los estudiantes. Creada con las mejores herramientas, digitaliza por completo el proceso de una escuela de conducción.",
      image: "/Portafolio/DS.svg",
      link: "https://driving-school-mocha.vercel.app",
    },
    {
      title: "Sion",
      description:
        "Para Sion, creamos un sitio web optimizado para el sector salud, con un diseño intuitivo y accesible. Implementamos una plataforma adaptable que permite actualizaciones sencillas, mejorando su presencia digital y facilitando la conexión con sus pacientes.",
      image: "/Portafolio/Sion.svg",
      link: "https://sion-bay.vercel.app/",
    },
    {
      title: "Colombia Wellness Week",
      description:
        "Colombia Wellness Week es un evento anual en Bogotá del 10 al 17 de noviembre, enfocado en el bienestar físico, mental y emocional. Su sitio web ofrece información sobre talleres, conferencias y sesiones prácticas con expertos, además de opciones de suscripción para recibir actualizaciones.",
      image: "/Portafolio/CWW.svg",
      link: "https://www.colombiawellnessweek.com/en",
    },
    {
      title: "Clínica San Roque",
      description:
        "Para la clínica de San Roque, desarrollamos una plataforma web moderna y funcional que optimiza la gestión de sus servicios de atención médica, permitiéndoles actualizar información de manera sencilla y mejorar su presencia digital. Implementamos un diseño intuitivo y adaptable, asegurando accesibilidad para sus pacientes y facilitando la comunicación con el equipo médico.",
      image: "/Portafolio/SanRoque.svg",
      link: "https://divino-bienestar-san-roque-umber.vercel.app/",
    },
    {
      title: "Fabian Garzón",
      description:
        "Para Fabián Garzón, creamos un portafolio web visualmente impactante, diseñado para resaltar su trabajo fotográfico con una navegación fluida y una galería optimizada. La plataforma permite actualizar su contenido fácilmente, mejorando su presencia digital y facilitando la conexión con potenciales clientes.",
      image: "/Portafolio/FG.svg",
      link: "https://fabian-garzon-pw.vercel.app/",
    },
    
    {
      title: "Planta Femsa Cocacola",
      description: "Desarrollamos la programación de un PLC para optimizar el proceso de retrolavado de tanques, garantizando eficiencia, precisión y control automatizado en la operación. Implementamos una solución robusta que mejora la gestión del agua y la limpieza, optimizando los tiempos de producción y reduciendo el desperdicio.",
      image: "/Portafolio/Cocacola2.svg",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-purple-300 to-purple-700 py-12 md:py-20 text-gray-800 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-300 to-transparent"></div>
      <div className="mx-auto px-4 md:px-6 max-w-screen-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-white">
          Portafolio
        </h2>

        {/* Carrusel con Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20} // Reducir separación en móvil
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="w-full md:w-4/5 lg:w-[90%] mx-auto"
        >
          {portfolioItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 rounded-3xl p-6 md:p-8 shadow-lg">
                {/* Contenedor de Imagen con Degradado */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="contain"
                    className="relative z-10"
                  />
                </div>

                {/* Contenedor de Texto */}
                <div className="flex flex-col justify-center w-full md:w-1/2 text-center md:text-left px-4 md:px-6">
                  <h3 className="text-2xl md:text-4xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-200 mt-2 md:mt-4 text-justify">
                    {item.description}
                  </p>

                  {/* Botón de "Visita el sitio web" si tiene link */}
                  {item.link && (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="mt-4 md:mt-6 bg-white text-purple-700 font-bold py-2 md:py-3 px-4 md:px-6 rounded-full hover:bg-purple-600 hover:text-white transition">
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
