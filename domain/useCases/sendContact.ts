import { Contact, ContactSubmissionResult } from "../entities/Contact"
import { IContactRepository } from "../repositories/ContactRepository"

export function SendContactUseCase(contactRepository: IContactRepository) {
  return async function (contact: Contact): Promise<ContactSubmissionResult> {
    return await contactRepository.sendContact(contact)
  }
}
