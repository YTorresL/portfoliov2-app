import Link from "next/link"
import { socialMedia } from "@/app/information"

export default function SocialMedia({ color = "000" }) {
  return (
    <div className="flex gap-3">
      {socialMedia.map((item, index) => (
        <Link href={item.link} key={index}>
          <item.icon className={`h-8 w-8 text-[#${color}]`} />
        </Link>
      ))}
    </div>
  )
}
