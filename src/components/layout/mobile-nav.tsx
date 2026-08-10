"use client";

import { useState } from "react";
import { ArrowUpRight, FileText, Menu, X } from "lucide-react";
import type { SocialLink } from "@/types/portfolio";
import { ThemeToggle } from "./theme-toggle";

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  navItems: readonly NavItem[];
  socialItems: SocialLink[];
  resumeLink?: SocialLink;
}

export function MobileNav({ navItems, socialItems, resumeLink }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-surface text-foreground shadow-soft transition-colors hover:bg-surface-muted"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
      </button>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-16 border-b border-border bg-background px-[var(--container-inline)] py-5 shadow-soft"
        >
          <nav aria-label="Mobile navigation">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface-muted"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {socialItems.length > 0 || resumeLink?.href ? (
            <div className="mt-5 grid gap-2 border-t border-border pt-5">
              {socialItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href ?? "#"}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="inline-flex items-center justify-between rounded-md px-2 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground"
                  onClick={closeMenu}
                >
                  {item.label}
                  {item.external ? <ArrowUpRight aria-hidden="true" size={16} /> : null}
                </a>
              ))}

              {resumeLink?.href ? (
                <a
                  href={resumeLink.href}
                  className="inline-flex items-center justify-between rounded-md border border-border bg-surface px-3 py-3 text-sm font-medium text-foreground shadow-soft transition-colors hover:bg-surface-muted"
                  onClick={closeMenu}
                >
                  Resume
                  <FileText aria-hidden="true" size={16} />
                </a>
              ) : null}
            </div>
          ) : null}

          <div className="mt-5 flex items-center justify-between border-t border-border pt-5">
            <span className="font-mono text-xs uppercase text-muted">Theme</span>
            <ThemeToggle />
          </div>
        </div>
      ) : null}
    </div>
  );
}
