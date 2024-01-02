import AppLayout from "@/components/app-layout"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

import { Intro } from "../sections/intro"
import { Profile } from "../sections/profile"
import Projects from "@/sections/projects"
import Contacts from "@/sections/contact"

export default function Home() {
  return (
    <AppLayout>
      <Header />
      <main>
        <Intro />
        <Profile />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </AppLayout>
  )
}
