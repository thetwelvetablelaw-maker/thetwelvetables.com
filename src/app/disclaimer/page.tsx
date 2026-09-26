import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { contact, mailHref } from "@/config/contact";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Bar Council of India disclaimer and terms of use for the ${contact.firmName} website.`,
  alternates: { canonical: "/disclaimer/" },
};

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" updated="26 September 2026">
      <p>
        The Bar Council of India does not permit advocates to advertise or solicit work. This website is maintained
        only to provide information about {contact.firmName} to people who seek it of their own accord.
      </p>

      <h2>By using this website, you acknowledge that</h2>
      <ul>
        <li>
          There has been no advertisement, personal communication, solicitation, invitation or inducement of any kind
          from {contact.firmName} or any of its members to use this website or to engage our services.
        </li>
        <li>You are accessing this website and seeking information about us on your own initiative.</li>
        <li>
          The content of this website is for general information only. It is not legal advice and should not be relied
          on as a substitute for advice on your specific facts.
        </li>
        <li>
          Contacting us through this website, by phone or on WhatsApp does not by itself create a lawyer-client
          relationship. That relationship begins only when we agree in writing to act for you.
        </li>
      </ul>

      <h2>No guarantee of outcome</h2>
      <p>
        Every matter depends on its own facts and on decisions of courts and authorities. Nothing on this website is a
        promise or guarantee of any result.
      </p>

      <h2>Accuracy of information</h2>
      <p>
        We try to keep the information on this website accurate and current, including references to statutes such as
        the Bharatiya Nyaya Sanhita, 2023 and the Bharatiya Nagarik Suraksha Sanhita, 2023. Laws change, and we do not
        accept liability for action taken on the basis of this website without taking specific advice.
      </p>

      <h2>External links</h2>
      <p>
        Links to other websites, including maps and WhatsApp, are provided for convenience. We are not responsible for
        their content or privacy practices.
      </p>

      <h2>Personal information</h2>
      <p>
        See our <Link href="/privacy-policy/">Privacy Policy</Link> for how we handle information you share with us.
      </p>

      <h2>Contact</h2>
      <p>
        {contact.firmName}, {contact.address}. Email: <a href={mailHref}>{contact.email}</a>.
      </p>
    </LegalPage>
  );
}
