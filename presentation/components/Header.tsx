import Link from "next/link"
import { Logo } from "../../assets/icons/logo"
import { SocialLinks } from "./SocialLinks"

export function Header() {
  return (
    <header className="flex items-center justify-between p-2 px-5 border-b border-black">
      <Link href="/" aria-label="Home">
      <Logo
        className="h-12"
        fill="#F6AA19"
        stroke="#F6AA19"
        strokeMiterlimit="10"
        strokeWidth="16"
      />
      </Link>
      <SocialLinks />
    </header>
  )
}
