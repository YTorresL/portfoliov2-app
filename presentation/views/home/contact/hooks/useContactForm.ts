import { useState } from "react"
import {
  Contact,
  ContactFormErrors,
  isValid,
  validate,
} from "../../../../../domain/entities/Contact"
import { SendContactUseCase } from "../../../../../domain/useCases/sendContact"
import { ContactRepository } from "../../../../../infrastructure/repositories/ContactRepository"

const initialFormValue: Contact = { email: "" }

export const useContactForm = () => {
  const [formValue, setFormValue] = useState<Contact>(initialFormValue)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const repository = ContactRepository()
  const sendContactUseCase = SendContactUseCase(repository)

  const handleChange = (name: keyof Contact, value: string) => {
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }

    // Clear success message when user modifies form
    if (success) {
      setSuccess(false)
    }
  }

  const handleSubmit = async () => {
    const validationErrors = validate(formValue)
    setErrors(validationErrors)

    if (!isValid(formValue)) {
      return
    }

    setIsSubmitting(true)

    try {
      const result = await sendContactUseCase(formValue)

      if (result.success) {
        setSuccess(true)
        setFormValue(initialFormValue)
      } else {
        setErrors({ email: result.message || "Failed to send message" })
      }
    } catch (error) {
      setErrors({ email: "An unexpected error occurred" })
    } finally {
      setIsSubmitting(false)
    }
  }

  const reset = () => {
    setFormValue(initialFormValue)
    setErrors({})
    setSuccess(false)
    setIsSubmitting(false)
  }

  return {
    formValue,
    errors,
    success,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset,
  }
}
