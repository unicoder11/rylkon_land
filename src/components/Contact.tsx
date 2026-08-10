"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const fieldClass =
  "w-full rounded-full border border-[color:var(--line)] bg-paper px-4 py-3 text-sm text-ink outline-none transition-[border-color,box-shadow] placeholder:text-ink/35 focus:border-[#5cd2ff] focus:shadow-[0_0_0_3px_rgba(92,210,255,0.28)]";

const areaClass =
  "w-full rounded-xl border border-[color:var(--line)] bg-paper px-4 py-3 text-sm text-ink outline-none transition-[border-color,box-shadow] placeholder:text-ink/35 focus:border-[#5cd2ff] focus:shadow-[0_0_0_3px_rgba(92,210,255,0.28)]";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "ready" | "copied">("idle");
  const [draft, setDraft] = useState<{
    name: string;
    email: string;
    message: string;
  } | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    setDraft({ name, email, message });
    setStatus("ready");

    const subject = encodeURIComponent(`Rylkon inquiry — ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    // Best-effort open mail client; page still shows a reliable fallback
    window.location.href = `mailto:hello@rylkon.com?subject=${subject}&body=${body}`;
  }

  async function copyDraft() {
    if (!draft) return;
    const text = `To: hello@rylkon.com\nFrom: ${draft.name} <${draft.email}>\n\n${draft.message}`;
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("ready");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-mist">
      <div
        aria-hidden="true"
        className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[#5cd2ff]/15 blur-3xl"
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
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="mailto:hello@rylkon.com"
              className="link-underline font-display text-lg font-semibold text-ink"
            >
              hello@rylkon.com
            </a>
            <a
              href="mailto:hello@rylkon.com?subject=Rylkon%20strategy%20call"
              className="text-sm font-medium text-ink-soft underline decoration-ink/20 underline-offset-4 transition-colors hover:text-ink"
            >
              Prefer a call? Email to book
            </a>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-[color:var(--line)] bg-paper p-6 sm:p-8"
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
                  className={areaClass}
                  placeholder="Integrations, locations, comparisons, listings…"
                />
              </label>
            </div>
            <button
              type="submit"
              className="btn-primary mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#5cd2ff] px-5 py-3.5 text-sm font-bold text-[#041018] shadow-[0_0_28px_rgba(92,210,255,0.28)] hover:bg-[#7adfff]"
            >
              Send message
            </button>

            {status !== "idle" && draft ? (
              <div className="mt-4 rounded-xl border border-[color:var(--line)] bg-mist/60 px-4 py-3 text-sm text-ink-soft">
                <p>
                  If your mail app didn’t open,{" "}
                  <a
                    className="font-medium text-ink underline decoration-ink/25 underline-offset-2"
                    href={`mailto:hello@rylkon.com?subject=${encodeURIComponent(`Rylkon inquiry — ${draft.name}`)}&body=${encodeURIComponent(`Name: ${draft.name}\nEmail: ${draft.email}\n\n${draft.message}`)}`}
                  >
                    tap here to email us
                  </a>{" "}
                  or{" "}
                  <button
                    type="button"
                    onClick={copyDraft}
                    className="font-medium text-ink underline decoration-ink/25 underline-offset-2"
                  >
                    {status === "copied" ? "copied" : "copy your message"}
                  </button>
                  .
                </p>
              </div>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
