import Image from "next/image"

export function ImageProfile() {
  return (
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
  )
}
