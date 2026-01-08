import { useState } from "react"
import { CategoryController } from "../../../../../application/controllers/getCategory"
import { Project } from "../../../../../domain/entities/Project"

export function useCategories(projects: Project[]) {
  const [category, setCategory] = useState<string>("all")

  const { getProjectCategories } = CategoryController()
  const categories = getProjectCategories(projects)

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory)
  }

  return {
    categories,
    category,
    handleCategoryChange,
  }
}
