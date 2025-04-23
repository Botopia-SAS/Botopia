import BaseDropdown from "./BaseDropdown";

export default function AutoDropdown() {
  return (
    <BaseDropdown
      mainTitle="Explora Automatización"
      mainItems={[
        "Automatización de Procesos Empresariales (BPA)",
        "Integración de Sistemas (API & Webhooks)",
        "RPA: Automatización Robótica de Procesos",
        "Automatización en E-commerce",
        "Flujos de Trabajo Automatizados (Workflows)",
        "Automatización de Marketing y Ventas",
        "Automatización de Atención al Cliente",
        "Bots para WhatsApp, Email y Redes Sociales",
      ]}
      secondaryColumns={[
        {
          title: "Servicios",
          items: [
            "Consultoría en Automatización",
            "Desarrollo de Scripts y Bots Personalizados",
            "Integración con Zapier, Make y n8n",
            "Automatización con Inteligencia Artificial",
          ],
        },
        {
          title: "Más sobre Automatización",
          items: [
            "Casos de Éxito en Automatización",
            "Optimización de Procesos Manuales",
            "Prototipos de Automatización Rápida",
            "Monitoreo y Mantenimiento de Bots",
          ],
        },
      ]}
    />
  );
}
