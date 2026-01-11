import Link from "next/link"
import { Project } from "../../../../../domain/entities/Project"
import { ImagesSlider } from "./ImagesSlider"
import { ProjectHeader } from "./Header"
import { IconGithub } from "../../../../../assets/icons/github"
import { IconTemplate } from "../../../../../assets/icons/live"

export function ProjectContent({ project }: { project: Project }) {
  const { type, title, images, description, technologies, links } = project
  const year = new Date(project.createdAt).toLocaleDateString("es-CO", {
    year: "numeric",
  })
  return (
    <section className="grid lg:grid-cols-2 gap-8 px-5 sm:px-10 pt-10 pb-5">
      <ImagesSlider images={images} />
      <article>
        <ProjectHeader />
        <span className="px-4 py-1 border border-black rounded-full">
          {type}
        </span>
        <span className="ml-2">{year}</span>
        <h2 className="text-4xl font-corn leading-none flex-shrink-0 text-primary mt-4">
          {title}
        </h2>
        <p className="whitespace-pre-line mt-4">{description}</p>
        <div className="flex gap-2 mt-4 flex-wrap justify-center sm:justify-start">
          {technologies.map((language) => (
            <span
              className="px-3 text-white py-1 bg-primary rounded-full hover:cursor-pointer text-xs"
              key={language}
            >
              {language}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {links.map((link) =>
            link.url ? (
              <Link
                key={link.type}
                href={link.type === "live" ? link.url : link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border py-1.5 rounded-lg flex gap-2 items-center border-secondary text-primary transition-colors relative px-4 hover:bg-primary hover:text-white hover:border-white"
              >
                {link.type === "live" ? (
                  <IconTemplate className="w-5 h-5" />
                ) : (
                  <IconGithub className="w-6 h-6" />
                )}
                {link.type === "live" ? "View Live" : "View Code"}
              </Link>
            ) : (
              <span
                className={`border py-2 rounded-lg relative px-6 cursor-not-allowed ${
                  link.type === "live"
                    ? "text-primary border-primary"
                    : "text-red-600 border-red-600"
                }`}
                key={link.type}
              >
                {link.type === "live" ? "Not Available" : "Private Repo"}
              </span>
            ),
          )}
        </div>

        <div className="h-px bg-primary mt-10"></div>
      </article>
    </section>
  )
}
