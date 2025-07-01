import Hero from "@/components/hero"
import LazySection from "@/components/lazy-section"
import { lazy, Suspense } from "react"
import type { Metadata } from "next"

// Lazy load non-critical components
const ServiceHighlights = lazy(() => import("@/components/service-highlights"))
const Testimonials = lazy(() => import("@/components/testimonials"))
const ContactCta = lazy(() => import("@/components/contact-cta"))

export const metadata: Metadata = {
  title: "Odgušenje kanalizacije Beograd 24/7 | Hitne intervencije povoljno",
  description:
    "Profesionalno odgušenje kanalizacije u Beogradu 24/7. Hitne intervencije, povoljne cene, brz dolazak. Odgušenje wc šolja, odvoda, kanalizacije. Pozovite odmah!",
  keywords:
    "odgušenje kanalizacije, odgušenje kanalizacije beograd, odgušenje kanalizacije povoljno, hitno odgušenje kanalizacije, odgušenje wc, odgušenje odvoda, vodoinstalater beograd 24h",
  alternates: {
    canonical: "https://www.odgusenje.online/",
  },
  openGraph: {
    title: "Odgušenje kanalizacije Beograd 24/7 | Hitne intervencije povoljno",
    description:
      "Profesionalno odgušenje kanalizacije u Beogradu 24/7. Hitne intervencije, povoljne cene, brz dolazak. Pozovite odmah!",
    url: "https://www.odgusenje.online/",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Odgušenje kanalizacije Beograd - hitne intervencije 24/7",
      },
    ],
  },
}

// Loading component for lazy sections
function SectionSkeleton() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-8"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-100 h-64 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Odgušenje kanalizacije Beograd 24/7",
    description: "Profesionalno odgušenje kanalizacije u Beogradu 24/7. Hitne intervencije, povoljne cene.",
    url: "https://www.odgusenje.online/",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Odgušenje kanalizacije",
      priceRange: "$$",
      telephone: "+381601234567",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="pt-5">
        {/* Critical above-the-fold content */}
        <Hero />

        {/* Lazy loaded sections */}
        <LazySection>
          <Suspense fallback={<SectionSkeleton />}>
            <ServiceHighlights />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SectionSkeleton />}>
            <Testimonials />
          </Suspense>
        </LazySection>

        <LazySection>
          <Suspense fallback={<SectionSkeleton />}>
            <ContactCta />
          </Suspense>
        </LazySection>
      </div>
    </>
  )
}
