"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { useI18n } from "@/i18n/LanguageProvider";

export function EngagementModel() {
  const { t } = useI18n();
  const { engagement } = t;

  return (
    <section
      id="engagement"
      className="border-b border-[color:var(--line)] bg-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
        <Reveal>
          <SectionLabel>{engagement.label}</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4vw,2.85rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-ink">
            {engagement.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4a5568] sm:text-lg">
            {engagement.body}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {engagement.known.map((item, index) => (
            <Reveal key={item.label} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <article className="border-t border-[color:var(--line)] pt-6">
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                  {item.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5568] sm:text-[0.95rem]">
                  {item.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2}>
          <div className="mt-16 overflow-x-auto">
            <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#5a6578]">
              {engagement.tableCaption}
            </p>
            <table className="mt-5 w-full min-w-[36rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[color:var(--line-strong)]">
                  <th className="py-3 pr-4 font-display text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#5a6578]">
                    {engagement.colDimension}
                  </th>
                  <th className="py-3 pr-4 font-display text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#5a6578]">
                    {engagement.colAgency}
                  </th>
                  <th className="py-3 font-display text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#5cd2ff]">
                    {engagement.colRylkon}
                  </th>
                </tr>
              </thead>
              <tbody>
                {engagement.compare.map((row) => (
                  <tr
                    key={row.dim}
                    className="border-b border-[color:var(--line)] align-top"
                  >
                    <td className="py-4 pr-4 font-display font-semibold text-ink">
                      {row.dim}
                    </td>
                    <td className="py-4 pr-4 text-[#4a5568]">{row.agency}</td>
                    <td className="py-4 text-ink/85">{row.rylkon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
