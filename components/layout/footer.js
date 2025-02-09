import { Typography } from "../common/typography"

export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="py-5 flex gap-2 justify-center border-t border-black">
      <Typography tag={"p"}>Made with Next.js ♥</Typography>
      <Typography tag={"strong"}>2023 - {currentYear}</Typography>
    </footer>
  )
}
