import {
  FaArrowRight,
  FaCircleCheck,
  FaCode,
  FaDownload,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";
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

const coreStack = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Django",
  "REST APIs",
];

const quickFacts = [
  { icon: FaLocationDot, label: "Based in", value: "Dhaka, Bangladesh" },
  { icon: FaGraduationCap, label: "Education", value: "Jahangirnagar University" },
  { icon: FaCode, label: "Focus", value: "Full-stack web apps" },
  { icon: FaCircleCheck, label: "Availability", value: "Open to opportunities" },
];

export default function Banner() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-white dark:bg-slate-950"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-fade absolute inset-0 opacity-80" />
        <div className="absolute -right-24 -top-32 h-[26rem] w-[26rem] rounded-full bg-blue-200/50 blur-3xl dark:bg-blue-500/10" />
        <div className="absolute -left-40 top-44 h-80 w-80 rounded-full bg-sky-100 blur-3xl dark:bg-sky-500/10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:pb-20 lg:pt-24">
        <div className="animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-700 dark:bg-blue-400" />
            </span>
            Available for full-stack &amp; frontend roles
          </p>

          <h1
            id="hero-heading"
            aria-label="Rezaul Karim Rifat"
            className="mt-6 text-4xl font-extrabold leading-[1.03] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-[4.2rem] dark:text-white"
          >
            Rezaul Karim
            <span className="text-gradient block">Rifat</span>
          </h1>

          <p className="mt-5 max-w-xl text-xl font-semibold tracking-tight text-slate-800 sm:text-2xl dark:text-slate-100">
            Full-stack developer building{" "}
            <span className="text-blue-700 dark:text-blue-400">
              complete web products
            </span>
            .
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            I turn ideas into responsive web applications with React,
            TypeScript, Next.js, and Django - from the interface down to the
            API.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/25 transition-all hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 dark:bg-blue-600 dark:shadow-blue-500/20 dark:hover:bg-blue-500 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-slate-950"
            >
              See featured work
              <FaArrowRight aria-hidden="true" className="text-xs" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/25 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-slate-950"
            >
              Download CV
              <FaDownload aria-hidden="true" className="text-xs" />
            </a>
            <a
              href="mailto:rezaul2002104@gmail.com?subject=Portfolio%20inquiry"
              className="inline-flex items-center gap-2 rounded-xl px-2 py-3 text-sm font-semibold text-slate-700 underline decoration-slate-300 decoration-1 underline-offset-4 transition-colors hover:text-blue-700 hover:decoration-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 dark:text-slate-300 dark:decoration-slate-600 dark:hover:text-blue-300 dark:hover:decoration-blue-300 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-slate-950"
            >
              Email me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Find me on
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-base text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-blue-400/30 dark:hover:bg-blue-400/10 dark:hover:text-blue-300 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-slate-950"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Core stack
            </p>
            <ul className="mt-2.5 flex flex-wrap gap-2">
              {coreStack.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="animate-rise mx-auto w-full max-w-[21rem] [animation-delay:120ms] sm:max-w-[23rem]">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-blue-600/20 via-sky-400/10 to-indigo-500/20 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 -z-10 h-24 w-24 rounded-full border border-blue-200/70 dark:border-blue-400/20"
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-white/5 dark:shadow-black/50">
              <div className="relative overflow-hidden rounded-[1.6rem]">
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

                <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-800 shadow-sm backdrop-blur dark:bg-slate-900/90 dark:text-slate-100">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                  />
                  Open to work
                </span>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent p-4 pt-16">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200">
                    Currently
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-snug text-white">
                    Building full-stack projects and looking for my next team.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-float absolute -left-5 bottom-24 hidden rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-xl shadow-slate-900/10 backdrop-blur sm:block dark:border-white/10 dark:bg-slate-900/95 dark:shadow-black/40">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                Currently building
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                Full-stack rental &amp; community apps
              </p>
            </div>
          </div>
        </div>
      </div>

      <dl className="relative border-y border-slate-200 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {quickFacts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                <Icon aria-hidden="true" />
              </span>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {label}
                </dt>
                <dd className="mt-0.5 text-sm font-semibold text-slate-900 dark:text-white">
                  {value}
                </dd>
              </div>
            </div>
          ))}
        </div>
      </dl>
    </section>
  );
}
