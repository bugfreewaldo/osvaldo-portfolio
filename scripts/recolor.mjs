// One-off brand recolor: indigo/purple/cyan brand tokens -> Engineer's Terminal
// (signal orange #FF6A3D + teal #2DD4BF). Leaves the intentionally-varied
// per-project decorative gradients alone.
import { readFileSync, writeFileSync } from "node:fs";
import { globSync } from "node:fs";
import { execSync } from "node:child_process";

const O = "#FF6A3D";   // signal orange
const O2 = "#FF8A4C";  // orange (gradient end)
const OS = "#FF8A5B";  // soft orange (dark text)
const OL = "#FFB068";  // light orange
const T = "#2DD4BF";   // teal

const map = {
  // --- signature brand gradients (full strings) ---
  "from-indigo-500 via-purple-500 to-cyan-500": `from-[${O}] via-[#FF7E54] to-[${T}]`,
  "from-indigo-600 to-purple-600": `from-[${O}] to-[${O2}]`,
  "from-indigo-500 to-purple-500": `from-[${O}] to-[${O2}]`,
  "hover:from-indigo-500 hover:to-purple-500": `hover:from-[#FF7E54] hover:to-[#FF9B63]`,
  "dark:from-indigo-400 dark:to-purple-400": `dark:from-[${OS}] dark:to-[${OL}]`,
  "from-indigo-50 to-purple-50": `from-[${O}]/10 to-[${T}]/10`,
  "dark:from-indigo-950/30 dark:to-purple-950/30": `dark:from-[${O}]/14 dark:to-[${T}]/10`,
  "from-indigo-950/30": `from-[${O}]/14`,
  "to-purple-950/30": `to-[${T}]/10`,
  "from-indigo-900/20": `from-[${O}]/12`,
  "to-purple-900/20": `to-[${T}]/10`,
  "from-indigo-500/5": `from-[${O}]/5`,
  "to-purple-500/5": `to-[${T}]/5`,
  "from-indigo-500/10": `from-[${O}]/10`,
  "from-purple-500/10": `from-[${O}]/10`,
  "to-purple-500/10": `to-[${T}]/10`,
  "to-cyan-500/10": `to-[${T}]/10`,
  "from-indigo-50": `from-[${O}]/10`,
  "to-purple-50": `to-[${T}]/10`,
  "via-indigo-950": `via-[#1c1410]`,

  // --- solid accent utilities (prefixed handled first via length sort) ---
  "group-hover:text-indigo-600": `group-hover:text-[${O}]`,
  "group-hover:text-indigo-400": `group-hover:text-[${OS}]`,
  "dark:hover:text-indigo-400": `dark:hover:text-[${OS}]`,
  "dark:text-indigo-400": `dark:text-[${OS}]`,
  "dark:text-indigo-300": `dark:text-[${OL}]`,
  "dark:text-indigo-900/50": `dark:text-[${O}]/50`,
  "dark:bg-indigo-900/30": `dark:bg-[${O}]/15`,
  "dark:bg-indigo-900/20": `dark:bg-[${O}]/12`,
  "dark:bg-indigo-400/20": `dark:bg-[${O}]/20`,
  "dark:border-indigo-800": `dark:border-[${O}]/30`,
  "dark:border-indigo-600": `dark:border-[${O}]/40`,
  "dark:border-indigo-500/10": `dark:border-[${O}]/10`,
  "hover:border-indigo-500/50": `hover:border-[${O}]/50`,
  "hover:border-indigo-500/30": `hover:border-[${O}]/30`,
  "hover:border-indigo-400": `hover:border-[${OS}]`,
  "hover:border-indigo-600": `hover:border-[${O}]`,
  "hover:border-indigo-500": `hover:border-[${O}]`,
  "hover:text-indigo-600": `hover:text-[${O}]`,
  "hover:text-indigo-500": `hover:text-[${O}]`,
  "hover:bg-indigo-900/50": `hover:bg-[${O}]/25`,
  "hover:bg-indigo-900/30": `hover:bg-[${O}]/20`,
  "hover:bg-indigo-200": `hover:bg-[${O}]/20`,
  "hover:bg-indigo-100": `hover:bg-[${O}]/10`,
  "hover:bg-indigo-700": `hover:bg-[#FF7E54]`,
  "shadow-indigo-500/25": `shadow-[${O}]/25`,
  "shadow-indigo-500/30": `shadow-[${O}]/30`,
  "shadow-indigo-500/20": `shadow-[${O}]/20`,
  "shadow-indigo-500/10": `shadow-[${O}]/10`,
  "shadow-indigo-500/5": `shadow-[${O}]/5`,
  "border-indigo-500/50": `border-[${O}]/50`,
  "border-indigo-500/20": `border-[${O}]/20`,
  "border-indigo-300/20": `border-[${O}]/20`,
  "border-indigo-200": `border-[${O}]/30`,
  "border-indigo-400": `border-[${OS}]`,
  "ring-indigo-500": `ring-[${O}]`,
  "ring-indigo-400/20": `ring-[${OS}]/20`,
  "decoration-indigo-500/30": `decoration-[${O}]/30`,
  "decoration-indigo-500": `decoration-[${O}]`,
  "text-indigo-400/10": `text-[${OS}]/10`,
  "text-indigo-600": `text-[${O}]`,
  "text-indigo-700": `text-[${O}]`,
  "text-indigo-500": `text-[${O}]`,
  "text-indigo-400": `text-[${OS}]`,
  "text-indigo-300": `text-[${OL}]`,
  "text-indigo-200": `text-[#FFC79A]`,
  "bg-indigo-500/10": `bg-[${O}]/10`,
  "bg-indigo-100": `bg-[${O}]/10`,
  "bg-indigo-600": `bg-[${O}]`,
  "bg-indigo-500": `bg-[${O}]`,
  "bg-indigo-50": `bg-[${O}]/8`,
  "bg-indigo-400/30": `bg-[${OS}]/30`,
};

// Apply longest keys first so prefixed variants win over their substrings.
const keys = Object.keys(map).sort((a, b) => b.length - a.length);

const files = execSync('git ls-files "src/**/*.tsx"', { encoding: "utf8" })
  .trim()
  .split("\n")
  .filter(Boolean);

let changed = 0;
for (const f of files) {
  let src = readFileSync(f, "utf8");
  const before = src;
  for (const k of keys) {
    if (src.includes(k)) src = src.split(k).join(map[k]);
  }
  if (src !== before) {
    writeFileSync(f, src);
    changed++;
    console.log("recolored", f);
  }
}
console.log(`\nDone. ${changed} files changed.`);
