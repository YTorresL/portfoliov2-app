import { ProjectController } from "../../../../../application/controllers/getProject"
import { Project } from "../../../../../domain/entities/Project"

export function useProject(projects: Project[], id: string) {
  const { getProjectById } = ProjectController()
  const project = getProjectById(projects, id)
  return { project }
}
