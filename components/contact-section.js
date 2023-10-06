import Contact from "@/components/contact-form"
import SocialMedia from "./social-media"

export default function ContactSection() {
  return (
    <section className="border-t border-black" id="contact">
      <div className="flex flex-col-reverse sm:flex-row justify-between p-5">
        <div className="grid gril-cols-1 gap-2">
          <span>Open to any offer or collaboration.</span>
          <div className="flex gap-3">
            <SocialMedia color="445334" />
          </div>
        </div>
        <Contact />
      </div>
    </section>
  )
}
