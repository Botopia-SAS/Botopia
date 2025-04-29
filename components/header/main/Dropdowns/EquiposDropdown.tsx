import BaseDropdown from "./BaseDropdown";

export default function EquiposDropdown() {
  return (
    <BaseDropdown
      mainTitle="Equipos de Ingeniería Especializados"
      mainItems={[
        "Desarrollo de Productos Digitales",
        "Migración a Arquitecturas Cloud",
        "Equipos para Escalar Startups",
        "Modernización de Legacy Systems",
        "Equipos de DevOps & Infraestructura",
        "Ingeniería de Datos & Analytics",
        "Equipos de Ciberseguridad",
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
        {
          title: "Tecnologías",
          items: [
            "Equipos especializados en React/Node",
            "Expertos en Python/Data Science",
            "Ingenieros de AWS/GCP/Azure",
            "Desarrolladores Mobile nativos",
            "Especialistas en Blockchain/Web3",
          ],
        },
      ]}
    />
  );
}
