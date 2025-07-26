"use client";

import { useState } from "react";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { Search, Menu, X } from "lucide-react";

interface MainHeaderProps {
  activeDropdown: string | null;
  setActiveDropdown: (value: string | null) => void;
}

export default function MainHeader({
  activeDropdown,
  setActiveDropdown,
}: MainHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Header principal */}
      <header
        className={`bg-white dark:bg-black backdrop-blur-md fixed top-0 left-0 right-0 z-50 transition-colors ${
          activeDropdown ? "shadow-md" : ""
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-14">
          <Logo />
          <DesktopMenu
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />
          <div className="hidden md:flex items-center">
            <button
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </header>
    </>
  );
}
