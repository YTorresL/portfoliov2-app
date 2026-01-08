import { Project } from "../entities/Project"

export function GetProjectByIdUseCase() {
  return function (projects: Project[], id: string) {
    return projects.find((project) => project.id === id) || null
  }
}
