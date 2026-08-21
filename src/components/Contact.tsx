"use client";

import { useMemo, useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { useI18n } from "@/i18n/LanguageProvider";

const fieldClass =
  "w-full rounded-full border border-[color:var(--line)] bg-paper px-4 py-3 text-sm text-ink outline-none transition-[border-color,box-shadow] placeholder:text-ink/35 focus-visible:border-[#5cd2ff] focus-visible:shadow-[0_0_0_3px_rgba(92,210,255,0.28)]";

const areaClass =
  "w-full rounded-xl border border-[color:var(--line)] bg-paper px-4 py-3 text-sm text-ink outline-none transition-[border-color,box-shadow] placeholder:text-ink/35 focus-visible:border-[#5cd2ff] focus-visible:shadow-[0_0_0_3px_rgba(92,210,255,0.28)]";

type Draft = { name: string; email: string; message: string };
type Status = "idle" | "sending" | "ready" | "copied" | "error";

export function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const [status, setStatus] = useState<Status>("idle");
  const [draft, setDraft] = useState<Draft | null>(null);

  const hasExternalBooking = Boolean(
    process.env.NEXT_PUBLIC_BOOKING_URL?.trim(),
  );

  const bookUrl = useMemo(() => {
    const configured = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
    if (configured) return configured;

    const subject = encodeURIComponent(c.callSubject);
    const body = encodeURIComponent(
      draft
        ? c.callBodyWithDraft
            .replace("{name}", draft.name)
            .replace("{email}", draft.email)
            .replace("{message}", draft.message)
        : c.callBodyEmpty,
    );
    return `mailto:hello@rylkon.com?subject=${subject}&body=${body}`;
  }, [draft, c.callSubject, c.callBodyWithDraft, c.callBodyEmpty]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    const next = { name, email, message };
    setDraft(next);
    setStatus("sending");

    const subject = encodeURIComponent(`${c.mailSubject} ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    try {
      await new Promise((r) => setTimeout(r, 420));
      window.location.href = `mailto:hello@rylkon.com?subject=${subject}&body=${body}`;
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  }

  async function copyDraft() {
    if (!draft) return;
    const text = `To: hello@rylkon.com\nFrom: ${draft.name} <${draft.email}>\n\n${draft.message}`;
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("error");
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
          <SectionLabel>{c.label}</SectionLabel>
          <h2 className="mt-4 max-w-lg font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-ink">
            {c.title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[#4a5568] sm:text-lg">
            {c.body}
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href="mailto:hello@rylkon.com"
              className="link-underline w-fit font-display text-lg font-semibold text-ink"
            >
              hello@rylkon.com
            </a>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={bookUrl}
                target={hasExternalBooking ? "_blank" : undefined}
                rel={hasExternalBooking ? "noopener noreferrer" : undefined}
                className="btn-primary inline-flex items-center justify-center rounded-full border border-ink/10 bg-ink px-5 py-3 text-sm font-semibold text-paper hover:bg-[#0a2a3a]"
              >
                {hasExternalBooking ? c.bookExternal : c.bookMail}
              </a>
              <p className="text-sm text-[#5a6578]">
                {hasExternalBooking ? c.bookHintExternal : c.bookHintMail}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-[color:var(--line)] bg-paper p-6 sm:p-8"
            noValidate
          >
            <div className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">
                  {c.name}
                </span>
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className={fieldClass}
                  placeholder={c.namePlaceholder}
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">
                  {c.email}
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={fieldClass}
                  placeholder={c.emailPlaceholder}
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">
                  {c.message}
                </span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className={areaClass}
                  placeholder={c.messagePlaceholder}
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#5cd2ff] px-5 py-3.5 text-sm font-bold text-[#041018] shadow-[0_0_28px_rgba(92,210,255,0.28)] hover:bg-[#7adfff] disabled:cursor-wait disabled:opacity-70"
            >
              {status === "sending" ? c.submitting : c.submit}
            </button>

            <p
              className="mt-3 text-center text-[0.7rem] text-[#6b7385]"
              aria-live="polite"
            >
              {status === "idle" && c.statusIdle}
              {status === "sending" && c.statusSending}
              {status === "ready" && c.statusReady}
              {status === "copied" && c.statusCopied}
              {status === "error" && c.statusError}
            </p>

            {status !== "idle" && status !== "sending" && draft ? (
              <div
                role="status"
                className={`mt-4 rounded-xl border px-4 py-3 text-sm ${
                  status === "error"
                    ? "border-red-200 bg-red-50 text-red-900"
                    : "border-[color:var(--line)] bg-mist/60 text-[#4a5568]"
                }`}
              >
                <p>
                  {c.fallbackBefore}{" "}
                  <a
                    className="font-medium text-ink underline decoration-ink/25 underline-offset-2"
                    href={`mailto:hello@rylkon.com?subject=${encodeURIComponent(`${c.mailSubject} ${draft.name}`)}&body=${encodeURIComponent(`Name: ${draft.name}\nEmail: ${draft.email}\n\n${draft.message}`)}`}
                  >
                    {c.fallbackEmail}
                  </a>
                  {c.fallbackMid}{" "}
                  <button
                    type="button"
                    onClick={copyDraft}
                    className="font-medium text-ink underline decoration-ink/25 underline-offset-2"
                  >
                    {status === "copied" ? c.fallbackCopied : c.fallbackCopy}
                  </button>
                  {c.fallbackOr}{" "}
                  <a
                    className="font-medium text-ink underline decoration-ink/25 underline-offset-2"
                    href={bookUrl}
                    target={hasExternalBooking ? "_blank" : undefined}
                    rel={hasExternalBooking ? "noopener noreferrer" : undefined}
                  >
                    {c.fallbackBook}
                  </a>
                  {c.fallbackEnd}
                </p>
              </div>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
