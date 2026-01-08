"use client"
import { useContactForm } from "../hooks/useContactForm"

export function ContactForm() {
  const {
    formValue,
    errors,
    success,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useContactForm()

  return (
    <div className="space-y-2 w-full">
      <form className="flex flex-col gap-2 sm:flex-row justify-end">
        <input
          type="email"
          className="border border-black rounded-full outline-none focus:border-[#F6AA19] px-5 py-1.5 appearance-none bg-transparent placeholder:text-gray-600"
          placeholder="yourname@gmail.com"
          value={formValue.email}
          name="email"
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <button
          className="bg-black text-white px-8 py-1.5 rounded-full hover:bg-primary transition-colors"
          onClick={(e) => {
            e.preventDefault()
            handleSubmit()
          }}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
      <p
        className={`h-5 text-right ${success && "text-green-500"} ${
          errors.email && "text-red-500"
        }`}
      >
        {errors.email || (success && "Submitted successfully")}
      </p>
    </div>
  )
}
