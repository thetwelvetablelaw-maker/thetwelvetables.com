"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { contact, mailHref } from "@/config/contact";

const STORAGE_KEY = "disclaimer_accepted";

const readAccepted = () => {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
};

const DisclaimerModal = () => {
  const [open, setOpen] = useState(false);
  const agreeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // sessionStorage only exists in the browser, so the check runs after the static HTML loads.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!readAccepted()) setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    agreeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const handleAgree = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Storage blocked (private mode): the notice will simply show again next visit.
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="disclaimer-title"
        aria-describedby="disclaimer-body"
        className="bg-card rounded-lg shadow-xl max-w-lg w-full mx-4 max-h-[80vh] overflow-y-auto p-6"
      >
        <h2 id="disclaimer-title" className="font-heading text-xl font-bold text-foreground mb-4">Disclaimer</h2>
        <div id="disclaimer-body" className="border-t border-border pt-4 space-y-4 text-sm font-body text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">
              The Bar Council of India does not permit advocates to advertise or solicit work.
            </strong>
          </p>
          <p>By clicking “I Agree”, you acknowledge that:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>You are seeking information about {contact.firmName} of your own accord.</li>
            <li>
              There has been no advertisement, personal communication, solicitation, invitation or inducement of any
              kind from {contact.firmName} or any of its members.
            </li>
            <li>The information on this website is for general information only and is not legal advice.</li>
            <li>Nothing on this website creates a lawyer-client relationship.</li>
          </ul>
          <p>
            To contact us, write to{" "}
            <a href={mailHref} className="text-primary hover:underline">{contact.email}</a>.
          </p>
        </div>
        <Button ref={agreeRef} onClick={handleAgree} className="w-full mt-6 rounded-full">
          I Agree
        </Button>
      </div>
    </div>
  );
};

export default DisclaimerModal;
