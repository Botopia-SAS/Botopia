"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

// Datos de servicios (no modificar)
const services = [
  {
    title: "Desarrollo de Páginas Web",
    description:
      "Webs rápidas, seguras y personalizadas para tu empresa. Optimización SEO, integración con sistemas y diseño responsive para destacar en internet.",
    image: "/images/desarrollo_web.jpg",
    imageAlt: "Desarrollo de Páginas Web",
    gradientText: "Optimizado para tu crecimiento digital.",
    variant: "dark" as const,
  },
  {
    title: "Desarrollo de Aplicaciones",
    description:
      "Apps móviles y web intuitivas, escalables y listas para el futuro. Experiencia de usuario sobresaliente y tecnología de alto rendimiento.",
    image: "/images/desarrollo_apps.jpg",
    imageAlt: "Desarrollo de Aplicaciones",
    gradientText: "Tecnología de alto rendimiento.",
    variant: "light" as const,
  },
  {
    title: "Integraciones con Inteligencia Artificial",
    description:
      "Automatiza procesos, personaliza la experiencia de tus clientes y toma decisiones inteligentes con IA aplicada a tu negocio.",
    image: "/images/IA.jpg",
    imageAlt: "Integraciones con Inteligencia Artificial",
    gradientText: "Impulsado por IA de última generación.",
    variant: "dark" as const,
  },
  {
    title: "Automatizaciones de Procesos",
    description:
      "Reduce errores y ahorra tiempo con flujos automáticos: desde ventas y soporte hasta reportes y notificaciones.",
    image: "/images/automatizaciones.webp",
    imageAlt: "Automatizaciones de Procesos",
    gradientText: "Eficiencia sin límites.",
    variant: "light" as const,
  },
  {
    title: "Integración de AI con WhatsApp",
    description:
      "Atiende, vende y resuelve dudas 24/7 con bots inteligentes en WhatsApp. Mejora la experiencia y la velocidad de respuesta.",
    image: "/images/IA_Whatsapp.webp",
    imageAlt: "Integración de AI con WhatsApp",
    gradientText: "Comunicación instantánea y automatizada.",
    variant: "dark" as const,
  },
  {
    title: "Diseño UX/UI",
    description:
      "Diseños modernos, atractivos y funcionales. Potencia la conversión y la satisfacción de tus usuarios en cada interacción.",
    image: "/images/Diseño_UX_UI.jpg",
    imageAlt: "Diseño UX/UI",
    gradientText: "Experiencias que enamoran.",
    variant: "light" as const,
  },
];

export default function ServicesCards() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  // Soporte automático para modo claro y oscuro usando clases Tailwind 'dark:'
  // El fondo general y los textos cambian según la preferencia del sistema o usuario
  // Puedes usar NextThemes para selector manual, pero aquí se usa media query por defecto
  return (
    <section className="w-full bg-white dark:bg-black transition-colors duration-300 py-32">
      <div className="max-w-[1500px] mx-auto px-4 md:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center justify-center
                mb-2
                relative
                rounded-[36px]
                bg-gradient-to-br from-white via-gray-50 to-white text-gray-900
                dark:from-[#23232a] dark:via-[#18181b] dark:to-[#23232a] dark:text-white
                shadow-xl
                hover:shadow-[0_16px_96px_0_rgba(120,80,255,0.18)]
                transition-all duration-400
                border border-gray-200 dark:border-transparent hover:border-purple-500/50
                group
                cursor-pointer
                overflow-hidden
                p-0 mr-2
              `}
              tabIndex={0}
              aria-label={service.title}
              style={{
                fontFamily: "Inter, Manrope, 'SF Pro Display', sans-serif",
              }}
            >
              {/* Título y descripción centrados, minimalista */}
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 mt-10 leading-tight tracking-tight drop-shadow-lg text-gray-900 dark:text-white">
                {service.title}
              </h2>
              {/* Imagen protagonista, grande y con sombra elegante */}
              <div className="w-full flex justify-center mb-6">
                <div className="relative w-full max-w-lg h-[340px] md:h-[400px] rounded-2xl overflow-hidden bg-gray-100 dark:bg-black group-hover:scale-105 transition-transform duration-400 shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 1200px"
                    priority={index === 0}
                    style={{
                      borderRadius: "1.25rem",
                      filter: "brightness(0.98) contrast(1.04)",
                      transition: "filter 0.3s",
                    }}
                  />
                  {/* Glow animado UX */}
                  <span className="pointer-events-none absolute inset-0 rounded-2xl group-hover:shadow-[0_0_80px_0_rgba(120,80,255,0.18)] transition-all duration-500"></span>
                  {/* Sutil gradiente superior para elegancia */}
                  <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-white/80 dark:from-black/60 to-transparent pointer-events-none" />
                </div>
              </div>
              <p className="text-lg md:text-xl text-center mb-6 font-light leading-normal max-w-lg mr-5 ml-5 text-gray-800 dark:text-white/80">
                {service.description}
              </p>
              {/* Botones morados y animados mejorados */}
              <div className="flex gap-4 mb-8">
                <a
                  href={`/${locale}/contactUs?asesor=1`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 text-white text-base md:text-lg font-semibold px-7 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_0_rgba(120,80,255,0.18)] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
                  style={{
                    boxShadow: "0 2px 16px 0 rgba(120,80,255,0.13)",
                  }}
                >
                  Conocer más
                </a>
                <a
                  href={`/${locale}/contactUs?asesor=1`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-700 hover:text-white text-base md:text-lg font-semibold px-7 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_0_rgba(120,80,255,0.18)] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
                  style={{
                    boxShadow: "0 2px 16px 0 rgba(120,80,255,0.13)",
                  }}
                >
                  Solicitar
                </a>
              </div>
              {/* Texto gradiente minimalista debajo de la imagen */}
              {service.gradientText && (
                <span className="block text-base font-medium text-center mt-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 animate-fade-in mb-10">
                  {service.gradientText}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
