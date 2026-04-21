import "./globals.css"
import "normalize.css/normalize.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FAF0E4] leading-6">{children}</body>
    </html>
  )
}
