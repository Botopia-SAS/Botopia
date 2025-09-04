"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const bannerTypes = ["visionpro", "whatsapp", "engineering"];
const bannerVariants: Record<string, "dark" | "light"> = {
  visionpro: "dark",
  whatsapp: "light",
  engineering: "dark",
};

const BannerSection = () => {
  const t = useTranslations("BannerSection");
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerTypes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-2 md:py-4 bg-cover bg-center bg-white dark:bg-black transition-colors duration-300 md:mt-[-10%] mb:pb-0 md:mb-0 mt-[-20%]">
      <div className="relative w-full max-w-7xl overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentBanner * 100}%)`,
          }}
        >
          {bannerTypes.map((type, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex justify-center"
            >
              <div
                className={
                  `rounded-2xl flex flex-col md:flex-row items-center justify-between p-2 md:p-4 shadow-none w-[90%] max-w-6xl transition-colors duration-300 ` +
                  (bannerVariants[type] === "dark"
                    ? "bg-black bg-opacity-90 text-white dark:bg-black dark:text-white"
                    : "bg-[#F9E8D9] bg-opacity-90 text-gray-900 dark:bg-[#23232a] dark:text-gray-100")
                }
              >
                {/* TÍTULO y SUBTÍTULO */}
                <div className="flex-1 space-y-1 text-center md:text-left order-1 md:ml-10">
                  <h2
                    className={
                      `text-base md:text-2xl font-extrabold leading-tight ` +
                      (bannerVariants[type] === "dark"
                        ? "text-purple-400 dark:text-purple-300"
                        : "text-[#1B365D] dark:text-purple-300")
                    }
                  >
                    {t(`${type}.title`)}
                  </h2>
                  <p
                    className={
                      `whitespace-pre-line text-xs md:text-base ` +
                      (bannerVariants[type] === "dark"
                        ? "text-white dark:text-gray-200"
                        : "text-gray-900 dark:text-gray-100")
                    }
                  >
                    {t(`${type}.subtitle`)}
                    {t(`${type}.highlight`, { default: "" }) && (
                      <span className="font-bold text-purple-400 dark:text-purple-400">
                        {" "}
                        {t(`${type}.highlight`)}
                      </span>
                    )}
                  </p>
                </div>
                {/* IMAGEN */}
                <div className="flex-1 flex justify-center mt-2 md:mt-0 order-2">
                  <img
                    src={t.raw(`${type}.image`)}
                    alt={type}
                    className="max-h-16 md:max-h-24 object-contain"
                  />
                </div>
                {/* NOTE: Solo debajo en móvil */}
                {t(`${type}.note`, { default: "" }) && (
                  <div className="order-3 mt-1 md:mt-0">
                    <p className="text-xs italic text-gray-400 dark:text-gray-300 text-center md:text-left">
                      {t(`${type}.note`)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
