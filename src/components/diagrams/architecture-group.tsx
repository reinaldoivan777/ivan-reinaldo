import type { ReactNode } from "react";

interface ArchitectureGroupProps {
  title: string;
  children: ReactNode;
}

export function ArchitectureGroup({ title, children }: ArchitectureGroupProps) {
  return (
    <section className="rounded-md border border-border bg-surface p-4">
      <h3 className="font-mono text-xs uppercase text-muted">{title}</h3>
      <div className="mt-4 grid gap-3">{children}</div>
    </section>
  );
}
