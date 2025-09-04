import { useState } from "react";
import Image from "next/image";
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
    { code: "es", name: t("es"), flag: "/icons/es_flag.png" },
    { code: "en", name: t("en"), flag: "/icons/us_flag.png" },
    { code: "pt", name: t("pt"), flag: "/icons/br_flag.png" },
  ];

  const selected =
    LANGUAGES.find((l: { code: string }) => l.code === currentLocale) ||
    LANGUAGES[0];

  return (
    <div className="relative flex items-center">
      <button
        className="flex items-center space-x-2 focus:outline-none"
        onClick={() => setOpen((o) => !o)}
        aria-label={t("label")}
        tabIndex={0}
      >
        <span className="w-6 h-6 rounded-full overflow-hidden border border-gray-300 dark:border-gray-600 flex items-center justify-center">
          <Image
            src={selected.flag}
            alt={selected.name}
            width={24}
            height={24}
            style={{ objectFit: "cover" }}
          />
        </span>
      </button>
      {open && (
        <div
          className="absolute left-0 bg-white dark:bg-black shadow-lg rounded-lg z-50 min-w-[120px] border border-gray-200 dark:border-gray-700"
          style={{ marginTop: "80px" }}
        >
          {LANGUAGES.map(
            (lang: { code: string; name: string; flag: string }) => (
              <button
                key={lang.code}
                className="flex items-center w-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => {
                  setOpen(false);
                  onChange(lang.code);
                }}
              >
                <span className="w-6 h-6 rounded-full overflow-hidden border border-gray-300 dark:border-gray-600 flex items-center justify-center mr-2">
                  <Image
                    src={lang.flag}
                    alt={lang.name}
                    width={24}
                    height={24}
                    style={{ objectFit: "cover" }}
                  />
                </span>
                <span className="text-sm text-gray-700 dark:text-gray-300">
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
