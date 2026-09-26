import type { StaticImageData } from "next/image";
import divorceImg from "@/assets/services/divorce.webp";
import domesticImg from "@/assets/services/domestic.webp";
import matrimonialImg from "@/assets/services/matrimonial.webp";
import familyImg from "@/assets/services/family.webp";
import bailImg from "@/assets/services/bail.webp";
import chequeImg from "@/assets/services/cheque.webp";
import civilImg from "@/assets/services/civil.webp";
import criminalImg from "@/assets/services/criminal.webp";
import supremeImg from "@/assets/services/supreme.webp";
import corporateImg from "@/assets/services/corporate.webp";
import catImg from "@/assets/services/cat.webp";
import debtImg from "@/assets/services/debt.webp";

export interface PracticeArea {
  slug: string;
  title: string;
  /** Short name used in the WhatsApp message and the enquiry form dropdown. */
  short: string;
  image: StaticImageData;
  desc: string;
  detail: string;
}

// Copy is written to stay within Bar Council of India Rule 36: factual, no superlatives, no outcome claims.
export const practiceAreas: PracticeArea[] = [
  {
    slug: "divorce",
    title: "Divorce",
    short: "Divorce",
    image: divorceImg,
    desc: "Mutual consent and contested divorce proceedings before Family Courts in Delhi NCR.",
    detail:
      "We advise and represent clients in mutual consent and contested divorce proceedings. This includes drafting the petition, settlement terms for mutual consent divorce, and representation on connected issues such as permanent alimony, maintenance, child custody and division of jointly held property. We explain each stage of the process, the documents required and the likely timelines, so that clients can take informed decisions.",
  },
  {
    slug: "domestic-violence",
    title: "Domestic Violence",
    short: "Domestic Violence",
    image: domesticImg,
    desc: "Proceedings under the Protection of Women from Domestic Violence Act, 2005.",
    detail:
      "The Protection of Women from Domestic Violence Act, 2005 provides remedies including protection orders, residence orders, monetary relief, custody orders and compensation. We assist aggrieved persons in filing applications before the Magistrate, seeking interim relief, and coordinating with Protection Officers. We also represent respondents in such proceedings. Matters are handled with strict confidentiality.",
  },
  {
    slug: "matrimonial",
    title: "Matrimonial Disputes",
    short: "Matrimonial",
    image: matrimonialImg,
    desc: "Judicial separation, restitution of conjugal rights, annulment, maintenance and dowry-related matters.",
    detail:
      "We handle matrimonial matters under the Hindu Marriage Act, 1955, the Special Marriage Act, 1954 and applicable personal laws. This covers judicial separation, restitution of conjugal rights, annulment, maintenance claims, and complaints and defence in dowry-related cases. Where appropriate, we also represent clients in mediation before the court-annexed mediation centres.",
  },
  {
    slug: "family-disputes",
    title: "Family Disputes",
    short: "Family Dispute",
    image: familyImg,
    desc: "Inheritance, partition, guardianship and maintenance disputes within families.",
    detail:
      "Family disputes often involve both property and personal relationships. We advise on inheritance and succession, partition of family property, guardianship and custody of children, and maintenance of parents and dependants. We consider negotiated settlement and mediation first where it serves the client, and represent clients in court where it does not.",
  },
  {
    slug: "bail",
    title: "Bail Matters",
    short: "Bail",
    image: bailImg,
    desc: "Regular, anticipatory, interim and default bail applications at every court level.",
    detail:
      "We prepare and argue applications for regular bail, anticipatory bail, interim bail and default bail under the Bharatiya Nagarik Suraksha Sanhita, 2023 (and the Code of Criminal Procedure, 1973 for older matters). Applications are filed before the Sessions Courts, the High Court of Delhi and the Supreme Court of India. Bail matters are time-sensitive, so please share the FIR details and the status of the case when you contact us.",
  },
  {
    slug: "cheque-bounce",
    title: "Cheque Bounce",
    short: "Cheque Bounce",
    image: chequeImg,
    desc: "Complaints and defence under Section 138 of the Negotiable Instruments Act, 1881.",
    detail:
      "A complaint for dishonour of a cheque under Section 138 of the Negotiable Instruments Act, 1881 must follow strict timelines: a legal demand notice within 30 days of the return memo, and a complaint within one month after the 15-day notice period expires. We draft and send demand notices, file complaints, and represent drawers defending such complaints, including applications for compounding and settlement.",
  },
  {
    slug: "civil",
    title: "Civil Litigation",
    short: "Civil",
    image: civilImg,
    desc: "Property, tenancy, recovery, injunction and contract disputes.",
    detail:
      "Our civil practice covers property and title disputes, landlord-tenant matters, recovery suits, suits for specific performance of contracts, injunctions, declaratory suits and consumer complaints. We appear before the Civil and District Courts, the High Court of Delhi and consumer commissions. Each matter begins with a review of documents and limitation, followed by a clear written assessment of the options available.",
  },
  {
    slug: "criminal",
    title: "Criminal Law",
    short: "Criminal",
    image: criminalImg,
    desc: "Defence and prosecution support from investigation through trial and appeal.",
    detail:
      "We represent clients at every stage of criminal proceedings: during investigation, at trial, and in revisions and appeals. Our work covers offences under the Bharatiya Nyaya Sanhita, 2023 (and the Indian Penal Code for older matters), cyber offences, economic offences and NDPS cases. We also assist complainants with filing complaints and applications for registration of FIRs, and with quashing petitions before the High Court.",
  },
  {
    slug: "supreme-court",
    title: "Supreme Court",
    short: "Supreme Court",
    image: supremeImg,
    desc: "Special Leave Petitions, writ petitions and appeals before the Supreme Court of India.",
    detail:
      "We draft and file Special Leave Petitions, writ petitions under Article 32, civil and criminal appeals, transfer petitions, and review and curative petitions before the Supreme Court of India. We also advise on whether a matter is suitable for the Supreme Court, the applicable limitation, and the documents needed to file.",
  },
  {
    slug: "corporate",
    title: "Corporate & Commercial",
    short: "Corporate",
    image: corporateImg,
    desc: "Company formation, contracts, compliance and commercial disputes.",
    detail:
      "We assist businesses with incorporation, drafting and review of commercial contracts, shareholder and joint venture agreements, and regulatory compliance. On the disputes side, we represent clients in commercial suits, arbitration proceedings and mediation. Our aim is practical advice that fits the client's business and budget.",
  },
  {
    slug: "cat",
    title: "Central Administrative Tribunal",
    short: "CAT (Service)",
    image: catImg,
    desc: "Service matters of government employees before the CAT.",
    detail:
      "The Central Administrative Tribunal hears service disputes of Central Government employees. We represent employees in matters of recruitment, promotion, seniority, transfer, suspension, disciplinary proceedings, pay fixation and pension before the Principal Bench in New Delhi, and in writ petitions against CAT orders before the High Court.",
  },
  {
    slug: "debt-recovery",
    title: "Debt Recovery Tribunal",
    short: "DRT / SARFAESI",
    image: debtImg,
    desc: "Recovery applications, SARFAESI matters and appeals before the DRT and DRAT.",
    detail:
      "We handle Original Applications for recovery before the Debt Recovery Tribunal, securitisation applications challenging action under the SARFAESI Act, 2002, and appeals before the Debt Recovery Appellate Tribunal. We represent both lenders and borrowers, including in applications for interim relief and settlement.",
  },
];
