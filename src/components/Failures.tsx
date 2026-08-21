"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { useI18n } from "@/i18n/LanguageProvider";

export function Failures() {
  const { t } = useI18n();
  const { failures } = t;

  return (
    <section
      id="risks"
      className="border-b border-[color:var(--line)] bg-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
        <Reveal>
          <SectionLabel>{failures.label}</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4vw,2.85rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-ink">
            {failures.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4a5568] sm:text-lg">
            {failures.body}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-2 sm:grid-cols-2">
          {failures.modes.map((mode, index) => (
            <Reveal key={mode.title} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <article className="border-t border-[color:var(--line)] py-8">
                <p className="font-display text-[0.7rem] font-semibold tracking-[0.18em] text-[#ff4d8d]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink">
                  {mode.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[#4a5568] sm:text-[0.95rem]">
                  {mode.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
