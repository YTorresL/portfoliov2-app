import ProjectsFilter from "@/components/projects-filter"
import Titles from "@/components/titles"

export default function ProjectsSection() {
  return (
    <section
      className="md:px-10 px-5 py-10 sm:py-16 animate-fade"
      id="projects"
    >
      <div className="grid grid-cols-1 gap-4">
        <Titles>Projects</Titles>
        <ProjectsFilter />
      </div>
    </section>
  )
}
