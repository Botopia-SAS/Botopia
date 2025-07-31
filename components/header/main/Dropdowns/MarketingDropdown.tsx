import BaseDropdown from "./BaseDropdown";

export default function MarketingDropdown() {
  return (
    <BaseDropdown
      mainTitle="Explora Marketing Digital"
      mainItems={[
        "Redes sociales y campañas Ads",
        "Automatización de marketing",
        "Posicionamiento en Google (SEO)",
        "Embudos de ventas",
        "Contenidos con IA",
      ]}
      secondaryColumns={[
        {
          title: "Servicios",
          items: [
            "Publicidad digital (Google y Social Ads)",
            "Redes sociales",
            "Automatización de marketing",
            "Posicionamiento en Google (SEO)",
            "Creación de contenidos",
          ],
        },
      ]}
      imageSrc="/Header5.png"
      imageAlt="Marketing Digital"
    />
  );
}