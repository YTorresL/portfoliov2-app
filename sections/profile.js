"use client"
import { useState } from "react"
import Image from "next/image"

import { Subtitles } from "@/components/subtitles"
import { IconStar } from "../components/icons"

import {
  description,
  experiences,
  personalInformation,
  skills,
} from "@/data/profile"

export function Profile() {
  const [experience, setExperience] = useState(0)

  const selectExperience = (experience) => {
    setExperience(experience)
  }
  return (
    <section className="border-black border-y" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <ProfileImage />
        <div className="p-5 lg:col-span-3 md:p-8">
          <div className="grid grid-cols-1 gap-4">
            <p>{description}</p>
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

function ProfileImage() {
  return (
    <div className="grid grid-cols-1 border-black lg:border-r">
      <div className="flex justify-center py-6">
        <div className="overflow-hidden rounded-full h-60 w-60">
          <Image
            src="/yalith.jpg"
            alt="Yalith Torres web developer"
            height={240}
            width={240}
            className="object-cover object-center w-full h-full"
            priority={true}
          />
        </div>
      </div>
      {personalInformation.map((item, index) => (
        <div
          className="flex items-center justify-between p-3 border-t border-black"
          key={index}
        >
          <strong>{item.title}</strong>
          <span>{item.paragraph}</span>
        </div>
      ))}
    </div>
  )
}

function Skills() {
  return (
    <div className="flex flex-wrap justify-center gap-1">
      {skills.map((item, index) => (
        <div
          className="grid w-24 grid-cols-1 gap-1 py-2 transition ease-out delay-100 rounded-lg justify-items-center hover:shadow"
          key={index}
        >
          <item.icon className="w-8 h-8" />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  )
}

function WorkExperience({ experience, selectExperience }) {
  const currentExperience = experiences[experience]
  return (
    <div className="flex flex-col gap-5 md:flex-row sm:gap-10">
      <div className="flex flex-col gap-3">
        {experiences.map((item, index) => (
          <div key={index}>
            <button
              className={`${
                experience === index
                  ? "border-[#F6AA19]"
                  : "border-black hover:border-[#445334]"
              } border py-1.5 rounded-lg text-[#445334] transition-colors relative w-full sm:w-60`}
              onClick={() => selectExperience(index)}
            >
              {experience === index && (
                <div className="absolute -right-2 -top-2 p-1 bg-[#FAF0E4] rounded-full border border-[#F6AA19]">
                  <IconStar className="w-4 h-4" fill="#F6AA19" />
                </div>
              )}

              {item.company}
            </button>
          </div>
        ))}
      </div>
      {currentExperience && (
        <div className="animate-fade md:animate-fade-right" key={experience}>
          <ul>
            <li className="font-bold">{currentExperience.company}</li>
            <li className="flex flex-wrap gap-1 sm:gap-2">
              {currentExperience.position}
              <div>
                {currentExperience.start} – {currentExperience.end}
              </div>
            </li>
            <li className="flex flex-wrap sm:gap-2">
              <ul className="my-2 list-disc list-inside">
                {currentExperience.responsibility.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </li>
          </ul>
          <ul className="flex flex-wrap gap-2 sm:gap-3">
            {currentExperience.tools.map((tools) => (
              <li key={tools} className="px-2 border-b border-black">
                {tools}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
