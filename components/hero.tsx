"use client";

import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import IpadModel from "./3D/IpadModel";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="
        w-full min-h-screen
        flex flex-col md:flex-row
        items-center justify-center
        text-black dark:text-white
        px-2 md:px-16 pt-24 md:pt-0
      "
      style={{
        backgroundImage: "url('/Hero/Fondo.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Sección Izquierda: Texto */}
      <div className="flex-1 flex flex-col justify-center items-start text-left space-y-6 mt-10 md:mt-0 pl-4 md:pl-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Tecnología innovadora para tu negocio
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-lg">
          Creamos experiencias digitales de alto impacto que transforman tu negocio.
        </p>
        <button className="mt-4 px-6 py-3 bg-purple-900 text-white rounded-lg hover:bg-purple-500 transition">
          Comienza tu proyecto
        </button>
      </div>

      {/* Sección Derecha: iPad 3D */}
      <div
        className="
          flex-1 flex justify-center items-center
          w-full
          h-64 sm:h-80 md:h-[600px]
          mt-10 md:mt-0
        "
      >
        <Canvas
          className="w-full h-full"
          camera={{ position: [0, 0, 5], fov: 35 }}
        >
          <ambientLight intensity={1.2} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <pointLight position={[0, 0, 2]} intensity={1} color="white" />
          <IpadModel />
        </Canvas>
      </div>
    </div>
  );
}
