export default function Hero() {
    return (
        <section className="bg-gradient-to-b from-black to-purple-800 text-white relative">
            {/* Contenedor principal */}
            <div className="container px-8 md:mx-16 lg:px-20 md:pt-32 py-4 md:py-24">
                <div className="flex flex-col lg:flex-row items-center lg:items-start">
                    {/* Contenedor del título y subtítulo */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-3xl font-bold mb-4 md:text-5xl md:mb-12">
                            Conectamos <br /> <span className="text-purple-400">empresas</span> y{" "}
                            <span className="text-purple-400">tecnología</span>
                        </h1>
                        <p className="text-lg md:text-2xl md:mb-20">
                            <br />Facilita el <span className="font-bold">acceso a tus servicios con tecnología</span> <br className="hidden md:block"/> y mejora las relaciones con
                            tus clientes.
                        </p>

                        {/* Botones */}
                        <div className="flex flex-col md:flex-row justify-start md:justify-start space-y-6 md:space-y-0 md:space-x-6 md:mt-14 mt-6">
                            <a
                                href="#"
                                className="border-2 border-[#9165f3] text-[#9165f3] py-3 px-6 rounded-md font-semibold hover:bg-purple-500 hover:text-white"
                            >
                                Hablar con ventas
                            </a>
                            <a
                                href="#"
                                className="border border-black shadow-lg jump-button bg-white text-black py-3 px-6 rounded-md font-semibold hover:bg-purple-600"
                            >
                                ¡Pruebanos gratis!
                            </a>
                        </div>
                    </div>

                    {/* Contenedor de las imágenes */}
                    <div className=" md:w-1/2 md:relative flex md:justify-end flex-wrap md:items-center gap-4 md:py-0 py-10 pt-32">
                        {/* Imagen central */}
                        <img
                            src="/astronave.svg"
                            alt="Persona"
                            className="hidden md:block max-w-full max-h-[400px] md:w-auto md:h-96 md:relative md:z-20 top-8"
                        />

                        {/* Imágenes flotantes */}
                        <img
                            src="/chatbot.png"
                            alt="Icono 1"
                            className="absolute w-40 lg:w-52 h-auto md:top-0 md:left-1/4 md:right-2/4 animate-float"
                            style={{ animationDelay: "4s" }}
                        />
                        <img
                            src="/paginaweb.png"
                            alt="Icono 2"
                            className="absolute w-40 md:w-52 md:h-auto right-56 md:-left-2 animate-float md:top-64"
                            style={{ animationDelay: "3s" }}
                        />
                        <img
                            src="/app.png"
                            alt="Icono 3"
                            className="absolute w-40 md:w-52 md:h-auto top-96 md:top-10 md:-right-1/4 animate-float"
                            style={{ animationDelay: "2s" }}
                        />
                        <img
                            src="/icon4.png"
                            alt="Icono 4"
                            className="absolute w-40 lg:w-52 md:h-auto top-96 right-56 md:-top-20 md:right-2 animate-float"
                            style={{ animationDelay: "1s" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
