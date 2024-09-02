"use client";
import Image from "next/image";
import Navigationbar from "@/components/Navigation-bar";
import Values from "@/components/Values";
import SustainableFashion from "@/components/SustainableFashion";
import Join from "@/components/Join";
import Community from "@/components/Community";
import Mission from "@/components/Mission";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navigationbar />
      <main>
        <SustainableFashion />
        <Mission />
        <Values />
        <Community />
        <Join/>
      </main>
      <Footer />
    </div>
  );
}
