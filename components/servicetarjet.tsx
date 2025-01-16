import Image from "next/image";

interface Service {
  icon: string;
  title: string;
  category: string;
  description: string;
}

export default function TarjetaServicio({ service }: { service: Service }) {
    return (
      <div className="w-80 bg-transparent shadow-gray-500 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300 ">
        {/* Ícono */}
        <div className="flex justify-center mb-4 text-white">
        <Image
          src={service.icon}
          alt={service.title}
          width={64}
          height={64}
          className="h-16 text-white"
        />
        </div>
        {/* Título */}
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        {/* Categoría */}
        <p className="text-purple-700 font-semibold mb-4">{service.category}</p>
        {/* Descripción */}
        <p className="text-gray-700 mb-6">{service.description}</p>
        {/* Botón */}
        <a
          href="#"
          className="inline-block px-6 py-2 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700"
        >
          Ver más
        </a>
      </div>
    );
  }
  