import { use, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import type { ProjectDataType } from "../../types/projectDataTypes";
import FeaturedProjectsCard from "./FeaturedProjectsCard";

interface ProjectsPropsTypes {
    projectsDataPromise: Promise<ProjectDataType[]>
}

const FEATURED_LIMIT = 6;

export default function Projects({ projectsDataPromise }: ProjectsPropsTypes) {
    const projects = use(projectsDataPromise);
    const [showAll, setShowAll] = useState(false);

    const featuredProjects = projects.filter((project) => project.featured);
    const visibleProjects = showAll ? projects : featuredProjects.slice(0, FEATURED_LIMIT);
    const featuredCount = Math.min(featuredProjects.length, FEATURED_LIMIT);
    const hiddenCount = projects.length - featuredCount;

    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className="border-t border-slate-200 bg-slate-50 py-20 sm:py-24"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                            Selected work
                        </p>
                        <h2
                            id="projects-heading"
                            className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                        >
                            Projects that ship
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                            Six featured builds across full-stack, frontend, and API work.
                            Every card opens a live demo and its source code.
                        </p>
                    </div>

                    <p className="shrink-0 self-start rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 sm:self-auto">
                        <span className="font-semibold text-slate-900">
                            {showAll ? projects.length : featuredCount}
                        </span>{" "}
                        of {projects.length} projects
                    </p>
                </div>

                <div
                    id="projects-grid"
                    className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {visibleProjects.map((project) => (
                        <FeaturedProjectsCard key={project.id} project={project} />
                    ))}
                </div>

                {hiddenCount > 0 && (
                    <div className="mt-12 flex flex-col items-center gap-3">
                        <button
                            type="button"
                            onClick={() => setShowAll((isShowingAll) => !isShowingAll)}
                            aria-expanded={showAll}
                            aria-controls="projects-grid"
                            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-slate-400 hover:bg-white hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
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
                        <p className="text-xs text-slate-500">
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
