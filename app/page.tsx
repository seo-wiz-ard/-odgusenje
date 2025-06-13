import Hero from "@/components/hero"
import ServiceHighlights from "@/components/service-highlights"
import Testimonials from "@/components/testimonials"
import ContactCta from "@/components/contact-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hitno odgušenje kanalizacije 24/7 | Profesionalne vodoinstalaterske usluge",
  description:
    "Profesionalne usluge odgušenja kanalizacije dostupne 24/7. Brza i pouzdana pomoć za sve probleme sa odvodima.",
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <Testimonials />
      <ContactCta />
    </>
  )
}
