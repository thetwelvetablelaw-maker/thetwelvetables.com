import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CallLink, WhatsAppLink } from "@/components/LeadLinks";

// Always-visible contact: a bottom bar on phones and tablets, a round WhatsApp button on desktop.
const LeadButtons = () => (
  <>
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

    <WhatsAppLink
      source="desktop-float"
      className="hidden lg:flex fixed bottom-6 right-6 z-50 h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl hover:bg-whatsapp-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-whatsapp"
    >
      <WhatsAppIcon className="w-7 h-7" />
      <span className="sr-only">Chat with us on WhatsApp</span>
    </WhatsAppLink>
  </>
);

export default LeadButtons;
