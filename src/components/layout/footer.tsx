import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/data/social";

const footerLinks = socialLinks.filter((link) => link.href);

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-[var(--container-inline)] py-10 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="text-sm font-semibold text-foreground">Ivan Reinaldo</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
            Full-Stack Software Engineer focused on reliable web applications,
            backend systems, and production engineering.
          </p>
          <p className="mt-4 font-mono text-xs text-muted">
            Built with Next.js + TypeScript
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          {footerLinks.length > 0 ? (
            <nav
              className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-muted-foreground"
              aria-label="Footer navigation"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href ?? "#"}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
                >
                  {link.label}
                  {link.external ? <ArrowUpRight aria-hidden="true" size={14} /> : null}
                </a>
              ))}
            </nav>
          ) : null}

          <p className="font-mono text-xs text-muted">© 2026</p>
        </div>
      </div>
    </footer>
  );
}
