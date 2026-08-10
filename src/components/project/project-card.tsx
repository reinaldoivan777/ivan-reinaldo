import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="group grid gap-8 border-t border-border py-10 first:border-t-0 md:grid-cols-[7rem_minmax(0,1fr)] md:py-12">
      <div className="flex flex-wrap items-center justify-between gap-3 md:block">
        <p className="font-mono text-sm text-muted">
          {String(index + 1).padStart(2, "0")}
        </p>
        {project.status ? (
          <p className="mt-0 font-mono text-xs uppercase leading-5 text-muted md:mt-5">
            {project.status}
          </p>
        ) : null}
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div>
          <p className="font-mono text-xs font-medium uppercase leading-5 text-accent">
            {project.category}
          </p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {technology}
              </span>
            ))}
          </div>

          {project.links.length > 0 ? (
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
              {project.links.map((link) => {
                const isInternal = link.href.startsWith("/");
                const className =
                  "inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline";

                if (isInternal) {
                  return (
                    <Link key={link.href} href={link.href} className={className}>
                      {link.label}
                      <ArrowRight
                        aria-hidden="true"
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>
                  );
                }

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className={className}
                  >
                    {link.label}
                    <ExternalLink aria-hidden="true" size={15} />
                  </a>
                );
              })}
            </div>
          ) : null}
        </div>

        <div className="grid content-start gap-5">
          <div>
            <p className="font-mono text-xs uppercase text-muted">Source</p>
            <p className="mt-2 text-sm font-medium text-foreground">{project.source}</p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase text-muted">Technical Highlights</p>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted-foreground">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
