import Hero from '@/components/hero';
import Clientes from '@/components/customers';
import Footer from '@/components/footer';
import Servicios from '@/components/services'; // Importa el componente Servicios

export default function Home() {
  return (
    <>
      <Hero />
      <Clientes />
      <Servicios />
      <Footer />
    </>
  );
}
