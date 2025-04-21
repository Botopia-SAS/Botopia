"use client"

import { Typewriter } from "react-simple-typewriter"
import { useEffect, useState } from "react"

interface TypewriterHeroProps {
  phrases: string[]
}

export default function TypewriterHero({ phrases }: TypewriterHeroProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 300)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="text-center">
      <h1
        className={`text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 transition-opacity duration-700 ease-in-out ${
          show ? "opacity-100" : "opacity-0"
        }`}
        style={{ fontFamily: `'DM Serif Display', serif` }}
      >
        <span>
          <Typewriter
            words={phrases}
            loop={0}
            cursor={false}
            typeSpeed={30} // más lento y suave
            deleteSpeed={20}
            delaySpeed={2500}
          />
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
        Descubre cómo nuestras soluciones pueden transformar tu negocio y llevarlo al siguiente nivel.
      </p>
    </div>
  )
}
