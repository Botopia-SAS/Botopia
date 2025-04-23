import BaseDropdown from "./BaseDropdown";

export default function EcomDropdown() {
  return (
    <BaseDropdown
      mainTitle="Explora E-commerce"
      mainItems={[
        "Tiendas Online Personalizadas",
        "Integración con Shopify",
        "Integración con WooCommerce",
        "Marketplaces a Medida",
        "E-commerce para Productos Digitales",
        "Suscripciones y Membresías",
        "Apps Móviles para E-commerce",
        "E-commerce B2B y B2C",
      ]}
      secondaryColumns={[
        {
          title: "Servicios",
          items: [
            "Pasarelas de Pago (PayU, Wompi, Stripe)",
            "Automatización de Inventarios",
            "Integración con ERP y CRM",
            "Optimización de Velocidad y SEO",
          ],
        },
        {
          title: "Más sobre E-commerce",
          items: [
            "Casos de Éxito",
            "Estrategias de Conversión",
            "Consultoría en UX/UI para Tiendas",
            "Gestión de Carritos Abandonados",
          ],
        },
      ]}
    />
  );
}
