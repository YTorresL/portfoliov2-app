import { Contact } from "@/components/contact-form"
import { SocialMedia } from "@/components/social-media"

export default function Contacts() {
  return (
    <section className="border-t border-black" id="contact">
      <div className="flex flex-col-reverse justify-between p-5 sm:flex-row">
        <div className="grid gap-2 gril-cols-1">
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
