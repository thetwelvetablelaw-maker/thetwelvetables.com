// Google Ads tag and conversion actions.
export const googleAdsId = "AW-18003226456";

// Conversion labels from Google Ads (Goals → Conversions → action → Tag setup → "send_to": "AW-…/LABEL").
// A conversion is only sent once its label is filled in.
export const conversionLabels: Record<"call" | "whatsapp" | "form", string> = {
  call: "",
  whatsapp: "",
  form: "",
};
