'use client';

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Home() {

    const pathname = usePathname(); // Obtiene la ruta actual
    const locale = pathname.split("/")[1]; // Extrae el locale desde la URL
    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-br from-black via-purple-500 to-white dark:from-black dark:via-purple-900 dark:to-purple-800 text-white font-sans transition-colors duration-300 p-8">
            {/* Main Content */}
            <main className="flex flex-col-reverse lg:flex-row items-center justify-center gap-4 mt-20 py-10">
                <img
                    src="/demos/demo.gif"
                    alt="Animación de demostración"
                    className="w-96 max-w-lg"
                />

                {/* Contenedor Derecho: Botones */}
                <div className="flex flex-col items-center text-center gap-6">
                    <h2 className="text-4xl sm:text-6xl font-bold mb-4">
                        Automatiza tus chats con Inteligencia Artificial
                    </h2>
                    <p className="text-xl sm:text-2xl font-medium">
                        Lleva tus conversaciones al siguiente nivel con Chat-GPT.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        {/* Botón de Iniciar Sesión */}
                        <button
                            className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 focus:outline-none focus:ring focus:ring-blue-300 active:translate-y-1"
                            onClick={() => {
                                window.location.href = `/${locale}/demos/whatsapp-bot-demo/login`;
                            }}
                        >
                            Iniciar Sesión
                        </button>

                        {/* Botón de Registrarse */}
                        <button
                            className="relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 focus:outline-none focus:ring focus:ring-green-300 active:translate-y-1"
                            onClick={() => {
                                window.location.href = `/${locale}/demos/whatsapp-bot-demo/register`;
                            }}
                        >
                            Registrarse
                        </button>
                    </div>
                    <img src="/demos/astronauta.svg" alt="astronauta" className="w-72" />
                </div>
            </main>

            {/* Footer */}
            <footer className="mt-12 text-center">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    © 2025 Botopia. Todos los derechos reservados.
                </p>
            </footer>
        </div>
    );
}
