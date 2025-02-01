export default function About() {
  return (
    <section className="py-16 bg-gradient-to-b from-black via-[#20002c] to-[#4b0082] text-white">
      <div className="container mx-auto text-center px-6">
        
        {/* Título */}
        <h1 className="text-5xl font-bold mb-6 text-purple-300">
          Acerca de Nosotros
        </h1>

        {/* Descripción */}
        <p className="text-lg max-w-3xl mx-auto text-gray-300">
          En <span className="text-purple-400 font-semibold">Botopia</span>, conectamos empresas con la tecnología del futuro. 
          Nuestro equipo de expertos en automatización e inteligencia artificial ayuda a negocios a 
          optimizar procesos, mejorar la relación con sus clientes y aumentar su productividad.
        </p>

        {/* Imágenes o gráficos */}
        <div className="flex justify-center items-center mt-10 gap-6 flex-wrap">
          <div className="bg-purple-700/50 rounded-xl p-6 shadow-lg text-center max-w-xs">
            <h3 className="text-2xl font-semibold text-purple-200 mb-2">🚀 Innovación</h3>
            <p className="text-gray-300 text-sm">Desarrollamos soluciones tecnológicas a la medida para tu empresa.</p>
          </div>
          <div className="bg-purple-700/50 rounded-xl p-6 shadow-lg text-center max-w-xs">
            <h3 className="text-2xl font-semibold text-purple-200 mb-2">🤖 IA & Automatización</h3>
            <p className="text-gray-300 text-sm">Implementamos chatbots y automatización de procesos para optimizar tu negocio.</p>
          </div>
          <div className="bg-purple-700/50 rounded-xl p-6 shadow-lg text-center max-w-xs">
            <h3 className="text-2xl font-semibold text-purple-200 mb-2">🌍 Transformación Digital</h3>
            <p className="text-gray-300 text-sm">Te ayudamos a construir presencia online y mejorar tu conexión con clientes.</p>
          </div>
        </div>

        {/* CTA (Call to Action) */}
        <div className="mt-12">
          <a 
            href="/contact" 
            className="bg-white text-purple-900 font-bold py-3 px-6 rounded-full text-lg hover:bg-purple-300 transition"
          >
            Contáctanos
          </a>
        </div>
        
      </div>
    </section>
  );
}
