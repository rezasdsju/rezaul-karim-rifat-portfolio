import { FaArrowRight, FaCircleCheck, FaCode, FaDownload, FaGithub, FaGraduationCap, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import BannerImage from "../assets/me-0.jpg";
import BannerImageLarge from "../assets/me-0-800.webp";
import BannerImageSmall from "../assets/me-0-480.webp";

const socialLinks = [
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

const coreStack = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Django", "REST APIs"];

const quickFacts = [
  { icon: FaLocationDot, label: "Based in", value: "Dhaka, Bangladesh" },
  { icon: FaGraduationCap, label: "Education", value: "Jahangirnagar University" },
  { icon: FaCode, label: "Focus", value: "Full-stack web apps" },
  { icon: FaCircleCheck, label: "Availability", value: "Open to opportunities" },
];

export default function Banner() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-52 h-80 w-80 rounded-full bg-slate-100 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:pb-20 lg:pt-24">
        <div className="animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-700" />
            </span>
            Available for full-stack &amp; frontend roles
          </p>

          <h1
            id="hero-heading"
            className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Rezaul Karim Rifat
          </h1>

          <p className="mt-4 text-xl font-semibold tracking-tight text-slate-800 sm:text-2xl">
            Full-stack developer building{" "}
            <span className="text-blue-700">complete web products</span>.
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            I turn ideas into responsive web applications with React, TypeScript,
            Next.js, and Django — from the interface down to the API.
          </p>

          <div className="mt-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Core stack
            </p>
            <ul className="mt-2.5 flex flex-wrap gap-2">
              {coreStack.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              See featured work
              <FaArrowRight aria-hidden="true" className="text-xs" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              Download CV
              <FaDownload aria-hidden="true" className="text-xs" />
            </a>
            <a
              href="mailto:rezaul2002104@gmail.com?subject=Portfolio%20inquiry"
              className="inline-flex items-center gap-2 rounded-xl px-2 py-3 text-sm font-semibold text-slate-700 underline decoration-slate-300 decoration-1 underline-offset-4 transition-colors hover:text-blue-700 hover:decoration-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              Email me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span className="text-xs font-medium text-slate-500">Find me on</span>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-base text-slate-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
                >
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="animate-rise mx-auto w-full max-w-[21rem] [animation-delay:120ms] sm:max-w-[23rem]">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 -z-10 rounded-[2.25rem] bg-linear-to-tr from-blue-100 via-white to-blue-50"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white bg-white p-2 shadow-xl shadow-slate-900/10">
              <div className="relative overflow-hidden rounded-[1.4rem]">
                <img
                  src={BannerImage}
                  srcSet={`${BannerImageSmall} 480w, ${BannerImageLarge} 800w`}
                  sizes="(min-width: 480px) 368px, calc(100vw - 32px)"
                  alt="Rezaul Karim Rifat"
                  width={800}
                  height={1067}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[3/4] w-full object-cover"
                />
                <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-800 shadow-sm backdrop-blur">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-blue-700" />
                  Open to work
                </span>
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/80 via-slate-950/30 to-transparent p-4 pt-16">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200">
                    Currently
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-snug text-white">
                    Building full-stack projects and looking for my next team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <dl className="relative border-y border-slate-200 bg-white/80">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {quickFacts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Icon aria-hidden="true" />
              </span>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  {label}
                </dt>
                <dd className="mt-0.5 text-sm font-semibold text-slate-900">{value}</dd>
              </div>
            </div>
          ))}
        </div>
      </dl>
    </section>
  );
}
