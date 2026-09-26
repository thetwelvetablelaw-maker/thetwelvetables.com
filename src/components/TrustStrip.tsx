// Factual credentials only. Success rates and client counts are avoided under BCI Rule 36.
const items = ["In practice since 2009", "Supreme Court of India", "Delhi High Court", "District Courts, Delhi"];

const TrustStrip = () => (
  <div className="bg-card border-b border-border">
    <ul className="container mx-auto px-4 py-4 grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-8">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-sm font-medium text-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-law-gold" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default TrustStrip;
