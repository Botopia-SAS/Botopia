import BaseDropdown from "./BaseDropdown";

export default function WebDropdown() {
  return (
    <BaseDropdown
      mainTitle="Explora Web"
      mainItems={[
        "Landing Pages",
        "Corporativos",
        "E-commerce",
        "Páginas para Startups",
        "Dashboards Públicos",
        "Portales Educativos",
        "Portafolios",
      ]}
      secondaryColumns={[
        {
          title: "Servicios",
          items: ["Hosting & Dominio", "Mantenimiento Web", "Optimización SEO"],
        },
        {
          title: "Más sobre Web",
          items: ["Casos de Éxito", "Guía de Desarrollo", "Soporte Técnico"],
        },
      ]}
    />
  );
}
