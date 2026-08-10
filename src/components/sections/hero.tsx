import { ArrowDown, FileText } from "lucide-react";
import { socialLinks } from "@/data/social";

const resumeLink = socialLinks.find((link) => link.key === "resume" && link.href);
const availableSocialLinks = socialLinks.filter(
  (link) => link.href && link.key !== "resume",
);

export function Hero() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-6xl content-center gap-10 px-[var(--container-inline)] py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end lg:py-28">
        <div className="max-w-4xl">
          <p className="font-mono text-xs font-medium uppercase tracking-normal text-accent">
            Full-Stack Software Engineer
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-normal text-foreground sm:text-6xl sm:leading-[1.02] lg:text-7xl">
            Building reliable web applications, backend systems, and
            developer-focused products.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            I specialize in TypeScript, React, Next.js and Node.js, with
            experience building production systems across fintech, payments and
            SaaS.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-muted-foreground sm:w-auto"
            >
              View My Work
              <ArrowDown aria-hidden="true" size={16} />
            </a>

            {resumeLink?.href ? (
              <a
                href={resumeLink.href}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-border bg-surface px-4 text-sm font-medium text-foreground shadow-soft transition-colors hover:border-border-strong hover:bg-surface-muted sm:w-auto"
              >
                <FileText aria-hidden="true" size={16} />
                Download Resume
              </a>
            ) : null}
          </div>

          {availableSocialLinks.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-muted-foreground">
              {availableSocialLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href ?? "#"}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <aside
          className="grid gap-3 border-l-0 border-border pt-2 font-mono text-xs uppercase text-muted lg:border-l lg:pl-6"
          aria-label="Engineering focus"
        >
          <span>6+ Years Experience</span>
          <span>Full-Stack</span>
          <span>Backend</span>
          <span>System Design</span>
        </aside>
      </div>
    </section>
  );
}
