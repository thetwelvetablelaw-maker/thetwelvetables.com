import Image from "next/image";
import heroBg from "@/assets/hero-bg.webp";
import { contact } from "@/config/contact";
import { CallLink, WhatsAppLink, callButtonClass, whatsappButtonClass } from "@/components/LeadLinks";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <Image src={heroBg} alt="" fill preload fetchPriority="high" sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-law-dark/75" />
      <div className="relative z-10 container mx-auto px-4 py-16 text-center animate-fade-in-up">
        <p className="text-law-gold font-body text-sm uppercase tracking-[0.3em] mb-4">{contact.firmName}</p>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-law-cream leading-tight mb-6">
          Advocates, Solicitors &amp;
          <br />
          Legal Consultants in Delhi
        </h1>
        <p className="text-law-cream/80 font-body text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Members of the Supreme Court, Delhi High Court and District Court Bar Associations
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <CallLink source="hero" className={cn(callButtonClass, "w-full sm:w-auto px-8 py-3.5 text-base")} />
          <WhatsAppLink source="hero" className={cn(whatsappButtonClass, "w-full sm:w-auto px-8 py-3.5 text-base")} />
        </div>
        <p className="mt-5 text-law-cream/60 text-sm">{contact.hours}</p>
      </div>
    </section>
  );
};

export default HeroSection;
