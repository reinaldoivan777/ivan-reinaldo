import type { ProjectMetadataItem } from "@/types/portfolio";

interface ProjectMetadataProps {
  items: ProjectMetadataItem[];
}

export function ProjectMetadata({ items }: ProjectMetadataProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <dl className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
      {items.map((item) => (
        <div key={`${item.label}-${item.value}`} className="bg-surface p-5">
          <dt className="font-mono text-xs uppercase text-muted">{item.label}</dt>
          <dd className="mt-2 text-sm font-medium leading-6 text-foreground">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
