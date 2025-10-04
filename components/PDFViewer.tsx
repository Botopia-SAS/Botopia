"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowLeft } from "lucide-react";
import { trackPDFView } from "@/lib/tracking";

interface PDFViewerProps {
  quoteId: string;
  userData: { email: string; phone: string };
}

export default function PDFViewer({ quoteId, userData }: PDFViewerProps) {
  const pdfUrl = `/api/pdf/${quoteId}`;

  useEffect(() => {
    trackPDFView(quoteId);
  }, [quoteId]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `cotizacion-${quoteId}.pdf`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-32 md:pt-4 p-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={() => window.history.back()}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Volver</span>
              </button>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                  Tu Cotización
                </h1>
              </div>
            </div>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-[#411E8A] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-[#5a2db3] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
              style={{ boxShadow: "0 2px 12px 0 rgba(65,30,138,0.10)" }}
            >
              <Download className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Descargar PDF</span>
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          style={{ 
            height: "calc(100vh - 280px)",
            minHeight: "500px"
          }}
        >
          <iframe
            src={pdfUrl}
            className="w-full h-full"
            title="Cotización PDF"
            style={{ 
              border: "none",
              maxWidth: "100%",
              objectFit: "contain"
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-center text-gray-600 text-sm"
        >
          <p>¿Tienes preguntas? Contáctanos para más información</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
