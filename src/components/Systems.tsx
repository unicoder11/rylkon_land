"use client";

import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { useI18n } from "@/i18n/LanguageProvider";

export function Systems() {
  const { t } = useI18n();
  const { systems } = t;

  return (
    <section
      id="systems"
      className="border-b border-[color:var(--line)] bg-mist/70"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-end lg:gap-16">
          <Reveal>
            <SectionLabel>{systems.label}</SectionLabel>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.85rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-ink">
              {systems.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#4a5568] sm:text-lg">
              {systems.body}
            </p>
          </Reveal>

          <Reveal delay={2}>
            <div className="overflow-hidden rounded-2xl border border-[color:var(--line)] bg-paper shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-2 border-b border-[color:var(--line)] bg-mist/80 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                <span className="ml-2 truncate font-mono text-[0.7rem] text-[#5a6578]">
                  yoursite.com/integrations/slack
                </span>
              </div>
              <div className="space-y-4 p-5 sm:p-6">
                <div className="h-3 w-28 rounded-full bg-[#5cd2ff]/35" />
                <div className="h-5 w-[75%] rounded-full bg-ink/10" />
                <div className="h-3 w-full rounded-full bg-ink/[0.06]" />
                <div className="h-3 w-[88%] rounded-full bg-ink/[0.06]" />
                <div className="mt-2 grid grid-cols-3 gap-3">
                  <div className="h-16 rounded-lg bg-mist" />
                  <div className="h-16 rounded-lg bg-mist" />
                  <div className="h-16 rounded-lg bg-[#5cd2ff]/12" />
                </div>
                <p className="pt-1 text-[0.7rem] leading-relaxed text-[#5a6578]">
                  {systems.mockCaption}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 space-y-14">
          {systems.groups.map((group) => (
            <div key={group.label}>
              <Reveal>
                <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#5cd2ff]">
                  {group.label}
                </p>
              </Reveal>
              <ul className="mt-5 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((system, index) => (
                  <Reveal
                    key={system.name}
                    delay={((index % 3) + 1) as 1 | 2 | 3}
                  >
                    <li className="group border-t border-[color:var(--line)] py-8">
                      <p className="font-display text-[0.7rem] font-semibold tracking-[0.18em] text-[#6b7385]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-[#0a2a3a]">
                        {system.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#4a5568] sm:text-[0.95rem]">
                        {system.detail}
                      </p>
                      <p className="mt-4 font-mono text-[0.72rem] text-[#5cd2ff]">
                        {system.example}
                      </p>
                      <div className="mt-5 h-px w-0 bg-[#5cd2ff] transition-all duration-500 ease-out group-hover:w-14" />
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
