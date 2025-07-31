import Link from "next/link";

export default function CTAButton() {
  // Botón con soporte para modo claro y oscuro
  return (
    <Link
      href="/es/contactUs"
      className="px-4 py-2 rounded-md text-sm inline-block font-semibold transition-all duration-300
        bg-[#411E8A] text-white
        hover:bg-[#5a2db3] hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
      style={{ boxShadow: "0 2px 12px 0 rgba(65,30,138,0.10)" }}
    >
      Hablemos
    </Link>
  );
}
