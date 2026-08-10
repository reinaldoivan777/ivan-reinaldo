export function About() {
  return (
    <section
      id="about"
      className="border-t border-border bg-background"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-[var(--container-inline)] py-20 sm:py-24 lg:grid-cols-[20rem_minmax(0,1fr)]">
        <div>
          <p className="font-mono text-xs font-medium uppercase text-accent">About</p>
          <h2
            id="about-heading"
            className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl"
          >
            Full-stack engineer focused on reliable product systems.
          </h2>
        </div>

        <div className="max-w-3xl space-y-6 text-lg leading-8 text-muted-foreground">
          <p>
            I&apos;m a Full-Stack Software Engineer focused on building reliable
            web applications and backend systems.
          </p>
          <p>
            My experience spans frontend architecture, backend APIs, payment
            integrations, caching, authentication, production infrastructure, and
            government-scale API platform design.
          </p>
          <p>
            I enjoy solving engineering problems where product requirements meet
            system reliability and developer experience.
          </p>
        </div>
      </div>
    </section>
  );
}
