"use client"
import { useState } from "react"
import { perfilDescription } from "@/app/information"
import Subtitles from "@/components/subtitles"
import ProfileImage from "./profile-image"
import Skills from "./profile-skills"
import WorkExperience from "./profile-work-experience"

export default function ProfileSection() {
  const [experience, setExperience] = useState(0)

  const selectExperience = (experience) => {
    setExperience(experience)
  }
  return (
    <section className="border-y border-black" id="about">
      <div className="lg:grid-cols-4 grid grid-cols-1">
        <ProfileImage />
        <div className="lg:col-span-3 md:p-8 p-5">
          <div className="grid grid-cols-1 gap-4">
            <p>{perfilDescription}</p>
            <Subtitles>skills</Subtitles>
            <Skills />
            <Subtitles>work experience</Subtitles>
            <WorkExperience
              experience={experience}
              selectExperience={selectExperience}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
