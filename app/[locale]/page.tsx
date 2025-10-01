"use client";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import ServicesCards from "@/components/ServicesCards";
import { Clientes } from "@/components/clientes";
import Proyectos from "@/components/proyectos";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesCards />
      <Clientes />
      <Proyectos />
      <Footer />
    </>
  );
}
