import "./globals.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { getMessages } from "next-intl/server";
import IntlProvider from "@/components/IntlProvider";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Botopia",
  description: "Transformación Digital para el Futuro",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // 🔹 Verifica que params.locale no esté vacío
  if (!params.locale) {
    console.error("⚠ params.locale está vacío. Puede haber un error en la ruta.");
  }

  // 🔹 Obtiene los mensajes de traducción
  const messages = await getMessages({ locale: params.locale });

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body>
        <IntlProvider locale={params.locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </IntlProvider>
      </body>
    </html>
  );
}
