import { motion } from "framer-motion";

interface BaseDropdownProps {
  mainTitle: string;
  mainItems: string[];
  secondaryColumns: {
    title: string;
    items: string[];
  }[];
  imageSrc: string;
  imageAlt: string;
}

export default function BaseDropdown({
  mainTitle,
  mainItems,
  secondaryColumns,
  imageSrc,
  imageAlt,
}: BaseDropdownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 top-10 w-full text-black dark:text-white shadow-xl z-2"
      style={{
        background: "linear-gradient(to bottom, white, #b283fd)",
        ...(typeof window !== "undefined" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches && {
            background: "linear-gradient(to bottom, black, #411E8A)",
          }),
      }}
    >
      <div
        className="max-w-7xl mx-auto grid h-full relative"
        style={{ gridTemplateColumns: "2fr 2fr 0.5fr" }}
      >
        {/* Columna Principal */}
        <div className="px-6 py-8">
          <h3 className="text-2xl font-light mb-4 text-[#050044] dark:text-[#FAECD4]">
            {mainTitle}
          </h3>
          <ul className="space-y-2">
            {mainItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="text-lg font-normal hover:text-gray-700 dark:hover:text-gray-300 transition transform hover:scale-105 block dark:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columnas Secundarias */}
        <div className="flex gap-8 px-6 py-8">
          {secondaryColumns.map((col, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-light mb-4 text-[#050044] dark:text-[#FAECD4]">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-base hover:text-gray-700 dark:hover:text-gray-300 transition transform hover:scale-105 block dark:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Columna de Imagen con corte diagonal que se extiende hasta el borde derecho */}
        <div className="relative overflow-visible">
          <div
            className="absolute top-0 bottom-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${imageSrc})`,
              clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
              left: "-15vw",
              right: "-35vw",
              width: "50vw",
            }}
          />
          <div
            className="absolute top-0 bottom-0"
            style={{
              background:
                typeof window !== "undefined" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(65,30,138,0.8) 30%, rgba(65,30,138,0) 100%)"
                  : "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0) 100%)",
              clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
              left: "-15vw",
              right: "-35vw",
              width: "50vw",
            }}
          />
          <div className="w-full h-full min-h-[200px]" />
        </div>
      </div>
    </motion.div>
  );
}
