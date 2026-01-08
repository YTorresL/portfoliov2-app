import { hasLanguage, Project } from "../entities/Project"

export function GetFilterProjectsUseCase() {
  return function (projects: Project[], technology: string) {
    return projects.filter(
      (project) => hasLanguage(project, technology) || technology === "all",
    )
  }
}
