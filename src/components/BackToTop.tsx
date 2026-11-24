import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

/**
 * Floating "back to top" control that appears once the hero is scrolled past.
 * Uses a plain anchor so it still works without JavaScript.
 */
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 700);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#home"
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-lg shadow-slate-900/10 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 sm:bottom-8 sm:right-8 dark:border-white/15 dark:bg-slate-900/95 dark:text-slate-200 dark:shadow-black/40 dark:hover:border-blue-400/40 dark:hover:text-blue-300 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-slate-950 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <FaArrowUp aria-hidden="true" className="text-sm" />
    </a>
  );
}
