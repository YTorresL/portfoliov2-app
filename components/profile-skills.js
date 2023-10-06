import { skills } from "@/app/information"

export default function Skills() {
  return (
    <div className="flex flex-wrap justify-center gap-1">
      {skills.map((item, index) => (
        <div
          className="grid grid-cols-1 gap-1 justify-items-center rounded-lg hover:shadow py-2 transition delay-100 ease-out w-24"
          key={index}
        >
          <item.icon className="h-8 w-8" />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  )
}
