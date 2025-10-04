import { motion } from "framer-motion";

export const QuoteInstructions = () => {
  return (
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
          4. El cliente verá la animación, llenará el formulario y verá el PDF
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
  );
};
