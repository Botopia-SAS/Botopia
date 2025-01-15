interface Service {
  icon: string;
  title: string;
  category: string;
  description: string;
}

export default function TarjetaServicio({ service }: { service: Service }) {
    return (
      <div className="w-80  bg-black rounded-xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300 ">
        {/* Ícono */}
        <div className="flex justify-center mb-4">
          <img src={service.icon} alt={service.title} className="h-16" />
        </div>
        {/* Título */}
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        {/* Categoría */}
        <p className="text-pink-500 font-semibold mb-4">{service.category}</p>
        {/* Descripción */}
        <p className="text-gray-400 mb-6">{service.description}</p>
        {/* Botón */}
        <a
          href="#"
          className="inline-block px-6 py-2 bg-pink-500 text-white rounded-full font-bold hover:bg-pink-600"
        >
          Ver más
        </a>
      </div>
    );
  }
  