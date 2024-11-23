import Link from "next/link"
import { VivusLinear } from "../components/intro/vivus"

import { fullName, headline, navigation } from "../data/intro"
import { TYPO_STYLES, Typography } from "../components/common/typography"
import { Navigation } from "../components/intro/navigation"

export function Intro() {
  return (
    <section className="flex flex-col sm:flex-row w-full justify-between h-[540px]">
      <div className="sm:ml-[10%] flex flex-col items-center gap-2 justify-center h-full">
        <Typography
          family={TYPO_STYLES.FAMILY.CORN}
          size={TYPO_STYLES.SIZE["8XL"]}
          color={TYPO_STYLES.COLOR.PRIMARY}
          tag={"h1"}
          others={"my-0"}
        >
          {fullName}
        </Typography>
        <Typography
          family={TYPO_STYLES.FAMILY.SILLY}
          size={TYPO_STYLES.SIZE["6XL"]}
          color={TYPO_STYLES.COLOR.SECONDARY}
          tag={"span"}
          others={"xl:-mt-[3rem] md:-mt-8 -mt-7 tracking-wide"}
        >
          {headline}
        </Typography>
        <nav className="flex gap-4 px-2 text-sm border-b border-black">
          {navigation.map((item) => (
            <Navigation key={item.id} name={item.name} id={item.id} />
          ))}
        </nav>
      </div>
      <VivusLinear />
    </section>
  )
}
