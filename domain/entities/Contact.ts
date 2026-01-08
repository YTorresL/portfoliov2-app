export interface Contact {
  email: string
}

export interface ContactFormErrors {
  email?: string
}

export interface ContactSubmissionResult {
  success: boolean
  message?: string
}

export function validate(contact: Contact): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!contact.email) {
    errors.email = "The email is required"
  } else if (!/\S+@\S+\.\S+/.test(contact.email)) {
    errors.email = "The email does not have a valid format"
  }

  return errors
}

export function isValid(contact: Contact): boolean {
  const errors = validate(contact)
  return Object.keys(errors).length === 0
}
