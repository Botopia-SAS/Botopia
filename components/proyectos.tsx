"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from "next-intl";

const categories = ["web", "apps", "marketing", "design"] as const;

const projects: Record<
  (typeof categories)[number],
  {
    src: string;
    key: string;
    scale: string;
    customStyle?: string;
    gridPosition?: string;
  }[]
> = {
  web: [
    {
      src: "/PagFridoom.png",
      key: "FridoomWeb",
      scale: "scale-150",
      customStyle: "mt-10",
    },
    {
      src: "/AppLens.png",
      key: "LensPR",
      scale: "scale-150",
      customStyle: "-mt-20",
    },
    {
      src: "/PagDriving.png",
      key: "DrivingSchool",
      scale: "scale-150",
      customStyle: "mt-10",
    },
    {
      src: "/AppStart.png",
      key: "StartupsCalendar",
      scale: "scale-150",
      customStyle: "-mt-20",
    },
    {
      src: "/PagMan.png",
      key: "Invercloud",
      scale: "scale-150",
      gridPosition: "col-start-2 row-start-2",
      customStyle: "-mt-20 mb-10",
    },
    {
      src: "/AppFin.png",
      key: "AgroFinance",
      scale: "scale-150",
      gridPosition: "col-start-4 row-start-2",
      customStyle: "-mt-20",
    },
  ],
  apps: [
    {
      src: "/AppFri.png",
      key: "FridoomApp",
      scale: "scale-110",
      customStyle: "mt-4 mb-6",
    },
    {
      src: "/AppVOGHO.png",
      key: "VOGHOApp",
      scale: "scale-110",
      customStyle: "mb-6",
    },
    {
      src: "/AppLIV.png",
      key: "LIVRAApp",
      scale: "scale-110",
      customStyle: "mb-6",
    },
  ],
  marketing: [
    {
      src: "/MarFri.png",
      key: "Fridoom",
      scale: "scale-150",
      customStyle: "mb-10",
    },
    {
      src: "/MarClic.png",
      key: "Clicsociable",
      scale: "scale-150",
      customStyle: "mb-10",
    },
  ],
  design: [
    {
      src: "/APPCRM.png",
      key: "ClicsociableCRM",
      scale: "scale-150",
      customStyle: "mt-10",
    },
    {
      src: "/DiDriv.png",
      key: "DashboardDrivingSchool",
      scale: "scale-150",
      customStyle: "-mt-20",
    },
    {
      src: "/DiLens.png",
      key: "LensPRUI",
      scale: "scale-150",
      customStyle: "mt-10",
    },
    {
      src: "/DiBot.png",
      key: "BotopiaTech",
      scale: "scale-150",
      customStyle: "-mt-16",
    },
    {
      src: "/DiBotDash.png",
      key: "DashboardBotopia",
      scale: "scale-150",
      gridPosition: "col-start-2 row-start-2",
      customStyle: "-mt-20 mb-10",
    },
    {
      src: "/DiStart.png",
      key: "StartupsCalendarUI",
      scale: "scale-150",
      gridPosition: "col-start-4 row-start-2",
      customStyle: "-mt-20",
    },
  ],
};

export default function Proyectos() {
  const t = useTranslations("Proyectos");
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof categories)[number]>("web");
  const [isMobile, setIsMobile] = useState(false);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full px-4 relative">
      {/* Título */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {t("title")}
        </h2>
      </div>

      {/* Tabs */}
      <div className="w-full overflow-x-auto mb-16 md:mb-24 pb-8 z-10 relative">
        <div className="flex gap-6 md:gap-20 px-4 md:px-0 w-max md:w-full justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm md:text-base whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-purple-100 border-purple-500 text-purple-700 shadow-md"
                  : "border-gray-300 text-gray-500 hover:border-purple-400 hover:text-purple-500"
              }`}
            >
              {t(`categories.${cat}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Layout */}
      {isMobile ? (
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projects[selectedCategory].map((project) => (
              <div
                key={project.src}
                className="flex-shrink-0 w-full flex flex-col items-center justify-center px-6"
                style={{ minHeight: "500px" }}
              >
                <div className="w-full max-w-xs mx-auto">
                  <img
                    src={project.src}
                    alt={t(`projects.${project.key}`)}
                    className="w-full h-auto object-contain max-h-[400px] transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <span className="mt-4 text-center text-sm text-gray-700">
                  {t(`projects.${project.key}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center">
          {selectedCategory === "apps" || selectedCategory === "marketing" ? (
            <div className="flex justify-center gap-20 w-full max-w-[1000px]">
              <AnimatePresence mode="wait">
                {projects[selectedCategory].map((project) => (
                  <motion.div
                    key={project.src}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={`flex flex-col items-center ${
                      project.customStyle || ""
                    } ${project.gridPosition || ""}`}
                  >
                    <img
                      src={project.src}
                      alt={t(`projects.${project.key}`)}
                      className={`object-contain max-h-56 md:max-h-48 w-auto transition-transform duration-300 hover:scale-105 ${project.scale}`}
                    />
                    <span className="mt-3 text-center text-sm text-gray-700 whitespace-nowrap">
                      {t(`projects.${project.key}`)}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="grid grid-cols-4 w-full max-w-[1400px]">
              <AnimatePresence mode="wait">
                {projects[selectedCategory].map((project) => (
                  <motion.div
                    key={project.src}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={`flex flex-col items-center ${
                      project.customStyle || ""
                    } ${project.gridPosition || ""}`}
                  >
                    <img
                      src={project.src}
                      alt={t(`projects.${project.key}`)}
                      className={`object-contain max-h-56 md:max-h-48 w-auto transition-transform duration-300 hover:scale-105 ${project.scale}`}
                    />
                    <span className="mt-3 text-center text-sm text-gray-700 whitespace-nowrap">
                      {t(`projects.${project.key}`)}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
