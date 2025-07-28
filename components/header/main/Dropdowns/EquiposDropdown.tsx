import BaseDropdown from "./BaseDropdown";

export default function EquiposDropdown() {
  return (
    <BaseDropdown
      mainTitle="Equipos de Ingeniería Especializados"
      mainItems={[
        "Software a medida",
        "Arquitectura en la nube",
        "Integración de sistemas",
        "Ciberseguridad",
        "Automatización empresarial",
      ]}
      secondaryColumns={[
        {
          title: "Servicios Clave",
          items: [
            "Equipos dedicados por proyecto",
            "Staff augmentation",
            "Consultoría técnica especializada",
            "Mentoría para equipos internos",
            "Auditorías de código y arquitectura",
          ],
        },
      ]}
      imageSrc="/Header6.png"
      imageAlt="Equipos de Ingeniería"
    />
  );
}
