import BaseDropdown from "./BaseDropdown";
import { useTranslations } from "next-intl";

export default function WebDropdown() {
  const t = useTranslations("Dropdowns.WebDropdown");
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
        t("categories.6"),
      ]}
      secondaryColumns={[
        {
          title: t("servicesTitle"),
          items: [t("services.0"), t("services.1"), t("services.2")],
        },
        {
          title: t("moreTitle"),
          items: [t("more.0"), t("more.1"), t("more.2")],
        },
      ]}
      imageSrc="/Header1.png"
      imageAlt={t("imageAlt")}
    />
  );
}
