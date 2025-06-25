import { Button } from "@/components/ui/button"
import { Phone, CheckCircle } from "lucide-react"
import Link from "next/link"
import OptimizedImage from "./optimized-image"

export default function Hero() {
  return (
    <div className="relative pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-32 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4">
              Odgušenje kanalizacije Beograd 24/7
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">
              Hitne intervencije - Povoljne cene
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Profesionalno odgušenje kanalizacije i odvoda u Beogradu. Brz dolazak, efikasno rešenje problema sa
              kanalizacijom. Dostupni smo 24 sata dnevno za hitne intervencije odgušenja.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8">
              <a href="tel:+381643577947" className="no-underline">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg w-full sm:w-auto">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>Pozovite za odgušenje odmah</span>
                </Button>
              </a>
              <Link href="/kontakt">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto"
                >
                  Zatražite ponudu
                </Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-blue-600 h-5 w-5" />
                <span>Odgušenje kanalizacije 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-blue-600 h-5 w-5" />
                <span>Povoljne cene odgušenja</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-blue-600 h-5 w-5" />
                <span>Brz dolazak u Beogradu</span>
              </div>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
            <OptimizedImage
              src="/placeholder.svg?height=500&width=500"
              alt="Odgušenje kanalizacije Beograd - profesionalne usluge hitnih intervencija 24/7"
              fill
              priority
              className="rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  )
}
