import type { Metadata } from "next"
import ServicesList from "@/components/services-list"
import ContactCta from "@/components/contact-cta"

export const metadata: Metadata = {
  title: "Usluge odgušenja kanalizacije Beograd | Povoljne cene 24/7",
  description:
    "Kompletne usluge odgušenja kanalizacije u Beogradu: mašinsko odgušenje, visokopritisno pranje, čišćenje odvoda, snimanje kamerom. Povoljne cene, brza intervencija 24/7.",
  keywords:
    "usluge odgušenja kanalizacije, odgušenje kanalizacije beograd, odgušenje kanalizacije povoljno, mašinsko odgušenje, visokopritisno pranje kanalizacije, čišćenje odvoda",
  alternates: {
    canonical: "https://www.odgusenje.online/usluge",
  },
  openGraph: {
    title: "Usluge odgušenja kanalizacije Beograd | Povoljne cene 24/7",
    description: "Kompletne usluge odgušenja kanalizacije u Beogradu. Povoljne cene, brza intervencija 24/7.",
    url: "https://www.odgusenje.online/usluge",
  },
}

export default function Services() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Usluge odgušenja kanalizacije",
    description: "Kompletne usluge odgušenja kanalizacije u Beogradu",
    provider: {
      "@type": "LocalBusiness",
      name: "Odgušenje kanalizacije",
    },
    areaServed: "Beograd",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usluge odgušenja kanalizacije",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mašinsko odgušenje kanalizacije",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Visokopritisno pranje kanalizacije",
          },
        },
      ],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="container mx-auto px-4 py-12 pt-17">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Usluge odgušenja kanalizacije Beograd</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Profesionalne usluge odgušenja kanalizacije u Beogradu po povoljnim cenama. Hitne intervencije 24/7, brz
          dolazak, efikasno rešavanje problema sa kanalizacijom.
        </p>
        <ServicesList />
        <div className="mt-16">
          <ContactCta />
        </div>
      </div>
    </>
  )
}
