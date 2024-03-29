"use client"
import { useState } from "react"
import { sendContactForm } from "./contact-send-form"

const initValue = { email: "" }

export function Contact() {
  const [formValue, setFormValue] = useState(initValue)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const errors = {}

    if (!formValue.email) {
      errors.email = "The email is required"
    } else if (!/\S+@\S+\.\S+/.test(formValue.email)) {
      errors.email = "The email does not have a valid format"
    }
    setErrors(errors)

    if (Object.keys(errors).length === 0) {
      sendContactForm(formValue)
      setSuccess(true)
      setFormValue(initValue)
    }
  }

  return (
    <div className="grid grid-cols-1 gap-2">
      <form className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          className="border border-black rounded-full outline-none focus:border-[#F6AA19] px-5 py-1.5 appearance-none bg-transparent"
          placeholder="yourname@gmail.com"
          value={formValue.email}
          name="email"
          onChange={handleChange}
        />
        <button
          className="bg-black text-white px-8 py-1.5 rounded-full"
          onClick={onSubmit}
        >
          Send
        </button>
      </form>
      <p
        className={`h-5 ${success && "text-green-500"} ${
          errors.email && "text-red-500"
        }`}
      >
        {errors.email || (success && "Submitted successfully")}
      </p>
    </div>
  )
}
