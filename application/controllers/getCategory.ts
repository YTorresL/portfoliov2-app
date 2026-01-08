import { Project } from "../../domain/entities/Project"
import { GetProjectCategoriesUseCase } from "../../domain/useCases/getProjectCategories"

export function CategoryController() {
  return {
    getProjectCategories(projects: Project[]) {
      return GetProjectCategoriesUseCase()(projects)
    },
  }
}
