import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { contact, telHref, whatsappHref } from "@/config/contact";
import { cn } from "@/lib/utils";

// Every call/WhatsApp link carries data-lead + data-lead-source so Cloudflare Zaraz
// can count clicks with a CSS-selector trigger, e.g. a[data-lead="whatsapp"].

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary";

export const callButtonClass = cn(base, "bg-law-gold text-law-dark hover:bg-law-gold-light");
export const whatsappButtonClass = cn(base, "bg-whatsapp text-white hover:bg-whatsapp-dark");

interface LeadLinkProps {
  /** Where on the page the link sits, reported to analytics. */
  source: string;
  className?: string;
  children?: ReactNode;
}

export const CallLink = ({ source, className, children }: LeadLinkProps) => (
  <a href={telHref} data-lead="call" data-lead-source={source} className={className}>
    {children ?? (
      <>
        <Phone className="w-4 h-4" aria-hidden="true" />
        Call {contact.phoneDisplay}
      </>
    )}
  </a>
);

export const WhatsAppLink = ({
  source,
  message,
  className,
  children,
}: LeadLinkProps & { message?: string }) => (
  <a
    href={whatsappHref(message)}
    target="_blank"
    rel="noopener noreferrer"
    data-lead="whatsapp"
    data-lead-source={source}
    className={className}
  >
    {children ?? (
      <>
        <WhatsAppIcon className="w-4 h-4" />
        WhatsApp us
      </>
    )}
  </a>
);
