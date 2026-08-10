import type { EngineeringDecision as EngineeringDecisionType } from "@/types/portfolio";

interface EngineeringDecisionProps {
  decision: EngineeringDecisionType;
}

export function EngineeringDecision({ decision }: EngineeringDecisionProps) {
  return (
    <article className="border-t border-border pt-6 first:border-t-0 first:pt-0">
      <h3 className="text-xl font-semibold text-foreground">{decision.title}</h3>
      <div className="mt-4 grid gap-4 text-sm leading-6 text-muted-foreground">
        <p>{decision.context}</p>
        <p>
          <span className="font-medium text-foreground">Decision: </span>
          {decision.decision}
        </p>
        <p>
          <span className="font-medium text-foreground">Rationale: </span>
          {decision.rationale}
        </p>
        {decision.tradeoff ? (
          <p>
            <span className="font-medium text-foreground">Trade-off: </span>
            {decision.tradeoff}
          </p>
        ) : null}
      </div>
    </article>
  );
}
