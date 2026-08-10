"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const fieldClass =
  "w-full rounded-md border border-[color:var(--line)] bg-paper px-3.5 py-3 text-sm text-ink outline-none transition-[border-color,box-shadow] placeholder:text-ink/35 focus:border-lime-deep focus:shadow-[0_0_0_3px_rgba(46,207,192,0.28)]";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Rylkon inquiry — ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:hello@rylkon.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-mist">
      <div
        aria-hidden="true"
        className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-lime/18 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-20 lg:py-28">
        <Reveal>
          <SectionLabel>Start here</SectionLabel>
          <h2 className="mt-4 max-w-lg font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-ink">
            Tell us what you want to rank for at scale.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
            Share your data, market, and candidate page types. You’ll get a
            straight answer on fit — and a clear next step if we’re a match.
          </p>
          <a
            href="mailto:hello@rylkon.com"
            className="link-underline mt-8 inline-block font-display text-lg font-semibold text-ink"
          >
            hello@rylkon.com
          </a>
        </Reveal>

        <Reveal delay={2}>
          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-[color:var(--line)] bg-paper p-6 sm:p-8"
          >
            <div className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">
                  Name
                </span>
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className={fieldClass}
                  placeholder="Alex Rivera"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">
                  Work email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={fieldClass}
                  placeholder="alex@company.com"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">
                  What should we look at?
                </span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className={fieldClass}
                  placeholder="Integrations, locations, comparisons, listings…"
                />
              </label>
            </div>
            <button
              type="submit"
              className="btn-primary mt-6 inline-flex w-full items-center justify-center rounded-md bg-ink px-5 py-3.5 text-sm font-bold text-paper hover:bg-lime-ink"
            >
              {status === "sent" ? "Opening your email…" : "Send message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
