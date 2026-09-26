import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { contact, mailHref, siteUrl } from "@/config/contact";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms that apply to the use of the ${contact.firmName} website.`,
  alternates: { canonical: "/terms/" },
};

// Draft for the firm's review.
export default function TermsPage() {
  const host = siteUrl.replace(/^https?:\/\//, "");
  return (
    <LegalPage title="Terms of Use" updated="26 September 2026">
      <p>
        These terms apply to your use of {host} (the “website”), operated by {contact.firmName}. By using the website
        you agree to these terms, to our <Link href="/disclaimer/">Disclaimer</Link> and to our{" "}
        <Link href="/privacy-policy/">Privacy Policy</Link>.
      </p>

      <h2>Information only</h2>
      <p>
        The website provides general information about {contact.firmName} and the areas of law we practise. It is not
        legal advice, and it is not an advertisement or solicitation of work, in line with the rules of the Bar Council
        of India. You should not act on anything on the website without advice on your own facts.
      </p>

      <h2>No lawyer-client relationship</h2>
      <p>
        Using the website, calling us, or sending us a message on WhatsApp or by email does not create a lawyer-client
        relationship. That relationship begins only when we agree in writing to act for you. Until then, please do not
        send us confidential documents.
      </p>

      <h2>Accuracy</h2>
      <p>
        We try to keep the content accurate and current, but laws and procedures change. We do not warrant that the
        content is complete or up to date, and we are not liable for any loss arising from reliance on it.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The text, design, logo and other content of the website belong to {contact.firmName} or are used with
        permission. You may view and print pages for your personal use. You may not copy, republish or use them
        commercially without our written consent.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Do not misuse the website, for example by attempting to gain unauthorised access, interfering with its operation,
        or using it to send unlawful or misleading content.
      </p>

      <h2>External links</h2>
      <p>
        The website links to services we do not control, such as WhatsApp and Google Maps. We are not responsible for
        their content, availability or privacy practices.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of India. The courts at New Delhi have exclusive jurisdiction over any
        dispute arising from them.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. The date at the top of this page shows when they last changed.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={mailHref}>{contact.email}</a>.
      </p>
    </LegalPage>
  );
}
