import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CallLink, WhatsAppLink } from "@/components/LeadLinks";

// Always-visible Call / WhatsApp bar on phones and tablets. Desktop relies on the hero and navbar.
const LeadButtons = () => (
  <div
    className="lg:hidden fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 shadow-[0_-4px_16px_rgba(0,0,0,0.15)]"
    style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
  >
    <CallLink
      source="mobile-bar"
      className="flex h-14 items-center justify-center gap-2 bg-law-dark text-law-cream font-semibold"
    >
      <Phone className="w-5 h-5 text-law-gold" aria-hidden="true" />
      Call
    </CallLink>
    <WhatsAppLink
      source="mobile-bar"
      className="flex h-14 items-center justify-center gap-2 bg-whatsapp text-white font-semibold"
    >
      <WhatsAppIcon className="w-5 h-5" />
      WhatsApp
    </WhatsAppLink>
  </div>
);

export default LeadButtons;
