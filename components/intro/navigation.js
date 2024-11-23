import Link from "next/link"

export function Navigation({ name, id }) {
  return (
    <Link
      href={id}
      className="before:transition-colors relative before:absolute before:content-['•'] before:text-4xl before:top-3 before:text-transparent before:left-[40%] before:pointer-events-none hover:before:text-primary focus:before:text-secondary"
    >
      {name}
    </Link>
  )
}
