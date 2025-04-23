import Link from "next/link";
import { menuItems } from "./menuItems";

// Importamos todos los Dropdowns
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
    <div className="relative z-30">
      <nav className="hidden md:flex items-center space-x-8">
        {menuItems.map((item) => (
          <div
            key={item.name}
            onMouseEnter={() => {
              switch (item.name) {
                case "Páginas web":
                  setActiveDropdown("web");
                  break;
                case "Aplicaciones móviles":
                  setActiveDropdown("app");
                  break;
                case "E-commerce":
                  setActiveDropdown("ecom");
                  break;
                case "Inteligencia artificial":
                  setActiveDropdown("ia");
                  break;
                case "Automatización":
                  setActiveDropdown("auto");
                  break;
                case "Diseño UX/UI":
                  setActiveDropdown("design");

                  break;
                case "Marketing":
                  setActiveDropdown("marketing");
                  break;
                default:
                  setActiveDropdown(null);
              }
            }}
            onMouseLeave={() => setActiveDropdown(null)}
            className="relative"
          >
            <Link
              href={item.href}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
            >
              {item.name}
            </Link>

            {/* Renderizamos el Dropdown correspondiente */}
            {activeDropdown === "web" && item.name === "Páginas web" && (
              <WebDropdown />
            )}
            {activeDropdown === "app" &&
              item.name === "Aplicaciones móviles" && <AppDropdown />}
            {activeDropdown === "ecom" && item.name === "E-commerce" && (
              <EcomDropdown />
            )}
            {activeDropdown === "ia" &&
              item.name === "Inteligencia artificial" && <IADropdown />}
            {activeDropdown === "auto" && item.name === "Automatización" && (
              <AutoDropdown />
            )}
            {activeDropdown === "design" && item.name === "Diseño UX/UI" && (
              <DesignDropdown />
            )}
            {activeDropdown === "marketing" && item.name === "Marketing" && (
              <MarketingDropdown />
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
