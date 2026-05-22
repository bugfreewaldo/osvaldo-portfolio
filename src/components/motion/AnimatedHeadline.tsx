"use client";

import { useEffect, useRef } from "react";
import { animate, stagger, splitText } from "animejs";

type Props = {
  text: string;
  className?: string;
  /** delay before the reveal starts (ms) */
  delay?: number;
};

/**
 * Per-character entrance for a single headline, powered by anime.js splitText.
 * Falls back to plain visible text when reduced motion is requested.
 */
export default function AnimatedHeadline({ text, className, delay = 150 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const split = splitText(el, { chars: true });
    animate(split.chars, {
      opacity: [0, 1],
      translateY: ["0.4em", "0em"],
      rotateZ: [6, 0],
      duration: 750,
      delay: stagger(34, { start: delay }),
      ease: "out(3)",
    });

    return () => {
      try {
        split.revert();
      } catch {
        /* noop */
      }
    };
  }, [text, delay]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
