import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const systems = [
  {
    name: "Integration pages",
    detail:
      "“Connect A to B” libraries that meet high-intent workflow searches with real product value.",
  },
  {
    name: "Location directories",
    detail:
      "Geo × category trees for local and marketplace demand, powered by structured place data.",
  },
  {
    name: "Comparison pages",
    detail:
      "“X vs Y” coverage from feature data — written to help buyers decide, not to advertise.",
  },
  {
    name: "Use-case hubs",
    detail:
      "Template and workflow libraries that turn in-product assets into indexable demand.",
  },
  {
    name: "Data & glossary",
    detail:
      "Stats slices and definition clusters that build topical authority across the long-tail.",
  },
  {
    name: "Listing SEO",
    detail:
      "Crawlable inventory with freshness rules so scale does not become index bloat.",
  },
];

export function Systems() {
  return (
    <section
      id="systems"
      className="border-b border-[color:var(--line)] bg-mist/70"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>What we build</SectionLabel>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.85rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-ink">
              Page systems matched to how people search.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              One strong template. Distinct data on every URL. A publishing pace
              Google can keep up with.
            </p>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((system, index) => (
            <Reveal key={system.name} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <li className="group border-t border-[color:var(--line)] py-8">
                <p className="font-display text-[0.7rem] font-semibold tracking-[0.18em] text-ink/30">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-lime-ink">
                  {system.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-[0.95rem]">
                  {system.detail}
                </p>
                <div className="mt-5 h-px w-0 bg-lime transition-all duration-500 ease-out group-hover:w-14" />
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
