"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { trackPDFView } from "@/lib/tracking";
import dynamic from "next/dynamic";

// Importar react-pdf solo del lado del cliente para evitar errores de SSR
const Document = dynamic(
  () => import("react-pdf").then((mod) => mod.Document),
  { ssr: false }
);
const Page = dynamic(
  () => import("react-pdf").then((mod) => mod.Page),
  { ssr: false }
);

// Configurar el worker de PDF.js después de la carga
if (typeof window !== "undefined") {
  import("react-pdf").then((pdfjs) => {
    pdfjs.pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.pdfjs.version}/build/pdf.worker.min.mjs`;
  });
}

// Suprimir warnings de consola de react-pdf
if (typeof window !== "undefined") {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (
      args[0]?.includes?.("TextLayer") ||
      args[0]?.includes?.("AnnotationLayer")
    ) {
      return;
    }
    originalWarn(...args);
  };
}

interface PDFViewerProps {
  quoteId: string;
  userData: { email: string; phone: string };
}

export default function PDFViewer({ quoteId, userData }: PDFViewerProps) {
  const pdfUrl = `/api/pdf/${quoteId}`;
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pageWidth, setPageWidth] = useState(0);

  useEffect(() => {
    trackPDFView(quoteId);

    // Detectar si es móvil
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // Establecer el ancho de la página para móvil
      if (mobile) {
        setPageWidth(window.innerWidth - 32); // Restar padding
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, [quoteId]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setTotalPages(numPages);
    setLoading(false);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error("Error loading PDF:", error);
    setLoading(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `cotizacion-${quoteId}.pdf`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-32 md:pt-4 p-2 md:p-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        <div className="bg-white rounded-lg shadow-lg p-3 md:p-6 mb-2 md:mb-4">
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors p-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline text-sm">Volver</span>
            </button>

            {isMobile && !loading && totalPages > 0 ? (
              // Controles de navegación en el header para móvil
              <div className="flex items-center gap-2">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="p-2 bg-[#411E8A] text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#5a2db3] transition-colors"
                  aria-label="Página anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="text-sm font-bold text-gray-900 min-w-[80px] text-center">
                  {currentPage} / {totalPages}
                </div>

                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className="p-2 bg-[#411E8A] text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#5a2db3] transition-colors"
                  aria-label="Página siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            ) : (
              // Título para desktop
              <h1 className="text-lg md:text-2xl font-bold text-gray-800">
                Tu Cotización
              </h1>
            )}

            <button
              onClick={handleDownload}
              className="flex items-center gap-1 md:gap-2 bg-[#411E8A] text-white px-3 md:px-6 py-2 md:py-3 rounded-lg hover:bg-[#5a2db3] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              style={{ boxShadow: "0 2px 12px 0 rgba(65,30,138,0.10)" }}
            >
              <Download className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-base hidden sm:inline">Descargar PDF</span>
            </button>
          </div>
        </div>

        {isMobile ? (
          // Vista móvil: usar react-pdf para renderizar páginas
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <div className="flex items-center justify-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#411E8A]"></div>
                </div>
              }
            >
              {!loading && (
                <div className="relative w-full bg-white">
                  <Page
                    pageNumber={currentPage}
                    width={pageWidth || undefined}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="mx-auto"
                  />
                </div>
              )}
            </Document>
          </motion.div>
        ) : (
          // Vista desktop: mostrar iframe del PDF
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            style={{
              height: "calc(100vh - 200px)",
              minHeight: "400px"
            }}
          >
            <iframe
              src={pdfUrl}
              className="w-full h-full"
              title="Cotización PDF"
              style={{
                border: "none",
                width: "100%",
                height: "100%"
              }}
            />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-2 md:mt-4 text-center text-gray-600 text-xs md:text-sm px-2"
        >
          <p>¿Tienes preguntas? Contáctanos para más información</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
