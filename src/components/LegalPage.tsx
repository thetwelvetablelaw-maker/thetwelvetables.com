import type { ReactNode } from "react";

const LegalPage = ({ title, updated, children }: { title: string; updated: string; children: ReactNode }) => (
  <section className="py-16 section-light">
    <div className="container mx-auto px-4">
      <article className="prose prose-neutral max-w-3xl mx-auto prose-headings:font-heading prose-a:text-primary">
        <h1>{title}</h1>
        <p className="text-sm text-muted-foreground">Last updated: {updated}</p>
        {children}
      </article>
    </div>
  </section>
);

export default LegalPage;
