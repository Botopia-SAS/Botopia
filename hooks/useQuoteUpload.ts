import { useState, useCallback } from "react";
import { generateQuoteId } from "@/utils/quoteFormatters";

/**
 * Hook personalizado para gestionar la subida de archivos PDF
 */
export const useQuoteUpload = (
  onSuccess: (type: "success" | "error", text: string) => void,
  onUploadComplete: () => void
) => {
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const uploadFile = useCallback(
    async (file: File) => {
      if (file.type !== "application/pdf") {
        onSuccess("error", "Solo se permiten archivos PDF");
        return;
      }

      const quoteId = generateQuoteId();
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
          onSuccess("success", `PDF subido exitosamente: ${quoteId}`);
          onUploadComplete();
        } else {
          onSuccess("error", data.error || "Error al subir el archivo");
        }
      } catch (error) {
        console.error("Error:", error);
        onSuccess("error", "Error al subir el archivo");
      } finally {
        setUploading(false);
      }
    },
    [onSuccess, onUploadComplete]
  );

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    async (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) {
        await uploadFile(files[0]);
      }
    },
    [uploadFile]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        uploadFile(files[0]);
      }
    },
    [uploadFile]
  );

  return {
    uploading,
    dragActive,
    handleDrag,
    handleDrop,
    handleFileInput,
  };
};
