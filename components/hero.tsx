"use client"
import { useTheme } from 'next-themes'
import { useState, useEffect, useRef } from 'react'

export default function Hero() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const phrases = [
    "Tecnología innovadora para tu negocio.",
    "Soluciones tecnológicas avanzadas.",
    "Experiencias digitales extraordinarias.",
    "Transformando ideas en realidad.",
  ]

  const phrasesRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const hasVideoStarted = useRef(false)

  useEffect(() => setMounted(true), [])

  const isElementInViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect()
    return rect.top <= window.innerHeight && rect.bottom >= 0
  }

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      const phraseContainer = phrasesRef.current
      const videoElement = videoRef.current

      if (!phraseContainer || !videoElement) return

      // 🎯 Inicia el video SOLO UNA VEZ al hacer scroll
      if (!hasVideoStarted.current) {
        videoElement.play().catch(err => console.log("Error al reproducir video:", err))
        hasVideoStarted.current = true
      }

      // Scroll controlado SOLO en desktop
      if (window.innerWidth >= 768 && isElementInViewport(phraseContainer)) {
        const atTop = phraseContainer.scrollTop === 0
        const atBottom =
          phraseContainer.scrollHeight - phraseContainer.scrollTop ===
          phraseContainer.clientHeight

        if (e.deltaY > 0 && !atBottom) {
          e.preventDefault()
          phraseContainer.scrollTop += e.deltaY
        } else if (e.deltaY < 0 && !atTop) {
          e.preventDefault()
          phraseContainer.scrollTop += e.deltaY
        }
      }
    }

    document.addEventListener("wheel", handleScroll, { passive: false })
    return () => document.removeEventListener("wheel", handleScroll)
  }, [])

  if (!mounted) return null

  const videoSrc = resolvedTheme === 'dark' ? '/Hero/HeroNegro1.mp4' : '/Hero/HeroBlanco4.mp4'

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white dark:bg-black py-8">

      {/* Desktop: Scroll de frases */}
      <div
        ref={phrasesRef}
        className="hidden md:block w-full md:h-[30vh] overflow-y-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {phrases.map((phrase, index) => (
          <section key={index} className="snap-start flex items-center justify-center h-full px-4">
            <h1 className="text-5xl font-bold text-center text-black dark:text-white">
              {phrase}
            </h1>
          </section>
        ))}
      </div>

      {/* Mobile: Frase fija */}
      <div className="block md:hidden px-4 text-center mt-24">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Tecnología innovadora para tu negocio.
        </h1>
      </div>


      {/* Multimedia */}
      <div className="relative w-full flex justify-center mt-6">
        {/* 🎬 Video solo desktop */}
        <video
          ref={videoRef}
          key={videoSrc}
          src={videoSrc}
          muted
          playsInline
          className="hidden md:block max-w-7xl w-full h-auto object-contain"
          style={{ pointerEvents: "none" }}
        />

        {/* Imagen solo móvil */}
        <img
          src="/Hero/Responsive.svg"
          alt="Hero Responsive"
          className="block md:hidden w-[85%] max-w-sm"
        />
      </div>
    </div>
  )
}
