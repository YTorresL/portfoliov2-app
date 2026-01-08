import { useState } from "react"
import { WORK_EXPERIENCES } from "../config/Profile"

export function useExperiences() {
  const [experience, setExperience] = useState(
    WORK_EXPERIENCES[WORK_EXPERIENCES.length - 1].id,
  )

  const handleExperienceChange = (index: number) => {
    setExperience(index)
  }

  const currentExperience = WORK_EXPERIENCES[experience]

  return { currentExperience, handleExperienceChange }
}
