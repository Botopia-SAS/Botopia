"use client";

const clientes = [
  { src: "/Coca-Cola_logo.svg", alt: "Coca Cola", scale: "scale-115" },
  { src: "/drivingschool.svg", alt: "Driving School", scale: "scale-125" },
  { src: "/fridoom.svg", alt: "Fridoom", scale: "scale-150" },
  { src: "/logo_LensPR.png", alt: "LensPR" },
  {
    src: "/startupscalendar1.svg",
    alt: "Startups Calendar",
    scale: "scale-150",
  },
  
  { src: "/LogoClaro.png", alt: "Claro", scale: "scale-115" },
  { src: "/LogoSamsung.png", alt: "Samsung", scale: "scale-115" },
  { src: "/LogoTambor.png", alt: "Tambor", scale: "scale-150" },
  { src: "/LogoClic.png", alt: "Clic", scale: "scale-150" },
  { src: "/LogoGG.png", alt: "GG", scale: "scale-150" },
];

export function Clientes() {
  const logosDuplicados = [...clientes, ...clientes]; // duplicamos para el efecto infinito

  return (
    <section className="w-full py-16 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Nuestros Clientes
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="marquee-track flex w-max animate-marquee whitespace-nowrap">
          {logosDuplicados.map((cliente, index) => (
            <div
              key={index}
              className="w-52 h-32 flex items-center justify-center p-4 mx-12 shrink-0"
            >
              <img
                src={cliente.src}
                alt={cliente.alt}
                className={`max-h-full max-w-full object-contain filter grayscale dark:invert ${
                  cliente.scale || ""
                }`}
                style={{ filter: "grayscale(1)" }}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
        .marquee-track {
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
