import type { Project } from "@/types/portfolio";

export const projects = [
  {
    slug: "payment-platform",
    title: "Payment Transaction Platform",
    category: "FINTECH / PAYMENT INFRASTRUCTURE",
    description:
      "Payment infrastructure supporting multiple payment channels with asynchronous transaction processing and real-time payment status updates.",
    source: "Professional Experience",
    role: "Full-Stack Engineer",
    domain: "Fintech",
    status: "Production",
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    highlights: [
      "Webhook processing",
      "Real-time status updates",
      "Transaction state management",
      "Payment provider integration",
      "Idempotent backend workflows",
    ],
    links: [
      {
        label: "View Case Study",
        href: "/work/payment-platform",
      },
    ],
    metadata: [
      {
        label: "Focus",
        value: "Backend / Payments / Infrastructure",
      },
      {
        label: "Domain",
        value: "Fintech",
      },
      {
        label: "Status",
        value: "Production",
      },
    ],
    challenges: [
      {
        title: "Preventing Duplicate Webhook Processing",
        problem:
          "Payment providers may deliver the same webhook event more than once.",
        decision: "Process payment events idempotently.",
        implementation:
          "Use transaction identifiers and controlled state transitions so repeated events cannot apply the same state change multiple times.",
        tradeoff:
          "Idempotency adds persistence and validation work, but it prevents inconsistent payment states.",
        result:
          "Duplicate provider events do not create duplicate payment processing behavior.",
      },
    ],
    decisions: [
      {
        title: "Why asynchronous webhook processing?",
        context:
          "Payment transactions do not complete in a single synchronous request-response cycle.",
        decision:
          "Use provider webhooks as the source for transaction state updates after payment initiation.",
        rationale:
          "This keeps the user-facing flow responsive while allowing the backend to reconcile provider events as they arrive.",
        tradeoff:
          "The system needs stronger state management because transaction completion happens outside the original request.",
      },
      {
        title: "Why Redis?",
        context:
          "Payment status updates and short-lived coordination benefit from fast access patterns.",
        decision: "Use Redis for caching and real-time update coordination.",
        rationale:
          "Redis supports low-latency reads and transient state without overloading the primary database.",
        tradeoff:
          "Cached state must be invalidated carefully to avoid stale payment status displays.",
      },
    ],
    tradeoffs: [
      {
        title: "SSE vs WebSocket",
        context:
          "Payment status updates primarily move from the server to the client.",
        advantages: [
          "Simpler protocol",
          "Native browser support",
          "Automatic reconnection",
          "Lower infrastructure complexity",
        ],
        limitation:
          "SSE is not suited for bidirectional real-time communication.",
      },
    ],
    featured: true,
  },
  {
    slug: "applyflow",
    title: "ApplyFlow",
    category: "FULL-STACK / SAAS",
    description:
      "Job application tracking platform with authentication, PostgreSQL-backed data, and a responsive Kanban workflow.",
    source: "Personal Project",
    role: "Full-Stack Engineer",
    domain: "SaaS",
    status: "Shipped",
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    highlights: [
      "Authentication",
      "Responsive Kanban interface",
      "PostgreSQL data modeling",
      "End-to-end product ownership",
    ],
    links: [
      {
        label: "View Case Study",
        href: "/work/applyflow",
      },
    ],
    metadata: [
      {
        label: "Focus",
        value: "Full-Stack Product Development",
      },
      {
        label: "Domain",
        value: "SaaS",
      },
    ],
    featured: true,
  },
  {
    slug: "api-management",
    title: "API Management Platform",
    category: "BACKEND / API INFRASTRUCTURE",
    description:
      "API infrastructure for fine-grained permissions, dynamic API configuration, field filtering, documentation, authentication, authorization, and rate limiting.",
    source: "Professional Experience",
    role: "Backend Engineer",
    domain: "API Infrastructure",
    status: "Private",
    technologies: ["NestJS", "PostgreSQL", "Redis", "OpenAPI", "Docker"],
    highlights: [
      "API gateway concepts",
      "Fine-grained permissions",
      "Dynamic API configuration",
      "Response field filtering",
      "Consumer-specific documentation",
      "Rate limiting",
    ],
    links: [
      {
        label: "View Case Study",
        href: "/work/api-management",
      },
    ],
    metadata: [
      {
        label: "Focus",
        value: "Backend / API Infrastructure",
      },
      {
        label: "Domain",
        value: "Platform Engineering",
      },
    ],
    featured: true,
  },
  {
    slug: "rag-workflow",
    title: "RAG Workflow Builder",
    category: "AI / FULL-STACK",
    description:
      "Workflow builder for retrieval-augmented generation flows spanning knowledge retrieval, LLM orchestration, and answer generation.",
    source: "Personal Project",
    role: "Full-Stack Engineer",
    domain: "AI",
    status: "Concept",
    technologies: ["ReactFlow", "TypeScript", "Embeddings", "Vector Retrieval", "LLM APIs"],
    highlights: [
      "Visual workflow builder",
      "RAG orchestration",
      "Embedding-based retrieval",
      "LLM integration",
    ],
    links: [
      {
        label: "View Case Study",
        href: "/work/rag-workflow",
      },
    ],
    metadata: [
      {
        label: "Focus",
        value: "AI / Full-Stack Workflow Systems",
      },
    ],
    featured: false,
  },
] satisfies Project[];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
