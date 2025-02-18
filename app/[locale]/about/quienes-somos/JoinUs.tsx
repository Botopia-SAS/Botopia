export default function JoinUs() {
    return (
      <section className="py-20 bg-gradient-to- from-purple-900 to-white -mt-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          {/* Texto a la izquierda */}
          <div className="md:w-1/2 text-left md:mr-12">
            <h2 className="text-5xl font-extrabold text-white mb-8">Únete a Nuestro Equipo</h2>
            <p className="mt-4 text-lg text-white max-w-lg">
              En Botopia, buscamos personas apasionadas por la tecnología y la innovación. 
              Si te apasiona el desarrollo de software y quieres formar parte de un equipo 
              dinámico, ¡esta es tu oportunidad!
            </p>
            <a
              href="/careers"
              className="mt-8 inline-block bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-500 transition"
            >
              Únete a Nosotros
            </a>
          </div>
  
          {/* Imagen más grande y separada */}
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <img 
              src="/trabaja.png" 
              alt="Únete a Botopia" 
              className="w-full max-w-lg rounded-lg animate-float"
            />
          </div>
        </div>
      </section>
    );
  }
  

