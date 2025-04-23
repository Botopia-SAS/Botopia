import Link from "next/link";

export default function NavLinks() {
  return (
    <>
      <Link
        href="#"
        className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        Nosotros
      </Link>
      <Link
        href="#"
        className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        ¿Por qué Botopia?
      </Link>
    </>
  );
}
