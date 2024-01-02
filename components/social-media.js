import Link from "next/link"
import { socialMedia } from "@/app/information"

export function SocialMedia({ color = "000" }) {
  return (
    <div className="flex gap-3">
      {socialMedia.map((item, index) => (
        <Link href={item.link} key={index} target="_blank">
          <item.icon className={`h-8 w-8 text-[#${color}]`} />
        </Link>
      ))}
    </div>
  )
}
