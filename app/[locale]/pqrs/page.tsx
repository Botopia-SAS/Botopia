"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { usePathname } from "next/navigation";

export default function PQRSPage() {
  const pathname = usePathname();
  const locale = (pathname?.split("/")[1] || "es").toLowerCase();

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      setStatus("sending");
      setIsUploading(true);
      setErrorMsg("");

      // Subir archivo a Cloudinary si existe
      if (file && process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
        const uploadData = new FormData();
        uploadData.append("file", file);
        uploadData.append("upload_preset", "botopia_uploads");

        const uploadResponse = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          { method: "POST", body: uploadData }
        );

        const uploadResult = await uploadResponse.json();
        if (!uploadResponse.ok) {
          throw new Error(uploadResult?.error?.message || "Error al subir el archivo");
        }
        formData.append("image_url", uploadResult.secure_url);
      }

      // Asunto normalizado
      const asunto = String(formData.get("subject") || "PQRS");
      formData.append("_subject", `PQRS - ${asunto}`);
      formData.append("_captcha", "false");

      // Enviar a nuestro endpoint para evitar CORS y manejar respuesta
      const res = await fetch(`/api/pqrs`, { method: "POST", body: formData });
      if (!res.ok) throw new Error("No se pudo enviar la solicitud. Inténtalo nuevamente.");

      setStatus("success");
      form.reset();
      setFile(null);
      setPreviewUrl(null);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Error desconocido";
      setErrorMsg(msg);
      setStatus("error");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="relative w-full text-black pt-24">
      {/* Encabezado */}
      <div className="relative h-[220px] md:h-[280px] w-full overflow-hidden bg-gradient-to-r from-[#450161] to-[#7e3af2] flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">PQRS</h1>
          <h2 className="text-white/90 text-sm md:text-base max-w-2xl mx-auto">
            Peticiones, Quejas, Reclamos y Sugerencias
          </h2>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container py-12 w-full sm:px-6 px-4 bg-white max-w-none md:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start w-full">
          {/* Info lateral */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#450161]">Cuéntanos tu caso</h3>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Usa este formulario para radicar una petición, queja, reclamo o sugerencia.
              Te responderemos en los plazos establecidos por la regulación vigente.
            </p>
            <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
              <li>Tiempo de respuesta máximo: 10 días hábiles.</li>
              <li>Adjunta evidencia si lo consideras necesario.</li>
              <li>Protegemos tus datos conforme a nuestra Política de Tratamiento.</li>
            </ul>
          </div>

          {/* Formulario */}
          <div className="bg-[#aa8ed6] p-6 rounded-lg shadow-md">
            {/* Feedback visual */}
            {status === "success" && (
              <div className="mb-4 rounded-md bg-green-100 border border-green-300 text-green-800 px-4 py-3">
                Tu solicitud fue enviada correctamente. Te contactaremos pronto.
              </div>
            )}
            {status === "error" && (
              <div className="mb-4 rounded-md bg-red-100 border border-red-300 text-red-800 px-4 py-3">
                Ocurrió un problema al enviar tu solicitud. {errorMsg}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Nombre y Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre completo"
                  required
                  className="p-3 border border-gray-300 rounded w-full text-black bg-white focus:ring-2 focus:ring-[#450161]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                  className="p-3 border border-gray-300 rounded w-full text-black bg-white focus:ring-2 focus:ring-[#450161]"
                />
              </div>

              {/* Teléfono */}
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono (opcional)"
                className="p-3 border border-gray-300 rounded w-full text-black bg-white focus:ring-2 focus:ring-[#450161]"
              />

              {/* Asunto */}
              <select
                name="subject"
                required
                className="p-3 border border-gray-300 rounded w-full text-black bg-white focus:ring-2 focus:ring-[#450161]"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecciona el asunto
                </option>
                <option value="Queja">Queja</option>
                <option value="Reclamo">Reclamo</option>
                <option value="Sugerencia">Sugerencia</option>
                <option value="Petición">Petición</option>
              </select>

              {/* Mensaje */}
              <textarea
                name="message"
                placeholder="Describe tu caso..."
                required
                className="p-3 border border-gray-300 rounded w-full h-28 md:h-36 text-black bg-white focus:ring-2 focus:ring-[#450161]"
              />

              {/* Archivo opcional */}
              <div
                {...getRootProps()}
                className="p-6 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer text-center bg-white hover:bg-gray-100 transition"
              >
                <input {...getInputProps()} />
                <p className="text-gray-600">
                  Arrastra y suelta un archivo (opcional) o <span className="text-purple-700 font-semibold">haz clic</span> para seleccionarlo.
                </p>
              </div>

              {previewUrl && (
                <div className="mt-2 text-center">
                  <img src={previewUrl} alt="Vista previa" className="w-28 h-28 object-cover rounded-lg shadow mx-auto" />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#450161] text-white py-3 rounded-lg hover:bg-[#320144] transition disabled:opacity-60"
                disabled={isUploading || status === "sending"}
              >
                {status === "sending" ? "Enviando..." : "Enviar"}
              </button>

              {/* Campos ocultos de FormSubmit por compatibilidad (se enviarán a través del proxy) */}
              <input type="hidden" name="_captcha" value="false" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
