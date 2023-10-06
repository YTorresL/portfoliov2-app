import Link from "next/link"

export default function Project({ title, type, image, date, link }) {
  return (
    <div className="border border-black p-4 grid grid-cols-1 gap-2 place-items-start rounded-lg">
      <div className="h-48 w-full rounded-lg overflow-hidden">
        <img
          src={image}
          className="w-full h-full object-cover"
          alt={title}
          loading="lazy"
        />
      </div>
      <h4 className="text-2xl font-corn">{title}</h4>
      <span className="border border-black px-4 py-1 rounded-full">{type}</span>
      <div className="flex justify-between w-full items-center">
        <span className="border border-black px-4 py-1 rounded-full">
          {date}
        </span>
        {link.length > 5 && (
          <Link
            href={link}
            className={`text-[#F6AA19] hover:underline disabled:text-gray-400`}
          >
            Link...
          </Link>
        )}
      </div>
    </div>
  )
}
