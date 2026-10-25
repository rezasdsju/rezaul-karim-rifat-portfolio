const focusAreas = [
  "Responsive interfaces",
  "REST API integration",
  "Authentication and CRUD flows",
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-slate-200 bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Experience
          </p>
          <h2
            id="experience-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Learning by building
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            My experience so far comes from building personal projects end to
            end — planning the interface, wiring up the data, and fixing what
            breaks along the way.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-blue-700">2025 — Present</p>
            <p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              Self-directed
            </p>
          </div>

          <h3 className="mt-4 text-xl font-bold text-slate-900">
            Full-stack project development
          </h3>
          <p className="mt-2 leading-relaxed text-slate-600">
            I build projects with React, TypeScript, Next.js, Tailwind CSS, and
            Django. The selected projects above each include a live demo and
            public source code, so you can inspect both the result and the
            implementation.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
