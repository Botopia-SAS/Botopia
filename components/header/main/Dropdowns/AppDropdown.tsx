import BaseDropdown from "./BaseDropdown";

export default function AppDropdown() {
  return (
    <BaseDropdown
      mainTitle="Explora Apps Móviles"
      mainItems={[
        "Apps para negocios ",

        "Apps de ventas y e-commerce",

        "Apps con geolocalización",

        "Apps con inteligencia artificial",
      ]}
      secondaryColumns={[
        {
          title: "Servicios",
          items: [
            "Desarrollo de apps a medida",

            "Publicación en App Store y Google Play",

            "Mantenimiento y actualizaciones",
          ],
        },
      ]}
      imageSrc="/Header2.png"
      imageAlt="Aplicaciones Móviles"
    />
  );
}