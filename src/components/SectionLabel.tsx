type SectionLabelProps = {
  children: string;
  tone?: "ink" | "lime";
};

export function SectionLabel({ children, tone = "ink" }: SectionLabelProps) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 font-display text-[0.7rem] font-semibold uppercase tracking-[0.22em] ${
        tone === "lime" ? "text-lime" : "text-ink-soft"
      }`}
    >
      <span
        className={`block h-1.5 w-1.5 rounded-full ${
          tone === "lime" ? "bg-lime" : "bg-lime"
        }`}
        aria-hidden
      />
      {children}
    </p>
  );
}
