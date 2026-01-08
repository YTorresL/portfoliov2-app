import { useProject } from "../projectsList/hooks/useProject"
import { useProjects } from "../projectsList/hooks/useProjects"
import { ProjectContent } from "./components/Content"
import { ProjectFooter } from "./components/Footer"

export async function Project({ slug }: { slug: string }) {
  const { projects } = await useProjects()
  const { project } = useProject(projects, slug)

  return (
    <>
      <ProjectContent project={project} />
      <ProjectFooter project={project} />
    </>
  )
}
