import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { contact } from "@/config/contact";
import { advocates } from "@/data/advocates";

const points = [
  "Advocates, solicitors and consultants under one roof",
  "Practice before the Supreme Court, High Court and District Courts",
  "Civil, criminal, family, service and commercial matters",
  "Clear explanation of options and timelines",
  "Consultation in person, by phone or on WhatsApp",
  "Strict confidentiality",
];

const AboutSection = ({ linkToAbout = false }: { linkToAbout?: boolean }) => {
  return (
    <section id="about" className="py-16 md:py-20 section-light scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            {advocates.map((a) => (
              <figure key={a.name} className="text-center">
                <Image
                  src={a.image}
                  alt={`${a.name}, ${a.court}`}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="rounded-lg shadow-xl w-full h-80 md:h-96 object-contain"
                />
                <figcaption className="mt-3 space-y-0.5">
                  <p className="font-heading font-semibold text-foreground">{a.name}</p>
                  <p className="text-sm text-muted-foreground">{a.court}</p>
                  {a.qualifications && <p className="text-xs text-muted-foreground">{a.qualifications}</p>}
                  {a.enrolment && <p className="text-xs text-muted-foreground">Enrolment: {a.enrolment}</p>}
                  {a.practiceAreas && <p className="text-xs text-muted-foreground">{a.practiceAreas}</p>}
                </figcaption>
              </figure>
            ))}
          </div>

          <div>
            <p className="text-primary font-body text-sm uppercase tracking-widest mb-2">About us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">{contact.firmName}</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              {contact.firmName} is a firm of advocates, solicitors and legal consultants based in Delhi, in practice since
              2009. We advise individuals, families and businesses, and represent them before courts and tribunals across
              Delhi NCR and before the Supreme Court of India. Every matter starts with a confidential consultation in
              which we listen to the facts, review the documents and explain the options available.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm font-body text-foreground">{p}</span>
                </li>
              ))}
            </ul>

            {linkToAbout && (
              <Link href="/about/" className="inline-block mt-6 text-primary font-semibold hover:underline underline-offset-4">
                More about the firm →
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
