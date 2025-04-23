import BaseDropdown from "./BaseDropdown";

export default function AutoDropdown() {
  return (
    <BaseDropdown
      mainTitle="Explora Automatización"
      mainItems={[
        "Procesos Automatizados (BPA)",
        "Integración de APIs & Sistemas",
        "RPA y Bots Inteligentes",
        "E-commerce Automatizado",
        "Workflows Eficientes",
        "Marketing & Ventas Auto",
        "Atención al Cliente 24/7",
        "Bots para WhatsApp & Redes",
      ]}
      secondaryColumns={[
        {
          title: "Servicios",
          items: [
            "Consultoría en Automatización",
            "Bots & Scripts Personalizados",
            "Zapier, Make & n8n",
            "Automatización con IA",
          ],
        },
        {
          title: "Más sobre Automatización",
          items: [
            "Casos de Éxito",
            "Optimización de Procesos",
            "Prototipos Ágiles",
            "Monitoreo de Bots",
          ],
        },
      ]}
    />
  );
}
