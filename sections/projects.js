"use client"
import { fetchCategories, fetchProjects } from "@/firebase/client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { Titles } from "@/components/titles"

export default function Projects() {
  return (
    <section
      className="px-5 py-10 md:px-10 sm:py-16 animate-fade"
      id="projects"
    >
      <div className="grid grid-cols-1 gap-4">
        <Titles>Projects</Titles>
        <Filter />
      </div>
    </section>
  )
}

function Filter() {
  const [projects, setProjects] = useState([])
  const [categories, setCategories] = useState([])
  const [filters, setFilters] = useState({ category: "all" })
  const [loading, setLoading] = useState(true)
  const [visibleProjects, setVisibleProjects] = useState(3) // Número inicial de proyectos visibles

  useEffect(() => {
    fetchProjects().then(setProjects)
  }, [])

  useEffect(() => {
    fetchCategories().then(setCategories)
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <section className="flex justify-center py-10">
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
        className="grid grid-cols-1 gap-3 lg:grid-cols-3 sm:grid-cols-2 animate-fade"
        key={filters.category}
      >
        {projectsToShow.map((item, index) => (
          <Project
            type={item.type}
            link={item.link}
            title={item.title}
            date={item.date}
            image={item.image}
            state={item.state}
            key={index}
          />
        ))}
      </div>
      {hasMoreProjects && (
        <button
          className="bg-[#445334] w-48 mx-auto text-white py-1.5 rounded-full"
          onClick={handleLoadMore}
        >
          see more
        </button>
      )}
    </>
  )
}

function Project({ title, type, image, date, link, state }) {
  return (
    <div className="grid grid-cols-1 gap-2 p-4 border border-black rounded-lg place-items-start">
      <div className="w-full h-40 overflow-hidden rounded-lg md:h-36 lg:h-32 xl:h-48">
        <img
          src={image}
          className="object-cover object-top w-full h-full"
          alt={title}
          loading="lazy"
        />
      </div>
      <div className="flex items-center gap-2">
        <h4 className="text-2xl font-corn">{title}</h4>
        <i
          className={`${
            state === "finished"
              ? "text-red-600"
              : state === "in progress"
              ? " text-green-600"
              : "text-gray-600"
          }`}
        >
          {state}
        </i>
      </div>
      <span className="px-4 py-1 border border-black rounded-full">{type}</span>
      <div className="flex items-center justify-between w-full">
        <span className="px-4 py-1 border border-black rounded-full">
          {date}
        </span>
        {link.length > 5 && (
          <Link
            href={link}
            target="_blank"
            className={`text-[#F6AA19] hover:underline disabled:text-gray-400`}
          >
            Link...
          </Link>
        )}
      </div>
    </div>
  )
}
