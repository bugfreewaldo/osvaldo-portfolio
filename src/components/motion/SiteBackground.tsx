/**
 * "Paper" backdrop: a faint dotted grid like engineering/notebook paper,
 * fading toward the edges, plus a soft vignette. Static, cheap, and calm —
 * the content is the show.
 */
export default function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(var(--grid-line)_1.2px,transparent_1.2px)] bg-[size:22px_22px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_85%)]" />
      <div className="absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--accent)_7%,transparent),transparent_70%)]" />
    </div>
  );
}
