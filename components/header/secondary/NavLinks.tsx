import Link from "next/link";
import { useLocale } from "next-intl";

export default function NavLinks() {
  const locale = useLocale();
  
  // Enlaces con color de texto suavizado en modo claro
  return (
    <>
      <Link
        href={`/${locale}/about`}
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
