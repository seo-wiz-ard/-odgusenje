"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, RefreshCw, Phone } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-red-900 mb-4">Greška</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4">Nešto je pošlo po zlu</h2>
          <p className="text-xl text-gray-700 mb-8">
            Izvinjavamo se zbog neočekivane greške. Naš tim je obavešten i radi na rešavanju problema.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button size="lg" onClick={reset} className="bg-red-600 hover:bg-red-700">
              <RefreshCw className="h-5 w-5 mr-2" />
              Pokušajte ponovo
            </Button>
            <Link href="/">
              <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                <Home className="h-5 w-5 mr-2" />
                Početna stranica
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Hitno odgušenje kanalizacije?</h3>
            <p className="text-gray-700 mb-4">
              Uprkos tehničkim problemima na sajtu, naše usluge su i dalje dostupne 24/7. Pozovite nas odmah!
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Phone className="h-5 w-5 mr-2" />
              060 123 4567
            </Button>
          </div>

          {process.env.NODE_ENV === "development" && (
            <div className="mt-8 p-4 bg-gray-100 rounded-lg text-left">
              <h4 className="font-bold text-gray-800 mb-2">Error Details (Development Only):</h4>
              <pre className="text-sm text-gray-600 overflow-auto">{error.message}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
