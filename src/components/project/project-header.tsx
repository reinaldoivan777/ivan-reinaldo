import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { ProjectMetadata } from "./project-metadata";

interface ProjectHeaderProps {
  project: Project;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-[var(--container-inline)] py-16 sm:py-20">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft aria-hidden="true" size={16} />
          Back to work
        </Link>

        <div className="mt-10 max-w-4xl">
          <p className="font-mono text-xs font-medium uppercase leading-5 text-accent">
            {project.category}
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="mt-10">
          <ProjectMetadata items={project.metadata} />
        </div>
      </div>
    </header>
  );
}
