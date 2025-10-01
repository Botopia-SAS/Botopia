"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowLeft, Loader2 } from "lucide-react";
import { trackPDFView } from "@/lib/tracking";

interface PDFViewerProps {
  quoteId: string;
  userData: { email: string; phone: string };
}

export default function PDFViewer({ quoteId, userData }: PDFViewerProps) {
  const [pdfUrl, setPdfUrl] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    trackPDFView(quoteId);
    
    // Obtener la URL del PDF desde Cloudinary
    fetch(`/api/pdf/${quoteId}`)
      .then(res => res.json())
      .then(data => {
        if (data.url) {
          setPdfUrl(data.url);
          setLoading(false);
        } else {
          setError("PDF no encontrado");
          setLoading(false);
        }
      })
      .catch(err => {
        console.error("Error cargando PDF:", err);
        setError("Error al cargar el PDF");
        setLoading(false);
      });
  }, [quoteId]);

  const handleDownload = () => {
    if (pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = `cotizacion-${quoteId}.pdf`;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => window.history.back()}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Volver
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Tu Cotización
                </h1>
                <p className="text-sm text-gray-600">ID: {quoteId}</p>
              </div>
            </div>
            {pdfUrl && (
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-5 h-5" />
                Descargar PDF
              </button>
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          style={{ height: "calc(100vh - 200px)" }}
        >
          {loading && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600">Cargando tu cotización...</p>
              </div>
            </div>
          )}
          
          {error && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-red-600 text-lg mb-2">❌ {error}</p>
                <p className="text-gray-600">Por favor, contacta con soporte</p>
              </div>
            </div>
          )}
          
          {pdfUrl && !loading && !error && (
            <iframe
              src={pdfUrl}
              className="w-full h-full"
              title="Cotización PDF"
              style={{ border: "none" }}
            />
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-center text-gray-600 text-sm"
        >
          <p>
            Esta cotización fue enviada a <strong>{userData.email}</strong>
          </p>
          <p className="mt-1">
            ¿Tienes preguntas? Contáctanos al número registrado
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}