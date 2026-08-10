import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArchitectureDiagram } from "@/components/diagrams/architecture-diagram";
import { EngineeringChallenge } from "@/components/project/engineering-challenge";
import { EngineeringDecision } from "@/components/project/engineering-decision";
import { ProjectHeader } from "@/components/project/project-header";
import { Tradeoff } from "@/components/project/tradeoff";
import { getProjectBySlug, projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/metadata";

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
    alternates: {
      canonical: absoluteUrl(`/work/${project.slug}`),
    },
    openGraph: {
      title: `${project.title} | Ivan Reinaldo`,
      description: project.description,
      type: "article",
      url: absoluteUrl(`/work/${project.slug}`),
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

  if (project.slug === "payment-platform") {
    return <PaymentPlatformCaseStudy project={project} />;
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
                    <span
                      className="mt-3 size-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
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

interface CaseStudyProps {
  project: NonNullable<ReturnType<typeof getProjectBySlug>>;
}

function PaymentPlatformCaseStudy({ project }: CaseStudyProps) {
  return (
    <>
      <ProjectHeader project={project} />

      <article className="bg-background">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-[var(--container-inline)] py-16 sm:py-20 lg:grid-cols-[20rem_minmax(0,1fr)]">
          <CaseStudySidebar project={project} />

          <div className="space-y-16">
            <CaseSection id="overview" title="Overview">
              <div className="space-y-5 text-base leading-7 text-muted-foreground">
                <p>
                  The Payment Transaction Platform is payment infrastructure for
                  initiating transactions, reconciling provider callbacks, and
                  keeping payment status visible across customer and merchant
                  experiences.
                </p>
                <p>
                  The system exists because payment flows are not completed in a
                  single request. A payment can remain pending while a provider
                  processes it, then later resolve through asynchronous webhook
                  events.
                </p>
                <p>
                  My work focused on backend payment flow design, transaction
                  state handling, webhook processing, Redis-backed coordination,
                  and real-time status updates.
                </p>
              </div>
            </CaseSection>

            <CaseSection id="problem" title="Problem">
              <div className="space-y-5 text-base leading-7 text-muted-foreground">
                <p>
                  Payment systems are inherently asynchronous. A transaction can
                  move through several states while the customer, merchant,
                  payment provider, and internal services need to stay aligned.
                </p>
                <div className="grid gap-2 rounded-md border border-border bg-surface p-5 font-mono text-sm text-muted-foreground sm:grid-cols-5">
                  {["PENDING", "PROCESSING", "SUCCESS", "FAILED", "EXPIRED"].map(
                    (state) => (
                      <span key={state}>{state}</span>
                    ),
                  )}
                </div>
                <p>
                  The backend needs to accept provider callbacks, verify that
                  they are trustworthy, prevent duplicate processing, update the
                  transaction record safely, and notify clients without exposing
                  internal provider details.
                </p>
              </div>
            </CaseSection>

            <CaseSection id="architecture" title="Architecture">
              <div className="space-y-6">
                <p className="text-base leading-7 text-muted-foreground">
                  The architecture separates payment initiation from payment
                  reconciliation. The API creates the transaction, the payment
                  provider completes processing asynchronously, and webhook
                  events drive the final state transition.
                </p>

                <ArchitectureDiagram
                  title="Payment transaction flow"
                  nodes={[
                    {
                      id: "client",
                      label: "Client",
                      type: "client",
                      description: "Customer or merchant-facing application.",
                      connectionLabel: "request",
                    },
                    {
                      id: "api",
                      label: "API",
                      type: "service",
                      description: "Receives payment initiation requests.",
                      connectionLabel: "create",
                    },
                    {
                      id: "payment-service",
                      label: "Payment Service",
                      type: "service",
                      description: "Creates and validates transaction records.",
                      connectionLabel: "charge",
                    },
                    {
                      id: "provider",
                      label: "Payment Provider",
                      type: "external",
                      description: "Processes payment asynchronously.",
                      connectionLabel: "webhook",
                    },
                    {
                      id: "processor",
                      label: "Transaction Processor",
                      type: "worker",
                      description:
                        "Verifies webhook events and applies state transitions.",
                    },
                  ]}
                  storageNodes={[
                    {
                      id: "postgresql",
                      label: "PostgreSQL",
                      type: "database",
                      description:
                        "Stores transaction records and status history.",
                    },
                    {
                      id: "redis",
                      label: "Redis",
                      type: "cache",
                      description:
                        "Coordinates short-lived status updates and realtime delivery.",
                    },
                  ]}
                />
              </div>
            </CaseSection>

            {project.challenges?.length ? (
              <CaseSection id="challenges" title="Engineering Challenges">
                <div className="grid gap-5">
                  {project.challenges.map((challenge) => (
                    <EngineeringChallenge
                      key={challenge.title}
                      challenge={challenge}
                    />
                  ))}
                </div>
              </CaseSection>
            ) : null}

            {project.decisions?.length ? (
              <CaseSection id="decisions" title="Engineering Decisions">
                <div className="grid gap-6">
                  {project.decisions.map((decision) => (
                    <EngineeringDecision
                      key={decision.title}
                      decision={decision}
                    />
                  ))}
                </div>
              </CaseSection>
            ) : null}

            {project.tradeoffs?.length ? (
              <CaseSection id="tradeoffs" title="Trade-offs">
                <div className="grid gap-5">
                  {project.tradeoffs.map((tradeoff) => (
                    <Tradeoff key={tradeoff.title} tradeoff={tradeoff} />
                  ))}
                </div>
              </CaseSection>
            ) : null}

            <CaseSection id="stack" title="Tech Stack">
              <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
                {[
                  { label: "Backend", values: ["Node.js", "TypeScript"] },
                  { label: "Data", values: ["PostgreSQL", "Redis"] },
                  {
                    label: "Architecture",
                    values: ["REST", "Webhooks", "SSE", "Caching"],
                  },
                  { label: "Infrastructure", values: ["Docker"] },
                ].map((group) => (
                  <div key={group.label} className="bg-surface p-5">
                    <h3 className="font-mono text-xs uppercase text-muted">
                      {group.label}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.values.map((value) => (
                        <span
                          key={value}
                          className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CaseSection>

            <CaseSection id="result" title="Result">
              <p className="text-base leading-7 text-muted-foreground">
                The platform demonstrates production payment engineering:
                asynchronous provider coordination, protected webhook handling,
                idempotent transaction processing, predictable state
                transitions, and real-time payment status visibility.
              </p>
            </CaseSection>
          </div>
        </div>
      </article>
    </>
  );
}

function CaseStudySidebar({ project }: CaseStudyProps) {
  return (
    <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
      <div>
        <p className="font-mono text-xs uppercase text-muted">Role</p>
        <p className="mt-2 text-sm font-medium text-foreground">{project.role}</p>
      </div>

      <div>
        <p className="font-mono text-xs uppercase text-muted">Source</p>
        <p className="mt-2 text-sm font-medium text-foreground">{project.source}</p>
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
  );
}

interface CaseSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function CaseSection({ id, title, children }: CaseSectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`} className="text-2xl font-semibold text-foreground">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
