"use client"
import { IconStar } from "../../../../assets/icons/star"
import { WORK_EXPERIENCES } from "../config/Profile"
import { useExperiences } from "../hooks/useExperiences"

export function Work() {
  const {} = useExperiences()
  const { currentExperience, handleExperienceChange: selectExperience } =
    useExperiences()

  return (
    <div className="flex flex-col gap-5 md:flex-row sm:gap-10">
      <div className="flex flex-col gap-3">
        {WORK_EXPERIENCES.map((item, index) => (
          <div key={index + item.company}>
            <button
              className={`${
                currentExperience.id === index
                  ? "border-secondary"
                  : "border-black"
              } border py-2 rounded-lg text-primary transition-colors relative w-full sm:w-60 hover:bg-primary hover:text-white hover:border-white`}
              onClick={() => selectExperience(index)}
            >
              {currentExperience === item && (
                <figure className="absolute -right-2 -top-2 p-1 bg-[#FAF0E4] rounded-full border border-[#F6AA19]">
                  <IconStar className="w-4 h-4" fill="#F6AA19" />
                </figure>
              )}

              {item.company}
            </button>
          </div>
        ))}
      </div>
      {currentExperience && (
        <div
          className="animate-fade md:animate-fade-right "
          key={currentExperience.id}
        >
          <ul>
            <li className="font-bold">{currentExperience.company}</li>
            <li className="flex flex-wrap gap-1 sm:gap-2">
              {currentExperience.position}
              <p>
                {currentExperience.start} – {currentExperience.end}
              </p>
            </li>
            <li className="mt-2">{currentExperience.responsibility}</li>
          </ul>
        </div>
      )}
    </div>
  )
}
