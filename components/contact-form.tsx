"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      address: formData.get("address") as string,
      message: formData.get("message") as string,
    }

    try {
      // Create email content
      const emailContent = `
Novo kontakt zahtev sa sajta:

Ime i prezime: ${data.name}
Telefon: ${data.phone}
Email: ${data.email || "Nije unet"}
Adresa: ${data.address || "Nije uneta"}

Poruka:
${data.message}

---
Poslato sa sajta odgušenje kanalizacije
      `.trim()

      // Create mailto link
      const subject = encodeURIComponent("Novo kontakt zahtev - Odgušenje kanalizacije")
      const body = encodeURIComponent(emailContent)
      const mailtoLink = `mailto:odgusenje.online@gmail.com?subject=${subject}&body=${body}`

      // Open email client
      window.location.href = mailtoLink

      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSubmitting(false)
      setIsSubmitted(true)
    } catch (err) {
      setError("Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo.")
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Email klijent je otvoren!</h3>
        <p className="text-green-700 mb-4">
          Vaš email klijent je otvoren sa pripremljenom porukom. Molimo pošaljite email da biste završili zahtev.
        </p>
        <p className="text-sm text-gray-600">
          Ako se email klijent nije otvorio, možete direktno poslati email na:{" "}
          <a href="mailto:odgusenje.online@gmail.com" className="text-blue-600 hover:underline">
            odgusenje.online@gmail.com
          </a>
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false)
            setError(null)
          }}
          variant="outline"
          className="mt-4"
        >
          Pošaljite novu poruku
        </Button>
      </div>
    )
  }

  return (
    <div>
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-red-800">{error}</p>
            <p className="text-sm text-red-600 mt-1">
              Možete direktno poslati email na:{" "}
              <a href="mailto:odgusenje.online@gmail.com" className="underline">
                odgusenje.online@gmail.com
              </a>
            </p>
          </div>
        </div>
      )}

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
          {isSubmitting ? "Priprema email..." : "Pošaljite email"}
        </Button>

        <p className="text-xs text-gray-500">
          Polja označena sa * su obavezna. Klikom na dugme će se otvoriti vaš email klijent sa pripremljenom porukom.
        </p>

        <div className="text-center pt-2">
          <p className="text-sm text-gray-600">
            Ili direktno pošaljite email na:{" "}
            <a href="mailto:odgusenje.online@gmail.com" className="text-blue-600 hover:underline font-medium">
              odgusenje.online@gmail.com
            </a>
          </p>
        </div>
      </form>
    </div>
  )
}
