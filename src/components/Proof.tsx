import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const signals = [
  {
    title: "Built for operators",
    body: "We work with SaaS, marketplaces, and data-rich products that already have something unique to publish — not invented inventory.",
  },
  {
    title: "What we won’t do",
    body: "No doorway farms. No city-name swaps. No mass publishing before the template and data can earn rankings.",
  },
  {
    title: "How we measure fit",
    body: "Indexation health, template quality, and query intent — before volume. Scale only after the pilot holds.",
  },
];

export function Proof() {
  return (
    <section
      id="proof"
      className="border-b border-[color:var(--line)] bg-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <Reveal>
          <SectionLabel>Why teams hire Rylkon</SectionLabel>
          <h2 className="mt-4 max-w-xl font-display text-[clamp(1.85rem,3.6vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink">
            Straight filters. No vanity theater.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          {signals.map((item, index) => (
            <Reveal key={item.title} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <article className="border-t border-[color:var(--line)] pt-6">
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5568] sm:text-[0.95rem]">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
