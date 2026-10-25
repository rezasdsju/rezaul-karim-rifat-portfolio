import { FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

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
      className="border-t border-slate-800 bg-slate-900 py-20 text-white sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Let's build something useful
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-slate-300">
            I'm open to full-stack and frontend opportunities, collaborations,
            and interesting projects. The fastest way to reach me is email — I'd
            be glad to hear what you're working on.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:rezaul2002104@gmail.com?subject=Portfolio%20inquiry"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <MdEmail aria-hidden="true" className="text-base" />
              Send an email
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-slate-400 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6 sm:p-8">
          <h3 className="text-lg font-bold">Contact details</h3>
          <ul className="mt-5 space-y-4">
            {contactDetails.map(({ label, value, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="group flex items-start gap-4 rounded-xl p-2 transition-colors hover:bg-slate-700/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-700 text-lg text-blue-300">
                    <Icon aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-slate-400">
                      {label}
                    </span>
                    <span className="block text-sm font-medium text-white group-hover:text-blue-200">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
            <li className="flex items-start gap-4 p-2">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-700 text-lg text-blue-300">
                <FaLocationDot aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-medium text-slate-400">
                  Location
                </span>
                <span className="block text-sm font-medium text-white">
                  Dhaka, Bangladesh
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
