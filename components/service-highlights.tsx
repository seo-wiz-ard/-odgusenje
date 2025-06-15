import { ArrowRight, Droplet, Wrench, Search, Waves } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import OptimizedImage from "./optimized-image"

export default function ServiceHighlights() {
  const services = [
    {
      icon: <Wrench className="h-10 w-10 text-blue-600" />,
      title: "Mašinsko odgušenje kanalizacije",
      description:
        "Brzo i efikasno odgušenje kanalizacije pomoću profesionalnih mašina. Povoljno odgušenje svih vrsta odvoda i kanalizacionih sistema.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: <Waves className="h-10 w-10 text-blue-600" />,
      title: "Visokopritisno pranje kanalizacije",
      description:
        "Temeljno čišćenje kanalizacionih cevi pomoću vode pod visokim pritiskom. Efikasno odgušenje kanalizacije povoljno.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: <Droplet className="h-10 w-10 text-blue-600" />,
      title: "Čišćenje odvoda povoljno",
      description:
        "Profesionalno čišćenje svih vrsta odvoda u kupatilu, kuhinji. Odgušenje kanalizacije po povoljnim cenama.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: <Search className="h-10 w-10 text-blue-600" />,
      title: "Snimanje kanalizacije kamerom",
      description:
        "Inspekcija kanalizacionih cevi specijalnom kamerom za preciznu dijagnostiku problema sa kanalizacijom.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Usluge odgušenja kanalizacije Beograd</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pružamo kompletne usluge odgušenja kanalizacije i odvoda za stambene i poslovne objekte u Beogradu. Povoljne
            cene, brza intervencija.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 relative h-32">
                <OptimizedImage
                  src={service.image}
                  alt={`${service.title} - odgušenje kanalizacije`}
                  fill
                  className="rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-blue-800">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href="/usluge" className="text-blue-600 font-medium flex items-center hover:text-blue-800">
                Saznaj više o odgušenju
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/usluge">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Sve usluge odgušenja kanalizacije
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
