"use client";

import { useEffect, useState } from "react";
import MainHeader from "./main";
import SecondaryHeader from "./secondary";

export default function HeaderWrapper() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // Estado global del dropdown

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Overlay cuando dropdown está activo */}
      {activeDropdown && (
        <div className="fixed inset-0 top-16 bg-white/40 backdrop-blur-sm z-40 transition-opacity duration-300"></div>
      )}

      {/* Main Header */}
      <div
        className={`
          fixed inset-x-0 top-0 z-50
          transition-all duration-500 ease-in-out
          ${
            hasScrolled
              ? "opacity-0 -translate-y-4 blur-sm scale-[0.98] pointer-events-none"
              : "opacity-100 translate-y-0 blur-0 scale-100"
          }
        `}
      >
        <MainHeader
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
        />
      </div>

      {/* Secondary Header */}
      <div
        className={`
          fixed inset-x-0 z-40 transition-all duration-300
          ${hasScrolled ? "top-0" : "top-16"}
        `}
      >
        <SecondaryHeader />
      </div>
    </>
  );
}
