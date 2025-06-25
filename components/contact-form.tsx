"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Poruka uspešno poslata!</h3>
        <p className="text-green-700">Hvala vam na poruci. Kontaktiraćemo vas u najkraćem mogućem roku.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Ime i prezime *
          </label>
          <Input id="name" name="name" required placeholder="Unesite vaše ime i prezime" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefon *
          </label>
          <Input id="phone" name="phone" type="tel" required placeholder="Unesite vaš broj telefona" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email adresa
        </label>
        <Input id="email" name="email" type="email" placeholder="Unesite vašu email adresu" />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
          Adresa
        </label>
        <Input id="address" name="address" placeholder="Unesite vašu adresu" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Poruka *
        </label>
        <Textarea id="message" name="message" required placeholder="Opišite problem koji imate" rows={5} />
      </div>

      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
        {isSubmitting ? "Slanje..." : "Pošaljite poruku"}
      </Button>

      <p className="text-xs text-gray-500">Polja označena sa * su obavezna.</p>
    </form>
  )
}
