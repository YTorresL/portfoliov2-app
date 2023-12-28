import { Logo } from "./icons"
import { SocialMedia } from "./social-media"

export function Header() {
  return (
    <header className="flex items-center justify-between p-2 px-5 border-b border-black">
      <Logo
        className="h-12"
        fill="#F6AA19"
        stroke="#F6AA19"
        strokeMiterlimit="10"
        strokeWidth="16"
      />
      <div className="flex gap-3">
        <SocialMedia />
      </div>
    </header>
  )
}
