import FiltroServicios from "./filterservices";
import TarjetaServicio from "./servicetarjet";
import { useTranslations } from "next-intl";

export default function Servicios() {
  const t = useTranslations("ServiciosUI");

  // Convertir los filtros en un array traducido
  const filters = Object.keys(t.raw("filters")).map((key) => ({
    key,
    label: t(`filters.${key}`),
  }));

  // Convertir los servicios en un array traducido
  const services = Object.keys(t.raw("services")).map((key) => ({
    title: t(`services.${key}.title`),
    category: t(`services.${key}.category`),
    description: t(`services.${key}.description`),
    icon: t.raw(`services.${key}.icon`),
  }));

  return (
    <section className="bg-gradient-to-b from-purple-800 to-purple-300 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-8">{t("title")}</h2>
        {/* Filtros */}
        <FiltroServicios filters={filters} />
        {/* Servicios con Scroll Horizontal */}
        <div className="w-full overflow-x-auto py-12">
          <div className="inline-flex space-x-4">
            {services.map((service, index) => (
              <TarjetaServicio key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
