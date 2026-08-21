"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { useI18n } from "@/i18n/LanguageProvider";

export function Thesis() {
  const { t } = useI18n();
  const { thesis } = t;

  return (
    <section
      id="thesis"
      className="border-b border-[color:var(--line)] bg-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:items-end">
          <Reveal>
            <SectionLabel>{thesis.label}</SectionLabel>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2rem,4vw,2.85rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-ink">
              {thesis.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#4a5568] sm:text-lg">
              {thesis.body}
            </p>
          </Reveal>

          <Reveal delay={2}>
            <blockquote className="border-l-2 border-[#5cd2ff] pl-5">
              <p className="font-display text-lg font-semibold leading-snug tracking-tight text-ink sm:text-xl">
                {thesis.quote}
              </p>
              <p className="mt-4 text-sm text-[#5a6578]">{thesis.mission}</p>
            </blockquote>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-12">
          {thesis.claims.map((item, index) => (
            <Reveal key={item.title} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <article className="border-t border-[color:var(--line)] pt-7">
                <p className="font-display text-[0.7rem] font-semibold tracking-[0.18em] text-[#5cd2ff]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink">
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
