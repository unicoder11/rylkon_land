"use client";

import { useI18n } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/config";

type LanguageSwitcherProps = {
  tone?: "light" | "dark";
  compact?: boolean;
};

export function LanguageSwitcher({
  tone = "dark",
  compact = false,
}: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useI18n();

  const base =
    tone === "light"
      ? "border-white/20 text-white/70 hover:text-white"
      : "border-[color:var(--line)] text-[#5a6578] hover:text-ink";
  const active =
    tone === "light"
      ? "bg-white/15 text-white"
      : "bg-ink text-paper";

  const options: { code: Locale; label: string }[] = [
    { code: "en", label: t.common.english },
    { code: "es", label: t.common.spanish },
  ];

  return (
    <div
      role="group"
      aria-label={t.common.language}
      className={`inline-flex items-center rounded-full border p-0.5 text-[0.7rem] font-semibold tracking-wide ${base}`}
    >
      {options.map((opt) => (
        <button
          key={opt.code}
          type="button"
          aria-pressed={locale === opt.code}
          onClick={() => setLocale(opt.code)}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            compact ? "min-w-[2rem]" : ""
          } ${locale === opt.code ? active : ""}`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
