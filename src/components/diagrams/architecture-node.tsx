import {
  Boxes,
  CircleDot,
  Cloud,
  Database,
  HardDrive,
  Monitor,
  Server,
} from "lucide-react";

export type ArchitectureNodeType =
  | "client"
  | "service"
  | "database"
  | "cache"
  | "external"
  | "queue"
  | "worker";

interface ArchitectureNodeProps {
  label: string;
  type: ArchitectureNodeType;
  description?: string;
}

const nodeIcons = {
  client: Monitor,
  service: Server,
  database: Database,
  cache: HardDrive,
  external: Cloud,
  queue: Boxes,
  worker: CircleDot,
} satisfies Record<ArchitectureNodeType, typeof Server>;

const nodeLabels = {
  client: "Client",
  service: "Service",
  database: "Database",
  cache: "Cache",
  external: "External Provider",
  queue: "Queue",
  worker: "Worker",
} satisfies Record<ArchitectureNodeType, string>;

export function ArchitectureNode({
  label,
  type,
  description,
}: ArchitectureNodeProps) {
  const Icon = nodeIcons[type];

  return (
    <div className="rounded-md border border-border bg-background p-4 shadow-soft">
      <div className="flex items-start gap-3">
        <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-accent">
          <Icon aria-hidden="true" size={16} />
        </span>
        <div className="min-w-0">
          <p className="font-mono text-[0.68rem] uppercase leading-4 text-muted">
            {nodeLabels[type]}
          </p>
          <p className="mt-1 text-sm font-semibold leading-5 text-foreground">
            {label}
          </p>
          {description ? (
            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
