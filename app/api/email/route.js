import { NextResponse } from "next/server"
import { sanitizeEmail } from "../../../infrastructure/services/email/sanitizer"
import { generateContactEmailTemplate } from "../../../infrastructure/services/email/emailTemplate"
import {
  transporter,
  mailOptions,
} from "../../../infrastructure/services/email/config"

export async function POST(request) {
  try {
    const data = await request.json()
    const { email } = data

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const sanitizedEmail = sanitizeEmail(email)
    const htmlContent = generateContactEmailTemplate(sanitizedEmail)

    await transporter.sendMail({
      ...mailOptions,
      html: htmlContent,
    })

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 },
    )
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
