"use client";
import { useEffect, useRef } from "react";

const clientes = [
    "/cocacola.svg",
    "/startupscalendar1.svg",
    "/gip.svg",
    "/eltambor.svg",
    "/drivingschool.svg",
    "/fridoom.svg",
];

export default function Clientes() {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

                // Si está al final, regresa al inicio
                if (scrollLeft + clientWidth >= scrollWidth) {
                    carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    carouselRef.current.scrollBy({ left: 150, behavior: "smooth" });
                }
            }
        }, 3000); // Cambia cada 3 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-gradient-to-b from-purple-800 to-black py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">
                    Nuestros Clientes
                </h2>
                {/* Carrusel */}
                <div
                    ref={carouselRef}
                    className="flex overflow-x-auto space-x-6 scrollbar-hide"
                >
                    {clientes.map((cliente, index) => (
                        <div
                            key={index}
                            className="min-w-[350px] h-[100px] flex-shrink-0 flex items-center justify-center shadow-md rounded-md"
                        >
                            <img
                                src={cliente}
                                alt={`Cliente ${index + 1}`}
                                className="h-auto max-h-[80px] w-auto object-contain"
                            />

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
