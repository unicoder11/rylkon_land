import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const faqs = [
  {
    q: "Won’t this create thin content?",
    a: "Only if the data is thin. We validate uniqueness first, raise the template floor, and refuse patterns that can’t earn rankings.",
  },
  {
    q: "How long before we see signal?",
    a: "Most engagements start with a focused pilot. You should see indexation and early ranking movement before you scale volume.",
  },
  {
    q: "What data do we need?",
    a: "Enough structured truth to make each URL distinct — product features, places, inventory, workflows, or proprietary stats.",
  },
  {
    q: "How do engagements work?",
    a: "Audit → system design → pilot → controlled scale. We stay close to crawl health, freshness, and internal linking as the library grows.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="border-b border-[color:var(--line)] bg-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <Reveal>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 max-w-xl font-display text-[clamp(1.85rem,3.6vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink">
            Straight answers before you book time.
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {faqs.map((item, index) => (
            <Reveal key={item.q} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-base font-semibold tracking-tight text-ink marker:content-none [&::-webkit-details-marker]:hidden sm:text-lg">
                  <span>{item.q}</span>
                  <span
                    aria-hidden
                    className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[color:var(--line)] text-sm text-[#5cd2ff] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#4a5568] sm:text-[0.95rem]">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
