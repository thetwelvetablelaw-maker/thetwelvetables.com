import { Calendar, Landmark, Scale, MapPin } from "lucide-react";
import { practiceAreas } from "@/data/practiceAreas";

// Factual figures only. Success rates and client counts are avoided under BCI Rule 36.
const stats = [
  { icon: Calendar, value: "2009", label: "In practice since" },
  { icon: Landmark, value: "3", label: "Court levels: Supreme, High & District" },
  { icon: Scale, value: String(practiceAreas.length), label: "Practice areas" },
  { icon: MapPin, value: "Delhi NCR", label: "Based in" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-law-dark">
      <div className="container mx-auto px-4">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item flex flex-col-reverse">
              <dt className="text-law-cream/75 font-body text-sm mt-1">{stat.label}</dt>
              <dd className="font-heading text-3xl md:text-4xl font-bold text-law-cream">{stat.value}</dd>
              <stat.icon className="w-10 h-10 text-law-gold mx-auto mb-3 order-last" aria-hidden="true" />
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default StatsSection;
