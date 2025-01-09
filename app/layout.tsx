import './globals.css';
import Header from '../components/header';
import Footer from '../components/footer';

export const metadata = {
  title: 'Botopia',
  description: 'Transformación Digital para el Futuro',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
