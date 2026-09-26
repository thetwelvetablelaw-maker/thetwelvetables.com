import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { practiceAreas } from "@/data/practiceAreas";
import { contact, practiceAreaMessage } from "@/config/contact";
import { CallLink, WhatsAppLink, callButtonClass, whatsappButtonClass } from "@/components/LeadLinks";
import ContactSection from "@/components/ContactSection";
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

  return (
    <>
      <section className="bg-law-dark py-14">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="text-sm text-law-cream/60 mb-4">
            <Link href="/" className="hover:text-law-gold">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/#practice-areas" className="hover:text-law-gold">Practice Areas</Link>
            <span className="mx-2">/</span>
            <span className="text-law-cream/90">{area.title}</span>
          </nav>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-law-cream mb-4">{area.title} Lawyers in Delhi</h1>
          <p className="text-law-cream/80 text-lg max-w-2xl mb-8">{area.desc}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CallLink source={`page-${area.slug}`} className={cn(callButtonClass, "px-8 py-3.5")} />
            <WhatsAppLink
              source={`page-${area.slug}`}
              message={practiceAreaMessage(area.short)}
              className={cn(whatsappButtonClass, "px-8 py-3.5")}
            />
          </div>
        </div>
      </section>

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
