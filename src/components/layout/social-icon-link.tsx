import { FileText, Mail } from "lucide-react";
import type { ComponentType } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import type { SocialLink } from "@/types/portfolio";

interface SocialIconLinkProps {
  link: SocialLink;
  className?: string;
}

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: Mail,
  resume: FileText,
} satisfies Record<
  SocialLink["key"],
  ComponentType<{ size?: number; "aria-hidden"?: boolean }>
>;

export function SocialIconLink({ link, className }: SocialIconLinkProps) {
  if (!link.href) {
    return null;
  }

  const Icon = socialIcons[link.key];

  return (
    <a
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noreferrer" : undefined}
      aria-label={link.label}
      title={link.label}
      className={
        className ??
        "inline-flex size-9 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground shadow-soft transition-colors hover:border-border-strong hover:bg-surface-muted hover:text-foreground"
      }
    >
      <Icon aria-hidden="true" size={17} />
    </a>
  );
}
