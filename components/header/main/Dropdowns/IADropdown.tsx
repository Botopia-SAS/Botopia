import BaseDropdown from "./BaseDropdown";

export default function IADropdown() {
  return (
    <BaseDropdown
      mainTitle="Explora Inteligencia Artificial"
      mainItems={[
        "Chatbots Inteligentes",
        "Asistentes Virtuales Personalizados",
        "Automatización con IA",
        "Análisis Predictivo",
        "Procesamiento de Lenguaje Natural (NLP)",
        "Reconocimiento de Imágenes y Video",
        "Sistemas de Recomendación",
        "Integración con OpenAI, GPT y APIs de IA",
      ]}
      secondaryColumns={[
        {
          title: "Servicios",
          items: [
            "Modelos de Machine Learning",
            "Entrenamiento de Modelos Personalizados",
            "IA en Apps y Sitios Web",
            "Automatización de Procesos con IA",
          ],
        },
        {
          title: "Más sobre IA",
          items: [
            "Casos de Éxito con IA",
            "Consultoría en Proyectos de IA",
            "Desarrollo de Prototipos con Inteligencia Artificial",
            "Optimización de Operaciones con AI Ops",
          ],
        },
      ]}
    />
  );
}
