import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectHeader } from "@/components/project/project-header";
import { getProjectBySlug, projects } from "@/data/projects";

interface WorkPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Ivan Reinaldo`,
      description: project.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Ivan Reinaldo`,
      description: project.description,
    },
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHeader project={project} />

      <article className="bg-background">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-[var(--container-inline)] py-16 sm:py-20 lg:grid-cols-[20rem_minmax(0,1fr)]">
          <aside className="space-y-8">
            <div>
              <p className="font-mono text-xs uppercase text-muted">Source</p>
              <p className="mt-2 text-sm font-medium text-foreground">
                {project.source}
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase text-muted">Stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-12">
            <section aria-labelledby="overview-heading">
              <h2
                id="overview-heading"
                className="text-2xl font-semibold text-foreground"
              >
                Overview
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
                {project.description}
              </p>
            </section>

            <section aria-labelledby="highlights-heading">
              <h2
                id="highlights-heading"
                className="text-2xl font-semibold text-foreground"
              >
                Technical Highlights
              </h2>
              <ul className="mt-5 grid gap-3 text-base leading-7 text-muted-foreground sm:grid-cols-2">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
