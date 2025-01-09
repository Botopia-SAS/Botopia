export default function Hero() {
    return (
        <section className="bg-gradient-to-b from-black to-purple-800 text-white py-0 relative">
            {/* Contenedor principal */}
            <div className="container mx-auto px-6 lg:px-20 text-center relative z-10 pt-16">
                {/* Título y subtítulo */}
                <h1 className="text-4xl font-bold mb-4 lg:text-5xl">
                    Conectamos <span className="text-purple-400">empresas</span> y{" "}
                    <span className="text-purple-400">tecnología</span>
                </h1>
                <p className="text-lg lg:text-xl mb-8">
                    Facilita el <span className="font-bold">acceso a tus servicios con tecnología</span> y mejora las relaciones con
                    tus clientes.
                </p>

                {/* Botones */}
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-14">
                    <a
                        href="#"
                        className="bg-[#9165f3] text-white py-3 px-6 rounded-md font-bold hover:bg-purple-600"
                    >
                        Conoce nuestros productos
                    </a>
                    <a
                        href="#"
                        className="border-2 border-[#9165f3] text-[#9165f3] py-3 px-6 rounded-md font-semibold hover:bg-purple-500 hover:text-white"
                    >
                        Hablar con ventas
                    </a>
                    <a
                        href="#"
                        className="bg-[#9165f3] text-white py-3 px-6 rounded-md font-semibold hover:bg-purple-600"
                    >
                        Conoce nuestros servicios
                    </a>
                </div>

                {/* Características */}
                <div className="relative flex justify-center items-center">
                    {/* Imagen central */}
                    <img
                        src="/persona2.svg"
                        alt="Persona"
                        className="max-w-full max-h-[400px] w-auto h-auto relative z-20 mt-20"
                    />

                    {/* Imagenes flotantes */}
                    <img
                        src="/icon1.png"
                        alt="Icono 1"
                        className="absolute w-60 h-auto top-0 left-1/4 animate-float"
                    />
                    <img
                        src="/icon2.png"
                        alt="Icono 2"
                        className="absolute w-48 h-auto bottom-6 left-1/4 animate-float"
                        style={{ animationDelay: "1s" }}
                    />
                    <img
                        src="/icon3.png"
                        alt="Icono 3"
                        className="absolute w-52 h-auto top-10 right-1/4 animate-float"
                        style={{ animationDelay: "1s" }}
                    />
                    <img
                        src="/icon4.png"
                        alt="Icono 3"
                        className="absolute w-64 h-auto top-30 right-1 animate-float"
                        style={{ animationDelay: "1s" }}
                    />
                </div>
            </div>
        </section>
    );
}
