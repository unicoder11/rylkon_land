/**
 * Page silhouettes linked as a delicate mesh network.
 */

const COLS = 10;
const ROWS = 7;

type Page = {
  i: number;
  j: number;
  x: number;
  y: number;
  w: number;
  h: number;
  o: number;
  variant: number;
  cx: number;
  cy: number;
};

type Link = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  o: number;
};

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

function buildGrid(): { pages: Page[]; links: Link[] } {
  const pages: Page[] = [];
  const grid: Page[][] = Array.from({ length: ROWS }, () => []);

  for (let j = 0; j < ROWS; j++) {
    for (let i = 0; i < COLS; i++) {
      const u = i / (COLS - 1);
      const v = j / (ROWS - 1);
      const scale = 0.5 + v * 0.65;
      const w = 48 * scale;
      const h = 64 * scale;
      const gapX = 22 * scale;
      const gapY = 20 * scale;
      const x = 380 + i * (w + gapX) + v * 28;
      const y = 90 + j * (h + gapY) + u * 6;
      const distCx = Math.abs(u - 0.45);
      const distCy = Math.abs(v - 0.4);
      const underCopy =
        Math.max(0, 1 - distCx * 3.2) * Math.max(0, 1 - distCy * 2.4);
      const o = Math.max(
        0.1,
        0.36 * (0.35 + u * 0.65) * (0.5 + v * 0.5) * (1 - underCopy * 0.75),
      );
      const page: Page = {
        i,
        j,
        x,
        y,
        w,
        h,
        o,
        variant: (i * 3 + j * 5) % 6,
        cx: x + w / 2,
        cy: y + h / 2,
      };
      pages.push(page);
      grid[j][i] = page;
    }
  }

  const links: Link[] = [];

  const connect = (
    a: Page,
    b: Page,
    from: "right" | "bottom" | "br" | "bl",
  ) => {
    let x1 = a.cx;
    let y1 = a.cy;
    let x2 = b.cx;
    let y2 = b.cy;

    if (from === "right") {
      x1 = a.x + a.w;
      y1 = a.cy;
      x2 = b.x;
      y2 = b.cy;
    } else if (from === "bottom") {
      x1 = a.cx;
      y1 = a.y + a.h;
      x2 = b.cx;
      y2 = b.y;
    } else if (from === "br") {
      x1 = a.x + a.w;
      y1 = a.y + a.h;
      x2 = b.x;
      y2 = b.y;
    } else {
      x1 = a.x;
      y1 = a.y + a.h;
      x2 = b.x + b.w;
      y2 = b.y;
    }

    links.push({
      x1,
      y1,
      x2,
      y2,
      o: Math.min(a.o, b.o) * 0.85,
    });
  };

  for (let j = 0; j < ROWS; j++) {
    for (let i = 0; i < COLS; i++) {
      const p = grid[j][i];
      // Orthogonal mesh
      if (i < COLS - 1) connect(p, grid[j][i + 1], "right");
      if (j < ROWS - 1) connect(p, grid[j + 1][i], "bottom");
      // Sparse diagonals for network feel
      if (i < COLS - 1 && j < ROWS - 1 && (i + j) % 2 === 0) {
        connect(p, grid[j + 1][i + 1], "br");
      }
      if (i > 0 && j < ROWS - 1 && (i + j) % 3 === 0) {
        connect(p, grid[j + 1][i - 1], "bl");
      }
    }
  }

  return { pages, links };
}

const { pages, links } = buildGrid();

export function HeroPageMesh() {
  return (
    <svg
      aria-hidden="true"
      className="hero-page-mesh pointer-events-none absolute inset-0 h-full w-full text-[#8fd0f5]"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      {/* Links behind pages */}
      <g stroke="currentColor" strokeLinecap="round">
        {links.map((l, idx) => (
          <line
            key={`l-${idx}`}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            strokeWidth="0.7"
            opacity={l.o * 0.55}
          />
        ))}
      </g>

      {/* Nodes at page centers — tiny mesh joints */}
      <g fill="currentColor" stroke="none">
        {pages.map((p) => (
          <circle
            key={`n-${p.i}-${p.j}`}
            cx={p.cx}
            cy={p.cy}
            r={1.1}
            opacity={p.o * 0.45}
          />
        ))}
      </g>

      {/* Pages on top */}
      <g stroke="currentColor" strokeWidth="1">
        {pages.map((p) => (
          <g key={`p-${p.i}-${p.j}`} opacity={p.o}>
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
