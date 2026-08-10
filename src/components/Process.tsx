import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const steps = [
  {
    n: "01",
    title: "Audit the opportunity",
    body: "We map queries, data strength, and page types that can win — and kill ideas that would only create thin URLs.",
  },
  {
    n: "02",
    title: "Design the system",
    body: "Template modules, schema, internal links, and a quality bar every generated page has to clear.",
  },
  {
    n: "03",
    title: "Pilot in the wild",
    body: "Launch a focused batch. Track indexation, rankings, and engagement before you multiply volume.",
  },
  {
    n: "04",
    title: "Scale and maintain",
    body: "Expand in controlled waves. Keep freshness, crawl hygiene, and linking healthy as the library grows.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="border-b border-[color:var(--line)] bg-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>How engagements run</SectionLabel>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.85rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-ink">
              Compound traffic. Avoid the cliff.
            </h2>
          </div>
        </Reveal>

        <ol className="relative mt-14 grid md:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-[color:var(--line)] md:block"
          />
          {steps.map((step, index) => (
            <Reveal key={step.n} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <li className="relative border-t border-[color:var(--line)] py-8 md:border-t-0 md:px-4 md:pt-0 md:first:pl-0 md:last:pr-0">
                <div className="mb-5 md:mb-7">
                  <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#5cd2ff]/55 bg-paper font-display text-xs font-bold tabular-nums text-ink shadow-[0_0_0_4px_var(--paper)]">
                    {step.n}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
