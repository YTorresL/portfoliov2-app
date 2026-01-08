import { Project } from "../../../../../domain/entities/Project"

export function ProjectsPagination({
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
    <section className="mt-2 flex flex-col items-center">
      <p className="text-center mb-2">
        {dataPaginate.paginatedProjects.length} of {dataPaginate.totalProjects}{" "}
        projects
      </p>
      {dataPaginate.hasMore && (
        <button
          className="border border-black w-48 text-primary py-2 rounded-full transition-colors hover:bg-primary hover:text-white hover:border-white"
          onClick={dataPaginate.handleLoadMore}
        >
          See more
        </button>
      )}
    </section>
  )
}
