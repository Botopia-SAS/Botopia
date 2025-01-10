"use client";
import React from "react";

const clientes = [
    "/cocacola.svg",
    "/startupscalendar1.svg",
    "/gip.svg",
    "/eltambor.svg",
    "/drivingschool.svg",
    "/fridoom.svg",
];

export default function Clientes() {
    return (
        <section className="bg-gradient-to-b from-purple-800 to-black py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">
                    Nuestros Clientes
                </h2>
                {/* Carrusel animado */}
                <div className="relative overflow-hidden w-full h-32 py-8">
                    {/* Contenedor animado */}
                    <div className="flex w-full animate-marquee">
                        {clientes.concat(clientes).map((cliente, index) => (
                            <div
                                key={index}
                                className="min-w-[50px] h-[60px] flex-shrink-0 flex items-center justify-center shadow-md rounded-md"
                            >
                                <img
                                    src={cliente}
                                    alt={`Cliente ${index + 1}`}
                                    className="h-auto max-h-[150px] w-64 object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
