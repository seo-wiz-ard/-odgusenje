import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Odgušenje kanalizacije | Profesionalne vodoinstalaterske usluge",
  description:
    "Profesionalne usluge odgušenja kanalizacije dostupne 24/7. Brza i pouzdana pomoć za sve probleme sa odvodima.",
  keywords: "odgušenje kanalizacije, odgušenje odvoda, vodoinstalater, hitne intervencije, čišćenje odvoda",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
