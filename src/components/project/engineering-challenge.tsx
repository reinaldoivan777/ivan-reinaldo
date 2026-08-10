import type { EngineeringChallenge as EngineeringChallengeType } from "@/types/portfolio";

interface EngineeringChallengeProps {
  challenge: EngineeringChallengeType;
}

export function EngineeringChallenge({ challenge }: EngineeringChallengeProps) {
  const rows = [
    { label: "Problem", value: challenge.problem },
    { label: "Decision", value: challenge.decision },
    { label: "Implementation", value: challenge.implementation },
    { label: "Trade-off", value: challenge.tradeoff },
    { label: "Result", value: challenge.result },
  ].filter((row) => row.value);

  return (
    <article className="border border-border bg-surface p-5">
      <h3 className="text-xl font-semibold text-foreground">{challenge.title}</h3>
      <dl className="mt-5 grid gap-4">
        {rows.map((row) => (
          <div key={row.label} className="grid gap-1">
            <dt className="font-mono text-xs uppercase text-muted">{row.label}</dt>
            <dd className="text-sm leading-6 text-muted-foreground">{row.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
