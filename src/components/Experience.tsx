import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";
import Reveal from "./Reveal";

const timeline = [
  {
    icon: FaBriefcase,
    period: "2025 - Present",
    title: "Full-stack developer",
    organization: "Self-directed - personal projects",
    description:
      "I build projects with React, TypeScript, Next.js, Tailwind CSS, and Django. Each featured project includes a live demo and public source code, so both the result and the implementation can be inspected.",
    highlights: [
      "Responsive interfaces",
      "REST API integration",
      "Authentication and CRUD flows",
    ],
  },
  {
    icon: FaGraduationCap,
    period: "Ongoing",
    title: "Jahangirnagar University",
    organization: "Undergraduate studies",
    description:
      "Building projects consistently alongside my university studies in Dhaka, with a focus on shipping complete features rather than isolated demos.",
    highlights: ["Continuous learning", "Project-based practice"],
  },
];

const currentlyLearning = [
  "Next.js App Router",
  "Better Auth & JWT",
  "Django REST Framework",
  "TypeScript",
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-slate-200 bg-slate-50 py-20 sm:py-28 dark:border-white/10 dark:bg-slate-900/40"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-400">
            <span aria-hidden="true" className="h-px w-8 bg-blue-700/40 dark:bg-blue-400/40" />
            Experience
          </p>
          <h2
            id="experience-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem] dark:text-white"
          >
            Learning by building
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            My experience so far comes from building personal projects end to
            end - planning the interface, wiring up the data, and fixing what
            breaks along the way.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              What I'm looking for
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              A full-stack or frontend role where I can ship real features, get
              code reviews, and keep growing alongside an experienced team.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {["Full-stack", "Frontend", "Open to opportunities"].map(
                (item) => (
                  <li
                    key={item}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-400/10 dark:text-blue-300"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              Currently sharpening
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {currentlyLearning.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <ol className="relative space-y-6 border-l border-slate-200 pl-6 sm:pl-8 dark:border-white/10">
          {timeline.map(
            (
              { icon: Icon, period, title, organization, description, highlights },
              index,
            ) => (
              <li key={title} className="relative">
                <Reveal delay={index * 100}>
                  <span className="absolute -left-[2.35rem] top-6 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-sm text-blue-700 shadow-sm sm:-left-[3.05rem] dark:border-white/15 dark:bg-slate-900 dark:text-blue-300">
                    <Icon aria-hidden="true" />
                  </span>

                  <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5 sm:p-7 dark:border-white/10 dark:bg-slate-900 dark:hover:shadow-black/40">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                        {period}
                      </p>
                      <p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/5 dark:text-slate-300">
                        {organization}
                      </p>
                    </div>
                    <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            ),
          )}
        </ol>
      </div>
    </section>
  );
}
