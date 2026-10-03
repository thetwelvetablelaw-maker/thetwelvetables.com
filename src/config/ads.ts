// Google Ads tag and conversion actions.
export const googleAdsId = "AW-18003226456";

// Google Ads conversion action "Contact" (category: Contact). All three lead types report to it for now.
// To split them later, create one action per type in Google Ads and put each label below.
const LEAD_LABEL = "WyN-CIy_mI8dENjezYhD";

// Conversion labels from Google Ads (Goals → Conversions → action → Tag setup → "send_to": "AW-…/LABEL").
// A conversion is only sent once its label is filled in.
export const conversionLabels: Record<"call" | "whatsapp" | "form", string> = {
  call: LEAD_LABEL,
  whatsapp: LEAD_LABEL,
  form: LEAD_LABEL,
};

// Value reported with each conversion, as in Google's event snippet.
export const conversionValue = { value: 1.0, currency: "INR" };
