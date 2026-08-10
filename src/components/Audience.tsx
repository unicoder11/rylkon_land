import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const audiences = [
  {
    title: "SaaS & platforms",
    body: "Own integration, comparison, and use-case queries where buyers are already deciding.",
  },
  {
    title: "Marketplaces",
    body: "Turn inventory and location data into crawlable coverage — without drowning the index.",
  },
  {
    title: "Data-rich products",
    body: "Publish proprietary datasets as useful pages that compound reach over time.",
  },
];

export function Audience() {
  return (
    <section id="audience" className="relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden="true"
        className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-lime/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
        <Reveal>
          <SectionLabel tone="lime">Who it’s for</SectionLabel>
          <h2 className="mt-4 max-w-xl font-display text-[clamp(2rem,4vw,2.85rem)] font-semibold leading-[1.06] tracking-[-0.035em]">
            Best fit when you have data — and a reason to scale it into search.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
          {audiences.map((item, index) => (
            <Reveal key={item.title} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <article className="border-t border-paper/12 pt-6">
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/65 sm:text-base">
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
