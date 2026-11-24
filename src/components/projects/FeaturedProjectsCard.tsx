import { FaArrowUpRightFromSquare, FaChevronDown, FaGithub } from "react-icons/fa6";
import type { ProjectDataType } from "../../types/projectDataTypes";

interface FeaturedProjectsCardPropsTypes {
  project: ProjectDataType;
}

export default function FeaturedProjectsCard({
  project,
}: FeaturedProjectsCardPropsTypes) {
  const technologies = project.technologies ?? [
    project.framework,
    project.language,
    project.additionalTechnology,
  ].filter(Boolean);

  const visibleTechnologies = technologies.slice(0, 4);
  const extraTechnologyCount = technologies.length - visibleTechnologies.length;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-slate-900 dark:hover:border-white/20 dark:hover:shadow-black/50">
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="relative block aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800"
      >
        <img
          src={project.imageUrl}
          srcSet={project.imageSrcSet}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) calc(50vw - 40px), calc(100vw - 32px)"
          alt={`${project.title} screenshot`}
          width={1200}
          height={750}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
        />

        {project.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur dark:bg-slate-900/90 dark:text-slate-200">
            Featured
          </span>
        )}

        <span className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-sm">
            Visit live site
            <FaArrowUpRightFromSquare aria-hidden="true" className="text-[10px]" />
          </span>
        </span>
      </a>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            {project.title}
          </h3>
          <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
            {project.framework}
          </span>
        </div>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
          {visibleTechnologies.map((technology) => (
            <li
              key={technology}
              className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            >
              {technology}
            </li>
          ))}
          {extraTechnologyCount > 0 && (
            <li className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
              +{extraTechnologyCount}
            </li>
          )}
        </ul>

        {project.process && project.process.length > 0 && (
          <details className="group/details mt-4 rounded-xl border border-slate-100 bg-slate-50/80 px-3.5 py-2.5 dark:border-white/10 dark:bg-white/[0.03]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-xs font-semibold text-slate-700 [&::-webkit-details-marker]:hidden dark:text-slate-200">
              How it was built
              <FaChevronDown
                aria-hidden="true"
                className="text-[10px] text-slate-500 transition-transform group-open/details:rotate-180 dark:text-slate-400"
              />
            </summary>
            <div className="mt-3 space-y-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              {project.problem && <p>{project.problem}</p>}
              <ul className="space-y-1.5">
                {project.process.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-700 dark:bg-blue-400"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              {project.outcome && (
                <p className="border-t border-slate-200 pt-2.5 text-slate-500 dark:border-white/10 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-200">
                    Learned:{" "}
                  </span>
                  {project.outcome}
                </p>
              )}
            </div>
          </details>
        )}

        <div className="mt-auto pt-5">
          <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4 dark:border-white/10">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 dark:text-blue-400 dark:hover:text-blue-300 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-slate-900"
            >
              Live demo
              <FaArrowUpRightFromSquare aria-hidden="true" className="text-[11px]" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 dark:text-slate-400 dark:hover:text-white dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-slate-900"
            >
              <FaGithub aria-hidden="true" className="text-sm" />
              Source
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
