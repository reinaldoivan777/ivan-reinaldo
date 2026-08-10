import { principles } from "@/data/principles";

export function Principles() {
  return (
    <section
      className="border-t border-border bg-surface"
      aria-labelledby="principles-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-[var(--container-inline)] py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[20rem_minmax(0,1fr)]">
          <div>
            <p className="font-mono text-xs font-medium uppercase text-accent">
              How I Build Software
            </p>
            <h2
              id="principles-heading"
              className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl"
            >
              Engineering principles shaped by production systems.
            </h2>
          </div>

          <div className="grid gap-5">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className="grid gap-4 border-t border-border pt-5 first:border-t-0 first:pt-0 sm:grid-cols-[5rem_minmax(0,1fr)]"
              >
                <p className="font-mono text-sm text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
