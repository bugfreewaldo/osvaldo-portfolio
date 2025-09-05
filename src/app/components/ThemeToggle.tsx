"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // On mount, read saved theme or system preference
  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(saved ? saved === "dark" : prefersDark);
    } catch {
      // ignore
    }
  }, []);

  if (!mounted) return null;

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    const root = document.documentElement;
    if (next) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="px-3 py-1.5 rounded-lg ring-1 ring-slate-300 hover:bg-slate-100
                 dark:ring-slate-700 dark:hover:bg-slate-800"
    >
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
