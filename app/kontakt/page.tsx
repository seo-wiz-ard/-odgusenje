import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontakt | Profesionalne vodoinstalaterske usluge",
  description:
    "Kontaktirajte nas za hitne intervencije odgušenja kanalizacije ili za više informacija o našim uslugama. Dostupni smo 24/7.",
}

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Kontaktirajte Nas</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-blue-800">Naši kontakt podaci</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Telefon</h3>
                <p className="text-gray-700">+381 60 123 4567</p>
                <p className="text-gray-700">+381 11 123 4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Adresa</h3>
                <p className="text-gray-700">Vodoinstalaterska 123</p>
                <p className="text-gray-700">11000 Beograd, Srbija</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-700">info@odgusenje.rs</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Radno vreme</h3>
                <p className="text-gray-700">Ponedeljak - Nedelja: 00:00 - 24:00</p>
                <p className="text-gray-700">Hitne intervencije: 24/7</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-blue-800">Pošaljite nam poruku</h2>
          <ContactForm />
        </div>
      </div>

      <div className="rounded-lg overflow-hidden h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181139.35491768334!2d20.282514125646954!3d44.815246579631895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2sBelgrade%2C%20Serbia!5e0!3m2!1sen!2sus!4v1654789542873!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
