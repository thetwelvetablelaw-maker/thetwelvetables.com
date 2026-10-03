import { conversionLabels, conversionValue, googleAdsId } from "@/config/ads";

type Lead = keyof typeof conversionLabels;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Reports a lead to Google Ads. Does nothing until that conversion's label is configured.
export function trackLead(kind: Lead) {
  const label = conversionLabels[kind];
  if (!label || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "conversion", { send_to: `${googleAdsId}/${label}`, ...conversionValue });
}
