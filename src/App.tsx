import { Suspense } from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Projects from "./components/projects/Projects";
import type { ProjectDataType } from "./types/projectDataTypes";


const projectsDataFetch = async (): Promise<ProjectDataType[]> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
}

const projectsDataPromise = projectsDataFetch()

const ProjectsFallback = () => (
  <section
    aria-hidden="true"
    className="border-t border-slate-200 bg-slate-50 py-20 sm:py-24"
  >
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="h-4 w-32 animate-pulse rounded bg-slate-200" />
      <div className="mt-4 h-10 w-64 animate-pulse rounded bg-slate-200" />
      <div className="mt-12 h-64 animate-pulse rounded-2xl bg-slate-200" />
    </div>
  </section>
)

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow-lg"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <Banner />
        <Suspense fallback={<ProjectsFallback />}>
          <Projects projectsDataPromise={projectsDataPromise} />
        </Suspense>
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
