import type { Metadata } from "next";
import { FileText } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import { CallLink, WhatsAppLink, callButtonClass, whatsappButtonClass } from "@/components/LeadLinks";
import { contact } from "@/config/contact";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: `Call or WhatsApp ${contact.phoneDisplay}, ${contact.hours}. Chamber No. 59, Supreme Court of India; office at B-21, Sector 2, Noida. ${contact.firmName}.`,
  alternates: { canonical: "/contact/" },
};

const bring = [
  "Any notice, summons, FIR or court order you have received",
  "Agreements, cheques, bank letters or other documents the dispute is about",
  "Dates of the key events, written down in order",
  "Names of the other parties and of any lawyer already involved",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title="Contact us"
        intro={`Call or WhatsApp ${contact.phoneDisplay}. ${contact.hours}.`}
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <CallLink source="contact-page" className={cn(callButtonClass, "px-8 py-3.5")} />
          <WhatsAppLink source="contact-page" className={cn(whatsappButtonClass, "px-8 py-3.5")} />
        </div>
      </PageHero>

      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <FileText className="w-6 h-6 text-primary" aria-hidden="true" />
            Before your consultation
          </h2>
          <p className="text-muted-foreground mb-4">It helps to have these ready. Please do not send original documents.</p>
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            {bring.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      <ContactSection showHeading={false} />
    </>
  );
}
