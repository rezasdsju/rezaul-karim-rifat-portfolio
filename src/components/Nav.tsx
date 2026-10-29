import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

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

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 200;
      let currentSection = "home";

      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Rezaul Karim Rifat — home"
          className="group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-xs font-bold tracking-wide text-white transition-colors group-hover:bg-blue-700">
            RK
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-slate-900 sm:block">
            Rezaul Karim Rifat
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-3 md:flex">
          <ul className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50/80 p-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`block rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 ${
                      isActive
                        ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
          >
            Resume
            <FaDownload aria-hidden="true" className="text-[11px]" />
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 md:hidden"
        >
          {isMenuOpen ? (
            <FaXmark aria-hidden="true" className="text-xl" />
          ) : (
            <GiHamburgerMenu aria-hidden="true" className="text-xl" />
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`border-t border-slate-200 bg-white md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <nav aria-label="Mobile navigation" className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  aria-current={activeSection === link.id ? "location" : undefined}
                  className={`block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
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
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
              >
                Download resume
                <FaDownload aria-hidden="true" className="text-xs" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
