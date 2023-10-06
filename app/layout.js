import "./globals.css"
import "normalize.css/normalize.css"

export const metadata = {
  title: "YTorres | Portfolio",
  description: "Portfolio web by Yalith Torres",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FAF0E4] leading-6">{children}</body>
    </html>
  )
}
