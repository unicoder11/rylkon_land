"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { useI18n } from "@/i18n/LanguageProvider";

export function Approach() {
  const { t } = useI18n();
  const { approach } = t;

  return (
    <section
      id="approach"
      className="relative overflow-hidden border-b border-[color:var(--line)] bg-paper"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-[#5cd2ff]/12 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <Reveal>
            <SectionLabel>{approach.label}</SectionLabel>
            <h2 className="mt-4 max-w-md font-display text-[clamp(2rem,4vw,2.85rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-ink">
              {approach.title}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#4a5568] sm:text-lg">
              {approach.body}
            </p>
          </Reveal>

          <div>
            {approach.pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={(index + 1) as 1 | 2 | 3}>
                <div className="border-t border-[color:var(--line)] py-7 first:border-t-0 first:pt-0 lg:first:border-t lg:first:pt-7">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm font-bold tabular-nums text-[#5cd2ff]">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-[#4a5568] sm:text-base">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
