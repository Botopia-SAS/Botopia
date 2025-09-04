import BaseDropdown from "./BaseDropdown";
import { useTranslations } from "next-intl";

export default function AutoDropdown() {
  const t = useTranslations("Dropdowns.AutoDropdown");
  return (
    <BaseDropdown
      mainTitle={t("mainTitle")}
      mainItems={[t("categories.0"), t("categories.1"), t("categories.2")]}
      secondaryColumns={[
        {
          title: t("servicesTitle"),
          items: [
            t("services.0"),
            t("services.1"),
            t("services.2"),
            t("services.3"),
          ],
        },
      ]}
      imageSrc="/Header4.png"
      imageAlt={t("imageAlt")}
    />
  );
}
