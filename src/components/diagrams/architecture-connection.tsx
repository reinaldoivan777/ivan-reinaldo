interface ArchitectureConnectionProps {
  label?: string;
}

export function ArchitectureConnection({ label }: ArchitectureConnectionProps) {
  return (
    <div className="flex min-h-8 items-center justify-center" aria-hidden="true">
      <div className="hidden w-full items-center gap-2 sm:flex">
        <span className="h-px flex-1 bg-border" />
        {label ? (
          <span className="shrink-0 rounded-full border border-border bg-surface px-2 py-1 font-mono text-[0.65rem] uppercase text-muted">
            {label}
          </span>
        ) : null}
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="grid justify-items-center gap-1 sm:hidden">
        <span className="h-5 w-px bg-border" />
        {label ? (
          <span className="rounded-full border border-border bg-surface px-2 py-1 font-mono text-[0.65rem] uppercase text-muted">
            {label}
          </span>
        ) : null}
        <span className="text-muted">↓</span>
      </div>
    </div>
  );
}
