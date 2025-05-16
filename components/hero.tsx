"use client";

import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import IpadModel from "./3D/IpadModel";
import { useRouter, usePathname } from 'next/navigation';
export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Ejecutar al inicio

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center text-black dark:text-white relative px-6 md:px-16 "
      style={{
        backgroundImage: "url('/Hero/Fondo.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Texto Izquierda */}
      <div className="flex-1 flex flex-col justify-center items-start text-left space-y-6 pt-[120px] md:pt-0 pl-4 md:pl-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Tecnología innovadora para tu negocio
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-lg">
          Creamos experiencias digitales de alto impacto que transforman tu negocio.
        </p>
        <button
  onClick={() => router.push(`/${locale}/contactUs`)}
  className="mt-4 px-6 py-3 bg-purple-900 text-white rounded-lg hover:bg-purple-500 transition"
>
  Comienza tu proyecto
</button>
      </div>

      {/* iPad Derecha */}
      <div className="flex-1 flex justify-center items-center h-[400px] md:h-[600px] w-full mt-28 md:w-auto">
        <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <pointLight position={[0, 0, 2]} intensity={1} color="white" />
          <IpadModel scale={isMobile ? 0.014 : 0.025} />
        </Canvas>
      </div>
    </div>
  );
}
