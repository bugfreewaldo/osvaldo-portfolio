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
 * Fail-visible scroll reveal: content is always rendered. If anime.js or
 * IntersectionObserver are missing or throw, a 1.5 s safety timer restores
 * opacity so nothing is ever permanently invisible on mobile or older browsers.
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
    if (typeof IntersectionObserver === "undefined") return; // legacy browser fallback

    const targets: HTMLElement[] = staggerMs
      ? (Array.from(root.children) as HTMLElement[])
      : [root];

    const restore = () => {
      targets.forEach((node) => {
        node.style.opacity = "";
        node.style.transform = "";
        node.style.willChange = "";
      });
    };

    let played = false;
    let safetyTimer: number | null = null;
    let io: IntersectionObserver | null = null;

    const reveal = () => {
      if (played && !repeat) return;
      played = true;
      if (safetyTimer !== null) {
        window.clearTimeout(safetyTimer);
        safetyTimer = null;
      }
      try {
        animate(targets, {
          opacity: [0, 1],
          translateY: [y, 0],
          duration,
          delay: staggerMs ? stagger(staggerMs, { start: delay }) : delay,
          ease: "out(3)",
        });
      } catch {
        restore();
      }
    };

    try {
      // Hide initial state
      targets.forEach((node) => {
        node.style.opacity = "0";
        node.style.willChange = "transform, opacity";
      });

      // Hard fallback: if the animation hasn't started in 1.5 s for any reason
      // (IO never fires, anime.js bundle failed, etc), force content visible.
      safetyTimer = window.setTimeout(() => {
        if (!played) {
          played = true;
          restore();
        }
      }, 1500);

      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              reveal();
              if (!repeat) io?.disconnect();
            } else if (repeat) {
              targets.forEach((node) => {
                node.style.opacity = "0";
              });
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px 0px 0px" }
      );

      io.observe(root);
    } catch {
      // Anything in the setup path threw — bail out fully visible.
      restore();
    }

    return () => {
      if (safetyTimer !== null) window.clearTimeout(safetyTimer);
      io?.disconnect();
    };
  }, [y, delay, staggerMs, duration, repeat]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
