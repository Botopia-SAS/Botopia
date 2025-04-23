import BaseDropdown from "./BaseDropdown";

export default function AppDropdown() {
  return (
    <BaseDropdown
      mainTitle="Explora Apps Móviles"
      mainItems={[
        "Aplicaciones Nativas",
        "Aplicaciones Híbridas",
        "Apps Multiplataforma",
        "Apps Empresariales",
        "MVPs para Startups",
        "Apps de E-commerce",
        "Aplicaciones con Geolocalización",
      ]}
      secondaryColumns={[
        {
          title: "Servicios",
          items: [
            "Integración con APIs",
            "Publicación en App Store & Play Store",
            "Mantenimiento y Actualizaciones",
          ],
        },
        {
          title: "Más sobre Apps",
          items: [
            "Casos de Éxito",
            "Consultoría en UX/UI Móvil",
            "Desarrollo de Prototipos",
          ],
        },
      ]}
    />
  );
}
