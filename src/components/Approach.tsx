import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const pillars = [
  {
    title: "Prove the data first",
    body: "If pages only swap a city name or SKU, they will not hold. We confirm real uniqueness before anything ships.",
  },
  {
    title: "Raise the template floor",
    body: "Each URL gets enough substance, structure, and internal links to satisfy intent — not just fill a slot.",
  },
  {
    title: "Scale with indexing control",
    body: "Pilot, measure, expand. Crawl budget and freshness rules keep growth from turning into a cliff.",
  },
];

export function Approach() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden border-b border-[color:var(--line)] bg-paper"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-[#5cd2ff]/12 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <Reveal>
            <SectionLabel>The Rylkon approach</SectionLabel>
            <h2 className="mt-4 max-w-md font-display text-[clamp(2rem,4vw,2.85rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-ink">
              More pages only help when each one deserves to rank.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#4a5568] sm:text-lg">
              We build the system behind durable organic coverage: data
              validation, page architecture, and a rollout plan your index can
              absorb.
            </p>
          </Reveal>

          <div>
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={(index + 1) as 1 | 2 | 3}>
                <div className="border-t border-[color:var(--line)] py-7 first:border-t-0 first:pt-0 lg:first:border-t lg:first:pt-7">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm font-bold tabular-nums text-[#5cd2ff]">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-[#4a5568] sm:text-base">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
