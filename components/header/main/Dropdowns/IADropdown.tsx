import BaseDropdown from "./BaseDropdown";

export default function IADropdown() {
  return (
    <BaseDropdown
      mainTitle="Explora Inteligencia Artificial"
      mainItems={[
        "Asistente inteligente para WhatsApp",
        "Análisis predictivo de datos ",
        "Automatización con IA",
        "Procesamiento de Lenguaje (NLP)",
        "Reconocimiento de Imágenes",
        "Sistemas de Recomendación",
      ]}
      secondaryColumns={[
        {
          title: "Servicios",
          items: [
            "Automatización de Procesos con IA",
            "Modelos de Machine Learning",
            "Entrenamiento de Modelos Personalizados",
            "IA en Apps y Sitios Web",
          ],
        },
      ]}
      imageSrc="/Header3.png"
      imageAlt="Inteligencia Artificial"
    />
  );
}