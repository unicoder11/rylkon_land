"use client";

import { useId } from "react";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
  showWordmark?: boolean;
  tone?: "ink" | "paper";
};

const sizes = {
  sm: {
    root: "gap-2.5",
    mark: "h-[1.55rem] w-[1.55rem]",
    word: "text-[1.15rem] tracking-[0.14em]",
  },
  md: {
    root: "gap-3",
    mark: "h-8 w-8",
    word: "text-[1.3rem] tracking-[0.16em]",
  },
  lg: {
    root: "gap-3.5",
    mark: "h-10 w-10",
    word: "text-[1.55rem] tracking-[0.16em]",
  },
  hero: {
    root: "gap-4 sm:gap-6",
    mark: "h-[4.1rem] w-[4.1rem] sm:h-[5rem] sm:w-[5rem]",
    word:
      "text-[clamp(2.55rem,6.2vw,3.6rem)] tracking-[0.18em] sm:tracking-[0.2em]",
  },
} as const;

function LogoMark({
  className = "",
  tone = "ink",
  gradId,
  glowId,
}: {
  className?: string;
  tone?: "ink" | "paper";
  gradId: string;
  glowId: string;
}) {
  const onDark = tone === "paper";
  // Iridescent signal: electric cyan → magenta
  const ring = onDark ? "rgba(160, 200, 255, 0.32)" : "rgba(5, 7, 13, 0.18)";
  const outer = onDark ? "rgba(92, 210, 255, 0.28)" : "transparent";
  const a0 = onDark ? "#7ad4ff" : "#5CD2FF";
  const a1 = onDark ? "#ff4d8d" : "#E83B7A";
  const core = onDark ? "#fff0c8" : "#5CD2FF";

  return (
    <svg
      className={`shrink-0 ${className}`}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={gradId}
          x1="10"
          y1="6"
          x2="38"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={a0} />
          <stop offset="55%" stopColor="#c48bff" />
          <stop offset="100%" stopColor={a1} />
        </linearGradient>
        {onDark ? (
          <filter id={glowId} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        ) : null}
      </defs>
      {onDark ? (
        <circle cx="24" cy="24" r="22" stroke={outer} strokeWidth="1.15" />
      ) : (
        <circle cx="24" cy="24" r="22" fill="#000000" />
      )}
      <circle cx="24" cy="24" r="14" stroke={ring} strokeWidth="2.5" />
      <g filter={onDark ? `url(#${glowId})` : undefined}>
        <path
          d="M24 10 a14 14 0 1 1 -10.4 4.65"
          stroke={`url(#${gradId})`}
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="24" cy="24" r="3.5" fill={core} />
      </g>
    </svg>
  );
}

export function Logo({
  className = "",
  size = "md",
  showWordmark = true,
  tone = "ink",
}: LogoProps) {
  const s = sizes[size];
  const isHero = size === "hero";
  const fill =
    tone === "ink"
      ? "text-black"
      : isHero
        ? "text-[#f2f6ff]"
        : "text-[#d7e2f0]";
  const uid = useId().replace(/:/g, "");

  return (
    <span className={`inline-flex items-center ${s.root} ${className}`}>
      <LogoMark
        className={s.mark}
        tone={tone}
        gradId={`lg-${uid}`}
        glowId={`gl-${uid}`}
      />
      {showWordmark ? (
        <span
          className={`font-logo font-bold lowercase leading-none ${s.word} ${fill} ${
            isHero && tone === "paper" ? "logo-word-glow" : ""
          }`}
        >
          rylkon
        </span>
      ) : null}
      <span className="sr-only">Rylkon</span>
    </span>
  );
}
