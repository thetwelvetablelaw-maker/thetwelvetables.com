import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PracticeAreasSection from "@/components/PracticeAreasSection";

export const metadata: Metadata = {
  title: "Practice Areas",
  description: `Divorce, bail, cheque bounce, traffic challan, NRI, civil, criminal, Supreme Court, corporate, CAT and DRT matters in Delhi NCR.`,
  alternates: { canonical: "/practice-areas/" },
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Practice Areas" }]}
        title="Practice areas"
        intro="Civil, criminal, family, service and commercial matters before the Supreme Court of India, the Delhi High Court, District Courts and tribunals."
      />
      <PracticeAreasSection />
    </>
  );
}
