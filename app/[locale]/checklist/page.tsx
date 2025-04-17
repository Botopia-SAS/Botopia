"use client";

import { useState } from "react";

const checklist = [
    {
        title: "Visibilidad y Alcance",
        questions: [
            {
                question: "¿Tu página aparece en Google cuando alguien busca lo que ofreces?",
                options: [
                    "Sí, aparecemos en los primeros resultados.",
                    "Aparecemos, pero no entre los primeros.",
                    "No lo sé.",
                    "No aparecemos.",
                ],
            },
            {
                question: "¿Conoces cuántas visitas recibe tu página al mes y desde dónde llegan?",
                options: [
                    "Sí, lo tengo claro con herramientas como Google Analytics.",
                    "Tengo una idea general.",
                    "No tengo acceso a esa información.",
                ],
            },
            {
                question: "¿Tu página tiene un blog o contenido relevante que atrae tráfico orgánico?",
                options: [
                    "Sí, generamos contenido frecuentemente.",
                    "Tenemos algo publicado, pero no es constante.",
                    "No contamos con contenido estratégico.",
                ],
            },
        ],
    },
    {
        title: "Conversión y Ventas",
        questions: [
            {
                question: "¿Cuántos clientes llegan a ti gracias a tu página web?",
                options: [
                    "Más del 50% de mis clientes vienen por ahí.",
                    "Algunos, pero la mayoría llegan por otros medios.",
                    "Casi ninguno.",
                ],
            },
            {
                question: "¿Tu página tiene llamadas a la acción claras (botones, formularios, links de WhatsApp, etc.)?",
                options: [
                    "Sí, y funcionan bien.",
                    "Algunas, pero podrían mejorar.",
                    "No, es solo informativa.",
                ],
            },
            {
                question: "¿Sabes cuántas personas dejan sus datos o realizan acciones dentro de tu página?",
                options: [
                    "Sí, tengo métricas claras.",
                    "A veces veo notificaciones, pero no lo mido bien.",
                    "No tengo forma de saberlo.",
                ],
            },
        ],
    },
    {
        title: "Automatización y Eficiencia",
        questions: [
            {
                question: "¿Tu página está conectada con herramientas que te ahorran tiempo?",
                options: [
                    "Sí, todo está conectado.",
                    "Tengo algunas conexiones.",
                    "Nada está automatizado.",
                ],
            },
            {
                question: "¿Recibes notificaciones o reportes automáticos cuando alguien interactúa con tu web?",
                options: [
                    "Sí, todo está monitoreado.",
                    "Algunos correos llegan.",
                    "No, todo es manual.",
                ],
            },
            {
                question: "¿Tu sitio carga rápido y se adapta bien al celular?",
                options: [
                    "Sí, la experiencia es buena en cualquier dispositivo.",
                    "Funciona, pero no siempre bien.",
                    "Es lenta o no se ve bien en móviles.",
                ],
            },
        ],
    },
    {
        title: "Posicionamiento y Credibilidad",
        questions: [
            {
                question: "¿Tu página transmite confianza y profesionalismo desde el primer vistazo?",
                options: [
                    "Sí, proyecta muy bien la marca.",
                    "Es funcional, pero no impacta.",
                    "Es antigua o poco profesional.",
                ],
            },
            {
                question: "¿Tiene testimonios, casos de éxito o evidencia social visible?",
                options: [
                    "Sí, y se actualizan frecuentemente.",
                    "Algunos, pero no están bien destacados.",
                    "No tenemos nada de eso.",
                ],
            },
        ],
    },
];

export default function ChecklistPage() {
    const [responses, setResponses] = useState<number[]>(Array(11).fill(-1));
    const [step, setStep] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSelect = (questionIndex: number, optionIndex: number) => {
        const newResponses = [...responses];
        newResponses[questionIndex] = optionIndex;
        setResponses(newResponses);
        setStep(step + 1);
    };

    const handleStart = () => {
        if (name && email) setStep(1);
    };

    const countPositive = () => responses.filter((r) => r === 0).length;

    const getResultMessage = () => {
        const score = countPositive();
        if (score >= 8) return "✅ Tu web es una gran aliada. ¡Solo necesitas ajustar algunos detalles para escalar!";
        if (score >= 4) return "⚠️ Tu web tiene potencial, pero estás dejando pasar oportunidades valiosas.";
        return "🚨 Tu web probablemente esté frenando el crecimiento de tu negocio. Necesitas una intervención urgente.";
    };

    const sendToSheet = async () => {
        const formData = {
            name,
            email,
            responses,
            result: getResultMessage(),
        };

        await fetch("https://api.sheetbest.com/sheets/2419ca4f-860e-4201-9ba7-2c28c610c212", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        setSubmitted(true);
    };

    const sharedClasses = "pt-36 p-10 max-w-2xl mx-auto bg-[#FAECD4] text-black rounded-xl shadow-lg font-sans";
    const buttonClasses =
        "text-left px-4 py-3 rounded-lg transition-all duration-300 border-2 font-medium bg-white text-primary border-primary hover:bg-primary hover:text-white";

    if (submitted) {
        return (
            <div className={sharedClasses}>
                <h1 className="text-2xl font-bold text-primary mb-4">¡Gracias por completar el diagnóstico!</h1>
                <p>Pronto recibirás un análisis completo en tu correo.</p>
            </div>
        );
    }

    if (step === 0) {
        return (
            <div className="pt-36 p-10 max-w-xl mx-auto bg-white text-black rounded-xl shadow-lg font-sans">
                <h1 className="text-3xl font-bold text-primary mb-6">Antes de empezar...</h1>
                <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full mb-4 p-3 border border-primary rounded-md"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="w-full mb-6 p-3 border border-primary rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    className="bg-primary text-white px-6 py-3 rounded-md font-bold w-full"
                    onClick={handleStart}
                >
                    Comenzar diagnóstico
                </button>
            </div>
        );
    }

    const flatQuestions = checklist.flatMap((section) => section.questions);
    const currentQuestion = flatQuestions[step - 1];

    if (step <= flatQuestions.length) {
        const isLastStep = step === flatQuestions.length;
      
        const handleFinalStep = async (optionIndex: number) => {
          const newResponses = [...responses];
          newResponses[step - 1] = optionIndex;
          setResponses(newResponses);
      
          const formData = {
            name,
            email,
            responses: newResponses,
            result: getResultMessage(),
          };
      
          try {
            await fetch("https://api.sheetbest.com/sheets/2419ca4f-860e-4201-9ba7-2c28c610c212", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });
            setSubmitted(true);
          } catch (error) {
            console.error("Error al enviar al Sheet:", error);
          }
        };
      
        return (
          <div className={sharedClasses}>
            <h2 className="text-xl font-semibold text-primary mb-4">
              {currentQuestion.question}
            </h2>
            <div className="flex flex-col gap-3 mb-6">
              {currentQuestion.options.map((opt, oi) => (
                <button
                  key={oi}
                  className={buttonClasses}
                  onClick={() => {
                    if (isLastStep) {
                      handleFinalStep(oi);
                    } else {
                      handleSelect(step - 1, oi);
                    }
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      }
      

    return (
        <div className={sharedClasses}>
            <h1 className="text-2xl font-bold text-primary mb-4">Resultado final</h1>
            <p className="mb-6">{getResultMessage()}</p>
            <button
                className="bg-primary text-white px-6 py-3 rounded-md font-bold"
                onClick={sendToSheet}
            >
                Enviar mis respuestas
            </button>
        </div>
    );
}
