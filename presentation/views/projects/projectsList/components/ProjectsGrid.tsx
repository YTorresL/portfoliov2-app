import { Card } from "./ProjectsCard"
import { Project } from "../../../../../domain/entities/Project"

export function ProjectsGrid({
  dataPaginate,
}: {
  dataPaginate: {
    paginatedProjects: Project[]
    totalProjects: number
    hasMore: boolean
    handleLoadMore: () => void
  }
}) {
  return (
    <div
      className={`grid grid-cols-1 gap-3 mt-3 ${
        dataPaginate.paginatedProjects.length > 0 &&
        "lg:grid-cols-3 sm:grid-cols-2"
      } animate-fade`}
      key={dataPaginate.paginatedProjects.length}
    >
      {dataPaginate.paginatedProjects.length > 0 ? (
        dataPaginate.paginatedProjects.map((item, index) => (
          <Card project={item} key={index + item.id} />
        ))
      ) : (
        <p className="text-center">No projects available.</p>
      )}
    </div>
  )
}
