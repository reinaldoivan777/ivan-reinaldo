export type ProjectStatus =
  | "Production"
  | "Shipped"
  | "In Progress"
  | "Concept"
  | "Private";

export type ProjectSource = "Professional Experience" | "Personal Project" | "Open Source";

export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ProjectMetadataItem {
  label: string;
  value: string;
}

export interface EngineeringChallenge {
  title: string;
  problem: string;
  decision: string;
  implementation: string;
  tradeoff?: string;
  result: string;
}

export interface EngineeringDecision {
  title: string;
  context: string;
  decision: string;
  rationale: string;
  tradeoff?: string;
}

export interface Tradeoff {
  title: string;
  context: string;
  advantages: string[];
  limitation: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  source: ProjectSource;
  role?: string;
  domain?: string;
  status?: ProjectStatus;
  technologies: string[];
  highlights: string[];
  links: ProjectLink[];
  metadata: ProjectMetadataItem[];
  challenges?: EngineeringChallenge[];
  decisions?: EngineeringDecision[];
  tradeoffs?: Tradeoff[];
  featured: boolean;
}

export interface ExperienceItem {
  period: string;
  title: string;
  domain: string;
  description: string;
  technologies: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Principle {
  title: string;
  description: string;
}

export interface Metric {
  value: string;
  label: string;
  supportingText?: string;
}

export type SocialKey = "github" | "linkedin" | "email" | "resume";

export interface SocialLink {
  key: SocialKey;
  label: string;
  href: string | null;
  external?: boolean;
}
