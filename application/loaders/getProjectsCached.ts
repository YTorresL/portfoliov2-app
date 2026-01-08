import { cache } from "react"
import { ProjectController } from "../controllers/getProject"
import { Project } from "../../domain/entities/Project"

export const getProjectsCached = cache(async (): Promise<Project[]> => {
  const { getAllProjects } = ProjectController()
  return getAllProjects()
})
