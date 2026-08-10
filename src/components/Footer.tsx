import { Logo } from "./Logo";

const links = [
  { href: "#approach", label: "Approach" },
  { href: "#systems", label: "Systems" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-[#5cd2ff]/10 blur-3xl"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:py-14">
        <div>
          <Logo size="sm" tone="paper" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
            Programmatic SEO systems that earn their place in the index.
          </p>
          <a
            href="mailto:hello@rylkon.com"
            className="mt-5 inline-block font-display text-sm font-semibold text-[#5cd2ff] transition-colors hover:text-[#7adfff]"
          >
            hello@rylkon.com
          </a>
        </div>

        <div className="flex flex-col gap-6 sm:items-end">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper/65">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="text-xs tracking-wide text-paper/35">
            © {new Date().getFullYear()} Rylkon
          </p>
        </div>
      </div>
    </footer>
  );
}
