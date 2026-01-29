"use client";

import { motion } from "framer-motion";
import { Filter, ArrowUpDown } from "lucide-react";

export type SortOption = "recent" | "oldest" | "title";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  locale?: "en" | "es";
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  locale = "en",
}: CategoryFilterProps) {
  const allLabel = locale === "es" ? "Todos" : "All";

  const sortOptions: { value: SortOption; label: string }[] =
    locale === "es"
      ? [
          { value: "recent", label: "Más reciente" },
          { value: "oldest", label: "Más antiguo" },
          { value: "title", label: "Título (A-Z)" },
        ]
      : [
          { value: "recent", label: "Most Recent" },
          { value: "oldest", label: "Oldest First" },
          { value: "title", label: "Title (A-Z)" },
        ];

  return (
    <div className="mb-8 space-y-4">
      {/* Category Filter */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-4 h-4 text-slate-500 dark:text-slate-400" />
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {locale === "es" ? "Filtrar por categoría" : "Filter by category"}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onCategoryChange(null)}
            className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
              selectedCategory === null
                ? "bg-indigo-600 text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            {allLabel}
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onCategoryChange(category)}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Sort Options */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <ArrowUpDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {locale === "es" ? "Ordenar por" : "Sort by"}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {sortOptions.map((option) => (
            <motion.button
              key={option.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSortChange(option.value)}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                sortBy === option.value
                  ? "bg-purple-600 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {option.label}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
