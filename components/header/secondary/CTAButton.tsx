import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MessageCircle } from "lucide-react";

const LANGUAGES = [
  { code: "es", name: "Español", label: "ES" },
  { code: "en", name: "English", label: "EN" },
  { code: "pt", name: "Português", label: "PT" },
];

const CTAButton = () => {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const handleChangeLanguage = (code: string) => {
    const path = window.location.pathname.replace(/^\/(es|en|pt)/, `/${code}`);
    router.push(path);
    setShowLangDropdown(false);
  };

  const selectedLanguage =
    LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];

  return (
    <div className="flex items-center gap-2 relative">
      {/* Language dropdown trigger - solo en mobile */}
      <div className="md:hidden flex items-center">
        <button
          className="flex items-center px-2 py-1 rounded hover:bg-purple-100 dark:hover:bg-purple-900"
          onClick={() => setShowLangDropdown((v) => !v)}
          aria-label={t("Header.languageSwitcher.languages.label")}
        >
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {selectedLanguage.label}
          </span>
        </button>
        {showLangDropdown && (
          <div className="absolute left-0 top-10 bg-black text-white rounded shadow-lg z-50 w-32">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleChangeLanguage(lang.code)}
                className={`flex items-center justify-between w-full px-3 py-2 hover:bg-purple-700 ${
                  locale === lang.code ? "font-bold" : ""
                }`}
              >
                <span className="text-sm font-medium">{lang.label}</span>
                <span className="text-xs text-gray-400">{lang.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <Link
        href={`/${locale}/contactUs`}
        className="px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 flex items-center gap-2 bg-[#411E8A] text-white hover:bg-[#5a2db3] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
        style={{ boxShadow: "0 2px 12px 0 rgba(65,30,138,0.10)" }}
      >
        <MessageCircle className="w-4 h-4 mr-1" />
        {t("ctaButton.label")}
      </Link>
    </div>
  );
};

export default CTAButton;
