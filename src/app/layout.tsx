import type { Metadata, Viewport } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadButtons from "@/components/LeadButtons";
import DisclaimerModal from "@/components/DisclaimerModal";
import { Toaster } from "@/components/ui/toaster";
import { contact, siteUrl } from "@/config/contact";
import { practiceAreas } from "@/data/practiceAreas";

const heading = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-heading", display: "swap" });
const body = Source_Sans_3({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body", display: "swap" });

const title = `${contact.firmName} | Advocates, Solicitors & Legal Consultants in Delhi`;
const description = `Advocates practising before the Supreme Court, Delhi High Court and District Courts. Call or WhatsApp ${contact.phoneDisplay}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${contact.firmName}, Delhi` },
  description,
  openGraph: { type: "website", locale: "en_IN", siteName: contact.firmName, title, description },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#17130F",
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: contact.firmName,
  description,
  url: siteUrl,
  telephone: `+${contact.phoneDigits}`,
  email: contact.email,
  address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressRegion: "Delhi", addressCountry: "IN" },
  areaServed: "Delhi NCR",
  knowsAbout: practiceAreas.map((a) => a.title),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${heading.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <DisclaimerModal />
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <LeadButtons />
        <Toaster />
      </body>
    </html>
  );
}
