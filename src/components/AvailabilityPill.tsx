import Link from "next/link";
import { availability } from "@/lib/availability";

export default function AvailabilityPill({
  className = "",
  label = availability.short,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <Link
      href="/contact"
      className={`group inline-flex whitespace-nowrap items-center gap-2 rounded-full border border-available/30 bg-available/10 px-3 py-1 text-xs font-medium text-available transition-colors hover:bg-available/15 ${className}`}
    >
      <span className="relative flex h-2 w-2" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-available opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-available" />
      </span>
      {label}
    </Link>
  );
}
