"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
// Menú principal definido localmente para traducción dinámica
import { useTranslations } from "next-intl";

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
        {(() => {
          const t = useTranslations();
          const menuItems = [
            { key: "menu.pages", href: "#", dropdown: "web" },
            { key: "menu.apps", href: "#", dropdown: "app" },
            // { key: "menu.ecommerce", href: "#", dropdown: "ecom" },
            { key: "menu.ai", href: "#", dropdown: "ia" },
            { key: "menu.automation", href: "#", dropdown: "auto" },
            { key: "menu.marketing", href: "#", dropdown: "marketing" },
            { key: "menu.engineering", href: "#", dropdown: "engineering" },
          ];
          return menuItems.map((item) => (
            <div
              key={item.key}
              onMouseEnter={() =>
                item.dropdown && handleMouseEnterItem(item.dropdown)
              }
              onMouseLeave={handleMouseLeaveItem}
              className="relative px-2 py-2"
            >
              <Link
                href={item.href}
                className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-xs ${
                  activeDropdown === item.dropdown
                    ? "font-semibold text-white dark:text-white"
                    : ""
                }`}
              >
                {t(item.key)}
              </Link>
            </div>
          ));
        })()}
      </nav>
    </div>
  );
}
