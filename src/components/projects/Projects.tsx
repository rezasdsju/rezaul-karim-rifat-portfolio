import { use, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import type { ProjectDataType } from "../../types/projectDataTypes";
import Reveal from "../Reveal";
import FeaturedProjectsCard from "./FeaturedProjectsCard";

interface ProjectsPropsTypes {
  projectsDataPromise: Promise<ProjectDataType[]>;
}

const FEATURED_LIMIT = 5;

export default function Projects({ projectsDataPromise }: ProjectsPropsTypes) {
  const projects = use(projectsDataPromise);
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projects.filter((project) => project.featured);
  const visibleProjects = showAll
    ? projects
    : featuredProjects.slice(0, FEATURED_LIMIT);
  const featuredCount = Math.min(featuredProjects.length, FEATURED_LIMIT);
  const hiddenCount = projects.length - featuredCount;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative border-t border-slate-200 bg-slate-50 py-20 sm:py-28 dark:border-white/10 dark:bg-slate-900/40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-400">
                <span aria-hidden="true" className="h-px w-8 bg-blue-700/40 dark:bg-blue-400/40" />
                Selected work
              </p>
              <h2
                id="projects-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem] dark:text-white"
              >
                Projects that ship
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                A selection of full-stack and frontend builds. Every card links
                to a live demo and its public source code.
              </p>
            </div>

            <p className="shrink-0 self-start rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm sm:self-auto dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-white">
                {visibleProjects.length}
              </span>{" "}
              of {projects.length} projects
            </p>
          </div>
        </Reveal>

        <div
          id="projects-grid"
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleProjects.map((project, index) => (
            <Reveal
              key={project.id}
              className="h-full"
              delay={Math.min(index, 5) * 70}
            >
              <FeaturedProjectsCard project={project} />
            </Reveal>
          ))}
        </div>

        {hiddenCount > 0 && (
          <div className="mt-12 flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => setShowAll((isShowingAll) => !isShowingAll)}
              aria-expanded={showAll}
              aria-controls="projects-grid"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:text-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/25 dark:hover:bg-white/10 dark:hover:text-blue-300 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-slate-950"
            >
              {showAll
                ? "Show featured only"
                : `Show all ${projects.length} projects`}
              <FaChevronDown
                aria-hidden="true"
                className={`text-xs transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {showAll
                ? "Showing the full archive, including smaller practice builds."
                : `${hiddenCount} more projects are available in the full archive.`}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
