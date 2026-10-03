"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { practiceAreas } from "@/data/practiceAreas";
import { contact, locations, mailHref, mapDirectionsHref, mapEmbedSrc, whatsappHref } from "@/config/contact";
import { CallLink, whatsappButtonClass } from "@/components/LeadLinks";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { cn } from "@/lib/utils";
import { trackLead } from "@/lib/track";

const OTHER = "Other";
const areaOptions = [...practiceAreas.map((a) => a.short), OTHER];

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-base focus:outline-none focus:ring-2 focus:ring-primary";

const mapLocation = locations.find((l) => l.showMap);

const emptyForm =(area = "") => ({ name: "", phone: "", area, message: "" });

const ContactSection = ({ defaultArea = "", showHeading = true }: { defaultArea?: string; showHeading?: boolean }) => {
  const [form, setForm] = useState(() => emptyForm(defaultArea));
  const { toast } = useToast();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const name = form.name.trim();
    const phone = form.phone.trim();
    const area = form.area || OTHER;
    const message = form.message.trim();

    const text = [
      `Hello ${contact.firmName},`,
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Matter: ${area}`,
      ...(message ? ["", message] : []),
    ].join("\n");

    // Opened inside the submit gesture so pop-up blockers allow it.
    window.open(whatsappHref(text), "_blank", "noopener,noreferrer");
    trackLead("form");

    toast({
      title: "Almost done",
      description: "Press Send in WhatsApp to reach us. If WhatsApp did not open, please call us instead.",
    });
    setForm(emptyForm(defaultArea));
  };

  return (
    <section id="contact" className="py-20 section-light scroll-mt-24">
      <div className="container mx-auto px-4">
        {showHeading && (
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Contact Us</h2>
            <div className="gold-accent-line mx-auto mt-4" />
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              The quickest way to reach us is a call or a WhatsApp message. You can also leave your details below.
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl bg-card border border-border p-6 md:p-8 shadow-xl">
            <h3 className="font-heading text-xl font-bold text-foreground mb-1">Send an enquiry</h3>
            <p className="text-sm text-muted-foreground mb-6">
              This opens WhatsApp with your details filled in. Just press Send.
            </p>

            <form id="enquiry-form" onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="enquiry-name" className="block text-sm font-medium text-foreground mb-1">Your name</label>
                <input id="enquiry-name" name="name" value={form.name} onChange={handleChange} required maxLength={100} autoComplete="name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="enquiry-phone" className="block text-sm font-medium text-foreground mb-1">Phone number</label>
                <input
                  id="enquiry-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  pattern="[+0-9 \-]{10,16}"
                  title="Enter a 10-digit mobile number, with or without +91"
                  maxLength={16}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="enquiry-area" className="block text-sm font-medium text-foreground mb-1">Type of matter</label>
                <select id="enquiry-area" name="area" value={form.area} onChange={handleChange} required className={inputClass}>
                  <option value="" disabled>Select one</option>
                  {areaOptions.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="enquiry-message" className="block text-sm font-medium text-foreground mb-1">
                  Message <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <textarea id="enquiry-message" name="message" value={form.message} onChange={handleChange} rows={3} maxLength={1000} className={cn(inputClass, "resize-none")} />
              </div>
              <button type="submit" data-lead="form" className={cn(whatsappButtonClass, "w-full px-8 py-3.5 text-base")}>
                <WhatsAppIcon className="w-5 h-5" />
                Send on WhatsApp
              </button>
              <p className="text-xs text-muted-foreground text-center">
                By sending, you agree to our{" "}
                <Link href="/privacy-policy/" className="underline hover:text-primary">Privacy Policy</Link>. Please do not share
                confidential documents until we have spoken.
              </p>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-law-dark p-6 md:p-8 shadow-xl space-y-4">
              <h3 className="font-heading text-xl font-bold text-law-cream">Contact details</h3>
              <ul className="space-y-3 text-sm text-law-cream/80">
                <li>
                  <CallLink source="contact" className="flex items-center gap-3 hover:text-law-gold transition-colors">
                    <Phone className="w-5 h-5 text-law-gold" aria-hidden="true" />
                    {contact.phoneDisplay} (call or WhatsApp)
                  </CallLink>
                </li>
                <li>
                  <a href={mailHref} className="flex items-center gap-3 hover:text-law-gold transition-colors">
                    <Mail className="w-5 h-5 text-law-gold" aria-hidden="true" />
                    {contact.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-law-gold" aria-hidden="true" />
                  {contact.hours}
                </li>
              </ul>
              <div className="grid sm:grid-cols-2 gap-4 border-t border-law-warm-gray/25 pt-4">
                {locations.map((loc) => (
                  <address key={loc.label} className="not-italic text-sm text-law-cream/80 flex gap-3">
                    <MapPin className="w-5 h-5 text-law-gold flex-shrink-0" aria-hidden="true" />
                    <span className="flex flex-col gap-0.5">
                      <span className="text-xs font-semibold uppercase tracking-widest text-law-gold">{loc.label}</span>
                      {loc.lines.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                      <a
                        href={mapDirectionsHref(loc.mapQuery)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1.5 text-law-gold hover:underline underline-offset-2"
                      >
                        <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
                        Directions<span className="sr-only"> to our {loc.label.toLowerCase()}</span>
                      </a>
                      {loc.mapsUrl && (
                        <a
                          href={loc.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-law-gold hover:underline underline-offset-2"
                        >
                          <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                          View on Google Maps
                        </a>
                      )}
                    </span>
                  </address>
                ))}
              </div>
            </div>

            {mapLocation && (
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
                <iframe
                  src={mapEmbedSrc(mapLocation.mapQuery)}
                  className="w-full h-72 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of our ${mapLocation.label.toLowerCase()}: ${mapLocation.lines.join(", ")}`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
