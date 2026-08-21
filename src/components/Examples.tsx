"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { useI18n } from "@/i18n/LanguageProvider";

export function Examples() {
  const { t } = useI18n();
  const { examples } = t;

  return (
    <section
      id="examples"
      className="relative overflow-hidden border-b border-[color:var(--line)] bg-mist/60"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
        <Reveal>
          <SectionLabel>{examples.label}</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4vw,2.85rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-ink">
            {examples.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4a5568] sm:text-lg">
            {examples.body}
          </p>
        </Reveal>

        <ul className="mt-14 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {examples.items.map((item, index) => (
            <Reveal key={item.pattern} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <li className="grid gap-4 py-8 lg:grid-cols-[0.9fr_1.1fr_1fr] lg:gap-10">
                <div>
                  <p className="font-display text-[0.7rem] font-semibold tracking-[0.18em] text-[#5cd2ff]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                    {item.pattern}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[#4a5568] sm:text-[0.95rem]">
                  {item.lesson}
                </p>
                <p className="text-sm leading-relaxed text-ink/80 sm:text-[0.95rem]">
                  <span className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#5a6578]">
                    {examples.fitSignal}
                  </span>
                  <span className="mt-2 block">{item.rylkon}</span>
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
