"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Páginas Web", "Aplicaciones", "Marketing y Branding", "Diseño UX/UI"] as const;

const projects: Record<typeof categories[number], { src: string; scale: string; customStyle?: string; gridPosition?: string }[]> = {
  "Páginas Web": [
    { src: "/PagFridoom.png", scale: "scale-150", customStyle: "mt-36" },
    { src: "/AppLens.png", scale: "scale-150", customStyle: "-mt-32" },
    { src: "/PagDriving.png", scale: "scale-150", customStyle: "mt-36" },
    { src: "/AppStart.png", scale: "scale-150", customStyle: "-mt-32" },
    { src: "/PagMan.png", scale: "scale-150", gridPosition: "col-start-2 row-start-2", customStyle: "-mt-36 mb-10" },
    { src: "/AppFin.png", scale: "scale-150", gridPosition: "col-start-4 row-start-2", customStyle: "-mt-36" },
  ],
  "Aplicaciones": [
    { src: "/AppFri.png", scale: "scale-150", customStyle: "mt-4 mb-20", gridPosition: "col-start-1 row-start-1" },
    { src: "/AppVOGHO.png", scale: "scale-150", customStyle: "-mt-5 mb-10", gridPosition: "col-span-2 ml-20 row-start-1" },
    { src: "/AppLIV.png", scale: "scale-150", customStyle: "-mt-5 mb-10", gridPosition: "col-start-4 row-start-1" },
  ],
  "Marketing y Branding": [
    { src: "/MarFri.png", scale: "scale-150", customStyle: "-mt-4 mb-10", gridPosition: "col-span-2 row-start-1" },
    { src: "/MarClic.png", scale: "scale-150", customStyle: "-mt-4 mb-10", gridPosition: "col-span-3 row-start-1" },
  ],
  "Diseño UX/UI": [
    { src: "/AppCRM.png", scale: "scale-150", customStyle: "mt-36" },
    { src: "/DiDri.png", scale: "scale-150", customStyle: "-mt-32" },
    { src: "/DiLens.png", scale: "scale-150", customStyle: "mt-36" },
    { src: "/DiBot.png", scale: "scale-150", customStyle: "-mt-32" },
    { src: "/DiBotDash.png", scale: "scale-150", gridPosition: "col-start-2 row-start-2", customStyle: "-mt-36 mb-10" },
    { src: "/DiStart.png", scale: "scale-150", gridPosition: "col-start-4 row-start-2", customStyle: "-mt-36" },
  ],
};

export default function Proyectos() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>("Páginas Web");

  return (
    <section className="w-full -mt-3">
      {/* Título */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Nuestros Proyectos</h2>
      </div>

      {/* Tabs Mejoradas */}
      <div className="flex flex-wrap justify-center gap-20 mb-20 relative z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm md:text-base
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

      {/* Grid dinámico para TODAS las categorías */}
      <div className="overflow-hidden md:overflow-visible">
        <div className="grid grid-cols-4 gap-14 min-w-[900px] md:min-w-0 max-w-6xl mx-auto">
          <AnimatePresence>
            {projects[selectedCategory].map((project, index) => (
              <motion.div
                key={`project-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`flex justify-center items-center ${project.customStyle || ""} ${project.gridPosition || ""}`}
              >
                <img
                  src={project.src}
                  alt={`Proyecto ${index}`}
                  className={`object-contain max-h-56 transition-transform duration-300 hover:scale-105 ${project.scale}`}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
