// Bilingual routing helpers. English lives at "/<path>", Spanish at "/es/<path>".

export type Locale = "en" | "es";

// Top-level sections that have a Spanish mirror under /es.
// Blog posts are matched separately (only translated slugs exist in Spanish).
export const ES_SECTIONS = [
  "",
  "/about",
  "/resume",
  "/contact",
  "/projects",
  "/uses",
  "/testimonials",
  "/now",
  "/process",
  "/case-studies",
  "/ai-engineer-panama",
  "/blog",
];

export function localeFromPath(pathname: string): Locale {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}

export function stripLocale(pathname: string): string {
  if (pathname === "/es") return "/";
  if (pathname.startsWith("/es/")) return pathname.slice(3);
  return pathname;
}

export function toLocalePath(pathname: string, locale: Locale): string {
  const base = stripLocale(pathname);
  if (locale === "en") return base;
  return base === "/" ? "/es" : `/es${base}`;
}

/** Prefix an English href for the given locale ("/about" → "/es/about"). */
export function href(path: string, locale: Locale): string {
  return locale === "es" ? toLocalePath(path, "es") : path;
}

/** Whether the counterpart of this path is expected to exist. */
export function hasCounterpart(pathname: string): boolean {
  const base = stripLocale(pathname);
  if (base.startsWith("/blog/category")) return false;
  return ES_SECTIONS.some((s) => (s === "" ? base === "/" : base === s || base.startsWith(`${s}/`)));
}
