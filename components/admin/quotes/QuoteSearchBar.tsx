import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface QuoteSearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const QuoteSearchBar = ({
  searchTerm,
  onSearchChange,
}: QuoteSearchBarProps) => {
  return (
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
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </motion.div>
  );
};
