import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontakt - Odgušenje kanalizacije Beograd | Pozovite 24/7",
  description:
    "Kontaktirajte nas za hitne intervencije odgušenja kanalizacije u Beogradu. Dostupni 24/7, povoljne cene, brz dolazak. Telefon: 064 357 7947",
  keywords:
    "kontakt odgušenje kanalizacije, telefon odgušenje beograd, hitne intervencije kanalizacija, odgušenje kanalizacije povoljno kontakt",
  alternates: {
    canonical: "https://www.odgusenje.online/kontakt",
  },
  openGraph: {
    title: "Kontakt - Odgušenje kanalizacije Beograd | Pozovite 24/7",
    description: "Kontaktirajte nas za hitne intervencije odgušenja kanalizacije u Beogradu. Dostupni 24/7.",
    url: "https://www.odgusenje-kanalizacije.rs/kontakt",
  },
}

export default function Contact() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Kontakt - Odgušenje kanalizacije",
    description: "Kontakt informacije za usluge odgušenja kanalizacije u Beogradu",
    url: "https://www.odgusenje-kanalizacije.rs/kontakt",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="container mx-auto px-4 py-12 pt-17">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Kontakt - Odgušenje kanalizacije Beograd</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Kontaktirajte nas za hitne intervencije odgušenja kanalizacije u Beogradu. Dostupni smo 24 sata dnevno za sve
          probleme sa kanalizacijom.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Kontakt podaci za odgušenje kanalizacije</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Telefon za hitno odgušenje</h3>
                  <a href="tel:+381643577947" className="text-gray-700 hover:text-blue-600 text-lg font-medium">
                    +381 64 357 7947
                  </a>
                  <p className="text-gray-700">+381 11 123 4567</p>
                  <p className="text-sm text-blue-600">Dostupni 24/7 za odgušenje kanalizacije</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Adresa - Odgušenje kanalizacije</h3>
                  <p className="text-gray-700">Vodoinstalaterska 123</p>
                  <p className="text-gray-700">11000 Beograd, Srbija</p>
                  <p className="text-sm text-blue-600">Pokrivamo ceo Beograd</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email za odgušenje</h3>
                  <a href="mailto:odgusenje.online@gmail.com" className="text-gray-700 hover:text-blue-600">
                    odgusenje.online@gmail.com
                  </a>
                  <p className="text-sm text-blue-600">Odgovaramo u roku od 1 sata</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Radno vreme odgušenja</h3>
                  <p className="text-gray-700">Ponedeljak - Nedelja: 00:00 - 24:00</p>
                  <p className="text-gray-700 font-semibold text-red-600">Hitne intervencije odgušenja: 24/7</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-800">Zatražite uslugu odgušenja</h2>
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
            title="Mapa lokacije za odgušenje kanalizacije Beograd"
          ></iframe>
        </div>
      </div>
    </>
  )
}
