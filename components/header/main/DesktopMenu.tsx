import Link from "next/link";
import { menuItems } from "./menuItems";

// Importación de Dropdowns
import WebDropdown from "./Dropdowns/WebDropdown";
import AppDropdown from "./Dropdowns/AppDropdown";
import EcomDropdown from "./Dropdowns/E-comDropdown";
import IADropdown from "./Dropdowns/IADropdown";
import AutoDropdown from "./Dropdowns/AutoDropdown";
import DesignDropdown from "./Dropdowns/DesignDropdown";
import MarketingDropdown from "./Dropdowns/MarketingDropdown";

interface DesktopMenuProps {
  activeDropdown: string | null;
  setActiveDropdown: (value: string | null) => void;
}

export default function DesktopMenu({
  activeDropdown,
  setActiveDropdown,
}: DesktopMenuProps) {
  return (
    <div
      className="relative z-30"
      onMouseLeave={() => setActiveDropdown(null)} // Mover el onMouseLeave aquí
    >
      <nav
        className="hidden md:flex items-center space-x-8"
        onMouseEnter={() => {
          // Mantener el dropdown activo si ya hay uno mostrándose
          if (activeDropdown) {
            setActiveDropdown(activeDropdown);
          }
        }}
      >
        {menuItems.map((item) => {
          // Identificador para cada dropdown
          let dropdownKey = "";
          switch (item.name) {
            case "Páginas web":
              dropdownKey = "web";
              break;
            case "Aplicaciones móviles":
              dropdownKey = "app";
              break;
            case "E-commerce":
              dropdownKey = "ecom";
              break;
            case "Inteligencia artificial":
              dropdownKey = "ia";
              break;
            case "Automatización":
              dropdownKey = "auto";
              break;
            case "Diseño UX/UI":
              dropdownKey = "design";
              break;
            case "Marketing":
              dropdownKey = "marketing";
              break;
            default:
              dropdownKey = "";
          }

          return (
            <div
              key={item.name}
              onMouseEnter={() => dropdownKey && setActiveDropdown(dropdownKey)}
              // Eliminamos el onMouseLeave de cada item individual
              className="relative px-4 py-2 -mx-4" // Añadimos padding y margen negativo
            >
              <Link
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
              >
                {item.name}
              </Link>

              {/* Renderizado dinámico del Dropdown */}
              {activeDropdown === dropdownKey && (
                <>
                  {dropdownKey === "web" && <WebDropdown />}
                  {dropdownKey === "app" && <AppDropdown />}
                  {dropdownKey === "ecom" && <EcomDropdown />}
                  {dropdownKey === "ia" && <IADropdown />}
                  {dropdownKey === "auto" && <AutoDropdown />}
                  {dropdownKey === "design" && <DesignDropdown />}
                  {dropdownKey === "marketing" && <MarketingDropdown />}
                </>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
