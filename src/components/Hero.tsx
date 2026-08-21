"use client";

import { Logo } from "./Logo";
import { HeroAtmosphere } from "./HeroAtmosphere";
import { useI18n } from "@/i18n/LanguageProvider";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-black"
    >
      <HeroAtmosphere />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-5 pb-20 pt-28 text-center sm:px-8 sm:pb-24 sm:pt-32">
        <div className="animate-rise mb-8 sm:mb-10">
          <Logo size="hero" tone="paper" />
        </div>

        <h1 className="animate-rise-delay-1 max-w-[20ch] font-display text-[clamp(2.2rem,5.9vw,3.9rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:max-w-[24ch]">
          {t.hero.headlineBefore}{" "}
          <span className="hero-bracket text-[#5cd2ff]">
            {t.hero.headlineAccent}
          </span>
        </h1>

        <p className="animate-rise-delay-2 mt-6 max-w-lg text-[0.975rem] leading-relaxed text-white/70 sm:text-base">
          {t.hero.sub}
        </p>

        <div className="animate-rise-delay-2 mt-9 flex flex-col items-center gap-4 sm:flex-row sm:gap-7">
          <a href="#contact" className="hero-cta">
            {t.hero.cta}
          </a>
          <a
            href="#approach"
            className="text-sm font-medium text-white/80 underline decoration-white/30 underline-offset-[0.35em] transition-colors hover:text-white hover:decoration-[#5cd2ff]/70"
          >
            {t.hero.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
