import { personalInformation } from "@/app/information"
import Image from "next/image"

export default function ProfileImage() {
  return (
    <div className="grid grid-cols-1 lg:border-r border-black">
      <div className="flex justify-center py-6">
        <div className="h-60 w-60 rounded-full overflow-hidden">
          <Image
            src="/yalith.jpg"
            alt="Yalith Torres web developer"
            height={240}
            width={240}
            className="w-full h-full object-cover object-center"
            priority={true}
          />
        </div>
      </div>
      {personalInformation.map((item, index) => (
        <div
          className="flex justify-between items-center p-3 border-t border-black"
          key={index}
        >
          <strong>{item.title}</strong>
          <span>{item.paragraph}</span>
        </div>
      ))}
    </div>
  )
}
