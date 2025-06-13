import { ArrowRight, Droplet, Wrench, Search, Waves } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServiceHighlights() {
  const services = [
    {
      icon: <Wrench className="h-10 w-10 text-blue-600" />,
      title: "Mašinsko odgušenje",
      description: "Brzo i efikasno odgušenje svih vrsta odvoda i kanalizacije pomoću profesionalnih mašina.",
    },
    {
      icon: <Waves className="h-10 w-10 text-blue-600" />,
      title: "Visokopritisno pranje",
      description: "Temeljno čišćenje kanalizacionih cevi pomoću vode pod visokim pritiskom.",
    },
    {
      icon: <Droplet className="h-10 w-10 text-blue-600" />,
      title: "Čišćenje odvoda",
      description: "Profesionalno čišćenje svih vrsta odvoda u kupatilu, kuhinji i drugim prostorijama.",
    },
    {
      icon: <Search className="h-10 w-10 text-blue-600" />,
      title: "Snimanje kamerom",
      description: "Inspekcija kanalizacionih cevi specijalnom kamerom za preciznu dijagnostiku problema.",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Naše usluge</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pružamo kompletne usluge odgušenja kanalizacije i odvoda za stambene i poslovne objekte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-blue-800">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href="/usluge" className="text-blue-600 font-medium flex items-center hover:text-blue-800">
                Saznaj više
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/usluge">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Sve usluge
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
