import { Project } from "../entities/Project"

export function GetProjectCategoriesUseCase() {
  return function (projects: Project[]) {
    const categoriesSet = new Set<string>()

    projects.forEach((project) => {
      project.technologies.forEach((tech: string) => {
        categoriesSet.add(tech)
      })
    })

    return Array.from(categoriesSet)
  }
}
