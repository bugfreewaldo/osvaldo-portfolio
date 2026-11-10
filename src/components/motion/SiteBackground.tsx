"use client";

import { useEffect, useRef } from "react";
import { animate, createScope, stagger } from "animejs";

/**
 * Global "Engineer's Terminal" backdrop: a faint grid, two slow accent glows
 * (signal-orange + teal), and a sparse field of pulsing signal dots — all
 * driven by anime.js. Fixed behind every page. Honors reduced motion.
 */
export default function SiteBackground() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let scope: ReturnType<typeof createScope> | null = null;
    try {
      scope = createScope({ root: el }).add(() => {
        try {
          animate(".bg-glow-a", {
            translateX: [0, 60, 0],
            translateY: [0, -40, 0],
            scale: [1, 1.12, 1],
            opacity: [0.5, 0.7, 0.5],
            duration: 16000,
            ease: "inOutSine",
            loop: true,
          });
          animate(".bg-glow-b", {
            translateX: [0, -50, 0],
            translateY: [0, 50, 0],
            scale: [1, 1.18, 1],
            opacity: [0.4, 0.62, 0.4],
            duration: 19000,
            ease: "inOutSine",
            loop: true,
          });
          animate(".bg-dot", {
            opacity: [0.15, 0.9, 0.15],
            scale: [1, 1.6, 1],
            duration: 3200,
            delay: stagger(180, { from: "center" }),
            ease: "inOutQuad",
            loop: true,
            alternate: true,
          });
        } catch {
          /* decorative only — fail silently */
        }
      });
    } catch {
      /* createScope itself failed — decoration is just static. */
    }

    return () => {
      try { scope?.revert(); } catch { /* noop */ }
    };
  }, []);

  // Sparse, deterministic dot field (no layout work, purely decorative).
  const dots = [
    [8, 18], [22, 70], [37, 30], [51, 82], [63, 14],
    [74, 56], [88, 28], [93, 74], [16, 44], [45, 58],
    [69, 88], [82, 12], [29, 90], [57, 40], [12, 62],
  ];

  return (
    <div
      ref={root}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* grid */}
      <div className="absolute inset-0 bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_100%)]" />

      {/* accent glows */}
      <div className="bg-glow-a absolute -top-24 left-[12%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,106,61,0.22),transparent_70%)] blur-2xl" />
      <div className="bg-glow-b absolute bottom-[-6rem] right-[10%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.18),transparent_70%)] blur-2xl" />

      {/* signal dots */}
      {dots.map(([x, y], i) => (
        <span
          key={i}
          className="bg-dot absolute h-1 w-1 rounded-full bg-[var(--accent)]"
          style={{ left: `${x}%`, top: `${y}%`, opacity: 0.15 }}
        />
      ))}
    </div>
  );
}
