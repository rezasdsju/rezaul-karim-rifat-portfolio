import { use } from "react";
import type { ProjectDataType } from "../../types/projectDataTypes";
import FeaturedProjectsCard from "./FeaturedProjectsCard";

interface ProjectsPropsTypes {
    projectsDataPromise: Promise<ProjectDataType[]>
}

export default function Projects({ projectsDataPromise }: ProjectsPropsTypes) {
    const projects = use(projectsDataPromise);
    const featuredProjects = projects.filter((project) => project.featured);

    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-20 sm:py-24"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
                        Selected work
                    </p>
                    <h2
                        id="projects-heading"
                        className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                    >
                        Projects
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600">
                        Five projects that show how I approach frontend, backend,
                        and full-stack problems — from the first screen to the data
                        behind it.
                    </p>
                </div>

                <div className="mt-12 grid gap-8">
                    {featuredProjects.map((project) => (
                        <FeaturedProjectsCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
