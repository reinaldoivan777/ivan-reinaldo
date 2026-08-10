import type { SkillGroup } from "@/types/portfolio";

export const skillGroups = [
  {
    title: "Frontend Engineering",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "SSR",
      "SSG",
      "ISR",
      "State Management",
      "Design Systems",
    ],
  },
  {
    title: "Backend Engineering",
    items: ["Node.js", "NestJS", "REST", "GraphQL", "Webhooks", "Background Jobs"],
  },
  {
    title: "System Design",
    items: [
      "API Design",
      "Authentication",
      "Authorization",
      "Caching",
      "Event-driven Systems",
      "Real-time Updates",
    ],
  },
  {
    title: "Data & Caching",
    items: ["PostgreSQL", "MongoDB", "Redis", "Caching", "Data Modeling"],
  },
  {
    title: "Infrastructure",
    items: ["Docker", "CI/CD", "Vercel", "Reverse Proxy", "Environment Management"],
  },
  {
    title: "Security",
    items: [
      "JWT",
      "OAuth",
      "2FA",
      "Webhook Verification",
      "Rate Limiting",
      "Input Validation",
    ],
  },
] satisfies SkillGroup[];
