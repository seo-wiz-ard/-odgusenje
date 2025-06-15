"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Phone, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-blue-900 mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Stranica nije pronađena</h2>
          <p className="text-xl text-gray-700 mb-8">
            Izvinjavamo se, ali stranica koju tražite ne postoji. Možda je uklonjena, promenjena ili je URL pogrešan.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Home className="h-5 w-5 mr-2" />
                Početna stranica
              </Button>
            </Link>
            <Link href="/kontakt">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Phone className="h-5 w-5 mr-2" />
                Kontaktirajte nas
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Potrebno vam je hitno odgušenje kanalizacije?</h3>
            <p className="text-gray-700 mb-4">
              Ne gubite vreme! Pozovite nas odmah za brzu i profesionalnu uslugu odgušenja kanalizacije u Beogradu.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Phone className="h-5 w-5 mr-2" />
                060 123 4567
              </Button>
              <Link href="/usluge">
                <Button size="lg" variant="outline">
                  Pogledajte naše usluge
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={() => window.history.back()}
              className="text-blue-600 hover:text-blue-800 flex items-center justify-center mx-auto"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Vratite se nazad
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
