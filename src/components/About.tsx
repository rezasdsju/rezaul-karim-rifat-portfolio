import { FaArrowTrendUp, FaDownload } from "react-icons/fa6";
import Reveal from "./Reveal";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend & data",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "REST APIs",
      "MongoDB",
      "Express.js",
    ],
  },
  {
    title: "Tools & auth",
    skills: ["Git", "GitHub", "Vite", "Better Auth", "JWT", "Bootstrap"],
  },
];

const strengths = [
  {
    number: "01",
    title: "Frontend with care",
    description:
      "Accessible, responsive interfaces built with React, Next.js, and Tailwind CSS - tested from small phones to large screens.",
  },
  {
    number: "02",
    title: "Backend that holds up",
    description:
      "REST APIs with Django and Express, data modelling in MongoDB, and authentication flows that protect the right routes.",
  },
  {
    number: "03",
    title: "End-to-end ownership",
    description:
      "I plan the interface, wire the data, handle auth, and deploy the result - so features arrive complete, not half-finished.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-slate-200 bg-white py-20 sm:py-28 dark:border-white/10 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-400">
              <span aria-hidden="true" className="h-px w-8 bg-blue-700/40 dark:bg-blue-400/40" />
              About
            </p>
            <h2
              id="about-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem] dark:text-white"
            >
              A developer who finishes what he starts
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                I'm Rezaul Karim Rifat, a full-stack web developer based in
                Dhaka, Bangladesh. I enjoy turning ideas into responsive, usable
                products - from the first layout to the API behind it.
              </p>
              <p>
                I work mainly with React, TypeScript, Next.js, and Tailwind CSS
                on the frontend, and Python and Django on the backend. My
                projects span e-commerce, news, fitness, and blogging, which has
                taught me how to connect interfaces to real data and ship
                complete flows.
              </p>
              <p>
                Alongside university, I've been building projects consistently
                since 2025. I'm looking for a team where I can contribute to
                real products, learn from code reviews, and grow as a full-stack
                developer.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 dark:focus-visible:ring-white dark:focus-visible:ring-offset-slate-950"
              >
                Download CV
                <FaDownload aria-hidden="true" className="text-xs" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/25 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-slate-950"
              >
                Get in touch
                <span aria-hidden="true">-&gt;</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div
              id="skills"
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Skills at a glance
                </h3>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-500 ring-1 ring-slate-200 dark:bg-white/5 dark:text-slate-300 dark:ring-white/10">
                  Updated 2026
                </span>
              </div>

              <div className="mt-6 space-y-6">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                      {group.title}
                    </h4>
                    <ul className="mt-2.5 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-blue-200 hover:text-blue-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-blue-400/30 dark:hover:text-blue-300"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-xs text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                    <FaArrowTrendUp aria-hidden="true" />
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    Always learning
                  </p>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Currently going deeper into TypeScript, authentication flows,
                  and API design - the same areas I use in my projects.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {strengths.map((strength, index) => (
            <Reveal key={strength.number} delay={index * 80}>
              <article className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 dark:border-white/10 dark:bg-slate-900 dark:hover:border-blue-400/30 dark:hover:shadow-black/40">
                <p className="text-xs font-bold tracking-widest text-blue-700 dark:text-blue-400">
                  {strength.number}
                </p>
                <h3 className="mt-3 text-base font-bold text-slate-900 dark:text-white">
                  {strength.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {strength.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
