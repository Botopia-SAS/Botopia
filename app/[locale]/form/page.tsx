"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  presenceType: string;
  complexity: string;
  needsPayment: boolean;
  needsAutomation: boolean;
  needsMarketing: boolean;
  needsSEO: boolean;
  // Nuevos campos para datos personales
  personalData: {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
  };
}

export default function FormPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    presenceType: "",
    complexity: "",
    needsPayment: false,
    needsAutomation: false,
    needsMarketing: false,
    needsSEO: false,
    personalData: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const handleAnswer = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Lógica secuencial: siempre va al siguiente paso
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePersonalDataChange = (
    field: keyof FormData["personalData"],
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      personalData: {
        ...prev.personalData,
        [field]: value,
      },
    }));
  };

  const resetForm = () => {
    setCurrentStep(0);
    setFormData({
      presenceType: "",
      complexity: "",
      needsPayment: false,
      needsAutomation: false,
      needsMarketing: false,
      needsSEO: false,
      personalData: {
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      },
    });
  };

  const submitForm = async () => {
    // Aquí implementaremos la lógica para guardar en la DB
    console.log("Datos del formulario:", formData);
    // TODO: Implementar envío a la base de datos
    alert(
      "¡Formulario enviado exitosamente! Nos contactaremos contigo pronto."
    );
  };

  const getEstimatedCost = () => {
    // Tabla de precios base según complejidad
    const basePrices = {
      landing: {
        soporte: 79000,
        desarrollo: 1198000,
        diseño: 398000,
      },
      website: {
        soporte: 119000,
        desarrollo: 2780000,
        diseño: 949000,
      },
      dashboard: {
        soporte: 209000,
        desarrollo: 1870000,
        diseño: 1449000,
      },
    };

    // Precios base según el tipo de proyecto
    const basePrice =
      basePrices[formData.complexity as keyof typeof basePrices];
    if (!basePrice) return 0;

    let totalCost = basePrice.desarrollo + basePrice.diseño;

    // Agregar costos adicionales
    if (formData.needsPayment) {
      // Pasarela de pago es cotización, asumimos un costo base
      totalCost += 800000; // Estimado en COP
    }

    if (formData.needsAutomation) {
      // Automatización/IA es cotización, asumimos un costo base
      totalCost += 2000000; // Estimado en COP
    }

    if (formData.needsMarketing) {
      // Marketing es cotización, asumimos un costo base
      totalCost += 1500000; // Estimado en COP
    }

    if (formData.needsSEO) {
      // SEO es cotización, asumimos un costo base
      totalCost += 1200000; // Estimado en COP
    }

    return totalCost;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.3,
      },
    },
  };

  const questionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const optionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1 + 0.3,
        duration: 0.4,
        ease: "easeOut" as const,
      },
    }),
    hover: {
      scale: 1.02,
      backgroundColor: "#411E8A",
      color: "#FAECD4",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050044] to-[#010009] flex items-center justify-center p-6 pt-32 pb-12 relative overflow-hidden">
      {/* Animaciones de fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AnimatePresence mode="wait">
          {/* Pregunta 0: Lluvia de código binario */}
          {currentStep === 0 && (
            <>
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                  key={`binary-${i}`}
                  initial={{
                    opacity: 0,
                    y: -100,
                    x: Math.random() * window.innerWidth,
                  }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    y: window.innerHeight + 100,
                    x: Math.random() * window.innerWidth,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                    transition: { duration: 0.5 },
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    delay: Math.random() * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute text-[#FAECD4]/30 font-mono text-xs select-none"
                  style={{
                    left: `${Math.random() * 100}%`,
                  }}
                >
                  {Math.random() > 0.5 ? "1" : "0"}
                </motion.div>
              ))}
            </>
          )}

          {/* Pregunta 1: Ondas de pago */}
          {currentStep === 1 && (
            <>
              {Array.from({ length: 2 }).map((_, i) => (
                <motion.div
                  key={`wave-top-left-${i}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 3, 0],
                    opacity: [0, 0.4, 0],
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                    transition: { duration: 0.6 },
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute top-10 left-10 w-32 h-32 border-2 border-[#FAECD4]/40 rounded-full"
                />
              ))}
              {Array.from({ length: 2 }).map((_, i) => (
                <motion.div
                  key={`wave-bottom-right-${i}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 3, 0],
                    opacity: [0, 0.4, 0],
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                    transition: { duration: 0.6 },
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5 + 0.6,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute bottom-10 right-10 w-32 h-32 border-2 border-[#FAECD4]/40 rounded-full"
                />
              ))}
            </>
          )}

          {/* Pregunta 2: Red neuronal */}
          {currentStep === 2 && (
            <>
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i / 12) * 2 * Math.PI;
                const radius = 200;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={`node-${i}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0.5, 1],
                      scale: [0, 1, 1.2, 1],
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                      transition: { duration: 0.4, delay: i * 0.05 },
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#FAECD4] rounded-full shadow-lg"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  />
                );
              })}
            </>
          )}

          {/* Pregunta 3: Estrellas de marketing */}
          {currentStep === 3 && (
            <>
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={`star-${i}`}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                  }}
                  animate={{
                    opacity: [0, 1, 0.3, 1],
                    scale: [0, 1, 1.5, 1],
                    rotate: 360,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                    y: -100,
                    transition: { duration: 0.8, delay: Math.random() * 0.5 },
                  }}
                  transition={{
                    duration: 3,
                    delay: Math.random() * 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute w-2 h-2 bg-[#FAECD4] rounded-full shadow-lg"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    boxShadow: "0 0 10px #FAECD4",
                  }}
                />
              ))}
            </>
          )}

          {/* Pregunta 4: Efectos SEO */}
          {currentStep === 4 && (
            <>
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={`seo-wave-${i}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 2, 0],
                    opacity: [0, 0.5, 0],
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                    transition: { duration: 0.5 },
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-[#9469EC]/30 rounded-full"
                />
              ))}
            </>
          )}

          {/* Resultado final: Fuegos artificiales */}
          {currentStep === 5 && (
            <>
              {Array.from({ length: 30 }).map((_, i) => {
                const angle = Math.random() * 2 * Math.PI;
                const velocity = Math.random() * 200 + 100;
                const x = Math.cos(angle) * velocity;
                const y = Math.sin(angle) * velocity;

                return (
                  <motion.div
                    key={`firework-${i}`}
                    initial={{
                      opacity: 0,
                      scale: 0,
                      x: window.innerWidth / 2,
                      y: window.innerHeight / 2,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      x: window.innerWidth / 2 + x,
                      y: window.innerHeight / 2 + y,
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.3 },
                    }}
                    transition={{
                      duration: 2,
                      delay: Math.random() * 1,
                      repeat: Infinity,
                      repeatDelay: Math.random() * 2,
                    }}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      backgroundColor:
                        i % 3 === 0
                          ? "#FAECD4"
                          : i % 3 === 1
                          ? "#411E8A"
                          : "#9469EC",
                      boxShadow: `0 0 10px ${
                        i % 3 === 0
                          ? "#FAECD4"
                          : i % 3 === 1
                          ? "#411E8A"
                          : "#9469EC"
                      }`,
                    }}
                  />
                );
              })}
            </>
          )}
        </AnimatePresence>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        {/* Progress bar */}
        <div className="mb-16">
          <div className="h-2 bg-[#411E8A]/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#411E8A] to-[#FAECD4]"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / 6) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" as const }}
            />
          </div>
          <p className="text-[#FAECD4]/70 text-sm mt-3 text-center">
            Paso {currentStep + 1} de 7
          </p>
        </div>

        <AnimatePresence mode="wait">
          {/* Pregunta 0: Tipo de presencia */}
          {currentStep === 0 && (
            <motion.div
              key="step0"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col lg:flex-row items-center justify-between gap-12"
            >
              <div className="lg:w-1/2 text-left">
                <motion.h1
                  variants={questionVariants}
                  className="text-4xl lg:text-6xl font-bold text-[#FAECD4] mb-6"
                >
                  ¿Qué tipo de presencia en línea quieres?
                </motion.h1>
                <motion.p
                  variants={questionVariants}
                  className="text-xl text-[#FAECD4]/80"
                >
                  ¿Quieres una página sencilla o una solución más compleja con
                  funcionalidades adicionales?
                </motion.p>
              </div>

              <div className="lg:w-1/2 space-y-4">
                {[
                  {
                    id: "landing",
                    label: "Landing Page",
                    desc: "Página de presentación o captura de leads",
                  },
                  {
                    id: "website",
                    label: "Página Web",
                    desc: "Varias secciones, más información y estructura",
                  },
                  {
                    id: "dashboard",
                    label: "Dashboard / Funcionalidades avanzadas",
                    desc: "Paneles de control o herramientas internas",
                  },
                ].map((option, index) => (
                  <motion.button
                    key={option.id}
                    custom={index}
                    variants={optionVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer("complexity", option.id)}
                    className="w-full p-6 bg-[#FAECD4]/10 border-2 border-[#411E8A]/30 rounded-xl text-left hover:border-[#411E8A] transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold text-[#FAECD4] mb-2">
                      {option.label}
                    </h3>
                    <p className="text-[#FAECD4]/70">{option.desc}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Pregunta 1: Integración de pago */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-center"
            >
              <motion.h2
                variants={questionVariants}
                className="text-4xl md:text-5xl font-bold text-[#FAECD4] mb-12"
              >
                ¿Necesitas integración de pago?
              </motion.h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                {[
                  {
                    value: true,
                    label: "Sí, necesito pagos en línea",
                    color: "from-[#9469EC] to-[#050044]",
                  },
                  {
                    value: false,
                    label: "No, por ahora no",
                    color: "from-[#411E8A] to-[#050044]",
                  },
                ].map((option, index) => (
                  <motion.button
                    key={option.label}
                    custom={index}
                    variants={optionVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAnswer("needsPayment", option.value)}
                    className={`px-8 py-6 bg-gradient-to-r ${option.color} text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Pregunta 2: Automatización e IA */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-center"
            >
              <motion.h2
                variants={questionVariants}
                className="text-4xl md:text-5xl font-bold text-[#FAECD4] mb-12"
              >
                ¿Te interesa automatizar procesos o usar inteligencia
                artificial?
              </motion.h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                {[
                  {
                    value: true,
                    label: "Sí, me interesa la automatización",
                    color: "from-[#9469EC] to-[#411E8A]",
                  },
                  {
                    value: false,
                    label: "No, prefiero algo más simple",
                    color: "from-[#411E8A] to-[#050044]",
                  },
                ].map((option, index) => (
                  <motion.button
                    key={option.label}
                    custom={index}
                    variants={optionVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      handleAnswer("needsAutomation", option.value)
                    }
                    className={`px-8 py-6 bg-gradient-to-r ${option.color} text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Pregunta 3: Marketing digital */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-center"
            >
              <motion.h2
                variants={questionVariants}
                className="text-4xl md:text-5xl font-bold text-[#FAECD4] mb-12"
              >
                ¿Deseas estrategias de marketing digital integradas?
              </motion.h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                {[
                  {
                    value: true,
                    label: "Sí, necesito marketing digital",
                    color: "from-[#9469EC] to-[#411E8A]",
                  },
                  {
                    value: false,
                    label: "No, solo el desarrollo",
                    color: "from-[#411E8A] to-[#050044]",
                  },
                ].map((option, index) => (
                  <motion.button
                    key={option.label}
                    custom={index}
                    variants={optionVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAnswer("needsMarketing", option.value)}
                    className={`px-8 py-6 bg-gradient-to-r ${option.color} text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Pregunta 4: SEO */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-center"
            >
              <motion.h2
                variants={questionVariants}
                className="text-4xl md:text-5xl font-bold text-[#FAECD4] mb-12"
              >
                ¿Necesitas optimización SEO para motores de búsqueda?
              </motion.h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                {[
                  {
                    value: true,
                    label: "Sí, quiero posicionamiento SEO",
                    color: "from-[#9469EC] to-[#411E8A]",
                  },
                  {
                    value: false,
                    label: "No es necesario por ahora",
                    color: "from-[#411E8A] to-[#050044]",
                  },
                ].map((option, index) => (
                  <motion.button
                    key={option.label}
                    custom={index}
                    variants={optionVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAnswer("needsSEO", option.value)}
                    className={`px-8 py-6 bg-gradient-to-r ${option.color} text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Pregunta 5: Datos personales */}
          {currentStep === 5 && (
            <motion.div
              key="step5"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-center"
            >
              <motion.h2
                variants={questionVariants}
                className="text-3xl md:text-4xl font-bold text-[#FAECD4] mb-8"
              >
                Para finalizar, necesitamos tus datos de contacto
              </motion.h2>

              <motion.div
                variants={questionVariants}
                className="bg-[#FAECD4]/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-[#FAECD4] font-semibold text-left">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      value={formData.personalData.name}
                      onChange={(e) =>
                        handlePersonalDataChange("name", e.target.value)
                      }
                      className="w-full p-3 bg-[#050044]/50 border-2 border-[#411E8A]/30 rounded-lg text-[#FAECD4] placeholder-[#FAECD4]/50 focus:border-[#9469EC] focus:outline-none transition-all duration-300"
                      placeholder="Ingresa tu nombre completo"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[#FAECD4] font-semibold text-left">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.personalData.email}
                      onChange={(e) =>
                        handlePersonalDataChange("email", e.target.value)
                      }
                      className="w-full p-3 bg-[#050044]/50 border-2 border-[#411E8A]/30 rounded-lg text-[#FAECD4] placeholder-[#FAECD4]/50 focus:border-[#9469EC] focus:outline-none transition-all duration-300"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[#FAECD4] font-semibold text-left">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      value={formData.personalData.phone}
                      onChange={(e) =>
                        handlePersonalDataChange("phone", e.target.value)
                      }
                      className="w-full p-3 bg-[#050044]/50 border-2 border-[#411E8A]/30 rounded-lg text-[#FAECD4] placeholder-[#FAECD4]/50 focus:border-[#9469EC] focus:outline-none transition-all duration-300"
                      placeholder="+57 300 123 4567"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[#FAECD4] font-semibold text-left">
                      Empresa (opcional)
                    </label>
                    <input
                      type="text"
                      value={formData.personalData.company}
                      onChange={(e) =>
                        handlePersonalDataChange("company", e.target.value)
                      }
                      className="w-full p-3 bg-[#050044]/50 border-2 border-[#411E8A]/30 rounded-lg text-[#FAECD4] placeholder-[#FAECD4]/50 focus:border-[#9469EC] focus:outline-none transition-all duration-300"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <label className="block text-[#FAECD4] font-semibold text-left">
                    Mensaje adicional (opcional)
                  </label>
                  <textarea
                    value={formData.personalData.message}
                    onChange={(e) =>
                      handlePersonalDataChange("message", e.target.value)
                    }
                    rows={4}
                    className="w-full p-3 bg-[#050044]/50 border-2 border-[#411E8A]/30 rounded-lg text-[#FAECD4] placeholder-[#FAECD4]/50 focus:border-[#9469EC] focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Cuéntanos más detalles sobre tu proyecto..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (
                      formData.personalData.name &&
                      formData.personalData.email &&
                      formData.personalData.phone
                    ) {
                      setCurrentStep(6);
                    } else {
                      alert(
                        "Por favor completa todos los campos obligatorios."
                      );
                    }
                  }}
                  className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-[#9469EC] to-[#411E8A] text-[#FAECD4] rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Continuar al Resumen
                </motion.button>
              </motion.div>
            </motion.div>
          )}

          {/* Resultado final */}
          {currentStep === 6 && (
            <motion.div
              key="step6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-center mt-8"
            >
              <motion.h2
                variants={questionVariants}
                className="text-3xl md:text-4xl font-bold text-[#FAECD4] mb-6"
              >
                ¡Perfecto! Aquí está tu propuesta personalizada
              </motion.h2>

              <motion.div
                variants={questionVariants}
                className="bg-[#FAECD4]/10 backdrop-blur-sm rounded-2xl p-6 mb-6 max-w-2xl mx-auto"
              >
                <h3 className="text-xl font-bold text-[#FAECD4] mb-4">
                  Resumen de tu proyecto:
                </h3>
                <div className="space-y-2 text-left text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-[#FAECD4]/80">Cliente:</span>
                    <span className="text-[#FAECD4] font-semibold">
                      {formData.personalData.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#FAECD4]/80">Email:</span>
                    <span className="text-[#FAECD4] font-semibold">
                      {formData.personalData.email}
                    </span>
                  </div>
                  {formData.personalData.company && (
                    <div className="flex justify-between items-center">
                      <span className="text-[#FAECD4]/80">Empresa:</span>
                      <span className="text-[#FAECD4] font-semibold">
                        {formData.personalData.company}
                      </span>
                    </div>
                  )}
                  <hr className="border-[#411E8A]/30 my-3" />
                  <div className="flex justify-between items-center">
                    <span className="text-[#FAECD4]/80">Tipo de proyecto:</span>
                    <span className="text-[#FAECD4] font-semibold">
                      {formData.complexity === "landing" && "Landing Page"}
                      {formData.complexity === "website" && "Página Web"}
                      {formData.complexity === "dashboard" &&
                        "Dashboard Avanzado"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#FAECD4]/80">
                      Integración de pago:
                    </span>
                    <span className="text-[#FAECD4] font-semibold">
                      {formData.needsPayment ? "Sí" : "No"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#FAECD4]/80">
                      Automatización/IA:
                    </span>
                    <span className="text-[#FAECD4] font-semibold">
                      {formData.needsAutomation ? "Sí" : "No"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#FAECD4]/80">
                      Marketing digital:
                    </span>
                    <span className="text-[#FAECD4] font-semibold">
                      {formData.needsMarketing ? "Sí" : "No"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#FAECD4]/80">SEO:</span>
                    <span className="text-[#FAECD4] font-semibold">
                      {formData.needsSEO ? "Sí" : "No"}
                    </span>
                  </div>
                  <hr className="border-[#411E8A]/30 my-3" />
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-[#FAECD4] font-bold">
                      Costo estimado:
                    </span>
                    <span className="text-[#FAECD4] font-bold">
                      ${getEstimatedCost().toLocaleString()} COP
                    </span>
                  </div>
                </div>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={submitForm}
                  className="px-6 py-3 bg-gradient-to-r from-[#411E8A] to-[#050044] text-[#FAECD4] rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Enviar Solicitud de Cotización
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetForm}
                  className="px-6 py-3 bg-[#FAECD4]/20 border-2 border-[#FAECD4]/30 text-[#FAECD4] rounded-xl font-semibold text-base hover:bg-[#FAECD4]/30 transition-all duration-300"
                >
                  Empezar de Nuevo
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
