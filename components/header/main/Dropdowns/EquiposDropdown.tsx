import BaseDropdown from "./BaseDropdown";
import { useTranslations } from "next-intl";

export default function EquiposDropdown() {
  const t = useTranslations("Dropdowns.EquiposDropdown");
  return (
    <BaseDropdown
      mainTitle={t("mainTitle")}
      mainItems={[
        t("categories.0"),
        t("categories.1"),
        t("categories.2"),
        t("categories.3"),
        t("categories.4"),
      ]}
      secondaryColumns={[
        {
          title: t("servicesTitle"),
          items: [
            t("services.0"),
            t("services.1"),
            t("services.2"),
            t("services.3"),
            t("services.4"),
          ],
        },
      ]}
      imageSrc="/Header6.png"
      imageAlt={t("imageAlt")}
    />
  );
}
