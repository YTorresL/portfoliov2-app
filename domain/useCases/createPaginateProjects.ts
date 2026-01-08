import { Project } from "../entities/Project"

export function createPaginateProjectsUseCase() {
  return function (projects: Project[], page: number, pageSize: number) {
    const startIndex = 0
    const endIndex = page * pageSize
    return {
      paginatedProjects: projects.slice(startIndex, endIndex),
      totalProjects: projects.length,
      hasMore: endIndex < projects.length,
    }
  }
}
