import './globals.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server';

export const metadata = {
  title: 'Botopia',
  description: 'Transformación Digital para el Futuro',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={ messages }>
      <html lang="es">
        <body className="bg-gray-100">
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
