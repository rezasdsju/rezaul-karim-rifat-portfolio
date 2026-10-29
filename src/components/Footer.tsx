import { FaLinkedin } from "react-icons/fa6";
import { IoIosMail, IoLogoGithub } from "react-icons/io";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[11px] font-bold tracking-wide text-slate-900">
                RK
              </span>
              <span className="text-base font-bold text-white">Rezaul Karim Rifat</span>
            </a>
            <p className="mt-2 text-sm text-slate-400">
              Full-stack developer · Dhaka, Bangladesh
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-medium text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/rezasdsju"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 text-lg text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <IoLogoGithub aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/rezaul-karim-rifat-833154370/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 text-lg text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
            <a
              href="mailto:rezaul2002104@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 text-lg text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <IoIosMail aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Rezaul Karim Rifat. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="font-medium text-slate-400 transition-colors hover:text-white"
            >
              Resume
            </a>
            <span>Built with React, TypeScript, and Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
