// 🚫 Este componente es gestionado por el equipo de autenticación. NO MODIFICAR.

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function LoginButton() {
  const t = useTranslations();
  // Botón login con color de texto suavizado en modo claro
  return (
    <Link
      href="https://app.botopia.online/login"
      className="text-sm text-gray-700 dark:text-gray-300 hover:text-[#411E8A] dark:hover:text-white font-semibold transition-colors"
    >
      {t("Header.loginButton.label")}
    </Link>
  );
}
