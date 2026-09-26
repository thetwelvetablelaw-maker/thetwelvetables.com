import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { practiceAreas } from "@/data/practiceAreas";

// Text tiles only: each opens its own page, which carries the Call/WhatsApp buttons.
const PracticeAreasSection = () => {
  return (
    <section id="practice-areas" className="py-16 md:py-20 bg-secondary/50 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-primary font-body text-sm uppercase tracking-widest mb-2">What we handle</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Practice Areas</h2>
          <div className="gold-accent-line mx-auto mt-4" />
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {practiceAreas.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/practice-areas/${a.slug}/`}
                className="group flex h-full items-start justify-between gap-3 rounded-lg border border-border bg-card p-4 md:p-5 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="flex flex-col gap-1">
                  <span className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {a.title}
                  </span>
                  <span className="text-sm text-muted-foreground leading-relaxed">{a.desc}</span>
                </span>
                <ChevronRight className="w-5 h-5 mt-1 flex-shrink-0 text-primary" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
