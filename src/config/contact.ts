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
  // Leave a link empty to hide its icon.
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  defaultWhatsappMessage: "Hello TheTwelveTable, I would like to discuss a legal matter.",
};

// Where clients can meet the advocates. The first location with `showMap` is embedded on the contact section.
export const locations = [
  {
    label: "Chamber",
    lines: ["Chamber No. 59", "Supreme Court of India, New Delhi"],
    mapQuery: "Supreme Court of India, Tilak Marg, New Delhi",
    postal: { streetAddress: "Chamber No. 59, Supreme Court of India, Tilak Marg", addressLocality: "New Delhi", addressRegion: "Delhi" },
    showMap: false,
  },
  {
    label: "Office",
    lines: ["B-21, Shindler Building", "Sector 2, Noida, Uttar Pradesh"],
    mapQuery: "B-21, Sector 2, Noida, Uttar Pradesh",
    postal: { streetAddress: "B-21, Shindler Building, Sector 2", addressLocality: "Noida", addressRegion: "Uttar Pradesh" },
    showMap: true,
  },
];

export const telHref = `tel:+${contact.phoneDigits}`;
export const mailHref = `mailto:${contact.email}`;

export const whatsappHref = (message: string = contact.defaultWhatsappMessage) =>
  `https://wa.me/${contact.whatsappDigits}?text=${encodeURIComponent(message)}`;

export const practiceAreaMessage = (area: string) =>
  `Hello TheTwelveTable, I would like to discuss a ${area} matter.`;

export const mapEmbedSrc = (query: string) => `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
export const mapDirectionsHref = (query: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
