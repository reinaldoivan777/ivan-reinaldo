import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { socialLinks } from "@/data/social";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Engineering", href: "/#engineering" },
  { label: "About", href: "/#about" },
] as const;

const socialNavItems = socialLinks.filter(
  (link) => link.href && (link.key === "github" || link.key === "linkedin"),
);

const resumeLink = socialLinks.find((link) => link.key === "resume" && link.href);

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/88 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-[var(--container-inline)]">
        <Link
          href="/"
          className="flex min-w-0 flex-col leading-none no-underline"
          aria-label="Ivan Reinaldo home"
        >
          <span className="text-sm font-semibold tracking-normal text-foreground">
            Ivan Reinaldo
          </span>
          <span className="mt-1 hidden font-mono text-[0.68rem] uppercase text-muted sm:block">
            Full-Stack Software Engineer
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          {socialNavItems.map((item) => (
            <a
              key={item.key}
              href={item.href ?? "#"}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
              {item.external ? <ArrowUpRight aria-hidden="true" size={14} /> : null}
            </a>
          ))}

          {resumeLink?.href ? (
            <a
              href={resumeLink.href}
              className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-surface px-3 text-sm font-medium text-foreground shadow-soft transition-colors hover:border-border-strong hover:bg-surface-muted"
            >
              <FileText aria-hidden="true" size={15} />
              Resume
            </a>
          ) : null}

          <ThemeToggle />
        </div>

        <MobileNav navItems={navItems} socialItems={socialNavItems} resumeLink={resumeLink} />
      </div>
    </header>
  );
}
