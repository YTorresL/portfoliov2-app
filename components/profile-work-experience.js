import { IconStar } from "./icons"
import { workExperience } from "@/app/information"

export default function WorkExperience({ experience, selectExperience }) {
  const currentExperience = workExperience[experience]
  return (
    <div className="flex flex-col md:flex-row gap-5 sm:gap-10">
      <div className="flex flex-col gap-3">
        {workExperience.map((item, index) => (
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
                  <IconStar className="h-4 w-4" fill="#F6AA19" />
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
            <li className="flex flex-wrap sm:gap-2 gap-1">
              {currentExperience.position}
              <div>
                {currentExperience.start} – {currentExperience.end}
              </div>
            </li>
            <li className="flex sm:gap-2 flex-wrap">
              <span>Responsible for:</span>
              {currentExperience.responsibility}
            </li>
          </ul>
          <ul className="flex flex-wrap sm:gap-3 gap-2">
            {currentExperience.tools.map((tools) => (
              <li key={tools} className="border-b px-2 border-black">
                {tools}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
