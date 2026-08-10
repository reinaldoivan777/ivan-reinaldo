import { metrics } from "@/data/metrics";

export function Metrics() {
  return (
    <section className="border-b border-border bg-surface" aria-labelledby="metrics-heading">
      <div className="mx-auto w-full max-w-6xl px-[var(--container-inline)] py-6">
        <h2 id="metrics-heading" className="sr-only">
          Engineering metrics
        </h2>

        <div className="grid grid-cols-1 overflow-hidden border border-border bg-background min-[360px]:grid-cols-2 sm:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={`${metric.value}-${metric.label}`}
              className="min-h-28 border-b border-border p-5 min-[360px]:border-r sm:border-b-0 last:border-b-0 min-[360px]:even:border-r-0 sm:even:border-r sm:last:border-r-0"
            >
              <p className="font-mono text-sm font-semibold text-foreground">
                {metric.value}
              </p>
              <p className="mt-3 max-w-28 text-sm leading-5 text-muted-foreground">
                {metric.label}
              </p>
              {metric.supportingText ? (
                <p className="mt-2 text-xs leading-5 text-muted">
                  {metric.supportingText}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
