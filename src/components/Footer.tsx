import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { navLinks } from "@/config/nav";
import { practiceAreas } from "@/data/practiceAreas";
import { contact, mailHref } from "@/config/contact";
import { CallLink } from "@/components/LeadLinks";

const linkClass = "text-law-cream/70 hover:text-law-gold font-body text-sm transition-colors";

const Footer = () => {
  return (
    <footer className="bg-law-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <p className="font-heading text-xl font-bold text-law-cream mb-4">{contact.firmName}</p>
            <p className="text-law-cream/70 font-body text-sm leading-relaxed">
              {contact.tagline}. Practising before the Supreme Court of India, the Delhi High Court and District
              Courts in Delhi.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-heading text-lg font-semibold text-law-cream mb-4">Quick Links</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkClass}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Practice areas">
            <p className="font-heading text-lg font-semibold text-law-cream mb-4">Practice Areas</p>
            <ul className="grid grid-cols-1 gap-2">
              {practiceAreas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/practice-areas/${a.slug}/`} className={linkClass}>{a.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-heading text-lg font-semibold text-law-cream mb-4">Contact</p>
            <div className="space-y-3">
              <CallLink source="footer" className={`flex items-center gap-2 ${linkClass}`}>
                <Phone className="w-4 h-4 text-law-gold" aria-hidden="true" /> {contact.phoneDisplay}
              </CallLink>
              <a href={mailHref} className={`flex items-center gap-2 ${linkClass}`}>
                <Mail className="w-4 h-4 text-law-gold" aria-hidden="true" /> {contact.email}
              </a>
              <p className="flex items-center gap-2 text-law-cream/70 font-body text-sm">
                <Clock className="w-4 h-4 text-law-gold" aria-hidden="true" /> {contact.hours}
              </p>
              <p className="flex items-start gap-2 text-law-cream/70 font-body text-sm">
                <MapPin className="w-4 h-4 text-law-gold mt-0.5" aria-hidden="true" /> {contact.address}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-law-warm-gray/20 pt-6 text-center space-y-2">
          <p className="text-law-cream/50 font-body text-xs max-w-3xl mx-auto">
            As per the rules of the Bar Council of India, this website is for information only. It is not an
            advertisement or solicitation, and nothing on it creates a lawyer-client relationship.
          </p>
          <p className="font-body text-xs">
            <Link href="/privacy-policy/" className="text-law-cream/70 hover:text-law-gold underline-offset-2 hover:underline">Privacy Policy</Link>
            <span className="mx-2 text-law-cream/40">·</span>
            <Link href="/disclaimer/" className="text-law-cream/70 hover:text-law-gold underline-offset-2 hover:underline">Disclaimer</Link>
          </p>
          <p className="text-law-cream/50 font-body text-xs">
            © {new Date().getFullYear()} {contact.firmName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
