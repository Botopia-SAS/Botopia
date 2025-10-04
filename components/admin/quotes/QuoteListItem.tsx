import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Copy,
  CheckCircle,
  Download,
  ExternalLink,
  Trash2,
} from "lucide-react";
import type { Quote } from "@/types/quote.types";
import { formatSize, formatDate } from "@/utils/quoteFormatters";

interface QuoteListItemProps {
  quote: Quote;
  index: number;
  onDelete: (quoteId: string) => void;
}

export const QuoteListItem = ({
  quote,
  index,
  onDelete,
}: QuoteListItemProps) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (url: string, quoteId: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(quoteId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
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
                onClick={() => copyToClipboard(quote.clientUrl, quote.quoteId)}
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
            onClick={() => onDelete(quote.quoteId)}
            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Eliminar"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
