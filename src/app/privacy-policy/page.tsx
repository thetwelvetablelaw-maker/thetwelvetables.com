import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { contact, locations, mailHref } from "@/config/contact";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${contact.firmName} handles personal information shared through this website, by phone or on WhatsApp.`,
  alternates: { canonical: "/privacy-policy/" },
};

// Draft for the firm's review. Update the "Analytics" section if Google Analytics or Zaraz is switched on.
export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="26 September 2026">
      <p>
        This policy explains what personal information {contact.firmName} (“we”, “us”) receives when you use this
        website or contact us, why we use it, and the choices you have. It is written with reference to the Digital
        Personal Data Protection Act, 2023 and the Information Technology Act, 2000.
      </p>

      <h2>What this website collects</h2>
      <p>
        This website does not have user accounts and does not store the details you type into the enquiry form. When
        you press <strong>Send on WhatsApp</strong>, the form opens WhatsApp on your device with your name, phone
        number, type of matter and message filled in. Nothing is sent to us until you press Send inside WhatsApp.
      </p>
      <p>We receive personal information only when you choose to contact us:</p>
      <ul>
        <li><strong>WhatsApp:</strong> your WhatsApp name, number and the messages and files you send.</li>
        <li><strong>Phone:</strong> your phone number and what you tell us during the call.</li>
        <li><strong>Email:</strong> your email address and the contents of your email.</li>
      </ul>

      <h2>Technical information</h2>
      <p>
        The website is hosted on Cloudflare. Like any web host, Cloudflare processes technical information such as
        your IP address, browser type and the pages requested, in order to deliver the site and protect it from abuse.
        We do not use this information to identify you.
      </p>

      <h2>Cookies and browser storage</h2>
      <p>
        This website does not use advertising or tracking cookies. It stores one setting in your browser (local storage)
        to remember that you have read the Bar Council disclaimer notice, so it is not shown on every page. Cloudflare may
        set a strictly necessary security cookie to protect the website from automated abuse. You can clear these at any
        time in your browser settings.
      </p>

      <h2>Analytics</h2>
      <p>
        We may count how many visitors tap the Call and WhatsApp buttons, so that we can understand which pages are
        useful. These counts do not include the contents of your messages or calls.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To reply to your enquiry and arrange a consultation.</li>
        <li>To assess whether we can act for you, including checking for conflicts of interest.</li>
        <li>If you instruct us, to provide legal services and meet our professional obligations.</li>
      </ul>
      <p>
        We do not sell your information and do not use it for marketing. Information shared with us in connection with
        legal advice is treated as confidential in accordance with our professional duties as advocates.
      </p>

      <h2>Third-party services</h2>
      <p>
        WhatsApp is operated by Meta and phone calls are carried by your telecom provider. Their own privacy policies
        apply to how they handle your messages and calls. Please avoid sending highly sensitive documents over WhatsApp
        before we have spoken; we can suggest a more suitable way to share them.
      </p>

      <h2>How long we keep information</h2>
      <p>
        Enquiries that do not lead to an engagement are deleted when they are no longer needed to respond to you.
        Records of matters we handle are kept for as long as required by law and professional rules.
      </p>

      <h2>Your rights</h2>
      <p>
        You may ask us to access, correct or erase the personal information we hold about you, withdraw your consent,
        or raise a grievance. Write to <a href={mailHref}>{contact.email}</a> and we will respond within a reasonable
        time. If you are not satisfied with our response, you may approach the Data Protection Board of India.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy, for example if we start using analytics. The date at the top shows when it last
        changed. See also our <Link href="/terms/">Terms of Use</Link>.
      </p>

      <h2>Contact</h2>
      <p>
        {contact.firmName}
        {locations.map((loc) => (
          <span key={loc.label}>
            <br />
            {loc.label}: {loc.lines.join(", ")}
          </span>
        ))}
        <br />
        Email: <a href={mailHref}>{contact.email}</a>
        <br />
        Phone: {contact.phoneDisplay}
      </p>
    </LegalPage>
  );
}
