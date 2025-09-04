import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import LanguageDropdown from "./LanguageDropdown";
import { useRouter } from "next/navigation";

export default function NavLinks() {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("Header.menu");

  const handleChangeLanguage = (code: string) => {
    const path = window.location.pathname.replace(`/${locale}`, `/${code}`);
    router.push(path);
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center" style={{ height: "24px" }}>
        <span style={{ marginRight: "6px" }}>
          <LanguageDropdown
            currentLocale={locale}
            onChange={handleChangeLanguage}
          />
        </span>
        <Link
          href={`/${locale}/about`}
          className="text-sm text-gray-700 dark:text-gray-300 hover:text-[#411E8A] dark:hover:text-white font-semibold transition-colors ml-2"
          style={{ display: "flex", alignItems: "center", height: "24px" }}
        >
          {t("about")}
        </Link>
      </div>
      <Link
        href="#"
        className="text-sm text-gray-700 dark:text-gray-300 hover:text-[#411E8A] dark:hover:text-white font-semibold transition-colors"
      >
        {t("home")}
      </Link>
    </div>
  );
}
