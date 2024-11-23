"use client"
import { useEffect, useState } from "react"

import { Subtitles } from "@/components/common/subtitles"
import { fetchProjects } from "@/services/firebase/client"

import { description, experiences, information } from "@/data/profile"
import { Skill } from "../components/profile/skill"
import { Typography } from "@/components/common/typography"
import { ImageProfile } from "@/components/profile/image"
import { Information } from "@/components/profile/info"
import { Experience } from "@/components/profile/experience"

export function Profile() {
  const [experience, setExperience] = useState(0)
  const [projects, setProjects] = useState([])

  const selectExperience = (experience) => {
    setExperience(experience)
  }

  useEffect(() => {
    fetchProjects().then(setProjects)
  }, [])

  const skills = projects.reduce((acc, project) => {
    const { languages } = project
    languages.forEach((language) => {
      const existingSkill = acc.find((skill) => skill.name === language)
      if (existingSkill) {
        existingSkill.projects += 1
      } else {
        acc.push({ name: language, projects: 1 })
      }
    })
    return acc
  }, [])

  return (
    <section className="border-black border-y" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="grid grid-cols-1 border-black lg:border-r">
          <ImageProfile />
          {information.map((item, index) => (
            <Information
              key={index}
              title={item.title}
              paragraph={item.paragraph}
            />
          ))}
        </div>
        <div className="p-5 lg:col-span-3 md:p-8">
          <div className="grid grid-cols-1 gap-4">
            <Typography tag={"p"}>{description}</Typography>
            <Subtitles>skills</Subtitles>
            <div
              className={`flex gap-2 flex-wrap ${
                skills.length === 0 && "justify-center"
              }`}
            >
              {skills.length > 0 ? (
                skills
                  .sort(
                    (a, b) =>
                      b.projects - a.projects || a.name.localeCompare(b.name),
                  )
                  .map((skill, index) => (
                    <Skill
                      name={skill.name}
                      projects={skill.projects}
                      key={index}
                    />
                  ))
              ) : (
                <Typography tag={"p"}>No skills available.</Typography>
              )}
            </div>

            <Subtitles>work experience</Subtitles>
            <Experience
              experience={experience}
              selectExperience={selectExperience}
              experiences={experiences}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
