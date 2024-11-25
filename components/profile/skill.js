import { Typography } from "../common/typography"

export function Skill({ name, projects }) {
  return (
    <div className="bg-primary rounded-full text-white flex gap-1 px-3 py-1 text-xs items-center">
      <Typography tag={"p"}>{name}</Typography>
      <Typography
        tag={"span"}
        others="rounded-full bg-[#39462b] w-5 h-5 flex justify-center items-center"
      >
        {projects}
      </Typography>
    </div>
  )
}
