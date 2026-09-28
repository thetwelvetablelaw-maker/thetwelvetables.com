import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.webp";
import { navLinks } from "@/config/nav";
import { practiceAreas } from "@/data/practiceAreas";
import { contact, locations, mailHref } from "@/config/contact";
import { CallLink } from "@/components/LeadLinks";

const linkClass = "text-law-cream/75 hover:text-law-gold font-body text-sm transition-colors";
const headingClass = "font-body text-xs font-semibold uppercase tracking-[0.18em] text-law-gold mb-4";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Disclaimer", href: "/disclaimer/" },
  { label: "Terms of Use", href: "/terms/" },
];

const Footer = () => {
  return (
    <footer className="bg-law-dark text-law-cream">
      <div className="container mx-auto px-4 pt-14 pb-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
        <div className="sm:col-span-2 lg:col-span-3 flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src={logo} alt="" width={44} height={44} className="w-11 h-11 rounded-full bg-white object-cover" />
            <span className="font-heading text-xl font-bold">{contact.firmName}</span>
          </Link>
          <p className="text-law-cream/70 text-sm leading-relaxed max-w-xs">
            {contact.tagline}. Practising before the Supreme Court of India, the Delhi High Court and District Courts in
            Delhi since 2009.
          </p>
        </div>

        <nav aria-label="Practice areas" className="lg:col-span-4">
          <p className={headingClass}>Practice Areas</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
            {practiceAreas.map((a) => (
              <li key={a.slug}>
                <Link href={`/practice-areas/${a.slug}/`} className={linkClass}>{a.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer" className="lg:col-span-2">
          <p className={headingClass}>The Firm</p>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={linkClass}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <p className={headingClass}>Contact</p>
          <ul className="space-y-3 text-sm">
            <li>
              <CallLink source="footer" className={`flex items-start gap-3 ${linkClass}`}>
                <Phone className="w-4 h-4 mt-0.5 text-law-gold flex-shrink-0" aria-hidden="true" />
                <span>
                  {contact.phoneDisplay}
                  <span className="block text-law-cream/50 text-xs">Call or WhatsApp</span>
                </span>
              </CallLink>
            </li>
            <li>
              <a href={mailHref} className={`flex items-start gap-3 break-all ${linkClass}`}>
                <Mail className="w-4 h-4 mt-0.5 text-law-gold flex-shrink-0" aria-hidden="true" />
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-law-cream/75">
              <Clock className="w-4 h-4 mt-0.5 text-law-gold flex-shrink-0" aria-hidden="true" />
              {contact.hours}
            </li>
            {locations.map((loc) => (
              <li key={loc.label} className="flex items-start gap-3 text-law-cream/75">
                <MapPin className="w-4 h-4 mt-0.5 text-law-gold flex-shrink-0" aria-hidden="true" />
                <address className="not-italic">
                  <span className="block text-law-cream/50 text-xs">{loc.label}</span>
                  {loc.lines.join(", ")}
                </address>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-law-warm-gray/25">
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
          <p className="text-law-cream/55 text-xs leading-relaxed max-w-4xl">
            As per the rules of the Bar Council of India, this website is for information only. It is not an
            advertisement or solicitation, and nothing on it creates a lawyer-client relationship.
          </p>
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between text-xs">
            <p className="text-law-cream/55">
              © {new Date().getFullYear()} {contact.firmName}. All rights reserved.
            </p>
            <ul className="flex gap-5">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-law-cream/75 hover:text-law-gold underline-offset-4 hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
