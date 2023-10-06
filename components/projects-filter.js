"use client"
import { fetchCategories, fetchProjects } from "@/firebase/client"
import { useEffect, useState } from "react"
import Project from "./projects-card"

export default function ProjectsFilter() {
  const [projects, setProjects] = useState([])
  const [categories, setCategories] = useState([])
  const [filters, setFilters] = useState({ category: "all" })
  const [loading, setLoading] = useState(true)
  const [visibleProjects, setVisibleProjects] = useState(2) // Número inicial de proyectos visibles

  useEffect(() => {
    fetchProjects().then(setProjects)
  }, [])

  useEffect(() => {
    fetchCategories().then(setCategories)
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <section className="py-10 flex justify-center">
        <span className="w-12 h-12 border-4 border-[#F6AA19] border-b-transparent rounded-full inline-block animate-spin"></span>
      </section>
    )
  }

  const filterProjects = () => {
    return projects.filter((project) => {
      return filters.category === "all" || project.category === filters.category
    })
  }

  const filteredProjects = filterProjects()
  const projectsToShow = filteredProjects.slice(0, visibleProjects)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleLoadMore = () => {
    const remainingProjects = filteredProjects.length - visibleProjects
    const additionalProjects = Math.min(remainingProjects, 3) // Cargar hasta un máximo de 6 proyectos adicionales
    const newVisibleProjects = visibleProjects + additionalProjects
    setVisibleProjects(newVisibleProjects)
  }
  const hasMoreProjects = visibleProjects < filteredProjects.length

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {categories.map((item, index) => (
          <button
            className={`border px-3 py-1.5 rounded-lg text-[#445334] capitalize transition-colors ${
              item.name === filters.category
                ? "border-[#F6AA19]"
                : "border-black"
            }`}
            key={index}
            name="category"
            value={item.name}
            onClick={handleChange}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div
        className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-3 animate-fade"
        key={filters.category}
      >
        {projectsToShow.map((item, index) => (
          <Project
            type={item.type}
            link={item.link}
            title={item.title}
            date={item.date}
            image={item.image}
            key={index}
          />
        ))}
      </div>
      {hasMoreProjects && (
        <button
          className="bg-[#445334] w-48 mx-auto text-white py-1.5 rounded-full"
          onClick={handleLoadMore}
        >
          Ver más
        </button>
      )}
    </>
  )
}
