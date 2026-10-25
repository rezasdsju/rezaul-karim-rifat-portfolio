import { FaDownload } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import BannerImage from "../assets/me-0.jpg";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/rezasdsju",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rezaul-karim-rifat-833154370/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:rezaul2002104@gmail.com",
    icon: MdEmail,
  },
];

export default function Banner() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="scroll-mt-24 bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Full Stack Developer
          </p>

          <h1
            id="hero-heading"
            className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Rezaul Karim Rifat
          </h1>

          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-slate-700">
            I build responsive web applications with React, TypeScript, and
            Django — from clean interfaces to the APIs behind them.
          </p>

          <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-blue-700" />
            Open to full-stack and frontend opportunities
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              View projects
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              Download CV
              <FaDownload aria-hidden="true" className="text-xs" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-4"
              >
                <Icon aria-hidden="true" className="text-base" />
                {label}
              </a>
            ))}
            <span className="inline-flex items-center gap-2 text-sm text-slate-500">
              <FaLocationDot aria-hidden="true" className="text-base" />
              Dhaka, Bangladesh
            </span>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="rounded-3xl border border-slate-200 bg-slate-100 p-2 shadow-sm">
            <img
              src={BannerImage}
              alt="Rezaul Karim Rifat"
              width={800}
              height={1067}
              loading="eager"
              decoding="async"
              className="aspect-[3/4] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
