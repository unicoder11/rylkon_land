"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { useI18n } from "@/i18n/LanguageProvider";

export function Process() {
  const { t } = useI18n();
  const { process } = t;

  return (
    <section
      id="process"
      className="border-b border-[color:var(--line)] bg-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>{process.label}</SectionLabel>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.85rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-ink">
              {process.title}
            </h2>
          </div>
        </Reveal>

        <ol className="relative mt-14 grid md:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-[color:var(--line)] md:block"
          />
          {process.steps.map((step, index) => (
            <Reveal key={step.n} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <li className="relative border-t border-[color:var(--line)] py-8 md:border-t-0 md:px-4 md:pt-0 md:first:pl-0 md:last:pr-0">
                <div className="mb-5 md:mb-7">
                  <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#5cd2ff]/55 bg-paper font-display text-xs font-bold tabular-nums text-ink shadow-[0_0_0_4px_var(--paper)]">
                    {step.n}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
