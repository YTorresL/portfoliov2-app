import ProjectsClient from "@/components/projects/projectsClient"

export default async function Projects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`, {
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    return <div className="text-center py-10">Failed to load projects.</div>
  }

  const projects = await res.json()

  return <ProjectsClient projects={projects} />
}
