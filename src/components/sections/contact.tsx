import { Mail } from "lucide-react";
import { socialLinks } from "@/data/social";
import { SocialIconLink } from "@/components/layout/social-icon-link";

const emailLink = socialLinks.find((link) => link.key === "email" && link.href);
const socialContactLinks = socialLinks.filter(
  (link) => link.href && (link.key === "github" || link.key === "linkedin"),
);

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-surface"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-[var(--container-inline)] py-20 sm:py-24">
        <div className="grid gap-10 border border-border bg-background p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="font-mono text-xs font-medium uppercase text-accent">
              Contact
            </p>
            <h2
              id="contact-heading"
              className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl"
            >
              Let&apos;s build something.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              I&apos;m open to discussing engineering opportunities, technical
              collaborations, and interesting products.
            </p>
          </div>

          {emailLink || socialContactLinks.length > 0 ? (
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              {emailLink ? (
                <a
                  href={emailLink.href ?? "#"}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-surface px-4 text-sm font-medium text-foreground shadow-soft transition-colors hover:border-border-strong hover:bg-surface-muted"
                >
                  <Mail aria-hidden="true" size={16} />
                  Contact Me
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
