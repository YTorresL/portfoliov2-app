import Link from "next/link"
import { useProject } from "../projectsList/hooks/useProject"
import { ProjectContent } from "./components/Content"
import { ProjectFooter } from "./components/Footer"
import { ArrowLeft } from "lucide-react"
import type { Project } from "../../../../domain/entities/Project"

function ProjectStructuredData({ project }: { project: Project }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    keywords: project.technologies.join(", "),
    url: `${siteUrl}/projects/${project.id}`,
    image: project.images?.[0],
    dateCreated: project.createdAt,
    author: {
      "@type": "Person",
      name: "Yalith Torres",
      url: siteUrl,
      sameAs: [
        "https://www.linkedin.com/in/yalith-torres/",
        "https://github.com/YTorresL",
      ],
    },
    about: project.type,
    ...(project.links?.find((l) => l.type === "live")?.url && {
      mainEntityOfPage: project.links.find((l) => l.type === "live")?.url,
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

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
      <ProjectStructuredData project={project} />
      <div className="min-h-screen">
        <ProjectContent project={project} />
        <ProjectFooter project={project} />
      </div>
    </>
  )
}
