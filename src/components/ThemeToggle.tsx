import { FaMoon, FaSun } from "react-icons/fa6";
import type { Theme } from "../hooks/useTheme";

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
  className?: string;
}

export default function ThemeToggle({
  theme,
  onToggle,
  className = "",
}: ThemeToggleProps) {
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      className={`group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-slate-950 ${className}`}
    >
      <span className="relative flex h-[18px] w-[18px] items-center justify-center">
        <FaSun
          aria-hidden="true"
          className={`absolute text-base transition-all duration-300 ${
            isDark
              ? "-rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <FaMoon
          aria-hidden="true"
          className={`absolute text-base transition-all duration-300 ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
          }`}
        />
      </span>
    </button>
  );
}
