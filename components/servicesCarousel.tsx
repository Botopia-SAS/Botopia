"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const services = [
  { icon: "📱", title: "Aplicaciones Móviles", description: "Desarrollo de apps nativas e híbridas.", link: "/soluciones/moviles" },
  { icon: "🌍", title: "Aplicaciones Web", description: "Aplicaciones progresivas y dinámicas.", link: "/soluciones/web" },
  { icon: "🤖", title: "Chatbot o Integraciones de IA", description: "Automatización inteligente para tu negocio.", link: "/soluciones/ia" },
  { icon: "🛒", title: "E-commerce", description: "Tiendas online con pagos seguros y escalables.", link: "/soluciones/ecommerce" },
  { icon: "🔗", title: "Integración API Básica", description: "Conexión con sistemas externos mediante API.", link: "/soluciones/api" },
  { icon: "🚀", title: "Landing Page estándar", description: "Páginas optimizadas para conversiones.", link: "/soluciones/landing" },
  { icon: "☁️", title: "Plataformas SaaS", description: "Soluciones en la nube con arquitectura escalable.", link: "/soluciones/saas" },
  { icon: "🛠", title: "Proyectos Especiales", description: "Desarrollos personalizados para necesidades únicas.", link: "/soluciones/especiales" },
  { icon: "🏢", title: "Sitio Web Corporativo", description: "Presencia digital profesional para empresas.", link: "/soluciones/corporativo" },
  { icon: "💻", title: "Software a la Medida", description: "Sistemas adaptados a los requerimientos de tu empresa.", link: "/soluciones/software" },
];

export default function ServicesCarousel() {
  return (
    <div className="py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="rounded-lg overflow-hidden"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-[370px] h-[220px] flex flex-col justify-between">
              <div className="text-purple-400 text-4xl">{service.icon}</div>
              <h3 className="text-lg font-semibold text-white truncate">{service.title}</h3>
              <p className="text-gray-300 text-sm line-clamp-2">{service.description}</p> {/* 🔥 Texto truncado con ... */}
              <Link href={service.link}>
                <span className="text-purple-400 text-sm font-semibold hover:underline">Ver más</span>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}