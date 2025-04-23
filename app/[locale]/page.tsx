// pages/Home.tsx
import Hero from "@/components/hero";
import BannerSection from "@/components/BannerSection";
import Footer from "@/components/footer";
import Servicios from "@/components/services";
import Portfolio from "@/components/portafolio";
import FeatureSection from "@/components/feature-section"
import { Clientes } from "@/components/clientes";

export default function Home() {
  return (
    <>
      <Hero />
      <BannerSection />  {/* Aquí agregamos el componente de banners */}
      {/* Otros componentes como Footer, Servicios, etc. */}


      <FeatureSection
        title="Diseño excepcional"
        description="Creamos experiencias digitales que destacan por su elegancia y funcionalidad, inspiradas en los mejores estándares de diseño."
        imageUrl="/images/diseñoavanzado.png"
        imageAlt="Diseño excepcional"
        reversed={false}
      />
      <FeatureSection
        title="Tecnología avanzada"
        description="Utilizamos las últimas tecnologías para garantizar un rendimiento óptimo y una experiencia de usuario fluida en todos los dispositivos."
        imageUrl="/images/techavanzada.png"
        imageAlt="Tecnología avanzada"
        reversed={true}
      />
      <Clientes 
       
        />
    </>
  );
}
