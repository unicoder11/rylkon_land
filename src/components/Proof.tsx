"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { useI18n } from "@/i18n/LanguageProvider";

export function Proof() {
  const { t } = useI18n();
  const { proof } = t;

  return (
    <section
      id="proof"
      className="border-b border-[color:var(--line)] bg-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <Reveal>
          <SectionLabel>{proof.label}</SectionLabel>
          <h2 className="mt-4 max-w-xl font-display text-[clamp(1.85rem,3.6vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink">
            {proof.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          {proof.signals.map((item, index) => (
            <Reveal key={item.title} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <article className="border-t border-[color:var(--line)] pt-6">
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5568] sm:text-[0.95rem]">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
