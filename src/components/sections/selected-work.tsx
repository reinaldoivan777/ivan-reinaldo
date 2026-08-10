import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/project/project-card";

export function SelectedWork() {
  return (
    <section id="work" className="bg-background" aria-labelledby="work-heading">
      <div className="mx-auto w-full max-w-6xl px-[var(--container-inline)] py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase text-accent">
            Selected Work
          </p>
          <h2
            id="work-heading"
            className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl"
          >
            Production systems and products I&apos;ve designed, built, and
            shipped.
          </h2>
        </div>

        <div className="mt-12 border-b border-border">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
