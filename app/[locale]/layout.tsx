import "./globals.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { getMessages } from "next-intl/server";
import IntlProvider from "@/components/IntlProvider";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeaderWrapper from "@/components/HeaderWrapper";

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

  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <IntlProvider
          locale={locale}
          messages={messages}
        >

          <HeaderWrapper />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </IntlProvider>
      </body>
    </html>
  );
}
