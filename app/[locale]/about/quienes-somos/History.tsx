export default function History() {
    return (
      <section className="py-16 bg-gradient-to- from-purple-800 to-black text-white -mt-32">
        <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-6xl mx-auto px-6">
          {/* Sección de Misión y Visión */}
          <div className="grid md:grid-cols-2 gap-10 text-left">
            {/* Nuestra Misión */}
            <div className="bg-black/50 p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold text-pink-600 text-center mb-4">Nuestra Misión</h2>
              <p className="text-lg text-center">
                Empoderar a empresas de todos los tamaños con soluciones tecnológicas personalizadas, 
                optimizando su transformación digital y permitiéndoles escalar de manera eficiente en un 
                mundo digital en constante evolución.
              </p>
            </div>
  
            {/* Nuestra Visión */}
            <div className="bg-black/50 p-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold text-pink-600 text-center mb-4">Nuestra Visión</h2>
              <p className="text-lg text-center">
                Convertirnos en el socio tecnológico líder en Latinoamérica, reconocido por la innovación, 
                la calidad y la rapidez en la entrega de software, ayudando a empresas a integrar tecnología 
                de manera inteligente y estratégica.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>
    );
  }