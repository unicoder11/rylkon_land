import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <Logo size="sm" />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
            Programmatic SEO systems that earn their place in the index.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-soft">
          <a href="#approach" className="link-underline hover:text-ink">
            Approach
          </a>
          <a href="#systems" className="link-underline hover:text-ink">
            Systems
          </a>
          <a href="#process" className="link-underline hover:text-ink">
            Process
          </a>
          <a href="#contact" className="link-underline hover:text-ink">
            Contact
          </a>
          <span className="text-ink/35">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
