import "./globals.css";
import Footer from "../../components/footer";
import { getMessages } from "next-intl/server";
import IntlProvider from "@/components/IntlProvider";
import GiveawayPopup from "@/components/popup";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ThemeProvider } from "next-themes";
import HeaderWrapper from "@/components/header/HeaderWrapper";
import Script from "next/script";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Botopia - Transformación Digital con IA | Desarrollo Web y Apps",
  description:
    "Empresa líder en transformación digital. Desarrollamos páginas web, aplicaciones móviles, chatbots con IA para WhatsApp, automatización de procesos y diseño UX/UI. Soluciones tecnológicas personalizadas para empresas.",
  keywords:
    "desarrollo web, aplicaciones móviles, inteligencia artificial, chatbots WhatsApp, automatización procesos, diseño UX UI, transformación digital, desarrollo software, Botopia, tecnología empresarial",
  authors: [{ name: "Botopia Technology S.A.S." }],
  openGraph: {
    title: "Botopia - Transformación Digital con Inteligencia Artificial",
    description:
      "Convertimos tus ideas en productos digitales excepcionales. Desarrollo web, apps móviles, IA, chatbots y automatización.",
    url: "https://botopia.tech",
    siteName: "Botopia",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BotopiaSAS",
    creator: "@BotopiaSAS",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const messages = await getMessages({ locale });
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {gtmId ? (
          <Script id="gtm-base" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
        ) : null}
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
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
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
