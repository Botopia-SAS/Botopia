import Hero from "@/components/hero";
import Clientes from "@/components/customers";
import Footer from "@/components/footer";
import Servicios from "@/components/services"; // Importa el componente Servicios
import { projectTraceSource } from "next/dist/build/swc/generated-native";
import Portfolio from "@/components/portafolio";

export default function Home() {
  return (
    <>
      <Hero />
      <Clientes />
      <Servicios />
      <Portfolio />
    </>
  );
}
