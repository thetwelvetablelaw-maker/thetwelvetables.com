const steps = [
  { num: "1", title: "Consultation with Confidentiality", desc: "We discuss your case and advise you on the applicable law, in strict confidence." },
  { num: "2", title: "Case Evaluation & Strategy", desc: "We review the facts and documents and set out a strategy suited to your situation." },
  { num: "3", title: "Representation", desc: "We represent you in court and before tribunals, and keep track of dates and filing deadlines." },
  { num: "4", title: "Ongoing Support", desc: "We keep you informed at every stage and remain available until the matter is concluded." },
];

const HowWeWorkSection = () => {
  return (
    <section id="how-we-work" className="py-20 section-light scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            The Way We Work
          </h2>
          <div className="gold-accent-line mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-heading font-bold group-hover:scale-110 transition-transform">
                {step.num}
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
