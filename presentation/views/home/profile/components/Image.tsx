import Image from "next/image"

export function ProfileImage() {
  return (
    <figure className="my-6 px-3">
      <Image
        src="/yalith.jpg"
        alt="Yalith Torres web developer"
        height={240}
        width={240}
        className="object-contain object-center rounded-full aspect-square mx-auto"
        priority={true}
      />
    </figure>
  )
}
