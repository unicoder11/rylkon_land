/**
 * Concentric page mesh — symmetric rings of page silhouettes around center.
 */

const CX = 720;
const CY = 448;

type Page = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  o: number;
  variant: number;
  cx: number;
  cy: number;
  ring: number;
  index: number;
};

type Link = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  o: number;
};

/** Rings from center out: count, radius, page size, opacity */
const RINGS = [
  { count: 6, radius: 168, w: 42, h: 56, o: 0.14 },
  { count: 10, radius: 268, w: 46, h: 62, o: 0.22 },
  { count: 14, radius: 372, w: 50, h: 68, o: 0.3 },
  { count: 16, radius: 478, w: 52, h: 70, o: 0.26 },
] as const;

function PageContent({
  x,
  y,
  w,
  h,
  variant,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  variant: number;
}) {
  const padX = w * 0.16;
  const left = x + padX;
  const right = x + w - padX;
  const top = y + h * 0.14;
  const titleW = w * (0.42 + (variant % 3) * 0.1);
  const lines = [
    { y: top + h * 0.16, w: 0.68 },
    { y: top + h * 0.26, w: 0.78 },
    { y: top + h * 0.36, w: 0.55 },
    { y: top + h * 0.46, w: 0.72 },
    { y: top + h * 0.56, w: 0.48 },
  ];
  const showBlock = variant % 4 !== 1;
  const showMeta = variant % 3 === 0;

  return (
    <>
      <rect
        x={left}
        y={top}
        width={titleW}
        height={h * 0.055}
        rx="0.6"
        fill="currentColor"
        stroke="none"
        opacity="0.55"
      />
      {showMeta ? (
        <rect
          x={left}
          y={top + h * 0.09}
          width={w * 0.22}
          height={h * 0.035}
          rx="0.5"
          fill="currentColor"
          stroke="none"
          opacity="0.28"
        />
      ) : null}
      {lines.map((line, i) => (
        <line
          key={i}
          x1={left}
          y1={line.y}
          x2={left + (right - left) * line.w}
          y2={line.y}
          strokeWidth="0.7"
          opacity={0.28 - i * 0.02}
        />
      ))}
      {showBlock ? (
        <rect
          x={left}
          y={top + h * 0.62}
          width={w * (variant % 2 === 0 ? 0.62 : 0.4)}
          height={h * 0.16}
          rx="1"
          fill="currentColor"
          stroke="none"
          opacity="0.14"
        />
      ) : (
        <>
          <rect
            x={left}
            y={top + h * 0.62}
            width={w * 0.28}
            height={h * 0.16}
            rx="1"
            fill="currentColor"
            stroke="none"
            opacity="0.16"
          />
          <rect
            x={left + w * 0.34}
            y={top + h * 0.62}
            width={w * 0.28}
            height={h * 0.16}
            rx="1"
            fill="currentColor"
            stroke="none"
            opacity="0.12"
          />
        </>
      )}
    </>
  );
}

function buildConcentric(): { pages: Page[]; links: Link[]; guides: number[] } {
  const pages: Page[] = [];
  const byRing: Page[][] = [];

  RINGS.forEach((ring, ri) => {
    const ringPages: Page[] = [];
    // Offset alternate rings by half-step for nested look, still rotationally symmetric
    const phase = ri % 2 === 0 ? -Math.PI / 2 : -Math.PI / 2 + Math.PI / ring.count;

    for (let i = 0; i < ring.count; i++) {
      const angle = phase + (Math.PI * 2 * i) / ring.count;
      const cx = CX + Math.cos(angle) * ring.radius;
      const cy = CY + Math.sin(angle) * ring.radius;
      const x = cx - ring.w / 2;
      const y = cy - ring.h / 2;
      // Keep center quieter so the headline owns the stage
      const distToCopy = Math.hypot(cx - CX, cy - CY);
      const underCopy = distToCopy < 240 ? 0.72 : distToCopy < 330 ? 0.4 : 0.08;
      const o = Math.max(0.05, ring.o * (1 - underCopy));

      const page: Page = {
        id: `${ri}-${i}`,
        x,
        y,
        w: ring.w,
        h: ring.h,
        o,
        variant: (ri * 5 + i * 3) % 6,
        cx,
        cy,
        ring: ri,
        index: i,
      };
      ringPages.push(page);
      pages.push(page);
    }
    byRing.push(ringPages);
  });

  const links: Link[] = [];

  // Ring neighbors (closed loops)
  for (const ringPages of byRing) {
    const n = ringPages.length;
    for (let i = 0; i < n; i++) {
      const a = ringPages[i];
      const b = ringPages[(i + 1) % n];
      links.push({
        x1: a.cx,
        y1: a.cy,
        x2: b.cx,
        y2: b.cy,
        o: Math.min(a.o, b.o) * 0.7,
      });
    }
  }

  // Spokes: connect each page to nearest on adjacent outer ring
  for (let ri = 0; ri < byRing.length - 1; ri++) {
    const inner = byRing[ri];
    const outer = byRing[ri + 1];
    for (const a of inner) {
      let best = outer[0];
      let bestD = Infinity;
      for (const b of outer) {
        const d = Math.hypot(a.cx - b.cx, a.cy - b.cy);
        if (d < bestD) {
          bestD = d;
          best = b;
        }
      }
      links.push({
        x1: a.cx,
        y1: a.cy,
        x2: best.cx,
        y2: best.cy,
        o: Math.min(a.o, best.o) * 0.55,
      });
    }
  }

  return {
    pages,
    links,
    guides: RINGS.map((r) => r.radius),
  };
}

const { pages, links, guides } = buildConcentric();

export function HeroPageMesh() {
  return (
    <svg
      aria-hidden="true"
      className="hero-page-mesh pointer-events-none absolute inset-0 h-full w-full text-[#8fd0f5]"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      {/* Faint concentric guide rings */}
      <g stroke="currentColor" strokeWidth="0.6">
        {guides.map((r) => (
          <circle
            key={r}
            cx={CX}
            cy={CY}
            r={r}
            opacity="0.06"
          />
        ))}
      </g>

      <g stroke="currentColor" strokeLinecap="round">
        {links.map((l, idx) => (
          <line
            key={`l-${idx}`}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            strokeWidth="0.65"
            opacity={l.o * 0.45}
          />
        ))}
      </g>

      <g fill="currentColor" stroke="none">
        {pages.map((p) => (
          <circle
            key={`n-${p.id}`}
            cx={p.cx}
            cy={p.cy}
            r={1.15}
            opacity={p.o * 0.45}
          />
        ))}
      </g>

      <g stroke="currentColor" strokeWidth="1">
        {pages.map((p) => (
          <g key={p.id} opacity={p.o}>
            <rect
              x={p.x}
              y={p.y}
              width={p.w}
              height={p.h}
              rx="1.5"
              ry="1.5"
            />
            <PageContent
              x={p.x}
              y={p.y}
              w={p.w}
              h={p.h}
              variant={p.variant}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
