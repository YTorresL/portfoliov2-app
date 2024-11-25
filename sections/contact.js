import { Typography } from "@/components/common/typography"
import { Contact } from "@/components/contact/form"
import { SocialMedia } from "@/components/social-media"

export default function Contacts() {
  return (
    <section className="border-t border-black" id="contact">
      <div className="flex flex-col-reverse justify-between p-5 sm:flex-row">
        <div className="grid gap-2 gril-cols-1">
          <Typography tag={"p"}>
            Open to any offer or collaboration.
          </Typography>
          <SocialMedia color="445334" />
        </div>
        <Contact />
      </div>
    </section>
  )
}
