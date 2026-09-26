// Single source of truth for every contact detail on the site.
// Change a number here and it updates the top bar, buttons, form, footer and mobile bar.

const PHONE_DIGITS = "919958861327"; // country code + number, digits only (confirmed Sept 2026)
const WHATSAPP_DIGITS = PHONE_DIGITS; // same number is on WhatsApp; change here if that ever differs

// No trailing slash, so paths like `${siteUrl}/sitemap.xml` stay clean even if the env value has one.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://thetwelvetables.com").replace(/\/+$/, "");

export const contact = {
  firmName: "TheTwelveTable",
  tagline: "Advocates, Solicitors & Legal Consultants",
  phoneDisplay: "+91 99588 61327",
  phoneDigits: PHONE_DIGITS,
  whatsappDigits: WHATSAPP_DIGITS,
  email: "thetwelvetablelaw@gmail.com",
  hours: "Mon–Sat, 10:00 am – 7:00 pm",
  // Shown in the contact section and footer; mapQuery drives the embedded map and directions link.
  address: "Delhi, India",
  mapQuery: "Supreme Court of India, New Delhi",
  // Leave a link empty to hide its icon.
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  defaultWhatsappMessage: "Hello TheTwelveTable, I would like to discuss a legal matter.",
};

export const telHref = `tel:+${contact.phoneDigits}`;
export const mailHref = `mailto:${contact.email}`;

export const whatsappHref = (message: string = contact.defaultWhatsappMessage) =>
  `https://wa.me/${contact.whatsappDigits}?text=${encodeURIComponent(message)}`;

export const practiceAreaMessage = (area: string) =>
  `Hello TheTwelveTable, I would like to discuss a ${area} matter.`;

export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`;
export const mapDirectionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contact.mapQuery)}`;
