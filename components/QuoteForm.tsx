"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, CheckCircle2 } from "lucide-react";
import { trackQuoteFormSubmit } from "@/lib/tracking";

interface QuoteFormProps {
  quoteId: string;
  onSubmit: (data: { email: string; phone: string }) => void;
}

export default function QuoteForm({ quoteId, onSubmit }: QuoteFormProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [acceptCookies, setAcceptCookies] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    phone?: string;
    cookies?: string;
  }>({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^[+]?[\d\s-()]{8,}$/.test(phone);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!validateEmail(email)) newErrors.email = "Email inválido";
    if (!validatePhone(phone)) newErrors.phone = "Teléfono inválido";
    if (!acceptCookies) newErrors.cookies = "Debes aceptar las cookies";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      console.log("Enviando datos al servidor...");

      // Capturar datos adicionales del usuario
      const userData = {
        quoteId,
        email,
        phone,
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        referrer: document.referrer || "Direct",
        currentUrl: window.location.href,
        timestamp: new Date().toISOString(),
        // Capturar UTM parameters si existen
        utmSource:
          new URLSearchParams(window.location.search).get("utm_source") || "",
        utmMedium:
          new URLSearchParams(window.location.search).get("utm_medium") || "",
        utmCampaign:
          new URLSearchParams(window.location.search).get("utm_campaign") || "",
      };

      const response = await fetch("/api/quote-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const responseData = await response.json();
      console.log("Respuesta del servidor:", responseData);

      if (response.ok) {
        console.log("Datos guardados exitosamente");
        // Track el evento de envío del formulario con datos adicionales
        trackQuoteFormSubmit(quoteId, {
          email,
          phone,
          userAgent: userData.userAgent,
          referrer: userData.referrer,
          utmSource: userData.utmSource,
          utmMedium: userData.utmMedium,
          utmCampaign: userData.utmCampaign,
        });
        onSubmit({ email, phone });
      } else {
        console.error("Error en la respuesta:", responseData);
        alert(
          "Hubo un error al guardar los datos. Por favor intenta nuevamente."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error de conexión. Por favor intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 pt-24">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Confirma tus datos
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Para ver tu cotización, necesitamos verificar tu información
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: undefined }));
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="tu@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 mr-2" />
              Celular
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setErrors((prev) => ({ ...prev, phone: undefined }));
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+57 300 123 4567"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="cookies"
              checked={acceptCookies}
              onChange={(e) => {
                setAcceptCookies(e.target.checked);
                setErrors((prev) => ({ ...prev, cookies: undefined }));
              }}
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="cookies" className="ml-3 text-sm text-gray-600">
              Acepto el uso de cookies y el tratamiento de mis datos según la{" "}
              <a
                href="/politica-datos"
                className="text-blue-600 hover:underline"
              >
                política de privacidad
              </a>
            </label>
          </div>
          {errors.cookies && (
            <p className="text-red-500 text-sm">{errors.cookies}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center disabled:opacity-50"
          >
            {loading ? (
              "Enviando..."
            ) : (
              <>
                <CheckCircle2 className="w-5 h-5 mr-2" />
                Ver mi cotización
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
