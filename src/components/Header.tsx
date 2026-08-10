"use client";

import { useEffect, useId, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#approach", label: "Approach" },
  { href: "#systems", label: "Systems" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ${
        scrolled || open
          ? "border-b border-black/[0.06] bg-paper/90 text-ink shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-paper shadow-none"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-4 px-5 py-3.5 sm:px-8 md:grid-cols-[1fr_auto_1fr]">
        <a
          href="#top"
          className="justify-self-start rounded-md transition-opacity hover:opacity-80"
          aria-label="Rylkon home"
          onClick={close}
        >
          <Logo size="sm" tone={scrolled || open ? "ink" : "paper"} />
        </a>

        <nav
          className={`hidden items-center gap-5 text-[0.8rem] font-medium tracking-wide lg:gap-7 md:flex ${
            scrolled ? "text-ink-soft" : "text-white/75"
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

        <div className="flex items-center justify-self-end gap-2 sm:gap-3">
          {!scrolled && !open ? (
            <span className="hidden items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/70 lg:inline-flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#d4e85c]/70" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-[#d4e85c]" />
              </span>
              Open for projects
            </span>
          ) : null}

          <a
            href="#contact"
            onClick={close}
            className={`btn-primary inline-flex rounded-full px-3.5 py-2 text-sm font-semibold transition-colors sm:px-4 ${
              scrolled || open
                ? "bg-ink text-paper hover:bg-[#0a2a3a]"
                : "bg-[#5cd2ff] text-[#041018] shadow-[0_0_28px_rgba(92,210,255,0.45)] hover:bg-[#7adfff]"
            }`}
          >
            <span className="sm:hidden">Contact</span>
            <span className="hidden sm:inline">Get in touch</span>
          </a>

          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${
              scrolled || open
                ? "border-[color:var(--line)] text-ink"
                : "border-white/20 text-white"
            }`}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden>
              {open ? (
                <path
                  d="M5 5l10 10M15 5 5 15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 6h12M4 10h12M4 14h12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-[color:var(--line)] bg-paper md:hidden"
        >
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="border-b border-[color:var(--line)] py-3.5 text-base font-medium text-ink last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={close}
              className="btn-primary mt-4 inline-flex items-center justify-center rounded-full bg-[#5cd2ff] px-4 py-3 text-sm font-semibold text-[#041018]"
            >
              Get in touch
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
