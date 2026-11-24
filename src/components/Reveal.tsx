import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger in milliseconds, applied as a transition delay. */
  delay?: number;
}

/**
 * Fades content in the first time it enters the viewport.
 *
 * The animation lives in index.css ([data-reveal]) and is disabled entirely
 * for prefers-reduced-motion, so the content is always readable.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.dataset.revealed = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            element.dataset.revealed = "true";
            observer.unobserve(element);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal=""
      className={className}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
