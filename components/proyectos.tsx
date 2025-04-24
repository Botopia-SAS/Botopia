"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Páginas Web", "Aplicaciones", "Marketing y Branding", "Diseño UX/UI"] as const;

const projects: Record<typeof categories[number], { src: string; label: string; scale: string; customStyle?: string; gridPosition?: string }[]> = {
  // Tu mismo array, no lo toqué
 "Páginas Web": [
    { src: "/PagFridoom.png", label: "Fridoom Web", scale: "scale-150", customStyle: "mt-10" },
    { src: "/AppLens.png", label: "LensPR", scale: "scale-150", customStyle: "-mt-20" },
    { src: "/PagDriving.png", label: "Driving School", scale: "scale-150", customStyle: "mt-10" },
    { src: "/AppStart.png", label: "Startups Calendar", scale: "scale-150", customStyle: "-mt-20" },
    { src: "/PagMan.png", label: "Invercloud", scale: "scale-150", gridPosition: "col-start-2 row-start-2", customStyle: "-mt-20 mb-10" },
    { src: "/AppFin.png", label: "AgroFinance", scale: "scale-150", gridPosition: "col-start-4 row-start-2", customStyle: "-mt-20" },
  ],
  "Aplicaciones": [
    { src: "/AppFri.png", label: "Fridoom App", scale: "scale-100 md:scale-110", gridPosition: "col-span-1 row-start-1" ,customStyle: "mt-4 mb-10" },
    { src: "/AppVOGHO.png", label: "VOGHO App", scale: "scale-100 md:scale-110", gridPosition: "col-span-2 row-start-1" ,customStyle: "mb-10" },
    { src: "/AppLIV.png", label: "LIVRA App", scale: "scale-100 md:scale-110", gridPosition: "col-span-3 row-start-1" ,customStyle: "mb-10" },
  ],
  "Marketing y Branding": [
  { src: "/MarFri.png", label: "Fridoom", scale: "scale-125 md:scale-150", customStyle: "mb-10", gridPosition: "col-span-2 row-start-1" },
  { src: "/MarClic.png", label: "Clicsociable", scale: "scale-125 md:scale-150", customStyle: "mb-10", gridPosition: "col-span-3 row-start-1" },
],
  "Diseño UX/UI": [
    { src: "/APPCRM.png", label: "Clicsociable CRM", scale: "scale-150", customStyle: "mt-10" },
    { src: "/DiDriv.png", label: "Dashboard Driving School", scale: "scale-150", customStyle: "-mt-20" },
    { src: "/DiLens.png", label: "LensPR UI", scale: "scale-150", customStyle: "mt-10" },
    { src: "/DiBot.png", label: "Botopia Tech", scale: "scale-150", customStyle: "-mt-16" },
    { src: "/DiBotDash.png", label: "Dashboard Botopia", scale: "scale-150", gridPosition: "col-start-2 row-start-2", customStyle: "-mt-20 mb-10" },
    { src: "/DiStart.png", label: "Startups Calendar UI", scale: "scale-150", gridPosition: "col-start-4 row-start-2", customStyle: "-mt-20" },

  ],
};

export default function Proyectos() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>("Páginas Web");

  const isScrollCategory = selectedCategory === "Aplicaciones" || selectedCategory === "Marketing y Branding";

  return (
    <section className="w-full px-4">
      {/* Título */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Nuestros Proyectos</h2>
      </div>

      {/* Tabs con Scroll Horizontal en mobile */}
      <div className="w-full overflow-x-auto mb-10 md:mb-20 pb-8">
        <div className="flex gap-6 md:gap-20 px-4 md:px-0 w-max md:w-full justify-center relative z-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm md:text-base whitespace-nowrap
                ${
                  selectedCategory === cat
                    ? "bg-purple-100 border-purple-500 text-purple-700 shadow-md"
                    : "border-gray-300 text-gray-500 hover:border-purple-400 hover:text-purple-500"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid dinámico */}
      <div className={`${isScrollCategory ? "overflow-x-auto" : "overflow-hidden"} md:overflow-visible`}>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-0 justify-center px-2 min-w-[700px] md:min-w-0 max-w-7xl mx-auto">
          <AnimatePresence>
            {projects[selectedCategory].map((project, index) => (
              <motion.div
                key={`project-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`flex flex-col items-center ${project.customStyle || ""} ${project.gridPosition || ""}`}
              >
                <img
                  src={project.src}
                  alt={project.label}
                  className={`object-contain max-h-56 transition-transform duration-300 hover:scale-105 ${project.scale}`}
                  style={{ boxShadow: "none" }}
                />
                <span className="mt-6 text-center text-sm text-gray-700">{project.label}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
