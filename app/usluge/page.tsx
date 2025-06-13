import type { Metadata } from "next"
import ServicesList from "@/components/services-list"
import ContactCta from "@/components/contact-cta"

export const metadata: Metadata = {
  title: "Usluge odgušenja kanalizacije | Profesionalne vodoinstalaterske usluge",
  description:
    "Nudimo širok spektar usluga odgušenja kanalizacije, uključujući mašinsko odgušenje, visokopritisno pranje, čišćenje odvoda i snimanje kamerom.",
}

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Naše Usluge</h1>
      <ServicesList />
      <div className="mt-16">
        <ContactCta />
      </div>
    </div>
  )
}
