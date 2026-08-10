import { Logo } from "./Logo";
import { HeroAtmosphere } from "./HeroAtmosphere";

const pillars = ["Reliable", "Scalable", "Precise"] as const;

function CurvedArrow() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0 text-[#d4e85c]"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 4c4 0 7 2 8 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M8.2 8.8 11.2 10.2 9.6 13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-black"
    >
      <HeroAtmosphere />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-5 pb-10 pt-28 text-center sm:px-8 sm:pt-32">
        <div className="animate-rise mb-7 sm:mb-9">
          <Logo size="hero" tone="paper" />
        </div>

        <div className="animate-rise-delay-1 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-8">
          {pillars.map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 text-[0.8rem] font-medium tracking-wide text-[#d4e85c] sm:text-[0.875rem]"
            >
              <CurvedArrow />
              {label}
            </span>
          ))}
        </div>

        <h1 className="animate-rise-delay-1 mt-6 max-w-[17ch] font-display text-[clamp(2.05rem,5.8vw,3.75rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-white sm:max-w-[22ch]">
          Your reliable link to effortless{" "}
          <span className="hero-bracket text-[#5cd2ff]">Search Growth</span>
        </h1>

        <div className="animate-rise-delay-2 mt-9 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <a href="#contact" className="hero-cta">
            Get in touch
          </a>
          <a
            href="#approach"
            className="group inline-flex items-center gap-3 text-sm font-medium text-white/75 transition-colors hover:text-white"
          >
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] shadow-[0_0_24px_rgba(92,210,255,0.15)] transition-colors group-hover:border-[#5cd2ff]/50 group-hover:bg-[#5cd2ff]/10">
              <svg
                className="ml-0.5 h-3.5 w-3.5 text-[#5cd2ff]"
                viewBox="0 0 12 14"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M1 1.2v11.6L11 7 1 1.2Z" />
              </svg>
            </span>
            How we work
          </a>
        </div>

        <p className="animate-rise-delay-2 mt-8 max-w-lg text-[0.9375rem] leading-relaxed text-white/45">
          Programmatic SEO built for clarity and scale — templates, structure,
          and indexing discipline that turn long-tail demand into durable
          traffic.
        </p>

        <div className="mt-auto pt-16">
          <div className="hero-social-frame inline-flex flex-col items-center gap-4 px-8 py-5 sm:flex-row sm:gap-6">
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-white/40">
              Stay in touch
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href="mailto:hello@rylkon.com"
                className="hero-social-btn"
                aria-label="Email Rylkon"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                  <rect
                    x="1.5"
                    y="3.5"
                    width="13"
                    height="9"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M2.5 4.5 8 9l5.5-4.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="hero-social-btn"
                aria-label="Contact"
              >
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M12.6 1.6H3.4A1.8 1.8 0 0 0 1.6 3.4v9.2c0 1 .8 1.8 1.8 1.8h9.2c1 0 1.8-.8 1.8-1.8V3.4c0-1-.8-1.8-1.8-1.8ZM5.2 12H3.6V6.6h1.6V12Zm-.8-6.1a.95.95 0 1 1 0-1.9.95.95 0 0 1 0 1.9Zm8 6.1H9.8v-2.6c0-.7 0-1.6-1-1.6s-1.1.8-1.1 1.5V12H6.1V6.6h1.5v.7c.3-.5.9-.9 1.8-.9 1.9 0 2.3 1.3 2.3 2.9V12Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
