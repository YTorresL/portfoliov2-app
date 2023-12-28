import Link from "next/link"
import { VivusLinear } from "../components/vivus"

import { fullName, headline, navigation } from "../data/intro"

export function Intro() {
  return (
    <section className="flex flex-col sm:flex-row w-full justify-between h-[540px]">
      <div className="sm:ml-[10%] flex flex-col items-center gap-2 justify-center h-full">
        <h1 className="font-corn text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-[#445334] my-0">
          {fullName}
        </h1>
        <strong className="font-silly text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#F6AA19] xl:-mt-[3rem] md:-mt-8 -mt-7 tracking-wide">
          {headline}
        </strong>
        <nav className="flex gap-4 px-2 text-sm border-b border-black">
          {navigation.map((item) => (
            <Link
              href={item.id}
              className="before:transition-colors relative before:absolute before:content-['•'] before:text-4xl before:top-3 before:text-transparent before:left-[40%] before:pointer-events-none hover:before:text-[#445334] focus:before:text-[#F6AA19]"
              key={item.id}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <VivusLinear />
    </section>
  )
}
