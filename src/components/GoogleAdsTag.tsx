"use client";

import { useEffect } from "react";
import Script from "next/script";
import { googleAdsId } from "@/config/ads";
import { trackLead } from "@/lib/track";

// Loads the Google tag on every page and reports Call / WhatsApp link taps as conversions.
// The enquiry form reports its own conversion on submit (see ContactSection).
const GoogleAdsTag = () => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[data-lead]");
      const kind = link?.getAttribute("data-lead");
      if (kind === "call" || kind === "whatsapp") trackLead(kind);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`} strategy="afterInteractive" />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAdsId}');`}
      </Script>
    </>
  );
};

export default GoogleAdsTag;
