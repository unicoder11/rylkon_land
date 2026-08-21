"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { useI18n } from "@/i18n/LanguageProvider";

export function Mechanism() {
  const { t } = useI18n();
  const { mechanism } = t;

  return (
    <section
      id="mechanism"
      className="relative overflow-hidden border-b border-[color:var(--line)] bg-mist/70"
    >
      <div
        aria-hidden="true"
        className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#5cd2ff]/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
        <Reveal>
          <SectionLabel>{mechanism.label}</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4vw,2.85rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-ink">
            {mechanism.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4a5568] sm:text-lg">
            {mechanism.body}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
          {mechanism.parts.map((part, index) => (
            <Reveal key={part.title} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <article className="border-t border-[color:var(--line)] pt-7">
                <p className="font-display text-[0.7rem] font-semibold tracking-[0.18em] text-[#5cd2ff]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink">
                  {part.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5568] sm:text-[0.95rem]">
                  {part.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2}>
          <div className="mt-16 border-t border-[color:var(--line)] pt-10">
            <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#5a6578]">
              {mechanism.loopLabel}
            </p>
            <ol className="mt-6 flex flex-wrap gap-x-2 gap-y-3">
              {mechanism.loop.map((step, index) => (
                <li
                  key={step}
                  className="inline-flex items-center gap-2 font-display text-sm font-semibold tracking-tight text-ink"
                >
                  <span className="tabular-nums text-[#5cd2ff]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                  {index < mechanism.loop.length - 1 ? (
                    <span aria-hidden className="mx-1 text-[#5a6578]/50">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
