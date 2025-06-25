import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PerformanceMonitor from "@/components/performance-monitor"
import PreloadResources from "@/components/preload-resources"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Odgušenje kanalizacije Beograd 24/7 | Hitne intervencije povoljno",
  description:
    "Profesionalno odgušenje kanalizacije u Beogradu 24/7. Hitne intervencije, povoljne cene, brz dolazak. Odgušenje wc šolja, odvoda, kanalizacije. Pozovite odmah!",
  keywords:
    "odgušenje kanalizacije, odgušenje kanalizacije beograd, odgušenje kanalizacije povoljno, hitno odgušenje kanalizacije, odgušenje wc, odgušenje odvoda, vodoinstalater beograd 24h",
  authors: [{ name: "Odgušenje kanalizacije" }],
  creator: "Odgušenje kanalizacije",
  publisher: "Odgušenje kanalizacije",
  robots: "index, follow",
  alternates: {
    canonical: "https://odgusenje-kanalizacije.rs",
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://odgusenje-kanalizacije.rs",
    siteName: "Odgušenje kanalizacije",
    title: "Odgušenje kanalizacije Beograd 24/7 | Hitne intervencije povoljno",
    description:
      "Profesionalno odgušenje kanalizacije u Beogradu 24/7. Hitne intervencije, povoljne cene, brz dolazak. Pozovite odmah!",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Odgušenje kanalizacije Beograd - profesionalne usluge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odgušenje kanalizacije Beograd 24/7 | Hitne intervencije povoljno",
    description:
      "Profesionalno odgušenje kanalizacije u Beogradu 24/7. Hitne intervencije, povoljne cene, brz dolazak.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  other: {
    "geo.region": "RS-00",
    "geo.placename": "Beograd",
    "geo.position": "44.8125;20.4612",
    ICBM: "44.8125, 20.4612",
  },
    generator: 'v0.dev'
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Odgušenje kanalizacije",
  description: "Profesionalne usluge odgušenja kanalizacije u Beogradu 24/7",
  url: "https://odgusenje-kanalizacije.rs",
  telephone: "+381643577947",
  email: "odgusenje.online@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ustanicka 169",
    addressLocality: "Beograd",
    postalCode: "11000",
    addressCountry: "RS",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.8125,
    longitude: 20.4612,
  },
  openingHours: "Mo-Su 00:00-24:00",
  priceRange: "$$",
  serviceArea: {
    "@type": "City",
    name: "Beograd",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Usluge odgušenja kanalizacije",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mašinsko odgušenje kanalizacije",
          description: "Profesionalno mašinsko odgušenje kanalizacije i odvoda",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Visokopritisno pranje kanalizacije",
          description: "Čišćenje kanalizacionih cevi visokopritisnim pranjem",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Odgušenje woma vozilom",
          description: "Profesionalno odgušenje kanalizacije woma vozilom",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
  },
  sameAs: ["https://www.facebook.com/odgusenje.kanalizacije", "https://www.instagram.com/odgusenje.kanalizacije"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr" className={inter.variable}>
      <head>
        <meta name="google-site-verification" content="OeB4ptw6vg62vU0fgovDjwiV32y3Pmq5ugz24V8V9Po" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="canonical" href="https://odgusenje-kanalizacije.rs" />
      </head>
      <body className={`${inter.className} font-sans`}>
        <PreloadResources />
        <PerformanceMonitor />
        <Navbar />
        <main className="pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
