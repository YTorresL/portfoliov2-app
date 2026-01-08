import { Project } from "../../domain/entities/Project"
import { createPaginateProjectsUseCase } from "../../domain/useCases/createPaginateProjects"
import { GetAllProjectsUseCase } from "../../domain/useCases/getAllProjects"
import { GetFilterProjectsUseCase } from "../../domain/useCases/getFilterProjects"
import { GetProjectByIdUseCase } from "../../domain/useCases/getProjectById"
import { ProjectRepository } from "../../infrastructure/repositories/FirebaseProject"

export function ProjectController() {
  const projectRepository = ProjectRepository()
  return {
    async getAllProjects() {
      return await GetAllProjectsUseCase(projectRepository)()
    },
    getFilterProjects(
      projects: Project[],
      technology: string,
      page: number,
      pageSize: number,
    ) {
      const filteredProjects = GetFilterProjectsUseCase()(projects, technology)
      return createPaginateProjectsUseCase()(filteredProjects, page, pageSize)
    },
    getProjectById(projects: Project[], id: string) {
      return GetProjectByIdUseCase()(projects, id)
    },
  }
}
