import Link from "next/link"
import { NAVIGATION } from "../config/Navigation"

export function HeroNavigation() {
  return (
    <nav className="flex gap-4 px-2 text-sm border-b border-black">
      {NAVIGATION.map((item) => (
        <Link
          key={item.id + item.name}
          href={item.id}
          className="before:transition-colors relative before:absolute before:content-['•'] before:text-4xl before:top-3 before:text-transparent before:left-[35%] before:pointer-events-none hover:before:text-primary focus:before:text-secondary"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
