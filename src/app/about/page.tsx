import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AboutSection from "@/components/AboutSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import { contact } from "@/config/contact";

export const metadata: Metadata = {
  title: "About the Firm",
  description: `${contact.firmName} is a firm of advocates, solicitors and legal consultants in Delhi, practising before the Supreme Court, Delhi High Court and District Courts since 2009.`,
  alternates: { canonical: "/about/" },
};

const courts = [
  { name: "Supreme Court of India", detail: "Special Leave Petitions, writ petitions, appeals, transfer, review and curative petitions." },
  { name: "High Court of Delhi", detail: "Writs, bail and anticipatory bail, quashing petitions, civil and criminal appeals." },
  { name: "District Courts, Delhi", detail: "Civil suits, criminal trials, family courts and Negotiable Instruments Act courts." },
  { name: "Tribunals", detail: "Central Administrative Tribunal, Debt Recovery Tribunal and Debt Recovery Appellate Tribunal." },
];

const standards = [
  {
    title: "Confidentiality",
    text: "What you tell us is protected by professional privilege and our duties as advocates. We do not discuss your matter with anyone without your consent.",
  },
  {
    title: "Conflict checks",
    text: "Before we take on a matter, we check that we do not act for anyone on the other side. If we cannot act, we tell you promptly.",
  },
  {
    title: "Clear terms",
    text: "We explain the scope of work and our fees before you instruct us, and confirm the engagement in writing.",
  },
  {
    title: "Honest advice",
    text: "We tell you the strengths and weaknesses of your case as we see them. No advocate can guarantee the outcome of a case, and we never do.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        title={`About ${contact.firmName}`}
        intro="Advocates, solicitors and legal consultants in Delhi, practising before the Supreme Court of India, the Delhi High Court and District Courts since 2009."
      />

      <AboutSection />

      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">Courts and tribunals</h2>
          <dl className="grid sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {courts.map((c) => (
              <div key={c.name} className="rounded-lg border border-border bg-card p-5">
                <dt className="font-heading text-lg font-semibold text-foreground">{c.name}</dt>
                <dd className="mt-1 text-sm text-muted-foreground leading-relaxed">{c.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <HowWeWorkSection />

      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">Professional standards</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {standards.map((s) => (
              <div key={s.title} className="rounded-lg border border-border bg-card p-5">
                <h3 className="font-heading text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center">
            <Link href="/contact/" className="text-primary font-semibold hover:underline underline-offset-4">
              Contact us to discuss your matter →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
