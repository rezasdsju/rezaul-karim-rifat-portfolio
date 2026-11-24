import { useEffect, useState } from "react";
import { FaBars, FaDownload, FaXmark } from "react-icons/fa6";
import { useTheme } from "../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 200;
      let currentSection = "home";

      for (const { id } of navLinks) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    const updateScrollProgress = () => {
      const root = document.documentElement;
      const scrollable = root.scrollHeight - root.clientHeight;
      setScrollProgress(scrollable > 0 ? (root.scrollTop / scrollable) * 100 : 0);
    };

    const onScroll = () => {
      updateActiveSection();
      updateScrollProgress();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Rezaul Karim Rifat - home"
          className="group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-slate-950"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-xs font-bold tracking-wide text-white shadow-lg shadow-blue-600/25 transition-transform group-hover:scale-105">
            RK
          </span>
          <span className="hidden whitespace-nowrap text-sm font-semibold tracking-tight text-slate-900 lg:block dark:text-white">
            Rezaul Karim Rifat
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-3 md:flex"
        >
          <ul className="flex items-center gap-1 rounded-full border border-slate-200/80 bg-slate-100/70 p-1 dark:border-white/10 dark:bg-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`block rounded-full px-3.5 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-slate-950 ${
                      isActive
                        ? "bg-white text-slate-900 shadow-sm dark:bg-white/15 dark:text-white"
                        : "text-slate-600 hover:bg-white/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />

          <a
            href="/resume.pdf"
            download
            className="hidden items-center gap-2 rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-700/20 transition-all hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 sm:inline-flex dark:bg-blue-600 dark:shadow-blue-500/20 dark:hover:bg-blue-500 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-slate-950"
          >
            Resume
            <FaDownload aria-hidden="true" className="text-[11px]" />
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-slate-950"
          >
            {isMenuOpen ? (
              <FaXmark aria-hidden="true" className="text-lg" />
            ) : (
              <FaBars aria-hidden="true" className="text-lg" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="animate-rise border-t border-slate-200 bg-white md:hidden dark:border-white/10 dark:bg-slate-950"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-w-6xl px-4 py-4 sm:px-6"
          >
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={closeMenu}
                    aria-current={
                      activeSection === link.id ? "location" : undefined
                    }
                    className={`block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                      activeSection === link.id
                        ? "bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/resume.pdf"
                  download
                  onClick={closeMenu}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500"
                >
                  Download resume
                  <FaDownload aria-hidden="true" className="text-xs" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-0.5 overflow-hidden"
      >
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}
