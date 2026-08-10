"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemePreference = "light" | "dark" | "system";

const themeOptions: Array<{
  value: ThemePreference;
  label: string;
  icon: typeof Sun;
}> = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
];

function applyTheme(theme: ThemePreference) {
  const root = document.documentElement;

  root.dataset.theme = theme;

  if (theme === "system") {
    root.removeAttribute("data-theme");
  }
}

function getInitialTheme(): ThemePreference {
  if (typeof window === "undefined") {
    return "system";
  }

  const storedTheme = window.localStorage.getItem("theme");

  if (
    storedTheme === "light" ||
    storedTheme === "dark" ||
    storedTheme === "system"
  ) {
    return storedTheme;
  }

  return "system";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemePreference>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function updateTheme(nextTheme: ThemePreference) {
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  }

  return (
    <div
      className="inline-flex rounded-md border border-border bg-surface p-1 shadow-soft"
      aria-label="Theme preference"
    >
      {themeOptions.map((option) => {
        const Icon = option.icon;
        const isSelected = theme === option.value;

        return (
          <button
            key={option.value}
            type="button"
            className="inline-flex size-8 items-center justify-center rounded-[4px] text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground aria-pressed:bg-foreground aria-pressed:text-background"
            aria-label={`Use ${option.label.toLowerCase()} theme`}
            aria-pressed={isSelected}
            onClick={() => updateTheme(option.value)}
          >
            <Icon aria-hidden="true" size={15} />
          </button>
        );
      })}
    </div>
  );
}
