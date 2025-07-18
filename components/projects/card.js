import Link from "next/link"
import { Typography } from "@/components/common/typography"
import { TYPO_STYLES } from "../common/typography"
import Image from "next/image"

export function Card({
  title,
  type,
  image,
  link,
  state,
  categories = [],
  description,
}) {
  const isLink = !!(link && link.length > 5)

  const CardContent = (
    <>
      <figure className="w-full h-40 overflow-hidden rounded-lg md:h-36 lg:h-32 xl:h-48">
        <Image
          src={image}
          className="object-cover object-top w-full h-full"
          alt={title}
          loading="lazy"
          width={364}
          height={192}
        />
      </figure>

      <div className="flex items-center gap-2">
        <Typography
          tag={"h5"}
          family={TYPO_STYLES.FAMILY.CORN}
          size={TYPO_STYLES.SIZE["2XL"]}
        >
          {title}
        </Typography>
        <i
          className={`leading-none ${
            state === "finished" ? "text-red-600" : "text-green-600"
          }`}
        >
          {state}
        </i>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-2 items-center">
          <Typography
            tag={"span"}
            others="px-4 py-1 border border-black rounded-full"
          >
            {type}
          </Typography>
        </div>
        {description && (
          <Typography tag={"p"} size={TYPO_STYLES.SIZE.XS}>
            {description}
          </Typography>
        )}
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-1 text-white">
            {categories.slice(0, 2).map((category) => (
              <Typography
                tag={"span"}
                others="px-3 py-1 bg-primary rounded-full hover:cursor-pointer"
                size={TYPO_STYLES.SIZE.XS}
                key={category}
              >
                {category}
              </Typography>
            ))}
            {categories.length > 2 && (
              <div className="relative group">
                <Typography
                  tag={"span"}
                  others="px-3 py-1 bg-primary rounded-full hover:cursor-pointer"
                  size={TYPO_STYLES.SIZE.XS}
                >
                  +{categories.length - 2}
                </Typography>
                <div className="absolute bg-black/80 flex gap-0.5 flex-col p-2 text-xs rounded-lg left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {categories.slice(2).map((category, index) => (
                    <Typography tag={"span"} key={index}>
                      {category}
                    </Typography>
                  ))}
                </div>
              </div>
            )}
          </div>
          {isLink && (
            <Link
              href={link}
              target="_blank"
              className="text-secondary hover:underline disabled:text-gray-400"
            >
              Link...
            </Link>
          )}
        </div>
      </div>
    </>
  )

  return (
    <div className="grid grid-cols-1 gap-2 p-4 border border-black rounded-lg place-items-start">
      {isLink ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="grid gap-2"
        >
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </div>
  )
}
