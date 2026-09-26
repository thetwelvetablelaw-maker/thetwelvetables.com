"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.webp";
import { navLinks } from "@/config/nav";
import { contact } from "@/config/contact";
import { WhatsAppLink, whatsappButtonClass } from "@/components/LeadLinks";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-card shadow-md sticky top-0 z-40" aria-label="Main">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} alt="" width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
          <span className="font-heading font-bold text-lg text-foreground tracking-wide">{contact.firmName}</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-body font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <WhatsAppLink source="navbar" className={cn(whatsappButtonClass, "hidden lg:inline-flex px-6 py-2.5 text-sm")} />

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="lg:hidden bg-card border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-body font-medium text-foreground hover:text-primary border-b border-border last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
