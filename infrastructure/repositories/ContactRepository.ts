import { Contact, ContactSubmissionResult } from "../../domain/entities/Contact"
import { IContactRepository } from "../../domain/repositories/ContactRepository"

export function ContactRepository(): IContactRepository {
  return {
    async sendContact(
      contact: Contact,
      apiUrl: string = "/api/email",
    ): Promise<ContactSubmissionResult> {
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(contact),
        })

        if (!response.ok) {
          return {
            success: false,
            message: "Failed to send message",
          }
        }

        return {
          success: true,
          message: "Message sent successfully",
        }
      } catch {
        return {
          success: false,
          message: "Network error occurred",
        }
      }
    },
  }
}
