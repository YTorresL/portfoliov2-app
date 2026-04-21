import { Card } from "./ProjectsCard"
import { Project } from "../../../../../domain/entities/Project"

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div
      className={`grid grid-cols-1 gap-3 mt-3 ${
        projects.length > 0 && "lg:grid-cols-3 sm:grid-cols-2"
      } animate-fade`}
    >
      {projects.length > 0 ? (
        projects.map((item, index) => (
          <Card project={item} key={index + item.id} />
        ))
      ) : (
        <p className="text-center">No projects available.</p>
      )}
    </div>
  )
}
