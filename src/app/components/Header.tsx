"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import AvailabilityPill from "@/components/AvailabilityPill";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        {/* Masthead */}
        <Link href="/" className="group flex min-w-0 items-baseline gap-2">
          <span className="whitespace-nowrap font-serif text-xl font-medium tracking-tight text-foreground sm:text-[1.35rem]">
            Osvaldo Restrepo
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors ${
                isActive(link.href) ? "text-foreground" : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.span
                  layoutId="activeRule"
                  className="absolute inset-x-3 -bottom-[1px] h-[2px] bg-accent"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <AvailabilityPill className="hidden lg:inline-flex" />
          <ThemeToggle />
          <a
            href="/Osvaldo_Restrepo_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-soft"
          >
            <FileDown className="h-4 w-4" />
            CV
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-2.5 text-muted transition-colors hover:bg-surface-2"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Journal-style double rule + mobile availability strip */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="border-b border-line" />
      </div>
      {pathname !== "/" && (
        <div className="mx-auto flex max-w-6xl justify-center px-4 py-1.5 lg:hidden">
          <AvailabilityPill />
        </div>
      )}

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            id="mobile-menu"
            className="overflow-hidden border-b border-line bg-background md:hidden"
          >
            <div className="space-y-0.5 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                    isActive(link.href) ? "bg-surface-2 text-foreground" : "text-muted hover:bg-surface-2"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/Osvaldo_Restrepo_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 font-medium text-white"
              >
                <FileDown className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
