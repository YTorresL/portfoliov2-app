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
      title: "Project not found | YTorres Portfolio",
      robots: { index: false },
    }
  }

  const projectUrl = `${siteUrl}/projects/${project.id}`
  const coverImage = project.images?.[0] ?? `${siteUrl}/yalith.jpg`

  // Truncate description for meta tags (max ~160 chars)
  const metaDescription =
    project.description.length > 160
      ? project.description.slice(0, 157) + "..."
      : project.description

  return {
    title: `${project.title} | YTorres Portfolio`,
    description: metaDescription,
    keywords: [
      ...project.technologies,
      "web developer",
      "Yalith Torres",
      project.type,
    ].join(", "),
    authors: [{ name: "Yalith Torres", url: siteUrl }],
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      title: `${project.title} | YTorres Portfolio`,
      description: metaDescription,
      url: projectUrl,
      siteName: "YTorres Portfolio",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: coverImage,
          width: 1200,
          height: 630,
          alt: `${project.title} project preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | YTorres Portfolio`,
      description: metaDescription,
      images: [coverImage],
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
