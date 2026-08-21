"use client";

import { useI18n } from "@/i18n/LanguageProvider";

export function SkipLink() {
  const { t } = useI18n();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#5cd2ff] focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-[#041018] focus:shadow-[0_0_0_3px_rgba(92,210,255,0.35)]"
    >
      {t.common.skipToContent}
    </a>
  );
}
