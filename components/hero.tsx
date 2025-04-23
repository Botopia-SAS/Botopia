"use client"

import { useTheme } from 'next-themes'
import { useState, useEffect, useRef } from 'react'

export default function Hero() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const phrasesRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const hasVideoStarted = useRef(false)   // ✅ Solo una vez declarado

  const phrases = [
    "Tecnología innovadora para tu negocio.",
    "Soluciones tecnológicas avanzadas.",
    "Experiencias digitales extraordinarias.",
    "Transformando ideas en realidad.",
  ]

  // Esperar a que el componente esté montado en cliente
  useEffect(() => {
    setMounted(true)
  }, [])

  const isElementInViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect()
    return rect.top <= window.innerHeight && rect.bottom >= 0
  }

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      const phraseContainer = phrasesRef.current
      const videoElement = videoRef.current

      if (!phraseContainer || !videoElement) return

      // 🚨 Reproducir el video SOLO una vez
      if (!hasVideoStarted.current) {
        videoElement.play().catch(err => console.log("Error al reproducir video:", err))
        hasVideoStarted.current = true
      }

      // Control del scroll de frases
      if (isElementInViewport(phraseContainer)) {
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
    return () => {
      document.removeEventListener("wheel", handleScroll)
    }
  }, [])

  // ⛔️ Evitamos renderizar hasta que esté montado (para evitar hydration issues)
  if (!mounted) return <div className="h-[60vh]"></div>

  const videoSrc = resolvedTheme === 'dark' ? '/Hero/HeroNegro.mp4' : '/Hero/HeroBlanco.mp4'

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <div className="md:h-[150vh] h-[75vh]">
        <div className="flex flex-col h-screen lg:h-full">
          {/* Frases */}
          <div
            ref={phrasesRef}
            className="w-full md:h-1/3 overflow-y-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {phrases.map((phrase, index) => (
              <section key={index} className="snap-start flex items-center justify-center h-full px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">
                  {phrase}
                </h1>
              </section>
            ))}
          </div>

          {/* Video dinámico */}
          <div className="relative w-full h-[50vh] md:h-[80vh] flex justify-center">
  <video
    ref={videoRef}
    key={videoSrc}
    src={videoSrc}
    muted
    playsInline
    className="absolute top-[-80px] object-cover max-w-7xl w-full h-auto"
    style={{ pointerEvents: "none" }}
  />
</div>


        </div>
      </div>
    </div>
  )
}
