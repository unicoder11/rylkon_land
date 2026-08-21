"use client";

import { Reveal } from "./Reveal";
import { useI18n } from "@/i18n/LanguageProvider";

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();

export function MidCta() {
  const { t } = useI18n();
  const { midCta } = t;

  return (
    <section className="border-b border-[color:var(--line)] bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center lg:py-20">
        <Reveal>
          <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#5cd2ff]">
            {midCta.label}
          </p>
          <h2 className="mt-3 max-w-xl font-display text-[clamp(1.75rem,3.4vw,2.35rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
            {midCta.title}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/65 sm:text-base">
            {midCta.body}
          </p>
        </Reveal>
        <Reveal delay={2}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center rounded-full bg-[#5cd2ff] px-6 py-3.5 text-sm font-bold text-[#041018] shadow-[0_0_28px_rgba(92,210,255,0.35)] hover:bg-[#7adfff]"
            >
              {midCta.cta}
            </a>
            {bookingUrl ? (
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-sm font-medium text-paper/70 underline decoration-paper/25 underline-offset-4 transition-colors hover:text-paper"
              >
                {midCta.book}
              </a>
            ) : (
              <a
                href="mailto:hello@rylkon.com"
                className="text-center text-sm font-medium text-paper/70 underline decoration-paper/25 underline-offset-4 transition-colors hover:text-paper"
              >
                hello@rylkon.com
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
