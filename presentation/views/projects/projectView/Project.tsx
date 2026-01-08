import Link from "next/link"
import { useProject } from "../projectsList/hooks/useProject"
import { ProjectContent } from "./components/Content"
import { ProjectFooter } from "./components/Footer"
import { ArrowLeft } from "lucide-react"
import type { Project } from "../../../../domain/entities/Project"

export async function ProjectView({
  slug,
  projects,
}: {
  slug: string
  projects: Project[]
}) {
  const { project } = useProject(projects, slug)

  if (!project) {
    return (
      <div className="h-screen flex gap-4 flex-col justify-center items-center">
        <span className="loader"></span> Project not found
        <Link
          href="/"
          className="flex items-center gap-2 transition-colors hover:text-primary mx-auto -mt-2"
        >
          <figure className="bg-primary rounded-full h-8 w-8 flex items-center justify-center">
            <ArrowLeft className="h-4 w-4 text-white" />
          </figure>

          <span>Back to home</span>
        </Link>
      </div>
    )
  }

  return (
    <>
      <ProjectContent project={project} />
      <ProjectFooter project={project} />
    </>
  )
}
