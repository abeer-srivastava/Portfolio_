"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { submitContactForm } from "../actions"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")
  const [focused, setFocused] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setPending(true)
    try {
      const response = await submitContactForm(formData)
      setMessage(response.message)
      // Reset form
      const form = document.querySelector("form") as HTMLFormElement
      form?.reset()
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <Card className="p-6 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur">
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
            Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            className={`transition-all duration-300 bg-white/50 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 ${
              focused === "name" ? "border-blue-500 ring-1 ring-blue-500" : ""
            }`}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            required
            className={`transition-all duration-300 bg-white/50 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 ${
              focused === "email" ? "border-blue-500 ring-1 ring-blue-500" : ""
            }`}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
            Subject
          </label>
          <Input
            id="subject"
            name="subject"
            placeholder="What's this about?"
            required
            className={`transition-all duration-300 bg-white/50 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 ${
              focused === "subject" ? "border-blue-500 ring-1 ring-blue-500" : ""
            }`}
            onFocus={() => setFocused("subject")}
            onBlur={() => setFocused(null)}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me about your project or just say hello!"
            rows={4}
            required
            className={`transition-all duration-300 bg-white/50 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 ${
              focused === "message" ? "border-blue-500 ring-1 ring-blue-500" : ""
            }`}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
          />
        </div>
        <Button
          type="submit"
          className="w-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
          disabled={pending}
        >
          {pending ? "Sending..." : "Send Message"}
        </Button>
        {message && (
          <p
            className={`text-sm text-center mt-4 ${message.includes("Thanks") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
          >
            {message}
          </p>
        )}
      </form>
    </Card>
  )
}
