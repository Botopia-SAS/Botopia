import Image from "next/image";
import Link from "next/link";

const Fridoom = () => {
  return (
    <section className="bg-gradient-to-br from-purple-300 to-purple-950 py-20 text-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Fridoom</h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          En colaboración con <strong>Fridoom</strong>, hemos desarrollado su página web y aplicación de finanzas. 
          Fridoom es una plataforma fintech donde los usuarios pueden organizar todas sus finanzas en un solo lugar, 
          facilitando la gestión de ingresos y egresos de manera inteligente.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
          {/* Imagen de Fridoom */}
          <div className="relative w-80 h-80">
            <Image 
              src="/images/fridoom-preview.png" // Asegúrate de agregar la imagen en la carpeta "public/images"
              alt="Fridoom - Plataforma de Finanzas"
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Características clave */}
          <div className="text-left text-white max-w-md">
            <h3 className="text-2xl font-semibold mb-4">¿Qué hemos desarrollado?</h3>
            <ul className="list-disc list-inside space-y-2 text-white/80">
              <li>🔹 Plataforma web moderna y escalable</li>
              <li>🔹 Aplicación de finanzas personales intuitiva</li>
              <li>🔹 Integraciones fintech para automatizar transacciones</li>
              <li>🔹 Dashboard interactivo con visualización de datos</li>
            </ul>
          </div>
        </div>

        {/* Botón para ir a la web de Fridoom */}
        <div className="mt-10">
          <Link href="https://fridoom.com/" target="_blank">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all">
              Visitar Fridoom
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Fridoom;
