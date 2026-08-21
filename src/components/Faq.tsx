"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { useI18n } from "@/i18n/LanguageProvider";

export function Faq() {
  const { t } = useI18n();
  const { faq } = t;

  return (
    <section
      id="faq"
      className="border-b border-[color:var(--line)] bg-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <Reveal>
          <SectionLabel>{faq.label}</SectionLabel>
          <h2 className="mt-4 max-w-xl font-display text-[clamp(1.85rem,3.6vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink">
            {faq.title}
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {faq.items.map((item, index) => (
            <Reveal key={item.q} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-base font-semibold tracking-tight text-ink marker:content-none [&::-webkit-details-marker]:hidden sm:text-lg">
                  <span>{item.q}</span>
                  <span
                    aria-hidden
                    className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[color:var(--line)] text-sm text-[#5cd2ff] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#4a5568] sm:text-[0.95rem]">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
