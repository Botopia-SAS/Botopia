import BaseDropdown from "./BaseDropdown";

export default function DesignDropdown() {
  return (
    <BaseDropdown
      mainTitle="Explora Diseño UX/UI"
      mainItems={[
        "Diseño de Interfaces (UI) para Web y Apps",
        "Experiencia de Usuario (UX) Centrada en el Cliente",
        "Prototipos Interactivos en Figma",
        "Diseño de Dashboards y Paneles",
        "Wireframes y Arquitectura de Información",
        "Rediseño y Optimización de Sitios Web",
        "Design Systems Personalizados",
        "Diseño Responsive y Mobile First",
      ]}
      secondaryColumns={[
        {
          title: "Servicios",
          items: [
            "Consultoría UX/UI",
            "Pruebas de Usabilidad",
            "Branding y Manual de Identidad",
            "Animaciones e Interacciones (Lottie, Spline)",
          ],
        },
        {
          title: "Más sobre Diseño",
          items: [
            "Casos de Éxito en UX/UI",
            "Guías de Estilo y Consistencia Visual",
            "Prototipos Funcionales para MVPs",
            "Optimización de Conversión (CRO)",
          ],
        },
      ]}
    />
  );
}
