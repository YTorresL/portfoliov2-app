import { Home } from "../presentation/views/home/Home"
import { AppLayout } from "../presentation/components/AppLayout"
import { Header } from "../presentation/components/Header"
import { Footer } from "../presentation/components/Footer"
import { getProjectsCached } from "../application/loaders/getProjectsCached"

export const metadata = {
  title: "YTorres | Portfolio – Yalith Torres, Web Developer",
  description:
    "Yalith Torres – Computer Engineer and Freelance Web Developer specialized in web and mobile application development. Discover my projects built with React, Next.js, TypeScript, WordPress and more.",
  authors: [{ name: "Yalith Torres" }],
  keywords:
    "Yalith Torres, web developer, computer engineer, freelance, Next.js, React, TypeScript, WordPress, portfolio, projects, full-stack, front-end, desarrollo web",
  openGraph: {
    title: "YTorres | Portfolio – Yalith Torres, Web Developer",
    description:
      "Computer Engineer and Freelance Web Developer. Discover my projects and get in touch.",
    type: "website",
    locale: "en_US",
    siteName: "YTorres Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "YTorres | Portfolio – Yalith Torres, Web Developer",
    description:
      "Computer Engineer and Freelance Web Developer. Discover my projects and get in touch.",
  },
  verification: {
    google: "-mBNwJzxyEqLfhmDxt71BFH52AzLjxh_yz31AxKVDuI",
  },
}

async function PersonStructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  const projects = await getProjectsCached()

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yalith Torres",
    url: siteUrl,
    jobTitle: "Web Developer",
    description:
      "Computer Engineer and Freelance Programmer specialized in web and mobile application development.",
    knowsAbout: [
      "Web Development",
      "React",
      "Next.js",
      "TypeScript",
      "WordPress",
      "Full-stack Development",
    ],
    sameAs: [
      "https://www.linkedin.com/in/yalith-torres/",
      "https://github.com/YTorresL",
    ],
    hasCreativeWork: projects.slice(0, 10).map((p) => ({
      "@type": "CreativeWork",
      name: p.title,
      description: p.description,
      url: `${siteUrl}/projects/${p.id}`,
      keywords: p.technologies.join(", "),
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default async function Page() {
  return (
    <AppLayout>
      <PersonStructuredData />
      <Header />
      <Home />
      <Footer />
    </AppLayout>
  )
}
