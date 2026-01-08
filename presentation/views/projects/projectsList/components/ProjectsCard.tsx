import Image from "next/image"
import { Project } from "../../../../../domain/entities/Project"
import Link from "next/link"

export function Card({ project }: { project: Project }) {
  const { type, title, images, state, description, technologies, id } = project

  return (
    <article className="grid grid-cols-1 gap-2 p-4 border border-black rounded-lg place-items-start">
      <Link href={`projects/${id}`} className="overflow-hidden rounded-lg aspect-video w-full">
        <Image
          src={images[0]}
          className="object-cover object-top w-full h-full"
         alt={`Preview of ${title}, a ${type} project built with ${technologies.slice(0,2).join(', ')}`}
          loading="lazy"
          width={364}
          height={192}
        />
      </Link>

      <div className="flex items-center gap-2">
        <h5 className="text-2xl font-corn leading-none text-primary">
          {title}
        </h5>
        <i
          className={`leading-none ${
            state === "finished" ? "text-red-600" : "text-green-600"
          }`}
        >
          {state}
        </i>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-2 items-center">
          <span className="px-4 py-1 border border-black rounded-full">
            {type}
          </span>
        </div>
        {description && <p className="text-xs">{description}</p>}
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-1 text-white">
            {technologies.slice(0, 2).map((language) => (
              <span
                className="px-3 py-1 bg-primary rounded-full hover:cursor-pointer text-xs"
                key={language}
              >
                {language}
              </span>
            ))}
            {technologies.length > 2 && (
              <div className="relative group">
                <span className="px-3 py-1 bg-primary rounded-full hover:cursor-pointer text-xs">
                  +{technologies.length - 2}
                </span>
                <div className="absolute bg-black/80 flex gap-0.5 flex-col p-2 text-xs rounded-lg left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {technologies.slice(2).map((language, index) => (
                    <span key={index + language}>{language}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end mt-0">
        <Link href={`projects/${id}`} className="text-sm text-secondary disabled:text-gray-400 border rounded-full border-secondary px-4 py-2 hover:border-primary transition-colors duration-150 hover:text-primary">
          More info
        </Link>
      </div>
    </article>
  )
}
