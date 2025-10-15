"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, CheckCircle2 } from "lucide-react";
import { trackQuoteFormSubmit } from "@/lib/tracking";
import Image from "next/image";

interface QuoteFormProps {
  quoteId: string;
  onSubmit: (data: { email: string; phone: string }) => void;
}

// Lista de países con sus indicativos
const countryCodes = [
  { code: "+57", country: "Colombia", flag: "🇨🇴", iso: "CO" },
  { code: "+1", country: "Estados Unidos", flag: "🇺🇸", iso: "US" },
  { code: "+52", country: "México", flag: "🇲🇽", iso: "MX" },
  { code: "+54", country: "Argentina", flag: "🇦🇷", iso: "AR" },
  { code: "+56", country: "Chile", flag: "🇨🇱", iso: "CL" },
  { code: "+51", country: "Perú", flag: "🇵🇪", iso: "PE" },
  { code: "+58", country: "Venezuela", flag: "🇻🇪", iso: "VE" },
  { code: "+593", country: "Ecuador", flag: "🇪🇨", iso: "EC" },
  { code: "+591", country: "Bolivia", flag: "🇧🇴", iso: "BO" },
  { code: "+595", country: "Paraguay", flag: "🇵🇾", iso: "PY" },
  { code: "+598", country: "Uruguay", flag: "🇺🇾", iso: "UY" },
  { code: "+34", country: "España", flag: "🇪🇸", iso: "ES" },
];

export default function QuoteForm({ quoteId, onSubmit }: QuoteFormProps) {
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+57"); // Colombia por defecto
  const [phone, setPhone] = useState("");
  const [acceptCookies, setAcceptCookies] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    phone?: string;
    cookies?: string;
  }>({});
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry = countryCodes.find((c) => c.code === countryCode);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^[\d\s-()]{7,}$/.test(phone);

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
        phone: `${countryCode} ${phone}`, // Combinar código de país con número
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
          phone: `${countryCode} ${phone}`,
          userAgent: userData.userAgent,
          referrer: userData.referrer,
          utmSource: userData.utmSource,
          utmMedium: userData.utmMedium,
          utmCampaign: userData.utmCampaign,
        });
        onSubmit({ email, phone: `${countryCode} ${phone}` });
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
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-50 to-indigo-100 mt-[10px] sm:mt-0">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Confirma tus datos
        </h2>
        <p className="text-gray-700 mb-8 text-center">
          Para ver tu cotización, necesitamos verificar tu información
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-900 mb-2">
              <Mail className="w-4 h-4 mr-2 text-gray-700" />
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: undefined }));
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
              placeholder="tu@email.com"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1 font-medium">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-900 mb-2">
              <Phone className="w-4 h-4 mr-2 text-gray-700" />
              Celular
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              {/* Dropdown personalizado */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full sm:w-auto flex items-center gap-2 px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white hover:bg-gray-50 transition-colors"
                  style={{ minWidth: "130px" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center border-2 border-blue-200 flex-shrink-0 bg-gray-100">
                      <Image
                        src={`https://flagcdn.com/w40/${selectedCountry?.iso.toLowerCase()}.png`}
                        alt={selectedCountry?.country || ""}
                        width={28}
                        height={28}
                        className="object-cover w-full h-full"
                        unoptimized
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {selectedCountry?.code}
                    </span>
                  </div>
                  <svg
                    className="w-4 h-4 text-gray-600 ml-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Menú desplegable */}
                {isDropdownOpen && (
                  <div className="absolute z-50 mt-2 w-full sm:w-64 left-0 bg-white border border-gray-300 rounded-lg shadow-xl max-h-72 overflow-y-auto">
                    {countryCodes.map((country) => (
                      <button
                        key={country.code}
                        type="button"
                        onClick={() => {
                          setCountryCode(country.code);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors text-left ${
                          countryCode === country.code
                            ? "bg-blue-50 border-l-4 border-blue-500"
                            : ""
                        }`}
                      >
                        <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center border-2 border-blue-200 flex-shrink-0 bg-gray-100">
                          <Image
                            src={`https://flagcdn.com/w40/${country.iso.toLowerCase()}.png`}
                            alt={country.country}
                            width={32}
                            height={32}
                            className="object-cover w-full h-full"
                            unoptimized
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">
                            {country.country}
                          </div>
                          <div className="text-xs text-gray-600">
                            {country.iso} {country.code}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  // Solo permitir números, espacios y guiones
                  const value = e.target.value.replace(/[^\d\s-]/g, "");
                  setPhone(value);
                  setErrors((prev) => ({ ...prev, phone: undefined }));
                }}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                placeholder="300 123 4567"
              />
            </div>
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1 font-medium">
                {errors.phone}
              </p>
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
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            />
            <label
              htmlFor="cookies"
              className="ml-3 text-sm text-gray-800 cursor-pointer"
            >
              Acepto el uso de cookies y el tratamiento de mis datos según la{" "}
              <a
                href="/politica-datos"
                className="text-blue-600 hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                política de privacidad
              </a>
            </label>
          </div>
          {errors.cookies && (
            <p className="text-red-600 text-sm font-medium">{errors.cookies}</p>
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
