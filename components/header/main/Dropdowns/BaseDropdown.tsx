import { motion } from "framer-motion";

interface BaseDropdownProps {
  mainTitle: string;
  mainItems: string[];
  secondaryColumns: {
    title: string;
    items: string[];
  }[];
}

export default function BaseDropdown({
  mainTitle,
  mainItems,
  secondaryColumns,
}: BaseDropdownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full bg-white dark:bg-black text-black dark:text-white shadow-xl"
    >
      <div
        className="max-w-7xl mx-auto px-6 py-8 grid"
        style={{ gridTemplateColumns: "2fr 2fr" }}
      >
        {/* Columna Principal */}
        <div>
          <h3 className="text-xs font-light text-gray-500 dark:text-gray-400 mb-4">
            {mainTitle}
          </h3>
          <ul className="space-y-2">
            {mainItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="text-2xl font-normal hover:text-gray-700 dark:hover:text-gray-300 transition transform hover:scale-105 block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columnas Secundarias */}
        <div className="flex gap-8">
          {secondaryColumns.map((col, idx) => (
            <div key={idx}>
              <h3 className="text-xs font-light text-gray-500 dark:text-gray-400 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-base hover:text-gray-700 dark:hover:text-gray-300 transition transform hover:scale-105 block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
