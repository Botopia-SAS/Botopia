"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useQuotes } from "@/hooks/useQuotes";
import { useQuoteUpload } from "@/hooks/useQuoteUpload";
import { MessageAlert } from "@/components/admin/quotes/MessageAlert";
import { QuoteUploadZone } from "@/components/admin/quotes/QuoteUploadZone";
import { QuoteSearchBar } from "@/components/admin/quotes/QuoteSearchBar";
import { QuoteList } from "@/components/admin/quotes/QuoteList";
import { QuoteInstructions } from "@/components/admin/quotes/QuoteInstructions";

export default function AdminQuotes() {
  const [searchTerm, setSearchTerm] = useState("");

  // Custom hooks para gestión de estado y lógica
  const { quotes, loading, message, loadQuotes, deleteQuote, showMessage } =
    useQuotes();

  const { uploading, dragActive, handleDrag, handleDrop, handleFileInput } =
    useQuoteUpload(showMessage, loadQuotes);

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

        {/* Mensajes de alerta */}
        <MessageAlert message={message} />

        {/* Zona de drag & drop */}
        <QuoteUploadZone
          dragActive={dragActive}
          uploading={uploading}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onFileInput={handleFileInput}
        />

        {/* Buscador */}
        <QuoteSearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* Lista de cotizaciones */}
        <QuoteList
          quotes={quotes}
          loading={loading}
          searchTerm={searchTerm}
          onDelete={deleteQuote}
        />

        {/* Footer con instrucciones */}
        <QuoteInstructions />
      </div>
    </div>
  );
}
