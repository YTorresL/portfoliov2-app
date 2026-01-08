export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-5 flex gap-2 justify-center border-t border-black">
      <p>Made with Next.js ♥</p>
      <strong>2023 - {currentYear}</strong>
    </footer>
  )
}
