"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { menuItems } from "./menuItems";


interface DesktopMenuProps {
  activeDropdown: string | null;
  setActiveDropdown: (value: string | null) => void;
}

export default function DesktopMenu({
  activeDropdown,
  setActiveDropdown,
}: DesktopMenuProps) {
  const hoverTimeout = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
      }
    };
  }, []);

  const handleMouseEnterItem = (dropdownKey: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = window.setTimeout(() => {
      setActiveDropdown(dropdownKey);
    }, 200); // Apple-like: respuesta rápida
  };

  const handleMouseLeaveItem = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
  };

  return (
    <div className="relative z-30">
      <nav
        className="hidden md:flex items-center space-x-10"
        onMouseEnter={() => {
          if (activeDropdown) {
            setActiveDropdown(activeDropdown);
          }
        }}
      >
        {menuItems.map((item) => {
          let dropdownKey = "";
          switch (item.name) {
            case "Páginas web":
              dropdownKey = "web";
              break;
            case "Aplicaciones móviles":
              dropdownKey = "app";
              break;

            // case "E-commerce":
            //   dropdownKey = "ecom";
            //   break;

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
                className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-xs ${
                  activeDropdown === dropdownKey
                    ? "font-semibold text-white dark:text-white"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
