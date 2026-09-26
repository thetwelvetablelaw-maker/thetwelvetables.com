// Single source of truth for every contact detail on the site.
// Change a number here and it updates the top bar, buttons, form, footer and mobile bar.

// TODO(client): confirm the number. The site used 9958861327; the old meta tags used 9625921134.
const PHONE_DIGITS = "919958861327"; // country code + number, digits only
const WHATSAPP_DIGITS = PHONE_DIGITS; // TODO(client): change if WhatsApp is on a different number

// TODO(client): set the real domain once it is connected on Cloudflare.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://thetwelvetable.in";

export const contact = {
  firmName: "TheTwelveTable",
  tagline: "Advocates, Solicitors & Legal Consultants",
  phoneDisplay: "+91 99588 61327",
  phoneDigits: PHONE_DIGITS,
  whatsappDigits: WHATSAPP_DIGITS,
  email: "thetwelvetablelaw@gmail.com",
  hours: "Mon–Sat, 10:00 am – 7:00 pm", // TODO(client): confirm calling hours
  // TODO(client): replace with the chamber/office address; the map points here too.
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
