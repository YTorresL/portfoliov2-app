import { ProfileImage } from "./components/Image"
import { MainInfo } from "./components/MainInfo"
import { Work } from "./components/Work"

export function Profile() {
  return (
    <section className="border-black border-y" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <aside className="border-black lg:border-r">
          <ProfileImage />
          <MainInfo />
        </aside>
        <div className="p-5 lg:col-span-3 md:p-8 space-y-6">
          <article>
            <strong className="text-primary text-2xl font-corn">
              Computer Engineer and Freelance Programmer
            </strong>
            <p className="w-full lg:w-3/4">
              Specialized in web and mobile application development.
            </p>
          </article>

          <article className="space-y-4">
            <h3 className="text-2xl font-corn leading-none flex-shrink-0 text-primary">
              About Me
            </h3>
            <p>
              My name is <strong>Yalith Torres</strong>. Although I have always been curious
              about technology, it was in 2022 when this journey into the world
              of development truly began. Since then, I have been focused on
              continuously learning, improving my technical skills, and growing
              as a person.
            </p>
          </article>
          <article className="space-y-4">
            <h3 className="text-2xl font-corn leading-none flex-shrink-0 text-primary">
              Work Experience
            </h3>
            <Work />
          </article>
        </div>
      </div>
    </section>
  )
}
