import BaseDropdown from "./BaseDropdown";

export default function AutoDropdown() {
  return (
    <BaseDropdown
      mainTitle="Explora Automatización"
      mainItems={[
        "Tareas repetitivas automatizadas",

        "Ventas y marketing automatizados",

        "Atención al cliente automatizada",
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
      ]}
      imageSrc="/Header4.png"
      imageAlt="Automatización"
    />
  );
}