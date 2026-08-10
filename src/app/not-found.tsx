import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-ink px-5 text-center text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#5cd2ff]/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-[#ff4d8d]/10 blur-3xl"
      />

      <div className="relative">
        <Logo size="md" tone="paper" />
        <p className="mt-10 font-display text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#5cd2ff]">
          404
        </p>
        <h1 className="mt-3 max-w-md font-display text-[clamp(1.85rem,4vw,2.6rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
          This URL didn’t earn a ranking.
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-paper/65">
          The page you’re looking for isn’t here. Head home — or tell us what you
          were trying to find.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="btn-primary inline-flex items-center justify-center rounded-full bg-[#5cd2ff] px-5 py-3 text-sm font-bold text-[#041018] shadow-[0_0_28px_rgba(92,210,255,0.35)] hover:bg-[#7adfff]"
          >
            Back to home
          </Link>
          <a
            href="mailto:hello@rylkon.com"
            className="text-sm font-medium text-paper/70 underline decoration-paper/25 underline-offset-4 transition-colors hover:text-paper"
          >
            hello@rylkon.com
          </a>
        </div>
      </div>
    </main>
  );
}
