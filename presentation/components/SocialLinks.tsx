import Link from "next/link"
import { SOCIAL_LINKS } from "../config/SocialLinks"

export function SocialLinks({ color = "000" }: { color?: string } = {}) {
  return (
    <div className="flex space-x-4">
      {SOCIAL_LINKS.map((item) => (
        <Link href={item.link} key={item.link} target="_blank">
          <item.icon className={`h-8 w-8 text-[#${color}]`} />
        </Link>
      ))}
    </div>
  )
}
