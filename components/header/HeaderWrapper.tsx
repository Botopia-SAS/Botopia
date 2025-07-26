"use client";

import { useEffect, useRef, useState } from "react";
import MainHeader from "./main";
import SecondaryHeader from "./secondary";
import DropdownContent from "./main/Dropdowns/DropdownContent";
import { motion, AnimatePresence } from "framer-motion";

export default function HeaderWrapper() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (activeDropdown) {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      setShowDropdown(true);
    } else {
      hideTimeoutRef.current = setTimeout(() => {
        setShowDropdown(false);
      }, 1600); // Match duración de cierre
    }
  }, [activeDropdown]);

  const mainHeaderTransitionClass = hasScrolled
    ? "duration-[700ms] ease-[cubic-bezier(0.4,0.0,0.2,1)]"
    : "duration-[300ms] ease-[cubic-bezier(0.32,0,0.67,0)]";

  return (
    <>
      {/* Main Header */}
      <div
        className={`
          fixed inset-x-0 z-50 group
          transition-all ${mainHeaderTransitionClass} will-change-[background,box-shadow,opacity,transform,filter]
          ${
            hasScrolled
              ? "top-[-10%] opacity-90 -translate-y-2 blur-[1px]"
              : "top-0 opacity-100 translate-y-0 blur-0"
          }
        `}
        style={{
          transitionProperty:
            "background, box-shadow, opacity, transform, filter, border-color, backdrop-filter",
          backdropFilter: hasScrolled
            ? "blur(6px) saturate(1.02) brightness(0.98)"
            : "blur(10px) saturate(1.08) brightness(1.01)",
        }}
        tabIndex={0}
      >
        <div className="bg-black/90 border-b border-white/10 transition-all duration-300 ease-[cubic-bezier(0.32,0,0.67,0)]">
          <MainHeader
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />
        </div>
      </div>

      {/* Secondary Header */}
      <div
        className={`
          fixed inset-x-0 z-40
          transition-all duration-500 ease-[cubic-bezier(0.32,0,0.67,0)] will-change-[transform,opacity]
          ${
            hasScrolled
              ? "top-0 opacity-100 translate-y-0"
              : "top-12 opacity-100 translate-y-0"
          }
        `}
        style={{
          transitionProperty:
            "background, box-shadow, opacity, transform, filter, border-color, backdrop-filter",
          backdropFilter: hasScrolled
            ? "blur(4px) saturate(1.02) brightness(0.99)"
            : "blur(8px) saturate(1.06) brightness(1.01)",
        }}
      >
        <div className="bg-black/80 border-b border-white/10">
          <SecondaryHeader />
        </div>
      </div>

      {/* Dropdown - Apple-style animación al cerrar */}
      <AnimatePresence>
        {showDropdown && (
          <>
            {/* Overlay oscuro detrás del dropdown */}
            <motion.div
              key="dropdown-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.32 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
              className="fixed inset-0 z-20 bg-black pointer-events-none"
              style={{ backdropFilter: "blur(2px)" }}
            />
            <motion.div
              key="dropdown-container"
              initial={{ opacity: 0, y: -32, scaleY: 0.98 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{
                opacity: 0,
                y: 0,
                scaleY: 0.95,
              }}
              transition={{
                opacity: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
                y: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
                scaleY: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
              }}
              className="fixed left-0 right-0 z-30 origin-top flex justify-center pointer-events-auto"
              style={{ top: activeDropdown ? 64 : 56 }}
              onMouseLeave={() => {
                setActiveDropdown(null);
              }}
              onMouseEnter={() => {
                if (hideTimeoutRef.current)
                  clearTimeout(hideTimeoutRef.current);
              }}
            >
              <motion.div
                className="w-screen max-w-none px-0 py-4 bg-white dark:bg-black border-t border-white/10 shadow-2xl rounded-b-2xl backdrop-blur-xl backdrop-saturate-150 transition-all pointer-events-auto"
                initial={{ opacity: 0, y: 24, scaleY: 0.98 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{
                  opacity: 0,
                  y: 0,
                  scaleY: 0.95,
                }}
                transition={{
                  opacity: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
                  y: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
                  scaleY: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
                }}
              >
                <DropdownContent activeDropdown={activeDropdown as any} />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
