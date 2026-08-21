export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const localeStorageKey = "rylkon-locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "es";
}

export function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return defaultLocale;
  const candidates = [
    navigator.language,
    ...(navigator.languages ?? []),
  ].filter(Boolean);
  for (const raw of candidates) {
    const code = raw.toLowerCase().slice(0, 2);
    if (code === "es") return "es";
    if (code === "en") return "en";
  }
  return defaultLocale;
}
