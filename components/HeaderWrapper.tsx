"use client"

import { useEffect, useState } from "react"
import MainHeader from "./main-header"
import SecondaryHeader from "./secondary-header"

export default function HeaderWrapper() {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div
        className={`
          fixed inset-x-0 top-0
          left-0 right-0 z-50
          transition-all duration-500 ease-in-out
        ${
          hasScrolled
            ? "opacity-0 -translate-y-4 blur-sm scale-[0.98] pointer-events-none"
            : "opacity-100 translate-y-0 blur-0 scale-100"
        }`}
      >
        <MainHeader />
      </div>

      <div
        className={`
          fixed inset-x-0 z-40
          transition-all duration-300
           ${
          hasScrolled ? "top-0" : "top-16"
        } left-0 right-0 z-40`}
      >
        <SecondaryHeader />
      </div>
    </>
  )
}
