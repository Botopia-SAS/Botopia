import { useState } from "react";
import { useTranslations } from "next-intl";

export default function LanguageDropdown({
  currentLocale,
  onChange,
}: {
  currentLocale: string;
  onChange: (code: string) => void;
}) {
  const t = useTranslations("Header.languageSwitcher.languages");
  const [open, setOpen] = useState(false);

  const LANGUAGES = [
    { code: "es", name: t("es"), label: "ES" },
    { code: "en", name: t("en"), label: "EN" },
    { code: "pt", name: t("pt"), label: "PT" },
  ];

  const selected =
    LANGUAGES.find((l: { code: string }) => l.code === currentLocale) ||
    LANGUAGES[0];

  return (
    <div className="relative flex items-center">
      <button
        className="flex items-center space-x-2 focus:outline-none px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        onClick={() => setOpen((o) => !o)}
        aria-label={t("label")}
        tabIndex={0}
      >
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          {selected.label}
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <div
          className="absolute left-0 bg-white dark:bg-black shadow-lg rounded-lg z-50 min-w-[100px] border border-gray-200 dark:border-gray-700"
          style={{ marginTop: "80px" }}
        >
          {LANGUAGES.map(
            (lang: { code: string; name: string; label: string }) => (
              <button
                key={lang.code}
                className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => {
                  setOpen(false);
                  onChange(lang.code);
                }}
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-3">
                  {lang.label}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {lang.name}
                </span>
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
