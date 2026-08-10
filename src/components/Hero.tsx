import { Logo } from "./Logo";
import { HeroAtmosphere } from "./HeroAtmosphere";

const pillars = ["Indexed", "Structured", "Durable"] as const;

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

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-5 pb-20 pt-28 text-center sm:px-8 sm:pb-24 sm:pt-32">
        <div className="animate-rise mb-5 sm:mb-6">
          <Logo size="hero" tone="paper" />
        </div>

        <div className="animate-rise-delay-1 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-7">
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

        <h1 className="animate-rise-delay-1 mt-6 max-w-[17ch] font-display text-[clamp(2.15rem,5.8vw,3.85rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:max-w-[22ch]">
          Your reliable link to effortless{" "}
          <span className="hero-bracket text-[#5cd2ff]">Search Growth</span>
        </h1>

        <p className="animate-rise-delay-2 mt-6 max-w-lg text-[0.975rem] leading-relaxed text-white/65 sm:text-base">
          Programmatic SEO built for clarity and scale — templates, structure,
          and indexing discipline that turn long-tail demand into durable
          traffic.
        </p>

        <div className="animate-rise-delay-2 mt-9 flex flex-col items-center gap-4 sm:flex-row sm:gap-7">
          <a href="#contact" className="hero-cta">
            Get in touch
          </a>
          <a
            href="#approach"
            className="text-sm font-medium text-white/75 underline decoration-white/25 underline-offset-[0.35em] transition-colors hover:text-white hover:decoration-[#5cd2ff]/70"
          >
            See how we work
          </a>
        </div>

        <p className="animate-rise-delay-3 mt-8 max-w-md text-[0.8rem] leading-relaxed text-white/45">
          Built for teams with real data — integrations, locations, comparisons,
          listings. Not thin page factories.
        </p>
      </div>
    </section>
  );
}
