import { Metadata } from "next"
import { ProjectController } from "../../../application/controllers/getProject"
import { AppLayout } from "../../../presentation/components/AppLayout"
import { Footer } from "../../../presentation/components/Footer"
import { Header } from "../../../presentation/components/Header"
import { getProjectsCached } from "../../../application/loaders/getProjectsCached"
import { ProjectView } from "../../../presentation/views/projects/projectView/Project"

export const revalidate = 86400

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const projects = await getProjectsCached()

  return projects.map((project) => ({
    slug: project.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const projects = await getProjectsCached()

  const { getProjectById } = ProjectController()
  const project = getProjectById(projects, params.slug)

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

  if (!project) {
    return {
      title: "Project not found | Portfolio",
      robots: { index: false },
    }
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
    alternates: {
      canonical: `${siteUrl}/projects/${project.id}`,
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const projects = await getProjectsCached()

  return (
    <AppLayout>
      <Header />
      <ProjectView slug={params.slug} projects={projects} />
      <Footer />
    </AppLayout>
  )
}
