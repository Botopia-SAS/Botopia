import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import type { Quote } from "@/types/quote.types";
import { QuoteListItem } from "./QuoteListItem";

interface QuoteListProps {
  quotes: Quote[];
  loading: boolean;
  searchTerm: string;
  onDelete: (quoteId: string) => void;
}

export const QuoteList = ({
  quotes,
  loading,
  searchTerm,
  onDelete,
}: QuoteListProps) => {
  const filteredQuotes = quotes.filter((quote) =>
    quote.quoteId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
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
              <QuoteListItem
                key={quote.quoteId}
                quote={quote}
                index={index}
                onDelete={onDelete}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
