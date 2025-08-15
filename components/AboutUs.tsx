export default function AboutUs() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-black via-[#20002c] to-[#4b0082] text-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Título Principal */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-purple-300">
            Acerca de Nosotros
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
            En <span className="text-purple-400 font-semibold">Botopia</span>,
            conectamos empresas con la tecnología del futuro a través de soluciones innovadoras 
            que transforman la manera de hacer negocios.
          </p>
        </div>

        {/* Secciones de Misión, Visión y Propuesta de Valor */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Misión */}
          <div className="bg-purple-700/30 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-purple-500/20">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-purple-200 mb-4">
                Nuestra Misión
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-center">
              Impulsamos la transformación digital con software personalizado, ágil y
              escalable. Aceleramos la innovación empresarial mediante automatización,
              integración de IA y desarrollo tecnológico de alto impacto, ayudando a nuestros
              clientes a optimizar sus operaciones y mejorar su competitividad.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-purple-700/30 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-purple-500/20">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌟</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-purple-200 mb-4">
                Nuestra Visión
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-center">
              Ser la empresa líder mundial en desarrollo de software, ofreciendo no solo
              soluciones ágiles e innovadoras, sino una experiencia que transforma la manera en
              que las empresas adoptan tecnología. Nos convertiremos en el socio estratégico
              clave para directivos y ejecutivos, con un equipo élite de ingenieros, diseñadores y
              product managers que construyen productos esenciales para el crecimiento
              empresarial. En Botopia, no creamos herramientas, sino soluciones indispensables
              que impulsan negocios con eficiencia y sostenibilidad.
            </p>
          </div>

          {/* Propuesta de Valor */}
          <div className="bg-purple-700/30 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-purple-500/20">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💎</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-purple-200 mb-4">
                Nuestro Compromiso
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-center">
              Ofrecemos una experiencia estratégica, acompañando a
              nuestros clientes desde la concepción hasta la implementación de soluciones que
              impulsan su escalabilidad. En Botopia convertimos la innovación en una ventaja
              competitiva real.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="/contactUs"
            className="inline-block bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}
