import Hero from "@/components/hero";
import Clientes from "@/components/customers";
import Footer from "@/components/footer";
import Servicios from "@/components/services"; // Importa el componente Servicios
import { projectTraceSource } from "next/dist/build/swc/generated-native";
import Portfolio from "@/components/portafolio";
import GiveawayPopup from "@/components/popup";

export default function Home() {
  return (
    <>
      <GiveawayPopup /> {/* Popup del Giveaway */}
      <Hero />
      <Clientes />
      <Servicios />
      <Portfolio />
    </>
  );
}
