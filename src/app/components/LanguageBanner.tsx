"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Languages, X } from "lucide-react";
import { hasCounterpart, localeFromPath, toLocalePath, type Locale } from "@/lib/i18n";

const PREF_KEY = "lang";

function readPref(): Locale | null {
  try {
    const v = localStorage.getItem(PREF_KEY);
    return v === "en" || v === "es" ? v : null;
  } catch {
    return null;
  }
}

export function saveLangPref(locale: Locale) {
  try {
    localStorage.setItem(PREF_KEY, locale);
  } catch {}
}

/** First of en/es in the device's language list, if any. */
function deviceLocale(): Locale | null {
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const l of langs) {
    const code = l?.toLowerCase().slice(0, 2);
    if (code === "es" || code === "en") return code;
  }
  return null;
}

const COPY = {
  es: { prompt: "¿Prefieres leer esta página en español?", go: "Ver en español", stay: "Seguir en inglés" },
  en: { prompt: "Prefer to read this page in English?", go: "View in English", stay: "Stay in Spanish" },
};

export default function LanguageBanner() {
  const pathname = usePathname();
  const pageLocale = localeFromPath(pathname);
  const [target, setTarget] = useState<{ locale: Locale; path: string } | null>(null);

  // Keep <html lang> in sync for screen readers and translators.
  useEffect(() => {
    document.documentElement.lang = pageLocale;
  }, [pageLocale]);

  useEffect(() => {
    setTarget(null);
    const wanted = readPref() ?? deviceLocale();
    if (!wanted || wanted === pageLocale || !hasCounterpart(pathname)) return;
    const path = toLocalePath(pathname, wanted);
    let cancelled = false;
    // Only suggest pages that actually exist (e.g. a post may be untranslated).
    fetch(path, { method: "HEAD" })
      .then((r) => {
        if (!cancelled && r.ok) setTarget({ locale: wanted, path });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [pathname, pageLocale]);

  if (!target) return null;
  const t = COPY[target.locale];

  return (
    <div className="print:hidden border-b border-accent/20 bg-accent/10">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        <span className="flex items-center gap-2 text-foreground">
          <Languages className="w-4 h-4 text-accent shrink-0" />
          {t.prompt}
        </span>
        <div className="flex items-center gap-2 ml-auto">
          <Link
            href={target.path}
            onClick={() => saveLangPref(target.locale)}
            className="px-3 py-1 rounded-md bg-accent text-white font-medium hover:bg-accent-soft transition-colors"
          >
            {t.go}
          </Link>
          <button
            onClick={() => {
              saveLangPref(pageLocale);
              setTarget(null);
            }}
            className="px-3 py-1 rounded-md text-muted hover:text-foreground hover:bg-surface-2 transition-colors"
          >
            {t.stay}
          </button>
          <button
            onClick={() => setTarget(null)}
            aria-label={target.locale === "es" ? "Cerrar" : "Close"}
            className="p-1 rounded-md text-muted hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
