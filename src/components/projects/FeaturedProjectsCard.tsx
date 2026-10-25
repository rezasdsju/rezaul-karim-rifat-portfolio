import type { ProjectDataType } from "../../types/projectDataTypes";

interface FeaturedProjectsCardPropsTypes {
    project: ProjectDataType;
}

export default function FeaturedProjectsCard({ project }: FeaturedProjectsCardPropsTypes) {
    const technologies = project.technologies ?? [
        project.framework,
        project.language,
        project.additionalTechnology,
    ].filter(Boolean);

    return (
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid md:grid-cols-[minmax(0,380px)_1fr]">
                <div className="border-b border-slate-200 bg-slate-100 p-4 sm:p-6 md:border-b-0 md:border-r">
                    <div className="aspect-video overflow-hidden rounded-xl border border-slate-200 bg-white">
                        <img
                            src={project.imageUrl}
                            alt={`${project.title} screenshot`}
                            width={1200}
                            height={675}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-col p-6 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                                {project.title}
                            </h3>
                            <p className="mt-1 text-sm font-medium text-blue-700">
                                {project.role ?? "Developer"}
                            </p>
                        </div>
                        <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                            {technologies.map((technology) => (
                                <li
                                    key={technology}
                                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                                >
                                    {technology}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <dl className="mt-6 space-y-4 text-sm">
                        <div>
                            <dt className="font-semibold text-slate-900">The problem</dt>
                            <dd className="mt-1 leading-relaxed text-slate-600">
                                {project.problem ?? project.description}
                            </dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-slate-900">Outcome</dt>
                            <dd className="mt-1 leading-relaxed text-slate-600">
                                {project.outcome ?? "[ADD A RESULT OR LESSON LEARNED]"}
                            </dd>
                        </div>
                    </dl>

                    {project.process && project.process.length > 0 && (
                        <details className="mt-6 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                            <summary className="cursor-pointer text-sm font-semibold text-slate-900 marker:text-blue-700">
                                Process &amp; decisions
                            </summary>
                            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                                {project.process.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </details>
                    )}

                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
                        >
                            Live demo
                            <span aria-hidden="true">↗</span>
                        </a>
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
                        >
                            Source code
                            <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}
