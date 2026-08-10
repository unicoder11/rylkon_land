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
    <section
      id="audience"
      className="relative overflow-hidden bg-ink text-paper"
    >
      <div
        aria-hidden="true"
        className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#5cd2ff]/12 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#ff4d8d]/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <p className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-paper/40">
            Chapter
          </p>
          <SectionLabel tone="cyan">Who it’s for</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.1rem,4.2vw,3.1rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
            Best fit when you have data — and a reason to scale it into search.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/60 sm:text-lg">
            If your moat is structured truth, programmatic pages can compound.
            If not, we say so early.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-12">
          {audiences.map((item, index) => (
            <Reveal key={item.title} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <article className="border-t border-paper/15 pt-7">
                <p className="font-display text-[0.7rem] font-semibold tracking-[0.18em] text-[#5cd2ff]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
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
