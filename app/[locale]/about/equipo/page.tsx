import React from "react";

const teamMembers = [
  {
    name: "David Espejo García",
    role: "Director de Tecnología",
    image: "/19.png",
  },
  {
    name: "Laura Cifuentes Barrero",
    role: "Directora General",
    image: "/17.png",
  },
  {
    name: "Isaac Páez Triana",
    role: "Director de Comunicación",
    image: "/18.png",
  },
  {
    name: "Juan Diego Gama Galvis",
    role: "Director de Marketing",
    image: "/16.png",
  },
];

export default function Team() {
  return (
    <section className="container mx-auto py-20 px-6 text-center bg-gradient-to- from-purple-800 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center mt-20">
      <h2 className="text-5xl font-extrabold text-white mb-14 -mt-16">Nuestro Equipo</h2>
      <p className="mt-4 text-lg max-w-3xl mx-auto">
        En Botopia, contamos con un equipo de expertos en tecnología, diseño y estrategia digital 
        comprometidos con la innovación y la transformación empresarial.
      </p>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-black/50 p-6 rounded-lg text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-64 h-56 mx-auto rounded-none mb-4 object-cover"
            />
            <h3 className="text-xl text-white font-bold mb-3">{member.name}</h3>
            <p className="text-sm text-white">{member.role}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
