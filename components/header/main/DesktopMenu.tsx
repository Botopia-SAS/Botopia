"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { menuItems } from "./menuItems";

// Importación de Dropdowns
import WebDropdown from "./Dropdowns/WebDropdown";
import AppDropdown from "./Dropdowns/AppDropdown";
import IADropdown from "./Dropdowns/IADropdown";
import AutoDropdown from "./Dropdowns/AutoDropdown";
import DesignDropdown from "./Dropdowns/DesignDropdown";
import MarketingDropdown from "./Dropdowns/MarketingDropdown";
import EquiposDropdown from "./Dropdowns/EquiposDropdown";

interface DesktopMenuProps {
  activeDropdown: string | null;
  setActiveDropdown: (value: string | null) => void;
}

export default function DesktopMenu({
  activeDropdown,
  setActiveDropdown,
}: DesktopMenuProps) {
  // Ref para guardar el timeout de hover
  const hoverTimeout = useRef<number | null>(null);

  // Limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
      }
    };
  }, []);

  // Cuando entras en un ítem, programa la apertura tras 500ms
  const handleMouseEnterItem = (dropdownKey: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = window.setTimeout(() => {
      setActiveDropdown(dropdownKey);
    }, 500);
  };

  // Si sales antes de los 500ms, cancela la apertura
  const handleMouseLeaveItem = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
  };

  return (
    <div
      className="relative z-30"
      onMouseLeave={() => {
        // Cierra inmediatamente al salir del área completa
        setActiveDropdown(null);
      }}
    >
      <nav
        className="hidden md:flex items-center space-x-10"
        onMouseEnter={() => {
          // Si ya había un dropdown abierto, lo mantenemos
          if (activeDropdown) {
            setActiveDropdown(activeDropdown);
          }
        }}
      >
        {menuItems.map((item) => {
          // Calcula la clave según el nombre
          let dropdownKey = "";
          switch (item.name) {
            case "Páginas web":
              dropdownKey = "web";
              break;
            case "Aplicaciones móviles":
              dropdownKey = "app";
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
            case "Equipos de ingeniería":
              dropdownKey = "engineering";
              break;
            default:
              dropdownKey = "";
          }

          return (
            <div
              key={item.name}
              onMouseEnter={() =>
                dropdownKey && handleMouseEnterItem(dropdownKey)
              }
              onMouseLeave={handleMouseLeaveItem}
              className="relative px-2 py-2"
            >
              <Link
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-base"
              >
                {item.name}
              </Link>

              {activeDropdown === dropdownKey && (
                <>
                  {dropdownKey === "web" && <WebDropdown />}
                  {dropdownKey === "app" && <AppDropdown />}
                  {dropdownKey === "ia" && <IADropdown />}
                  {dropdownKey === "auto" && <AutoDropdown />}
                  {dropdownKey === "design" && <DesignDropdown />}
                  {dropdownKey === "marketing" && <MarketingDropdown />}
                  {dropdownKey === "engineering" && <EquiposDropdown />}
                </>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
