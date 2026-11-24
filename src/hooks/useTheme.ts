import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function getInitialTheme(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

/**
 * Keeps <html data-theme> in sync with the user's choice.
 *
 * The inline script in index.html sets the first paint; this hook takes over
 * afterwards and only writes to localStorage when the user toggles, so the
 * site keeps following the OS theme until an explicit choice is made.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    const meta = document.querySelector<HTMLMetaElement>("#theme-color");
    if (meta) {
      meta.content = theme === "dark" ? "#020617" : "#ffffff";
    }
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const onChange = (event: MediaQueryListEvent) => {
      let stored: string | null = null;

      try {
        stored = localStorage.getItem(STORAGE_KEY);
      } catch {
        stored = null;
      }

      if (!stored) {
        setTheme(event.matches ? "dark" : "light");
      }
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";

      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Storage can be unavailable (private mode); the toggle still works.
      }

      return next;
    });
  }, []);

  return { theme, toggleTheme } as const;
}
