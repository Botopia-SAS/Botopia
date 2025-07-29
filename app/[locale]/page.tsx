"use client";
import Hero from "@/components/hero";
import BannerSection from "@/components/BannerSection";
import Footer from "@/components/footer";
import ServicesCards from "@/components/ServicesCards";
import { Clientes } from "@/components/clientes";
import Proyectos from "@/components/proyectos";

export default function Home() {
  return (
    <>
      <Hero />
      <BannerSection />
      <ServicesCards />
      <Clientes />
      <Proyectos />
      <Footer />
    </>
  );
}
