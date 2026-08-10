type SectionLabelProps = {
  children: string;
  tone?: "ink" | "lime" | "cyan";
};

export function SectionLabel({ children, tone = "ink" }: SectionLabelProps) {
  const cyan = tone === "lime" || tone === "cyan";
  return (
    <p
      className={`inline-flex items-center gap-2.5 font-display text-[0.7rem] font-semibold uppercase tracking-[0.22em] ${
        cyan ? "text-[#5cd2ff]" : "text-[#5a6578]"
      }`}
    >
      <span
        className={`block h-1.5 w-1.5 rounded-full ${
          cyan ? "bg-[#5cd2ff]" : "bg-[#5cd2ff]"
        }`}
        aria-hidden
      />
      {children}
    </p>
  );
}
