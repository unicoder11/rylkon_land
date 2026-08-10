"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import type { Application } from "@splinetool/runtime";
import { HeroMesh } from "./HeroMesh";

/**
 * Own Spline scene via .splinecode (self-hosted or prod.spline.design URL).
 *
 * Export: Spline → Export → Code → React → download icon next to the URL
 * Save as: public/scenes/hero.splinecode
 *
 * Optional: NEXT_PUBLIC_SPLINE_SCENE=https://prod.spline.design/.../scene.splinecode
 */
const SCENE =
  process.env.NEXT_PUBLIC_SPLINE_SCENE ?? "/scenes/hero.splinecode";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => null,
});

const HIDE_NAME =
  /particle|dust|spark|star|grain|speck|emitter|points|background/i;

function tuneScene(app: Application) {
  for (const obj of app.getAllObjects()) {
    if (HIDE_NAME.test(obj.name ?? "")) {
      obj.visible = false;
    }
  }

  for (const name of [
    "Particle Emitter",
    "Particles",
    "Particle System",
    "Dust",
    "Stars",
    "Background Particles",
  ]) {
    const obj = app.findObjectByName(name);
    if (obj) obj.visible = false;
  }

  try {
    app.setZoom(1.15);
  } catch {
    /* ignore */
  }
}

export function HeroScene() {
  const [ready, setReady] = useState(false);
  const [available, setAvailable] = useState<boolean | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Probe that the .splinecode (or remote URL) exists before mounting Spline
  useEffect(() => {
    let alive = true;
    fetch(SCENE, { method: "HEAD" })
      .then((res) => {
        if (!alive) return;
        setAvailable(res.ok);
      })
      .catch(() => {
        if (alive) setAvailable(false);
      });
    return () => {
      alive = false;
    };
  }, []);

  const onLoad = useCallback((app: Application) => {
    try {
      tuneScene(app);
    } finally {
      setReady(true);
    }
  }, []);

  if (reduceMotion) {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 55% at 78% 48%, rgba(90,180,255,0.14) 0%, transparent 55%), radial-gradient(ellipse 35% 40% at 72% 58%, rgba(255,90,140,0.1) 0%, transparent 55%), #000",
        }}
      />
    );
  }

  const showSpline = available === true;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          ready && showSpline ? "opacity-30" : "opacity-55"
        }`}
      >
        <HeroMesh />
      </div>

      {showSpline ? (
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <Spline
            scene={SCENE}
            onLoad={onLoad}
            style={{
              width: "100%",
              height: "100%",
              background: "transparent",
            }}
          />
        </div>
      ) : null}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, #000 0%, #000 22%, rgba(0,0,0,0.5) 40%, transparent 64%), linear-gradient(to top, #000 0%, transparent 18%)",
        }}
      />

      <div className="absolute bottom-0 right-0 h-14 w-40 bg-black" />

      {available === false ? (
        <div className="absolute bottom-6 left-1/2 z-20 hidden max-w-sm -translate-x-1/2 rounded-md border border-white/10 bg-black/75 px-3 py-1.5 text-center text-[11px] text-white/45 sm:block">
          Export Spline → save as{" "}
          <span className="text-white/70">public/scenes/hero.splinecode</span>
        </div>
      ) : null}
    </div>
  );
}
