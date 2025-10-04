import { motion } from "framer-motion";
import { Upload } from "lucide-react";

interface QuoteUploadZoneProps {
  dragActive: boolean;
  uploading: boolean;
  onDragEnter: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onFileInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const QuoteUploadZone = ({
  dragActive,
  uploading,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  onFileInput,
}: QuoteUploadZoneProps) => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="mb-8"
    >
      <div
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
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
          onChange={onFileInput}
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
  );
};
