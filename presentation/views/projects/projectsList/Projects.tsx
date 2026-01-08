import { getProjectsCached } from "../../../../application/loaders/getProjectsCached"
import { ProjectsContainer } from "./components/ProjectsContainer"

export async function Projects() {
const projects = await getProjectsCached()

  return (
    <section
      className="px-5 py-10 md:px-10 sm:py-16 animate-fade space-y-4 border-b border-black"
      id="projects"
    >
      <h4 className="text-3xl text-primary font-corn text-center">Projects</h4>
      <ProjectsContainer projects={projects} />
    </section>
  )
}
