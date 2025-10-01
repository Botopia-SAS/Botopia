"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  FileText,
  Trash2,
  Copy,
  CheckCircle,
  AlertCircle,
  Download,
  ExternalLink,
  Search,
} from "lucide-react";

interface Quote {
  quoteId: string;
  fileName: string;
  size: number;
  uploadDate: string;
  clientUrl: string;
}

export default function AdminQuotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Cargar lista de cotizaciones
  const loadQuotes = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/upload-quote");
      const data = await response.json();
      setQuotes(data.quotes || []);
    } catch (error) {
      console.error("Error cargando cotizaciones:", error);
      showMessage("error", "Error al cargar las cotizaciones");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadQuotes();
  }, [loadQuotes]);

  const showMessage = (type: "success" | "error", text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  // Manejar drag & drop
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      await uploadFile(files[0]);
    }
  };

  // Subir archivo
  const uploadFile = async (file: File) => {
    if (file.type !== "application/pdf") {
      showMessage("error", "Solo se permiten archivos PDF");
      return;
    }

    // Generar ID único basado en timestamp
    const quoteId = `quote-${Date.now()}`;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("quoteId", quoteId);

      const response = await fetch("/api/upload-quote", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        showMessage("success", `PDF subido exitosamente: ${quoteId}`);
        loadQuotes(); // Recargar lista
      } else {
        showMessage("error", data.error || "Error al subir el archivo");
      }
    } catch (error) {
      console.error("Error:", error);
      showMessage("error", "Error al subir el archivo");
    } finally {
      setUploading(false);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      uploadFile(files[0]);
    }
  };

  // Copiar URL al portapapeles
  const copyToClipboard = (url: string, quoteId: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(quoteId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Eliminar cotización
  const deleteQuote = async (quoteId: string) => {
    if (!confirm(`¿Estás seguro de eliminar la cotización ${quoteId}?`)) {
      return;
    }

    try {
      const response = await fetch("/api/upload-quote", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quoteId }),
      });

      if (response.ok) {
        showMessage("success", "Cotización eliminada");
        loadQuotes();
      } else {
        showMessage("error", "Error al eliminar");
      }
    } catch (error) {
      console.error("Error:", error);
      showMessage("error", "Error al eliminar");
    }
  };

  // Formatear tamaño de archivo
  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  // Formatear fecha
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("es-ES", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Filtrar cotizaciones
  const filteredQuotes = quotes.filter((quote) =>
    quote.quoteId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            📋 Administrador de Cotizaciones
          </h1>
          <p className="text-gray-600">
            Sube PDFs de cotizaciones y genera links para tus clientes
          </p>
        </motion.div>

        {/* Mensajes */}
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                message.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {message.type === "success" ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              <span>{message.text}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Zona de drag & drop */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`relative border-4 border-dashed rounded-2xl p-12 text-center transition-all ${
              dragActive
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 bg-white"
            } ${uploading ? "opacity-50 pointer-events-none" : ""}`}
          >
            <input
              type="file"
              id="file-upload"
              accept=".pdf"
              onChange={handleFileInput}
              className="hidden"
              disabled={uploading}
            />

            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <motion.div
                animate={uploading ? { rotate: 360 } : {}}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Upload
                  className={`w-16 h-16 mb-4 ${
                    dragActive ? "text-blue-500" : "text-gray-400"
                  }`}
                />
              </motion.div>

              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                {uploading
                  ? "Subiendo..."
                  : dragActive
                  ? "Suelta el archivo aquí"
                  : "Arrastra tu PDF aquí"}
              </h3>
              <p className="text-gray-500 mb-4">
                o haz click para seleccionar un archivo
              </p>
              <p className="text-sm text-gray-400">
                Solo archivos PDF · Máximo 10MB
              </p>
            </label>
          </div>
        </motion.div>

        {/* Buscador */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por ID de cotización..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </motion.div>

        {/* Lista de cotizaciones */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <h2 className="text-2xl font-bold">
                Cotizaciones Subidas ({filteredQuotes.length})
              </h2>
            </div>

            {loading ? (
              <div className="p-12 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
                <p className="text-gray-600">Cargando cotizaciones...</p>
              </div>
            ) : filteredQuotes.length === 0 ? (
              <div className="p-12 text-center">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">
                  {searchTerm
                    ? "No se encontraron cotizaciones"
                    : "No hay cotizaciones subidas aún"}
                </p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {filteredQuotes.map((quote, index) => (
                  <motion.div
                    key={quote.quoteId}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <FileText className="w-6 h-6 text-blue-600" />
                          <h3 className="text-lg font-semibold text-gray-800">
                            {quote.quoteId}
                          </h3>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1 ml-9">
                          <p>📄 {quote.fileName}</p>
                          <p>💾 {formatSize(quote.size)}</p>
                          <p>📅 {formatDate(quote.uploadDate)}</p>
                        </div>
                        <div className="mt-3 ml-9">
                          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2 pr-3">
                            <span className="text-xs text-gray-600 flex-1 truncate">
                              {quote.clientUrl}
                            </span>
                            <button
                              onClick={() =>
                                copyToClipboard(quote.clientUrl, quote.quoteId)
                              }
                              className="flex items-center gap-1 bg-white px-3 py-1 rounded text-xs font-medium text-blue-600 hover:bg-blue-50 transition-colors"
                            >
                              {copiedId === quote.quoteId ? (
                                <>
                                  <CheckCircle className="w-3 h-3" />
                                  Copiado
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  Copiar
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={`/api/pdf/${quote.quoteId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Ver PDF"
                        >
                          <Download className="w-5 h-5" />
                        </a>
                        <a
                          href={quote.clientUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Abrir link del cliente"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                        <button
                          onClick={() => deleteQuote(quote.quoteId)}
                          className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Eliminar"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Footer con instrucciones */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-white rounded-lg shadow-md p-6"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            📖 Cómo usar:
          </h3>
          <ol className="space-y-2 text-gray-600">
            <li>
              1. <strong>Arrastra</strong> el PDF de la cotización a la zona de
              arriba
            </li>
            <li>
              2. Se generará automáticamente un <strong>ID único</strong> (ej:
              quote-1234567890)
            </li>
            <li>
              3. <strong>Copia el link</strong> y envíalo a tu cliente
            </li>
            <li>
              4. El cliente verá la animación, llenará el formulario y verá el
              PDF
            </li>
            <li>
              5. Los datos del cliente se guardarán en{" "}
              <a
                href="https://docs.google.com/spreadsheets/d/1tA3mwxbzGKG28ZydqsZT0GcmEft0i1kxfXulSHByLyU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Google Sheets
              </a>
            </li>
          </ol>
        </motion.div>
      </div>
    </div>
  );
}
