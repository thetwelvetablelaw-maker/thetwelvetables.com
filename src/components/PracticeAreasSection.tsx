import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { practiceAreas } from "@/data/practiceAreas";
import { practiceAreaMessage } from "@/config/contact";
import { CallLink, WhatsAppLink } from "@/components/LeadLinks";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const PracticeAreasSection = () => {
  return (
    <section id="practice-areas" className="py-20 bg-secondary/50 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-body text-sm uppercase tracking-widest mb-2">What we handle</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Practice Areas</h2>
          <div className="gold-accent-line mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {practiceAreas.map((a) => (
            <article key={a.slug} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group flex flex-col">
              <Link href={`/practice-areas/${a.slug}/`} className="relative block h-48 overflow-hidden" aria-hidden="true" tabIndex={-1}>
                <Image
                  src={a.image}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              </Link>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  <Link href={`/practice-areas/${a.slug}/`} className="hover:text-primary transition-colors">
                    {a.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 flex-1">{a.desc}</p>
                <Link
                  href={`/practice-areas/${a.slug}/`}
                  className="text-primary font-semibold text-sm hover:underline mb-4"
                  aria-label={`Read more about ${a.title}`}
                >
                  Read more →
                </Link>
                <div className="grid grid-cols-2 gap-2">
                  <CallLink
                    source={`card-${a.slug}`}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    Call
                  </CallLink>
                  <WhatsAppLink
                    source={`card-${a.slug}`}
                    message={practiceAreaMessage(a.short)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-whatsapp py-2 text-sm font-semibold text-white hover:bg-whatsapp-dark transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    WhatsApp
                  </WhatsAppLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
