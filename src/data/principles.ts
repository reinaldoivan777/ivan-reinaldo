import type { Principle } from "@/types/portfolio";

export const principles = [
  {
    title: "Reliability First",
    description:
      "Production systems should fail predictably, recover safely, and make operational problems visible.",
  },
  {
    title: "Simple Before Distributed",
    description:
      "Use the simplest architecture that satisfies the requirements before adding distributed complexity.",
  },
  {
    title: "Measure Before Optimizing",
    description:
      "Performance decisions should come from observed bottlenecks, not assumptions.",
  },
  {
    title: "Security by Design",
    description:
      "Authentication, authorization, validation, and secrets management belong in the architecture from the start.",
  },
  {
    title: "Observability Matters",
    description:
      "Systems need enough logs, metrics, and error context to understand production failures quickly.",
  },
] satisfies Principle[];
