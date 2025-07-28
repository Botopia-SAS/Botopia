"use client";

import { useState } from "react";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { Menu, X, Search } from "lucide-react";
import SearchBar from "./SearchBar";

interface MainHeaderProps {
  activeDropdown: string | null;
  setActiveDropdown: (value: string | null) => void;
}

export default function MainHeader({
  activeDropdown,
  setActiveDropdown,
}: MainHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Evita que el buscador se cierre al hacer click dentro del área de búsqueda
  const handleSearchAreaMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    // Solo cierra si el mouse realmente sale del área del buscador
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setShowSearch(false);
    }
  };

  return (
    <>
      {/* Header principal */}
      <header
        className={`bg-white dark:bg-black backdrop-blur-md fixed top-0 left-0 right-0 z-50 transition-colors ${
          activeDropdown ? "shadow-md" : ""
        }`}
      >
        <div className="container mx-auto px-4 flex items-center h-14 whitespace-nowrap">
          {/* Logo alineado verticalmente */}
          <div className="flex items-center h-full mr-8">
            <Logo />
          </div>
          {/* Menú principal */}
          <div className="flex-1 flex items-center">
            <DesktopMenu
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
            />
          </div>
          {/* Buscador estilo Apple: se abre/cierra con hover/click */}
          <div className="flex items-center ml-8 relative">
            <button
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              aria-label="Abrir buscador"
              tabIndex={0}
              onClick={() => setShowSearch(true)}
              onMouseEnter={() => setShowSearch(true)}
            >
              <Search className="h-5 w-5 text-gray-400" />
            </button>
          </div>
          {/* Menú móvil */}
          <div className="md:hidden flex items-center ml-2">
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
        {/* Buscador full width estilo Apple */}
        {showSearch && (
          <div
            className="fixed top-14 left-0 right-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700 shadow-lg flex justify-center items-center"
            style={{ minHeight: "100px" }}
            onMouseLeave={handleSearchAreaMouseLeave}
          >
            <div className="w-full max-w-3xl px-8 py-10">
              <SearchBar autoFocus />
            </div>
          </div>
        )}
      </header>
    </>
  );
}
