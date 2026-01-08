import { Contact, ContactSubmissionResult } from "../entities/Contact"

export interface IContactRepository {
  sendContact(contact: Contact): Promise<ContactSubmissionResult>
}
