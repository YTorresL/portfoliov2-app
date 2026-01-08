import { Projects } from "../projects/projectsList/Projects"
import { Contact } from "./contact/Contact"
import { Hero } from "./hero/Hero"
import { Profile } from "./profile/Profile"

export function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <Projects />
      <Contact />
    </>
  )
}
