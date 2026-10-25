const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend & data",
    skills: ["Python", "Django", "Django REST Framework", "REST APIs", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vite", "Better Auth", "Bootstrap"],
  },
];

const quickFacts = [
  { label: "Location", value: "Dhaka, Bangladesh" },
  { label: "Education", value: "Jahangirnagar University" },
  { label: "Focus", value: "Full-stack web development" },
  { label: "Currently", value: "Building with React, TypeScript, Next.js, and Django" },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-slate-200 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            About
          </p>
          <h2
            id="about-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            A developer who cares about the details
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              I'm Rezaul Karim Rifat, a full-stack web developer based in Dhaka,
              Bangladesh. I enjoy turning ideas into responsive, usable products
              — from the first layout to the API behind it.
            </p>
            <p>
              I work mainly with React, TypeScript, Next.js, and Tailwind CSS on
              the frontend, and Python and Django on the backend. My projects
              span e-commerce, news, fitness, and blogging, which has taught me
              how to connect interfaces to real data and ship complete flows.
            </p>
            <p>
              Alongside university, I've been building projects consistently
              since 2025. I'm looking for a team where I can contribute to real
              products, learn from code reviews, and grow as a full-stack
              developer.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <section
            aria-labelledby="facts-heading"
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
          >
            <h3 id="facts-heading" className="text-lg font-bold text-slate-900">
              Quick facts
            </h3>
            <dl className="mt-5 divide-y divide-slate-200">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="grid gap-1 py-3 first:pt-0 last:pb-0 sm:grid-cols-[7rem_1fr] sm:gap-4">
                  <dt className="text-sm font-medium text-slate-500">{fact.label}</dt>
                  <dd className="text-sm text-slate-700">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section
            id="skills"
            aria-labelledby="skills-heading"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <h3 id="skills-heading" className="text-lg font-bold text-slate-900">
              Skills
            </h3>
            <div className="mt-5 space-y-5">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {group.title}
                  </h4>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
