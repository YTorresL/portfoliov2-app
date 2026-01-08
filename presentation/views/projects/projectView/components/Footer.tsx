import { Project } from "../../../../../domain/entities/Project"

export function ProjectFooter({ project }: { project: Project }) {
  const { content } = project

  return (
    <section className="px-5 sm:px-10 md:px-20 pb-10 text-center">
      {content?.map((paragraph, index) => (
        <p className="whitespace-pre-line mt-4" key={index + paragraph.slice(0, 10)}>
          {paragraph}
        </p>
      ))}
    </section>
  )
}
