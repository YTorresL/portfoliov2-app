import "./globals.css"
import "normalize.css/normalize.css"

export const metadata = {
  title: "YTorres | Portfolio",
  description: "Yalith Torres - Web Developer. Discover my projects and get in touch with me. Expert in web development and creative design.",
  author: "Yalith Torres",
  keywords: "web developer, developer, web design, diseño web, desarrollo web, front-end, back-end, full-stack, web development, desarrollo web, diseño web, diseño creativo, portfolio, projects, contact, yalith torres",
  ogTitle: "YTorres | Portfolio",
  ogDescription: "Yalith Torres - Web Developer. Discover my projects and get in touch with me. Expert in web development and creative design.",
  ogType: "website",
  ogSiteName: "YTorres | Portfolio",
  ogLocale: "en_US",

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FAF0E4] leading-6">{children}</body>
    </html>
  )
}
