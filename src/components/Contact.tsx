import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Reveal from "./Reveal";

const contactDetails = [
  {
    label: "Email",
    value: "rezaul2002104@gmail.com",
    href: "mailto:rezaul2002104@gmail.com",
    icon: MdEmail,
  },
  {
    label: "GitHub",
    value: "github.com/rezasdsju",
    href: "https://github.com/rezasdsju",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rezaul-karim-rifat",
    href: "https://www.linkedin.com/in/rezaul-karim-rifat-833154370/",
    icon: FaLinkedin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden border-t border-slate-800 bg-slate-950 py-20 text-white sm:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.22),transparent_55%)]" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            <span aria-hidden="true" className="h-px w-8 bg-blue-300/50" />
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]"
          >
            Let's build something useful
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-slate-300">
            I'm open to full-stack and frontend opportunities, collaborations,
            and interesting projects. The fastest way to reach me is email - I'd
            be glad to hear what you're working on.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:rezaul2002104@gmail.com?subject=Portfolio%20inquiry"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <MdEmail aria-hidden="true" className="text-base" />
              Send an email
              <FaArrowRight aria-hidden="true" className="text-xs" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/40 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Download CV
              <FaDownload aria-hidden="true" className="text-xs" />
            </a>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-sm text-slate-400">
            <FaLocationDot aria-hidden="true" className="text-blue-400" />
            Dhaka, Bangladesh - open to full-stack &amp; frontend roles
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl shadow-black/30 backdrop-blur sm:p-8">
            <h3 className="text-lg font-bold">Contact details</h3>
            <ul className="mt-5 space-y-2">
              {contactDetails.map(({ label, value, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="group flex items-center gap-4 rounded-xl p-2.5 transition-colors hover:bg-slate-800/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-lg text-blue-300 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                        {label}
                      </span>
                      <span className="block truncate text-sm font-medium text-white">
                        {value}
                      </span>
                    </span>
                    <FaArrowRight
                      aria-hidden="true"
                      className="ml-auto -rotate-45 text-xs text-slate-500 transition-all group-hover:translate-x-0.5 group-hover:text-white"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Location
                </p>
                <p className="mt-1 text-sm font-medium text-slate-200">
                  Dhaka, Bangladesh - GMT+6
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Availability
                </p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-slate-200">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                  />
                  Open to opportunities
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
