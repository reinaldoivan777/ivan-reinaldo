import { metrics } from "@/data/metrics";

export function Metrics() {
  return (
    <section className="border-b border-border bg-surface" aria-labelledby="metrics-heading">
      <div className="mx-auto w-full max-w-6xl px-[var(--container-inline)] py-6">
        <h2 id="metrics-heading" className="sr-only">
          Engineering metrics
        </h2>

        <div className="grid grid-cols-2 divide-x divide-y divide-border border border-border bg-background sm:grid-cols-4 sm:divide-y-0">
          {metrics.map((metric) => (
            <div key={`${metric.value}-${metric.label}`} className="min-h-28 p-5">
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
