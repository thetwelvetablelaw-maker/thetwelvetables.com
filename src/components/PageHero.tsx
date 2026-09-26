import type { ReactNode } from "react";
import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

// Dark title band used at the top of every inner page.
const PageHero = ({
  crumbs,
  title,
  intro,
  children,
}: {
  crumbs: Crumb[];
  title: string;
  intro?: string;
  children?: ReactNode;
}) => (
  <section className="bg-law-dark py-12 md:py-14">
    <div className="container mx-auto px-4">
      <nav aria-label="Breadcrumb" className="text-sm text-law-cream/60 mb-4">
        <ol className="flex flex-wrap items-center gap-2">
          {crumbs.map((c, i) => (
            <li key={c.label} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {c.href ? (
                <Link href={c.href} className="hover:text-law-gold">{c.label}</Link>
              ) : (
                <span className="text-law-cream/90" aria-current="page">{c.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <h1 className="font-heading text-3xl md:text-5xl font-bold text-law-cream mb-4 text-balance">{title}</h1>
      {intro && <p className="text-law-cream/80 text-lg max-w-2xl">{intro}</p>}
      {children && <div className="mt-8">{children}</div>}
    </div>
  </section>
);

export default PageHero;
