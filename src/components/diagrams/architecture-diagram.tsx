import { ArchitectureConnection } from "./architecture-connection";
import { ArchitectureGroup } from "./architecture-group";
import { ArchitectureNode, type ArchitectureNodeType } from "./architecture-node";

export interface ArchitectureDiagramNode {
  id: string;
  label: string;
  type: ArchitectureNodeType;
  description?: string;
  connectionLabel?: string;
}

interface ArchitectureDiagramProps {
  title: string;
  nodes: ArchitectureDiagramNode[];
  storageNodes?: ArchitectureDiagramNode[];
}

export function ArchitectureDiagram({
  title,
  nodes,
  storageNodes = [],
}: ArchitectureDiagramProps) {
  return (
    <figure className="rounded-md border border-border bg-surface p-4 sm:p-5">
      <figcaption className="font-mono text-xs uppercase text-muted">
        {title}
      </figcaption>

      <div className="mt-5 grid gap-4">
        <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)_3rem_minmax(0,1fr)] sm:items-stretch">
          {nodes.map((node, index) => (
            <div key={node.id} className="contents">
              <ArchitectureNode
                label={node.label}
                type={node.type}
                description={node.description}
              />
              {index < nodes.length - 1 ? (
                <ArchitectureConnection label={node.connectionLabel} />
              ) : null}
            </div>
          ))}
        </div>

        {storageNodes.length > 0 ? (
          <ArchitectureGroup title="Persistence and coordination">
            <div className="grid gap-3 sm:grid-cols-2">
              {storageNodes.map((node) => (
                <ArchitectureNode
                  key={node.id}
                  label={node.label}
                  type={node.type}
                  description={node.description}
                />
              ))}
            </div>
          </ArchitectureGroup>
        ) : null}
      </div>
    </figure>
  );
}
