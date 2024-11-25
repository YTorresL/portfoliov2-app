import { Typography } from "../common/typography";

export function Information({ title, paragraph }) {
  return (
    <div className="flex items-center justify-between p-3 border-t border-black">
      <Typography tag={"strong"}>{title}</Typography>
      <Typography tag={"span"}>{paragraph}</Typography>
    </div>
  )
}
