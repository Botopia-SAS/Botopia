import BaseDropdown from "./BaseDropdown";

export default function MarketingDropdown() {
  return (
    <BaseDropdown
      mainTitle="Explora Marketing Digital"
      mainItems={[
        "Estrategias de Marketing Digital 360°",
        "Gestión de Redes Sociales",
        "Publicidad en Google Ads y Meta Ads",
        "Email Marketing Automatizado",
        "Marketing de Contenidos ",
        "Inbound Marketing",
        "Growth Marketing para Startups",
        "Embudos de Venta",
      ]}
      secondaryColumns={[
        {
          title: "Servicios",
          items: [
            "Automatización (CRM & Workflows)",
            "Campañas de Remarketing",
            "Consultoría en Estrategia Digital",
            "Optimización de Conversiones (CRO)",
          ],
        },
        {
          title: "Más sobre Marketing",
          items: [
            "Casos de Éxito en Marketing",
            "Guías de Estrategia Digital",
            "Análisis de Audiencia y Competencia",
            "Reportes y KPIs de Campañas",
          ],
        },
      ]}
    />
  );
}
