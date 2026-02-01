import { isVisible } from "../entities/Project"
import { IProjectRepository } from "../repositories/ProjectRepository"

export function GetAllProjectsUseCase(projectRepository: IProjectRepository) {
  return async function () {
    const proyects = await projectRepository.getAllProjects()
    return proyects.filter((project)=> isVisible(project))
  }
}
