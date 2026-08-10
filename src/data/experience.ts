import type { ExperienceItem } from "@/types/portfolio";

export const experience = [
  {
    period: "Jan 2026 - Present",
    title: "Solution Architect & Backend Developer",
    domain: "Direktorat TI AHU, Kementerian Hukum dan HAM RI",
    description:
      "Architecting a 66-endpoint inter-agency API management platform integrating government agencies including DJP, KPK, OJK, and POLRI, with HMAC authentication, rate limiting, audit logging, and async processing.",
    technologies: [
      "NestJS",
      "Fastify",
      "Redis",
      "BullMQ",
      "ClickHouse",
      "HMAC",
      "API Architecture",
    ],
  },
  {
    period: "Oct 2022 - Apr 2026",
    title: "Lead Frontend Developer",
    domain: "PT Qoin Digital Indonesia",
    description:
      "Led frontend engineering across multiple product teams, built a shared component library adopted by 5+ teams, reduced CI/CD build time by 80%, mentored 7 developers, and established code quality standards.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Vite",
      "Playwright",
      "Astro",
      "Monorepo",
    ],
  },
  {
    period: "Mar 2020 - Oct 2022",
    title: "Frontend Developer",
    domain: "PT Qoin Digital Indonesia",
    description:
      "Developed and maintained multiple web applications serving thousands of active users, integrated REST APIs with backend teams, improved data-fetch efficiency, and resolved critical production bugs.",
    technologies: ["React", "Next.js", "Redux", "SCSS", "REST APIs"],
  },
  {
    period: "Apr 2019 - Dec 2019",
    title: "Frontend Developer",
    domain: "Komodo Digital",
    description:
      "Developed admin dashboard and web application features, authored unit and end-to-end tests, and increased test coverage across core user flows.",
    technologies: ["React", "Redux", "Jest", "Enzyme", "Cypress"],
  },
  {
    period: "Jan 2019 - Apr 2019",
    title: "Frontend Developer",
    domain: "Moselo (PT. Komunitas Karya Kencana)",
    description:
      "Developed product features, maintained the existing frontend codebase, and debugged application issues to keep user-facing functionality stable.",
    technologies: ["React", "Redux", "styled-components"],
  },
  {
    period: "Mar 2017 - May 2018",
    title: "Frontend Developer",
    domain: "Promogo",
    description:
      "Built web and admin applications, maintained the frontend codebase, and resolved bugs to support a consistent product experience.",
    technologies: ["React", "Redux"],
  },
] satisfies ExperienceItem[];
