import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border bg-surface"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-[var(--container-inline)] py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[20rem_minmax(0,1fr)]">
          <div>
            <p className="font-mono text-xs font-medium uppercase text-accent">
              Experience
            </p>
            <h2
              id="experience-heading"
              className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl"
            >
              Production engineering across payments, platforms, and internal
              systems.
            </h2>
          </div>

          <div className="relative">
            <div
              className="absolute left-0 top-0 hidden h-full w-px bg-border sm:block"
              aria-hidden="true"
            />

            <div className="grid gap-10">
              {experience.map((item) => (
                <article
                  key={`${item.period}-${item.title}`}
                  className="relative grid gap-5 border-l border-border pl-5 sm:border-l-0 sm:pl-8"
                >
                  <span
                    className="absolute -left-[5px] top-1 hidden size-2.5 rounded-full border border-accent bg-surface sm:block"
                    aria-hidden="true"
                  />

                  <div className="grid gap-2 sm:grid-cols-[10rem_minmax(0,1fr)]">
                    <p className="font-mono text-sm leading-6 text-muted">{item.period}</p>
                    <div>
                      <h3 className="text-xl font-semibold leading-snug text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 font-mono text-xs uppercase text-muted">
                        {item.domain}
                      </p>
                    </div>
                  </div>

                  <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:ml-40">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 sm:ml-40">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
