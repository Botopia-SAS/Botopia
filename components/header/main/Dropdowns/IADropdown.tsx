import BaseDropdown from "./BaseDropdown";
import { useTranslations } from "next-intl";

export default function IADropdown() {
  const t = useTranslations("Dropdowns.IADropdown");
  return (
    <BaseDropdown
      mainTitle={t("mainTitle")}
      mainItems={[
        t("categories.0"),
        t("categories.1"),
        t("categories.2"),
        t("categories.3"),
        t("categories.4"),
        t("categories.5"),
      ]}
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
      imageSrc="/Header3.png"
      imageAlt={t("imageAlt")}
    />
  );
}
