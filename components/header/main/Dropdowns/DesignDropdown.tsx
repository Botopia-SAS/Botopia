import BaseDropdown from "./BaseDropdown";

export default function DesignDropdown() {
  return (
    <BaseDropdown
      mainTitle="Explora Diseño UX/UI"
      mainItems={[
        "Interfaces Web & Apps",
        "Experiencia de Usuario (UX)",
        "Prototipos en Figma",
        "Diseño de Dashboards",
        "Wireframes & Arquitectura",
        "Rediseño de Sitios Web",
        "Design Systems",
        "Diseño Responsive",
      ]}
      secondaryColumns={[
        {
          title: "Servicios",
          items: [
            "Consultoría UX/UI",
            "Pruebas de Usabilidad",
            "Branding & Identidad",
            "Animaciones (Lottie, Spline)",
          ],
        },
        {
          title: "Más sobre Diseño",
          items: [
            "Casos de Éxito",
            "Guías de Estilo",
            "Prototipos para MVPs",
            "Optimización de Conversión (CRO)",
          ],
        },
      ]}
      imageSrc="/icon4.png"
      imageAlt="Diseño UX/UI"
    />
  );
}
