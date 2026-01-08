import { Metadata } from "next"
import { ProjectController } from "../../../application/controllers/getProject"
import { AppLayout } from "../../../presentation/components/AppLayout"
import { Footer } from "../../../presentation/components/Footer"
import { Header } from "../../../presentation/components/Header"
import { Project } from "../../../presentation/views/projects/projectView/Project"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { getAllProjects } = ProjectController()
  const projects = await getAllProjects()

  const project = projects.find((p) => p.id === params.slug)

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

  if (!project) {
    return {
      title: "Project not found | Portfolio",
      description: "This project does not exist.",
    }
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,

    keywords: [
      project.title,
      project.type,
      ...project.technologies,
      "web development",
      "next.js",
      "portfolio",
    ],

    openGraph: {
      title: project.title,
      description: project.description,
      url: `${siteUrl}/projects/${project.id}`,
      type: "article",
      images: [
        {
          url: project.images?.[0],
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.images?.[0]],
    },
  }
}

export default function ProjectPage({ params }: Props) {
  return (
    <AppLayout>
      <Header />
      <Project slug={params.slug} />
      <Footer />
    </AppLayout>
  )
}
