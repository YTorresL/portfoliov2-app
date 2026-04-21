"use client"
import { useState } from "react"
import { Project } from "../../../../../domain/entities/Project"
import { ProjectController } from "../../../../../application/controllers/getProject"
import { CategoryController } from "../../../../../application/controllers/getCategory"
import { ProjectsCategories } from "./ProjectsCategories"
import { ProjectsGrid } from "./ProjectsGrid"
import { ProjectsPagination } from "./ProjectsPagination"

const PAGE_SIZE = 3

export function ProjectsContainer({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<string>("all")
  const [page, setPage] = useState(1)

  const { getProjectCategories } = CategoryController()
  const categories = getProjectCategories(projects)

  const { getFilterProjects } = ProjectController()
  const dataPaginate = getFilterProjects(projects, category, page, PAGE_SIZE)

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory)
    setPage(1)
  }

  const handleLoadMore = () => {
    setPage((prev) => prev + 1)
  }

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <ProjectsCategories
          categories={["all", ...categories]}
          currentCategory={category}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      <ProjectsGrid projects={dataPaginate.paginatedProjects} />
      <ProjectsPagination dataPaginate={{ ...dataPaginate, handleLoadMore }} />
    </>
  )
}
