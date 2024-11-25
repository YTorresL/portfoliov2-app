"use client"
import { fetchProjects } from "@/services/firebase/client"

import { useEffect, useState } from "react"

import { Card } from "@/components/projects/card"
import { Header } from "@/components/projects/header"
import { TYPO_STYLES, Typography } from "@/components/common/typography"

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [filters, setFilters] = useState({ category: "all" })
  const [loading, setLoading] = useState(true)
  const [visibleProjects, setVisibleProjects] = useState(3) // Número inicial de proyectos visibles

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .then(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <section className="flex justify-center py-10">
        <span className="w-12 h-12 border-4 border-secondary border-b-transparent rounded-full inline-block animate-spin"></span>
      </section>
    )
  }

  const filterProjects = () => {
    const { category } = filters
    return projects.filter((project) => {
      if (category === "all") {
        return true
      }
      return project.languages.includes(category)
    })
  }

  const categories = projects.reduce(
    (acc, project) => {
      const { languages } = project
      languages.forEach((language) => {
        if (!acc.includes(language)) {
          acc.push(language)
        }
      })
      return acc
    },
    ["all"],
  )

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
    <section
      className="px-5 py-10 md:px-10 sm:py-16 animate-fade"
      id="projects"
    >
      <div className="grid grid-cols-1 gap-4">
        <Typography
          tag={"h4"}
          size={TYPO_STYLES.SIZE["3XL"]}
          color={TYPO_STYLES.COLOR.PRIMARY}
          family={TYPO_STYLES.FAMILY.CORN}
          others={"text-center"}
        >
          Projects
        </Typography>
        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <Header
              key={index}
              category={category}
              filters={filters}
              handleChange={handleChange}
            />
          ))}
        </div>
        <div
          className={`grid grid-cols-1 gap-3 mt-3 ${
            projects.length > 0 && "lg:grid-cols-3 sm:grid-cols-2"
          } animate-fade`}
          key={filters.category}
        >
          {projects.length > 0 ? (
            projectsToShow.map((item, index) => (
              <Card
                type={item.type}
                link={item.link}
                title={item.title}
                image={item.image}
                state={item.state}
                categories={item.languages}
                description={item.description}
                key={index}
              />
            ))
          ) : (
            <Typography tag={"p"} others={"text-center"}>
              No projects available.
            </Typography>
          )}
        </div>
        <Typography tag={"p"} others={"text-center -mb-2"}>
          {projectsToShow.length} of {filteredProjects.length} projects
        </Typography>
        {hasMoreProjects && (
          <button
            className="border border-black w-48 mx-auto text-primary py-1.5 rounded-full"
            onClick={handleLoadMore}
          >
            See more
          </button>
        )}
      </div>
    </section>
  )
}
