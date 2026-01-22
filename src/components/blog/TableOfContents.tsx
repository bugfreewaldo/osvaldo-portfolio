"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll("article h2, article h3")
    )
      .map((elem) => ({
        id: elem.id,
        text: elem.textContent || "",
        level: Number(elem.tagName.substring(1)),
      }))
      .filter((heading) => heading.id && heading.id.trim() !== "");
    setHeadings(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    elements.forEach(({ id }) => {
      const elem = document.getElementById(id);
      if (elem) observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="text-sm">
      <div className="flex items-center gap-2 mb-3 text-slate-900 dark:text-white font-medium">
        <List className="w-4 h-4" />
        On this page
      </div>
      <ul className="space-y-2">
        {headings.map((heading, index) => (
          <li
            key={heading.id || `heading-${index}`}
            style={{ paddingLeft: heading.level === 3 ? "1rem" : 0 }}
          >
            <a
              href={`#${heading.id}`}
              className={`block py-1 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                activeId === heading.id
                  ? "text-indigo-600 dark:text-indigo-400 font-medium"
                  : "text-slate-600 dark:text-slate-400"
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
