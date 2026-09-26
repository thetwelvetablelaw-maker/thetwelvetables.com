import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import PracticeAreasSection from "@/components/PracticeAreasSection";
import AboutSection from "@/components/AboutSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <PracticeAreasSection />
      <AboutSection />
      <HowWeWorkSection />
      <ContactSection />
    </>
  );
}
