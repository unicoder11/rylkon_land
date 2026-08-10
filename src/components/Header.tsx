"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#approach", label: "Approach" },
  { href: "#systems", label: "Systems" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-[color:var(--line)] bg-paper/90 text-ink backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-paper"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-4 px-5 py-3.5 sm:px-8 md:grid-cols-[1fr_auto_1fr]">
        <a
          href="#top"
          className="justify-self-start rounded-md transition-opacity hover:opacity-80"
          aria-label="Rylkon home"
        >
          <Logo size="sm" tone={scrolled ? "ink" : "paper"} />
        </a>

        <nav
          className={`hidden items-center gap-7 text-[0.8rem] font-medium tracking-wide md:flex ${
            scrolled ? "text-ink-soft" : "text-white/55"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`link-underline transition-colors ${
                scrolled ? "hover:text-ink" : "hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-self-end gap-3 sm:gap-4">
          {!scrolled ? (
            <span className="hidden items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/50 lg:inline-flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#d4e85c]/70" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-[#d4e85c]" />
              </span>
              Open for projects
            </span>
          ) : null}
          <a
            href="#contact"
            className={`btn-primary rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              scrolled
                ? "bg-ink text-paper hover:bg-lime-ink"
                : "bg-[#5cd2ff] text-[#041018] shadow-[0_0_28px_rgba(92,210,255,0.45)] hover:bg-[#7adfff]"
            }`}
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
