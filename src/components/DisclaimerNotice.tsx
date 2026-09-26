"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "disclaimer_acknowledged";

// Non-blocking Bar Council notice. It sits above the mobile call/WhatsApp bar and never covers the page,
// so ad visitors can read and act straight away. The full text lives on /disclaimer/.
const DisclaimerNotice = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let acknowledged = false;
    try {
      acknowledged = localStorage.getItem(STORAGE_KEY) === "true";
    } catch {
      // Storage blocked: show the notice each visit.
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!acknowledged) setShow(true);
  }, []);

  const acknowledge = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Ignore: the notice simply returns next visit.
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="region"
      aria-label="Bar Council of India disclaimer"
      className="fixed inset-x-3 z-40 bottom-[calc(4.25rem+env(safe-area-inset-bottom,0px))] lg:bottom-5 lg:left-5 lg:right-auto lg:max-w-md rounded-xl bg-law-dark text-law-cream shadow-2xl ring-1 ring-law-gold/40 p-4 flex flex-col gap-3"
    >
      <p className="text-sm leading-relaxed text-law-cream/85">
        As per Bar Council of India rules, this website is for information only and is not an advertisement or
        solicitation. It does not create a lawyer-client relationship.{" "}
        <Link href="/disclaimer/" className="text-law-gold underline underline-offset-2">
          Read the disclaimer
        </Link>
      </p>
      <button
        type="button"
        onClick={acknowledge}
        className="self-end rounded-full bg-law-gold px-5 py-2 text-sm font-semibold text-law-dark hover:bg-law-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-law-cream"
      >
        I understand
      </button>
    </div>
  );
};

export default DisclaimerNotice;
