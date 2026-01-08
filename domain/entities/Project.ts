export interface Project {
  id: string
  createdAt: string | null
  description: string
  images: string[]
  technologies: string[]
  links: Link[]
  state: "finished" | "in-progress" | "planned"
  title: string
  type: TypeProject
  content: string[]
}

export type Links = "github" | "live"

export interface Link {
  type: Links
  url: string
}

export type TypeProject =
  | "Personal project"
  | "Degree thesis"
  | "Work project"
  | "Internship"
  | "Challenges"
  | "Technical test"

export function hasLanguage(project: Project, language: string): boolean {
  return project.technologies.includes(language)
}
