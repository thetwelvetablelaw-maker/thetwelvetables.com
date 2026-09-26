import { Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { contact, mailHref } from "@/config/contact";
import { CallLink } from "@/components/LeadLinks";

const socialLinks = [
  { href: contact.social.facebook, label: "Facebook", Icon: Facebook },
  { href: contact.social.instagram, label: "Instagram", Icon: Instagram },
  { href: contact.social.linkedin, label: "LinkedIn", Icon: Linkedin },
].filter((s) => s.href);

const TopBar = () => {
  return (
    <div className="bg-law-dark py-2 px-4">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <CallLink source="top-bar" className="flex items-center gap-2 text-law-cream text-sm hover:text-law-gold transition-colors">
            <Phone className="w-4 h-4 text-law-gold" aria-hidden="true" />
            <span>{contact.phoneDisplay}</span>
          </CallLink>
          <span className="hidden sm:block w-px h-4 bg-law-warm-gray" />
          <a href={mailHref} className="hidden sm:flex items-center gap-2 text-law-cream text-sm hover:text-law-gold transition-colors">
            <Mail className="w-4 h-4 text-law-gold" aria-hidden="true" />
            <span>{contact.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:flex items-center gap-2 text-law-cream/80 text-sm">
            <Clock className="w-4 h-4 text-law-gold" aria-hidden="true" />
            {contact.hours}
          </span>
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-law-cream hover:text-law-gold transition-colors"
            >
              <Icon className="w-4 h-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
