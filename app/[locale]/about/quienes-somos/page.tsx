import History from "./History";
import JoinUs from "./JoinUs";
import Team from "../equipo/page";

export default function QuienesSomosPage() {
  return (
    <div className="text-white bg-gradient-to-b from-black to-purple-800 min-h-screen">
       <div className="max-w-7xl mx-auto px-6">
      {/* Sección Sobre Botopia */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 py-16">
        {/* Contenido de texto alineado a la izquierda */}
        <div className="md:w-1/2 text-left ml-8">
          <h1 className="text-5xl font-extrabold text-white mb-10 mt-10">
            Sobre Botopia
          </h1>
          <p className="text-lg mb-4">
            Nuestro objetivo es acelerar la transformación digital de las
            empresas, optimizando 
            sus procesos y brindándoles herramientas innovadoras <br/>que les
            permitan destacar en el mercado como desarrollo de software personalizado para
            empresas de todos los tamaños; desde sitios web <br/> y aplicaciones móviles hasta
            plataformas empresariales.
            <br />
            En Botopia, trabajamos con tecnologías de vanguardia para garantizar
            productos escalables, seguros y eficientes.
          </p>
        </div>

        {/* Imagen a la derecha */}
        <div className="md:w-1/2 flex justify-center mt-20">
          <img
            src="/sobre-nosotros.png"
            alt="Sobre Botopia"
            className="w-full max-w-md rounded-lg animate-float-rotate"
          />
        </div>
        
      </section>
      
      {/* Sección Historia */}
      <History />

      {/* Sección Equipo */}
      <Team />

      {/* Sección Únete a Nuestro Equipo */}
      <JoinUs />
    </div>
    </div>
  );
}
