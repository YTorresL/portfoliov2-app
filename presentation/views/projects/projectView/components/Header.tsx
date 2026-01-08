import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export function ProjectHeader() {
  return (
    <header>
      <div className="mt-6 mb-4">
        <Link
          href="/"
          className="flex items-center gap-2 transition-colors hover:text-primary w-56"
        >
          <figure className="bg-primary rounded-full h-8 w-8 flex items-center justify-center">
            <ArrowLeft className="h-4 w-4 text-white" />
          </figure>

          <span>Back to home</span>
        </Link>
      </div>
    </header>
  )
}
