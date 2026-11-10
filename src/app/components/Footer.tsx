import Link from "next/link";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import AvailabilityPill from "@/components/AvailabilityPill";
import { availability } from "@/lib/availability";

const socials = [
  { href: "https://github.com/bugfreewaldo", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/osvaldorestrepo", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:me@osvaldorestrepo.dev", icon: Mail, label: "Email" },
  { href: "https://www.instagram.com/waldos.code.lab/", icon: Instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="mt-24 px-4 pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="border-t border-line" />
        <div className="grid gap-10 pt-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl text-foreground">Get in touch</p>
            <p className="mt-3 max-w-md leading-relaxed text-muted">
              {availability.detail}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <AvailabilityPill />
              <a
                href="mailto:me@osvaldorestrepo.dev"
                className="font-mono text-sm text-foreground underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
              >
                me@osvaldorestrepo.dev
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-muted">Pages</p>
            <ul className="mt-3 space-y-1.5 text-[0.95rem]">
              {[
                ["/projects", "Projects"],
                ["/case-studies", "Case studies"],
                ["/blog", "Blog"],
                ["/about", "About"],
                ["/now", "Now"],
                ["/uses", "Uses"],
                ["/testimonials", "Testimonials"],
                ["/process", "Process"],
                ["/es/blog", "En español"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-foreground/85 hover:text-accent">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-muted">Elsewhere</p>
            <div className="mt-3 flex gap-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={s.label}
                  className="rounded-md p-2 text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <a
              href="/feed.xml"
              className="mt-3 inline-block font-mono text-xs text-muted hover:text-accent"
            >
              RSS · /feed.xml
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-line pt-5 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Osvaldo Restrepo · Panama City, Panama</p>
          <p>Built with AI, obviously.</p>
        </div>
      </div>
    </footer>
  );
}
