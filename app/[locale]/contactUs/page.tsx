"use client";
import Head from "next/head";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export default function ContactUs() {
  return (
    <>
      <Head>
        <Head>
          <title>Contact Us - Botopia</title>
        </Head>
        <meta
          name="description"
          content="Get in touch with Botopia. Contact us for inquiries and collaborations."
        />
        <meta
          name="keywords"
          content="Botopia, Contact, AI Software, Automation"
        />
        <meta name="author" content="Botopia Team" />
        <meta property="og:title" content="Contact Us - Botopia" />
        <meta
          property="og:description"
          content="Reach out to Botopia for AI and automation solutions."
        />
        <meta property="og:image" content="https://botopia.tech/og-image.jpg" />
        <meta property="og:url" content="https://botopia.tech/contact" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="relative w-full bg-black text-black mt-28">
        {/* Sección con el video de fondo */}
        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/contactUs/VideoContact.mp4" type="video/mp4" />
            Tu navegador no soporta videos en fondo.
          </video>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-opacity-40 px-4 ">
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">
              Contáctanos
            </h1>
            <h2 className="text-white text-base md:text-lg max-w-2xl leading-relaxed">
              Conéctate con nuestro equipo para soluciones tecnológicas
              personalizadas. Escríbenos y llevemos tu negocio al siguiente
              nivel con IA y automatización.
            </h2>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="container py-12 w-full sm:px-6 px-4 bg-white max-w-none md:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 item-start w-full">
            {/* Información de contacto */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#450161]">
                Hablemos...
              </h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Hablemos de cómo la tecnología puede impulsar tu negocio.
                Contáctanos para soluciones en automatización, IA, sitios web y
                software personalizado.
              </p>

              {/* Contenedor de los elementos en GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: "/contactUs/phone.png",
                    label: "Phone",
                    value: "+57 (322) 872-6267",
                  },
                  {
                    icon: "/contactUs/email.png",
                    label: "Email",
                    value: "contacto@botopia.tech",
                  },
                  {
                    icon: "/contactUs/location.png",
                    label: "Address",
                    value: "Cl. 81 #11-08, Chapinero, Bogotá, Cundinamarca",
                  },
                  {
                    icon: "/contactUs/linkedin.png",
                    label: "LinkedIn",
                    value: "Botopia",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="w-10 h-10 md:w-12 md:h-12"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-black">
                        {item.label}
                      </h3>
                      <p className="text-gray-800 text-sm md:text-base">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Línea separadora */}
              <div className="border-t border-[#450161] my-6"></div>

              {/* Redes sociales */}
              <div className="flex justify-center space-x-4 w-full mt-4">
                {[
                  {
                    Icon: FaFacebook,
                    url: "https://www.facebook.com/profile.php?id=61572382125372",
                  },
                  {
                    Icon: FaInstagram,
                    url: "https://www.instagram.com/botopia.tech/",
                  },
                  {
                    Icon: FaLinkedin,
                    url: "https://co.linkedin.com/company/botopiasas",
                  },
                  { Icon: FaTwitter, url: "https://x.com/BotopiaSAS" },
                  {
                    Icon: FaTiktok,
                    url: "https://www.tiktok.com/@botopia.tech",
                  },
                  {
                    Icon: FaYoutube,
                    url: "https://www.youtube.com/@Botopia-SAS",
                  },
                ].map(({ Icon, url }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="text-[#450161] text-2xl sm:text-3xl hover:text-purple-700 transition" />
                  </a>
                ))}
              </div>
            </div>

            {/* Formulario de contacto */}
            <div className="bg-[#aa8ed6] p-6 rounded-lg shadow-md">
              <form
                className="space-y-4"
                action="https://formsubmit.co/contacto@botopia.tech"
                method="POST"
                encType="multipart/form-data" // 🔥 Necesario para adjuntar archivos
                onSubmit={(e) => {
                  setTimeout(() => {
                    (e.target as HTMLFormElement).reset();
                  }, 100);
                }}
              >
                {/* Campos Name y Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Nombre", "E-mail"].map((field) => (
                    <input
                      key={field}
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      placeholder={
                        field.charAt(0).toUpperCase() + field.slice(1)
                      }
                      required
                      className="p-3 border border-gray-300 rounded w-full text-black bg-white focus:ring-2 focus:ring-[#450161]"
                    />
                  ))}
                </div>

                {/* Campo Teléfono */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Teléfono"
                  className="p-3 border border-gray-300 rounded w-full text-black bg-white focus:ring-2 focus:ring-[#450161]"
                />

                {/* Campo Mensaje */}
                <textarea
                  name="message"
                  placeholder="Mensaje"
                  required
                  className="p-3 border border-gray-300 rounded w-full h-24 md:h-32 text-black bg-white focus:ring-2 focus:ring-[#450161]"
                ></textarea>

                {/* Botón de Envío */}
                <button
                  type="submit"
                  className="w-full bg-[#450161] text-white py-3 rounded-lg hover:bg-[#320144] transition"
                >
                  Enviar
                </button>

                {/* Configuraciones ocultas de FormSubmit */}
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://www.botopia.tech/es/contactUs"
                />
              </form>
            </div>
          </div>
        </div>

        {/* Mapa de ubicación */}
        <div className="w-full h-[250px] sm:h-[300px] lg:h-[350px]">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d351.4850115757013!2d-74.0537259797017!3d4.6653714795862165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfda1c4eb1d%3A0x33970f369a741c63!2sWeWork%20Espacio%20de%20Oficinas%20%26%20Coworking!5e0!3m2!1ses!2sco!4v1739957942945!5m2!1ses!2sco"
            className="w-full h-full border-0"
            allowFullScreen
          ></iframe>
        </div>

        {/* Footer */}
        <footer className="bg-black text-white py-6 text-center">
          <p className="text-gray-400">
            &copy; 2025 Botopia - All Rights Reserved
          </p>
        </footer>
      </div>
    </>
  );
}
