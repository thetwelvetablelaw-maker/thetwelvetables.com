export interface Faq {
  q: string;
  a: string;
}

// General information only, for the advocates to review before publishing ads against these pages.
// Criminal-law references use the BNS/BNSS (in force from 1 July 2024) with the older IPC/CrPC section in brackets.
export const practiceAreaFaqs: Record<string, Faq[]> = {
  divorce: [
    {
      q: "How long does a mutual consent divorce take?",
      a: "Under Section 13B of the Hindu Marriage Act, 1955, the court hears a first motion and then a second motion after a six-month period. The Supreme Court has held that this period can be waived in suitable cases (Amardeep Singh v. Harveen Kaur, 2017), so the overall time depends on the facts and the court's schedule.",
    },
    {
      q: "Can we file for mutual divorce soon after marriage?",
      a: "For mutual consent divorce, the spouses must have been living separately for at least one year before filing. Section 14 of the Hindu Marriage Act also bars a divorce petition within one year of marriage, except in cases of exceptional hardship or depravity.",
    },
    {
      q: "What documents are usually needed?",
      a: "Typically proof of marriage (certificate or photographs and invitation), address and identity proof of both spouses, details of the period of separation, and income and asset details if alimony or maintenance is to be settled. We give you a list specific to your case at the first consultation.",
    },
  ],
  "domestic-violence": [
    {
      q: "Who can file a complaint under the Domestic Violence Act?",
      a: "A woman who is or has been in a domestic relationship with the respondent, including a wife, mother, sister or a woman in a relationship in the nature of marriage. The complaint can be against the husband or partner and his relatives, including female relatives (Hiral P. Harsora v. Kusum Harsora, 2016).",
    },
    {
      q: "Where is the application filed, and how quickly is it decided?",
      a: "Before the Magistrate where the aggrieved woman lives, where the respondent lives, or where the incident took place (Section 27). The Act asks the Magistrate to try to decide the application within 60 days of the first hearing (Section 12(5)), and interim orders can be passed earlier.",
    },
    {
      q: "Can I be forced to leave the shared household?",
      a: "The Act gives an aggrieved woman the right to reside in the shared household, whether or not she has any legal title in it (Section 17). The Magistrate can pass residence orders to prevent dispossession (Section 19).",
    },
  ],
  matrimonial: [
    {
      q: "Can I claim maintenance while the case is pending?",
      a: "Yes. Interim maintenance and litigation expenses can be claimed under Section 24 of the Hindu Marriage Act, and maintenance can also be claimed under Section 144 of the BNSS (Section 125 CrPC). Permanent alimony is decided at the end of the case under Section 25.",
    },
    {
      q: "What is restitution of conjugal rights?",
      a: "Under Section 9 of the Hindu Marriage Act, a spouse can ask the court to direct the other spouse to resume cohabitation if they have withdrawn without reasonable excuse.",
    },
    {
      q: "Which law applies to dowry harassment?",
      a: "The Dowry Prohibition Act, 1961, together with Sections 85 and 86 of the Bharatiya Nyaya Sanhita (Section 498A IPC) on cruelty by the husband or his relatives. We advise both complainants and those accused under these provisions.",
    },
  ],
  "family-disputes": [
    {
      q: "Do daughters have an equal share in ancestral property?",
      a: "Since the 2005 amendment to the Hindu Succession Act, daughters are coparceners with the same rights as sons. The Supreme Court confirmed this applies whether or not the father was alive in 2005 (Vineeta Sharma v. Rakesh Sharma, 2020).",
    },
    {
      q: "Can a family property dispute be settled without a full trial?",
      a: "Often, yes. Many partition and succession disputes are resolved through negotiation or court-annexed mediation, and a settlement can be recorded by the court. We consider this first where it serves the client.",
    },
    {
      q: "Can elderly parents claim maintenance from their children?",
      a: "Yes. The Maintenance and Welfare of Parents and Senior Citizens Act, 2007 allows parents and senior citizens to claim maintenance from children or relatives through a Maintenance Tribunal.",
    },
  ],
  bail: [
    {
      q: "What is anticipatory bail?",
      a: "Protection from arrest sought before an arrest, from the Sessions Court or the High Court, under Section 482 of the BNSS (Section 438 CrPC). It is usually sought when a person has reason to believe they may be arrested for a non-bailable offence.",
    },
    {
      q: "What is default bail?",
      a: "If the police do not file the chargesheet within the time allowed (60 or 90 days, depending on the offence), the accused becomes entitled to bail under Section 187 of the BNSS (Section 167(2) CrPC), provided they apply for it before the chargesheet is filed.",
    },
    {
      q: "What should I share when I contact you about bail?",
      a: "The FIR number and police station, the sections mentioned, the date of arrest if any, and any court orders already passed. With these we can tell you which court to approach and what to expect.",
    },
  ],
  "cheque-bounce": [
    {
      q: "What is the deadline for sending a cheque bounce notice?",
      a: "The legal demand notice must be sent within 30 days of receiving the bank's return memo. The drawer then has 15 days to pay. If they do not, the complaint must be filed within one month after those 15 days end (Sections 138 and 142, Negotiable Instruments Act).",
    },
    {
      q: "Where is a cheque bounce complaint filed?",
      a: "In the court within whose area the payee's bank branch is located, where the cheque was presented for collection (Section 142(2)). In Delhi this is usually the Negotiable Instruments Act court of the relevant district.",
    },
    {
      q: "What can the court order?",
      a: "Imprisonment of up to two years, a fine of up to twice the cheque amount, or both. The court can also order the drawer to pay interim compensation of up to 20% of the cheque amount during the case (Section 143A).",
    },
  ],
  civil: [
    {
      q: "Is there a time limit for filing a civil suit?",
      a: "Yes. The Limitation Act, 1963 sets different periods for different claims: for example, generally three years for recovery of money under a contract, and twelve years for a suit for possession of immovable property based on title. We check limitation at the start of every matter.",
    },
    {
      q: "Is there a faster route for recovering money?",
      a: "Where the claim is based on a written contract, a bill of exchange or a cheque, a summary suit under Order XXXVII of the Code of Civil Procedure may be available. In it, the defendant needs the court's permission to defend.",
    },
    {
      q: "Is mediation required before filing a commercial suit?",
      a: "For commercial disputes of a specified value, Section 12A of the Commercial Courts Act, 2015 requires pre-institution mediation before the suit is filed, unless urgent interim relief is sought.",
    },
  ],
  criminal: [
    {
      q: "Which law applies to my case: IPC or BNS?",
      a: "The Bharatiya Nyaya Sanhita, 2023 and the Bharatiya Nagarik Suraksha Sanhita, 2023 apply to offences committed on or after 1 July 2024. Offences committed before that date continue under the Indian Penal Code and the Code of Criminal Procedure.",
    },
    {
      q: "What if the police refuse to register my FIR?",
      a: "You can send the complaint to the Superintendent of Police (Section 173(4), BNSS) and then apply to the Magistrate for directions to register and investigate (Section 175(3), BNSS; Section 156(3) CrPC). An FIR can also be registered at any police station as a 'zero FIR'.",
    },
    {
      q: "Can a false FIR be quashed?",
      a: "The High Court can quash an FIR or criminal proceedings in suitable cases under its inherent powers (Section 528, BNSS; Section 482 CrPC), for example where the allegations do not disclose an offence or the dispute has been settled.",
    },
  ],
  "supreme-court": [
    {
      q: "What is a Special Leave Petition (SLP)?",
      a: "A petition under Article 136 of the Constitution asking the Supreme Court for permission to appeal against a judgment or order, usually of a High Court. Admission is at the Court's discretion.",
    },
    {
      q: "Is there a time limit for filing an SLP?",
      a: "Generally 90 days from the date of the High Court's judgment. The Court can condone delay if sufficient cause is shown, but delay should be avoided.",
    },
    {
      q: "Can I go directly to the Supreme Court?",
      a: "For violation of fundamental rights, a writ petition can be filed directly under Article 32. Most other matters first go through the High Court. Filings in the Supreme Court are made through an Advocate-on-Record.",
    },
  ],
  corporate: [
    {
      q: "Can you help set up a company or LLP?",
      a: "Yes. We advise on the right structure, and handle incorporation filings with the Ministry of Corporate Affairs, the founders' or shareholders' agreement, and the initial compliance calendar.",
    },
    {
      q: "What if a business partner does not honour a contract?",
      a: "Depending on the contract, remedies include negotiation, arbitration if there is an arbitration clause, or a commercial suit. Urgent interim relief, such as an injunction, can be sought from the court (for arbitration, under Section 9 of the Arbitration and Conciliation Act, 1996).",
    },
    {
      q: "Can an arbitral award be challenged?",
      a: "Only on limited grounds, by an application under Section 34 of the Arbitration and Conciliation Act, filed within three months of receiving the award (extendable by up to 30 days for sufficient cause).",
    },
  ],
  cat: [
    {
      q: "Who can approach the Central Administrative Tribunal?",
      a: "Central Government employees and employees of certain notified bodies, for service matters such as recruitment, promotion, seniority, transfer, disciplinary action, pay and pension.",
    },
    {
      q: "Is there a time limit for filing before the CAT?",
      a: "Generally one year from the final order (Section 21, Administrative Tribunals Act, 1985). The Tribunal expects departmental remedies such as appeals or representations to be used first, and can condone delay for sufficient cause.",
    },
    {
      q: "Can a CAT order be challenged?",
      a: "Yes, by a writ petition before the High Court having jurisdiction over the Bench that passed the order (L. Chandra Kumar v. Union of India, 1997).",
    },
  ],
  "debt-recovery": [
    {
      q: "Which cases go to the Debt Recovery Tribunal?",
      a: "Recovery claims by banks and financial institutions of ₹20 lakh and above under the Recovery of Debts and Bankruptcy Act, 1993, and challenges by borrowers to action taken under the SARFAESI Act, 2002.",
    },
    {
      q: "The bank has sent a SARFAESI notice. What can I do?",
      a: "After a demand notice under Section 13(2), the borrower has 60 days to pay and can send objections, which the bank must answer. If the bank takes possession or other measures, the borrower can apply to the DRT under Section 17 within 45 days.",
    },
    {
      q: "Is a deposit required to appeal to the DRAT?",
      a: "For appeals under Section 18 of the SARFAESI Act, the borrower must deposit 50% of the amount claimed or determined, which the Appellate Tribunal may reduce to 25%.",
    },
  ],
};
