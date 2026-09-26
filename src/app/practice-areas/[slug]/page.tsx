import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { practiceAreas } from "@/data/practiceAreas";
import { practiceAreaFaqs } from "@/data/practiceAreaFaqs";
import { contact, practiceAreaMessage } from "@/config/contact";
import { CallLink, WhatsAppLink, callButtonClass, whatsappButtonClass } from "@/components/LeadLinks";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return practiceAreas.map((a) => ({ slug: a.slug }));
}

const shareImage = { url: "/opengraph-image", width: 1200, height: 630 };

const findArea = (slug: string) => practiceAreas.find((a) => a.slug === slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = findArea((await params).slug);
  if (!area) return {};
  const title = `${area.title} Lawyers in Delhi`;
  const description = `${area.desc} Call or WhatsApp ${contact.phoneDisplay}.`;
  return {
    title,
    description,
    openGraph: { title, description, url: `/practice-areas/${area.slug}/`, images: [shareImage] },
    twitter: { title, description, images: [shareImage] },
    alternates: { canonical: `/practice-areas/${area.slug}/` },
  };
}

export default async function PracticeAreaPage({ params }: Props) {
  const area = findArea((await params).slug);
  if (!area) notFound();

  const others = practiceAreas.filter((a) => a.slug !== area.slug);
  const faqs = practiceAreaFaqs[area.slug] ?? [];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      {faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Practice Areas", href: "/practice-areas/" }, { label: area.title }]}
        title={`${area.title} Lawyers in Delhi`}
        intro={area.desc}
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <CallLink source={`page-${area.slug}`} className={cn(callButtonClass, "px-8 py-3.5")} />
          <WhatsAppLink
            source={`page-${area.slug}`}
            message={practiceAreaMessage(area.short)}
            className={cn(whatsappButtonClass, "px-8 py-3.5")}
          />
        </div>
      </PageHero>

      <section className="py-16 section-light">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            <Image
              src={area.image}
              alt=""
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="w-full h-64 md:h-80 object-cover rounded-xl mb-8"
              preload
              fetchPriority="high"
            />
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">How we can help</h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-[65ch]">{area.detail}</p>

            {faqs.length > 0 && (
              <div className="mt-12">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Common questions</h2>
                <div className="divide-y divide-border rounded-xl border border-border bg-card">
                  {faqs.map((f) => (
                    <details key={f.q} className="group px-5 py-4">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                        {f.q}
                        <ChevronDown
                          className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary transition-transform group-open:rotate-180"
                          aria-hidden="true"
                        />
                      </summary>
                      <p className="mt-3 text-muted-foreground leading-relaxed max-w-[65ch]">{f.a}</p>
                    </details>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  General information only, not legal advice. See our <Link href="/disclaimer/" className="underline">disclaimer</Link>.
                </p>
              </div>
            )}
          </article>

          <aside className="space-y-6">
            <nav aria-label="Other practice areas" className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-heading text-lg font-semibold text-foreground mb-3">Other practice areas</h2>
              <ul className="space-y-2">
                {others.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/practice-areas/${a.slug}/`} className="text-sm text-foreground hover:text-primary">
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>

      <ContactSection defaultArea={area.short} />
    </>
  );
}
