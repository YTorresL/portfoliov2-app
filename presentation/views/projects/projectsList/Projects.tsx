import { getProjectsCached } from "../../../../application/loaders/getProjectsCached"
import { ProjectsContainer } from "./components/ProjectsContainer"
import { ProjectsGrid } from "./components/ProjectsGrid"
import { Project } from "../../../../domain/entities/Project"

const PAGE_SIZE = 3

function ProjectsStructuredData({ projects }: { projects: Project[] }) {
  const itemListElements = projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      keywords: project.technologies.join(", "),
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${project.id}`,
    },
  }))

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Yalith Torres – Projects",
    itemListElement: itemListElements,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export async function Projects() {
  const projects = await getProjectsCached()

  // First PAGE_SIZE projects rendered statically for Google to crawl
  const initialProjects = projects.slice(0, PAGE_SIZE)

  return (
    <section
      className="px-5 py-10 md:px-10 sm:py-16 animate-fade space-y-4 border-b border-black"
      id="projects"
    >
      <ProjectsStructuredData projects={projects} />
      <h4 className="text-3xl text-primary font-corn text-center">Projects</h4>

      {/*
        Static HTML visible to Google bots (no JS required).
        Hidden visually via aria-hidden — the interactive version below
        takes over for real users once JS loads.
      */}
      <noscript>
        <ProjectsGrid projects={initialProjects} />
      </noscript>

      {/*
        Statically rendered initial grid that is ALSO the SSR output.
        ProjectsContainer is a client component but Next.js SSR still
        renders its initial state on the server, so Google sees the HTML.
      */}
      <ProjectsContainer projects={projects} />
    </section>
  )
}
