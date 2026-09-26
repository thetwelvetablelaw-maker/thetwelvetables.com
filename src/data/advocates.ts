import type { StaticImageData } from "next/image";
import lawyer1 from "@/assets/lawyer-1.webp";
import lawyer2 from "@/assets/lawyer-2.webp";

export interface Advocate {
  name: string;
  image: StaticImageData;
  court: string;
  // Optional details permitted by BCI Rule 36. Each is shown only when filled in.
  qualifications?: string; // e.g. "B.A. LL.B., University of Delhi"
  enrolment?: string; // e.g. "Bar Council of Delhi, D/1234/2009"
  enrolledSince?: string; // e.g. "2009"
  practiceAreas?: string; // e.g. "Criminal law, bail and Supreme Court matters"
}

export const advocates: Advocate[] = [
  { name: "Adv. Daksh Singh", image: lawyer1, court: "Supreme Court of India" },
  { name: "Adv. Madhusudan", image: lawyer2, court: "Supreme Court of India" },
];
