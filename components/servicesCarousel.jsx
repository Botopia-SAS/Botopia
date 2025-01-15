import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import TarjetaServicio from "./servicetarjet"; // Asegúrate de importar el componente TarjetaServicio

export default function ServiciosCarousel({ services }) {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      slidesPerView={1}
      spaceBetween={16}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {services.map((service, index) => (
        <SwiperSlide key={index}>
          <TarjetaServicio service={service} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
