import { HeroHeader } from "./components/Header"
import { HeroNavigation } from "./components/Navigation"
import { VivusLinear } from "./components/VivusLinear"

export function Hero() {
  return (
    <section className="h-[540px] flex flex-col sm:flex-row justify-between">
      <div className="sm:ml-[10%] mx-auto flex flex-col items-center justify-center h-full">
        <HeroHeader />
        <HeroNavigation />
      </div>
      <VivusLinear />
    </section>
  )
}
