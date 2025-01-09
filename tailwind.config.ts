import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0)", // Posición inicial y final
          },
          "50%": {
            transform: "translateY(-10px)", // Flotación hacia arriba
          },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite", // Animación suave y repetitiva
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
