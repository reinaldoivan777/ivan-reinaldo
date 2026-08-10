import type { Tradeoff as TradeoffType } from "@/types/portfolio";

interface TradeoffProps {
  tradeoff: TradeoffType;
}

export function Tradeoff({ tradeoff }: TradeoffProps) {
  return (
    <article className="border border-border bg-surface p-5">
      <h3 className="text-xl font-semibold text-foreground">{tradeoff.title}</h3>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{tradeoff.context}</p>

      <div className="mt-5">
        <p className="font-mono text-xs uppercase text-muted">Advantages</p>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted-foreground">
          {tradeoff.advantages.map((advantage) => (
            <li key={advantage} className="flex gap-3">
              <span
                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span>{advantage}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-5 text-sm leading-6 text-muted-foreground">
        <span className="font-medium text-foreground">Limitation: </span>
        {tradeoff.limitation}
      </p>
    </article>
  );
}
