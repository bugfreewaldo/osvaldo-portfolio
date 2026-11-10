"use client";

import { useEffect, useMemo, useState } from "react";

/**
 * Figure 1 — a toy, causally-masked attention head view over a one-line bio.
 * Left column = queries, right column = keys. Hover/focus a query token to see
 * where it attends. Four hand-built heads mimic patterns that genuinely show up
 * in trained transformers: local/syntactic, semantic, previous-token, and the
 * attention sink on the first token.
 */

const TOKENS = ["<bos>", "I", "build", "AI", "systems", "that", "people", "can", "actually", "trust", "."];
const N = TOKENS.length;

type Head = { id: string; name: string; note: string; logit: (i: number, j: number) => number };

const SEMANTIC: Record<string, Record<string, number>> = {
  build: { I: 2.4 },
  AI: { build: 2.2, I: 0.6 },
  systems: { AI: 3, build: 1.6 },
  that: { systems: 2.8 },
  people: { systems: 1.2, that: 0.8 },
  can: { people: 2.6 },
  actually: { can: 2.2, people: 0.6 },
  trust: { AI: 2.6, systems: 2.1, people: 2.3, actually: 1.2 },
  ".": { trust: 2.2, build: 0.8 },
};

const HEADS: Head[] = [
  {
    id: "L4.H7",
    name: "semantic",
    note: "content-based — “trust” looks back at “AI”, “systems”, and “people”.",
    logit: (i, j) => (i === j ? 0.4 : SEMANTIC[TOKENS[i]]?.[TOKENS[j]] ?? 0),
  },
  {
    id: "L1.H2",
    name: "local",
    note: "distance-based — attention decays with distance, like a soft sliding window.",
    logit: (i, j) => 1.2 - 1.1 * (i - j),
  },
  {
    id: "L2.H0",
    name: "previous-token",
    note: "positional — it attends almost entirely to position i − 1, a building block of induction heads.",
    logit: (i, j) => (j === i - 1 ? 4.5 : i === 0 && j === 0 ? 4.5 : 0),
  },
  {
    id: "L9.H3",
    name: "sink",
    note: "a near no-op — when nothing is relevant it parks its mass on ⟨bos⟩, the attention sink.",
    logit: (i, j) => (j === 0 ? 3.4 : i === j ? 0.6 : 0),
  },
];

function softmaxRow(head: Head, i: number): number[] {
  // causal mask: query i may only attend to keys j <= i
  const logits = TOKENS.map((_, j) => (j <= i ? head.logit(i, j) : -Infinity));
  const max = Math.max(...logits);
  const exps = logits.map((l) => (l === -Infinity ? 0 : Math.exp(l - max)));
  const sum = exps.reduce((a, b) => a + b, 0);
  return exps.map((e) => e / sum);
}

const ROW = 27;
const TOP = 18;
const W = 340;
const XL = 112; // right edge of query labels
const XR = 228; // left edge of key labels
const H = TOP + ROW * N;

export default function AttentionFigure() {
  const [headIdx, setHeadIdx] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const [auto, setAuto] = useState(N - 2); // start on "trust"
  const head = HEADS[headIdx];
  const q = hover ?? auto;

  // Gentle auto-scan when nobody is interacting (skipped under reduced motion).
  useEffect(() => {
    if (hover !== null) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setAuto((a) => (a + 1) % N), 1800);
    return () => clearInterval(t);
  }, [hover]);

  const weights = useMemo(() => softmaxRow(head, q), [head, q]);
  const y = (k: number) => TOP + k * ROW;

  return (
    <figure className="not-prose">
      <div className="rounded-lg border border-line bg-surface/80 p-4 shadow-[0_1px_0_var(--line)] sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
            head view · causal · {head.id}
          </span>
          <div role="tablist" aria-label="Attention head" className="flex gap-1">
            {HEADS.map((h, k) => (
              <button
                key={h.id}
                role="tab"
                aria-selected={k === headIdx}
                onClick={() => setHeadIdx(k)}
                className={`rounded px-2 py-1 font-mono text-[0.68rem] transition-colors ${
                  k === headIdx
                    ? "bg-foreground text-background"
                    : "text-muted hover:bg-surface-2 hover:text-foreground"
                }`}
              >
                {h.name}
              </button>
            ))}
          </div>
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="mx-auto block w-full max-w-[380px]"
          role="img"
          aria-label={`Attention from token “${TOKENS[q]}” under the ${head.name} head`}
        >
          {/* edges */}
          {weights.map((w, j) =>
            w > 0.004 ? (
              <line
                key={`${q}-${j}`}
                x1={XL + 6}
                y1={y(q)}
                x2={XR - 6}
                y2={y(j)}
                stroke="var(--accent)"
                strokeOpacity={Math.min(1, 0.12 + w * 1.4)}
                strokeWidth={0.6 + w * 7}
                strokeLinecap="round"
                style={{ transition: "all 260ms ease" }}
              />
            ) : null
          )}

          {TOKENS.map((t, k) => {
            const active = k === q;
            const masked = k > q;
            return (
              <g key={t + k}>
                {/* query column */}
                <text
                  x={XL}
                  y={y(k)}
                  textAnchor="end"
                  dominantBaseline="middle"
                  tabIndex={0}
                  onMouseEnter={() => setHover(k)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(k)}
                  onBlur={() => setHover(null)}
                  className="cursor-pointer outline-none"
                  style={{
                    font: "500 13px var(--font-mono)",
                    fill: active ? "var(--accent)" : "var(--foreground)",
                    opacity: active ? 1 : 0.72,
                  }}
                >
                  {t}
                </text>
                {/* key column, shaded by weight */}
                <rect
                  x={XR - 2}
                  y={y(k) - 10}
                  width={Math.max(8, t.length * 8 + 8)}
                  height={20}
                  rx={3}
                  fill="var(--accent-2)"
                  fillOpacity={masked ? 0 : weights[k] * 0.55}
                  style={{ transition: "fill-opacity 260ms ease" }}
                />
                <text
                  x={XR + 2}
                  y={y(k)}
                  dominantBaseline="middle"
                  style={{
                    font: "500 13px var(--font-mono)",
                    fill: "var(--foreground)",
                    opacity: masked ? 0.22 : 0.85,
                  }}
                >
                  {t}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="mt-3 flex items-center justify-between font-mono text-[0.66rem] text-muted">
          <span>query → key</span>
          <span>
            max α = {Math.max(...weights).toFixed(2)} on “{TOKENS[weights.indexOf(Math.max(...weights))]}”
          </span>
        </div>
      </div>
      <figcaption className="mt-3 font-serif text-[0.95rem] leading-snug text-muted">
        <span className="font-semibold text-foreground">Figure 1.</span> A toy attention head over my
        one-line bio. Hover a token on the left. The <em>{head.name}</em> head is {head.note} Greyed keys
        are causally masked.
      </figcaption>
    </figure>
  );
}
