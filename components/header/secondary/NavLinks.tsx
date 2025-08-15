import Link from "next/link";

export default function NavLinks() {
  // Enlaces con color de texto suavizado en modo claro
  return (
    <>
      <Link
        href="about"
        className="text-sm text-gray-700 dark:text-gray-300 hover:text-[#411E8A] dark:hover:text-white font-semibold transition-colors"
      >
        Nosotros
      </Link>
      <Link
        href="#"
        className="text-sm text-gray-700 dark:text-gray-300 hover:text-[#411E8A] dark:hover:text-white font-semibold transition-colors"
      >
        ¿Por qué Botopia?
      </Link>
    </>
  );
}
