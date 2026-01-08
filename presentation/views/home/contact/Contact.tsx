import { SocialLinks } from "../../../components/SocialLinks"
import { ContactForm } from "./components/Form"

export function Contact() {
  return (
    <section
      className="flex p-5 justify-between items-center flex-col-reverse md:flex-row"
      id="contact"
    >
      <div className="space-y-2 w-full mt-2 sm:mt-0">
        <p>Open to any offer or collaboration.</p>
        <SocialLinks color="445334" />
      </div>
      <ContactForm />
    </section>
  )
}
