import BaseDropdown from "./BaseDropdown";

export default function MarketingDropdown() {
  return (
    <BaseDropdown
      mainTitle="Explora Marketing Digital"
      mainItems={[
        "Estrategias 360°",
        "Gestión de Redes Sociales",
        "Google Ads & Meta Ads",
        "Email Marketing",
        "Marketing de Contenidos",
        "Inbound Marketing",
        "Growth Marketing",
        "Embudos de Venta",
      ]}
      secondaryColumns={[
        {
          title: "Servicios",
          items: [
            "Automatización CRM & Workflows",
            "Campañas de Remarketing",
            "Consultoría Digital",
            "Optimización de Conversiones (CRO)",
          ],
        },
        {
          title: "Más sobre Marketing",
          items: [
            "Casos de Éxito",
            "Guías de Estrategia",
            "Análisis de Audiencia",
            "Reportes & KPIs",
          ],
        },
      ]}
    />
  );
}
