'use client'
import { useRef, useEffect } from "react"
import MainHeader from "@/components/main-header"
import SecondaryHeader from "@/components/secondary-header"
import FeatureSection from "@/components/feature-section"

export default function Hero() {
  const phrases = [
    "Tecnología innovadora para tu negocio.",
    "Soluciones tecnológicas avanzadas.",
    "Experiencias digitales extraordinarias.",
    "Transformando ideas en realidad.",
  ]

  const phrasesRef = useRef<HTMLDivElement>(null)

  // Verifica si un elemento está visible en el viewport
  const isElementInViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect()
    return rect.top <= window.innerHeight && rect.bottom >= 0
  }

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      const phraseContainer = phrasesRef.current
      if (!phraseContainer) return

      // Solo interceptar scroll si el container de frases es visible
      if (isElementInViewport(phraseContainer)) {
        const atTop = phraseContainer.scrollTop === 0
        const atBottom =
          phraseContainer.scrollHeight - phraseContainer.scrollTop ===
          phraseContainer.clientHeight

        // Scroll hacia abajo: primero frases, luego página
        if (e.deltaY > 0 && !atBottom) {
          e.preventDefault()
          phraseContainer.scrollTop += e.deltaY
        }
        // Scroll hacia arriba: primero frases, luego página global
        else if (e.deltaY < 0 && !atTop) {
          e.preventDefault()
          phraseContainer.scrollTop += e.deltaY
        }
      }
      // Si no es visible, dejar que la página scrollee normalmente
    }

    document.addEventListener("wheel", handleScroll, { passive: false })
    return () => {
      document.removeEventListener("wheel", handleScroll)
    }
  }, [])

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <div className="md:h-[150vh] h-[75vh]">
        <div className="flex flex-col h-screen lg:h-full">
          {/* Contenedor de frases */}
          <div
            ref={phrasesRef}
            className="w-full md:h-1/3 overflow-y-auto"
            style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE
            }}
          >
            {phrases.map((phrase, index) => (
              <section
                key={index}
                className="snap-start flex items-center justify-center h-full px-4"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">
                  {phrase}
                </h1>
              </section>
            ))}
          </div>

          {/* Imagen que no intercepta el scroll */}
          <div className="md:absolute md:bottom-0 left-0 w-full" style={{ height: "50vh" }}>
            <img
              src="/images/portfolio-hero.png"
              alt="Portfolio de Botopia"
              className="object-contain w-auto h-auto p-4"
              style={{ pointerEvents: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}