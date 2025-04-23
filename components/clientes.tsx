"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const clientes = [
  { src: "/Coca-Cola_logo.svg", alt: "Coca Cola", scale: "scale-115" },
  { src: "/drivingschool.svg", alt: "Driving School", scale: "scale-125" },
  { src: "/fridoom.svg", alt: "Fridoom", scale: "scale-150" },
  { src: "/logo_LensPR.png", alt: "LensPR" },
  { src: "/startupscalendar1.svg", alt: "Startups Calendar", scale: "scale-150" },
  { src: "/LogoTambor.png", alt: "Tambor", scale: "scale-150" },
  { src: "/LogoClic.png", alt: "Clic", scale: "scale-150" },
  { src: "/LogoGG.png", alt: "GG", scale: "scale-150" },
];

export function Clientes() {
  return (
    <section className="w-full pt-6 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Nuestros Clientes
        </h2>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="mask-gradient">
          <Swiper
            className="w-full"
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            loop
            speed={4000}
            grabCursor={true}
          >
            {clientes.map((cliente, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <div className="w-32 h-24 flex items-center justify-center p-2">
                  <img
                    src={cliente.src}
                    alt={cliente.alt}
                    className={`max-h-full max-w-full object-contain 
                      filter grayscale transition-all duration-300 
                      dark:invert ${cliente.scale || ""}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
