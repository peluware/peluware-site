'use client'

import Header from "@/components/header";
import Hero from "@/components/hero";
import Products from "@/components/products";
import Features from "@/components/features";
import Technologies from "@/components/technologies";
import Contributions from "@/components/contributions";
import AboutUs from "@/components/about-us";
import Contact from "@/components/contact";

export default function PeluWarePage() {
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-1">
        <Hero/>
        <Products/>
        <Features/>
        <Technologies/>
        <Contributions/>
        <AboutUs/>
        <Contact/>
      </main>
    
    </div>
  )
}
