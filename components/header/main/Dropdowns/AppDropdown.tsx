import BaseDropdown from "./BaseDropdown";
import { useTranslations } from "next-intl";

export default function AppDropdown() {
  const t = useTranslations("Dropdowns.AppDropdown");
  return (
    <BaseDropdown
      mainTitle={t("mainTitle")}
      mainItems={[
        t("categories.0"),
        t("categories.1"),
        t("categories.2"),
        t("categories.3"),
      ]}
      secondaryColumns={[
        {
          title: t("servicesTitle"),
          items: [t("services.0"), t("services.1"), t("services.2")],
        },
      ]}
      imageSrc="/Header2.png"
      imageAlt={t("imageAlt")}
    />
  );
}
