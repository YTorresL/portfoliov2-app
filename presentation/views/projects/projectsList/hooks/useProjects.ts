import { ProjectController } from "../../../../../application/controllers/getProject"

export async function useProjects() {
  const { getAllProjects } = ProjectController()
  const projects = await getAllProjects()

  return {
    projects,
  }
}
