/**
 * Formatea el tamaño de un archivo en bytes a una representación legible
 */
export const formatSize = (bytes: number): string => {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
};

/**
 * Formatea una fecha a formato español legible
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

/**
 * Genera un ID único para una cotización basado en timestamp
 */
export const generateQuoteId = (): string => {
  return `quote-${Date.now()}`;
};
