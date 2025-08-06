import "./globals.css";
import Footer from "../../components/footer";
import { getMessages } from "next-intl/server";
import IntlProvider from "@/components/IntlProvider";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ThemeProvider } from "next-themes";
import HeaderWrapper from "@/components/header/HeaderWrapper";
import Script from "next/script";

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
      <head>
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "spvl4i21z4");
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <IntlProvider locale={locale} messages={messages}>
            <HeaderWrapper />
            <main>{children}</main>
            <WhatsAppButton />
          </IntlProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
