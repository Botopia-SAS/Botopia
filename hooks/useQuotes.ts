import { useState, useEffect, useCallback } from "react";
import type { Quote, Message } from "@/types/quote.types";

/**
 * Hook personalizado para gestionar la lista de cotizaciones
 */
export const useQuotes = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Message | null>(null);

  const showMessage = useCallback((type: "success" | "error", text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  }, []);

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
  }, [showMessage]);

  const deleteQuote = useCallback(
    async (quoteId: string) => {
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
    },
    [loadQuotes, showMessage]
  );

  useEffect(() => {
    loadQuotes();
  }, [loadQuotes]);

  return {
    quotes,
    loading,
    message,
    loadQuotes,
    deleteQuote,
    showMessage,
  };
};
