import { Button } from "@/components/ui/button"
import { Phone, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative pt-20 pb-16 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4">
              Hitno odgušenje kanalizacije 24/7
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Profesionalne usluge odgušenja kanalizacije i odvoda. Brz dolazak, efikasno rešenje problema.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg">
                <Phone className="h-5 w-5 mr-2" />
                <span>Pozovite odmah</span>
              </Button>
              <Link href="/kontakt">
                <Button size="lg" variant="outline" className="text-lg border-blue-600 text-blue-600 hover:bg-blue-50">
                  Kontaktirajte nas
                </Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-blue-600 h-5 w-5" />
                <span>Dostupni 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-blue-600 h-5 w-5" />
                <span>Brz dolazak</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-blue-600 h-5 w-5" />
                <span>Fiksne cene</span>
              </div>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Odgušenje kanalizacije"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  )
}
