import { skillGroups } from "@/data/skills";

export function Expertise() {
  return (
    <section
      id="engineering"
      className="border-t border-border bg-background"
      aria-labelledby="engineering-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-[var(--container-inline)] py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[20rem_minmax(0,1fr)]">
          <div>
            <p className="font-mono text-xs font-medium uppercase text-accent">
              Engineering Expertise
            </p>
            <h2
              id="engineering-heading"
              className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl"
            >
              Practical capabilities across frontend, backend, data, and
              infrastructure.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              The focus is not isolated tools, but how they fit into reliable
              product and platform engineering work.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.title} className="bg-surface p-6">
                <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
