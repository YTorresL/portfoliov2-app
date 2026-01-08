import { useState } from "react"
import { ProjectController } from "../../../../../application/controllers/getProject"
import { Project } from "../../../../../domain/entities/Project"

export function useFiltered(projects: Project[], technology: string) {
  const [page, setPage] = useState(1)
  const { getFilterProjects } = ProjectController()
  const filteredProjects = getFilterProjects(projects, technology, page, 3)

  const handleLoadMore = () => {
    const nextPage = page + 1
    setPage(nextPage)
  }

  return {
    filteredProjects: {
      ...filteredProjects,
      handleLoadMore,
    },
  }
}
