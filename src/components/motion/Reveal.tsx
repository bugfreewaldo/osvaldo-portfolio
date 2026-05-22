"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** vertical travel in px */
  y?: number;
  /** initial delay in ms */
  delay?: number;
  /** if set, stagger the direct children by this many ms */
  staggerMs?: number;
  duration?: number;
  /** animate every time it enters the viewport (default: once) */
  repeat?: boolean;
};

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Scroll-triggered entrance powered by anime.js.
 * Uses IntersectionObserver to trigger so it is deterministic and SSR-safe:
 * the server renders fully visible content, and the effect only hides + reveals
 * once JS is running and motion is allowed.
 */
export default function Reveal({
  children,
  className,
  y = 24,
  delay = 0,
  staggerMs,
  duration = 700,
  repeat = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (prefersReducedMotion()) return; // content stays visible, no motion

    const targets: HTMLElement[] = staggerMs
      ? (Array.from(root.children) as HTMLElement[])
      : [root];

    targets.forEach((node) => {
      node.style.opacity = "0";
      node.style.willChange = "transform, opacity";
    });

    let played = false;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (played && !repeat) return;
            played = true;
            animate(targets, {
              opacity: [0, 1],
              translateY: [y, 0],
              duration,
              delay: staggerMs ? stagger(staggerMs, { start: delay }) : delay,
              ease: "out(3)",
            });
            if (!repeat) io.disconnect();
          } else if (repeat) {
            targets.forEach((node) => {
              node.style.opacity = "0";
            });
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(root);
    return () => io.disconnect();
  }, [y, delay, staggerMs, duration, repeat]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
