"use client"
import { Project } from "../../../../../domain/entities/Project"
import { useCategories } from "../hooks/useCategories"
import { useFiltered } from "../hooks/useFiltered"
import { ProjectsCategories } from "./ProjectsCategories"
import { ProjectsGrid } from "./ProjectsGrid"
import { ProjectsPagination } from "./ProjectsPagination"

export function ProjectsContainer({ projects }: { projects: Project[] }) {
  const { categories, category, handleCategoryChange } = useCategories(projects)
  const { filteredProjects } = useFiltered(projects, category)

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <ProjectsCategories
          categories={categories}
          currentCategory={category}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      <ProjectsGrid dataPaginate={filteredProjects} />
      <ProjectsPagination dataPaginate={filteredProjects} />
    </>
  )
}
