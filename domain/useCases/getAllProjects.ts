import { IProjectRepository } from "../repositories/ProjectRepository"

export function GetAllProjectsUseCase(projectRepository: IProjectRepository) {
  return async function () {
    return await projectRepository.getAllProjects()
  }
}
