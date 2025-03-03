import { IconStar } from "@/assets/icons/star"
import { Typography } from "../common/typography"

export function Experience({ experience, selectExperience, experiences }) {
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
        <div
          className="animate-fade md:animate-fade-right lg:min-h-[250px] min-h-[260px]"
          key={experience}
        >
          <ul>
            <li className="font-bold">{currentExperience.company}</li>
            <li className="flex flex-wrap gap-1 sm:gap-2">
              {currentExperience.position}
              <div>
                {currentExperience.start} – {currentExperience.end}
              </div>
            </li>
            <li className="flex flex-wrap sm:gap-2">
              <ul className="my-2 list-disc ml-2">
                {currentExperience.responsibility.map((item, index) => (
                  <li key={index}>
                    <Typography tag={"p"}>{item}</Typography>{" "}
                  </li>
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
