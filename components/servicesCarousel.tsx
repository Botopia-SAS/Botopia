"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { useTranslations } from "next-intl";

const serviceKeys = [
  "moviles",
  "web",
  "ia",
  "ecommerce",
  "api",
  "landing",
  "saas",
  "especiales",
  "corporativo",
  "software",
];

export default function ServicesCarousel() {
  const t = useTranslations("ServiciosUI");
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
        {serviceKeys.map((key, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-[370px] h-[220px] flex flex-col justify-between">
              <div className="text-purple-400 text-4xl">
                {t.raw(`carousel.${key}.icon`)}
              </div>
              <h3 className="text-lg font-semibold text-white truncate">
                {t(`carousel.${key}.title`)}
              </h3>
              <p className="text-gray-300 text-sm line-clamp-2">
                {t(`carousel.${key}.description`)}
              </p>
              <Link href={t.raw(`carousel.${key}.link`)}>
                <span className="text-purple-400 text-sm font-semibold hover:underline">
                  {t("seeMore")}
                </span>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
