import { Wrench, Waves, Droplet, Search, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesList() {
  const services = [
    {
      icon: <Wrench className="h-10 w-10 text-blue-600" />,
      title: "Mašinsko odgušenje",
      description:
        "Brzo i efikasno odgušenje svih vrsta odvoda i kanalizacije pomoću profesionalnih mašina. Naše mašine mogu da reše i najteža začepljenja u cevima različitih prečnika.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Odgušenje WC šolja i odvoda",
        "Odgušenje vertikala i horizontala",
        "Odgušenje kuhinjskih odvoda",
        "Odgušenje kupatilskih odvoda",
      ],
    },
    {
      icon: <Waves className="h-10 w-10 text-blue-600" />,
      title: "Visokopritisno pranje",
      description:
        "Temeljno čišćenje kanalizacionih cevi pomoću vode pod visokim pritiskom. Ova metoda je izuzetno efikasna za uklanjanje naslaga, masnoće i drugih nečistoća iz cevi.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Pranje kanalizacionih cevi",
        "Uklanjanje masnih naslaga",
        "Pranje slivnika i šahti",
        "Preventivno održavanje sistema",
      ],
    },
    {
      icon: <Droplet className="h-10 w-10 text-blue-600" />,
      title: "Čišćenje odvoda",
      description:
        "Profesionalno čišćenje svih vrsta odvoda u kupatilu, kuhinji i drugim prostorijama. Koristimo specijalne hemikalije i alate za efikasno čišćenje i održavanje odvoda.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Čišćenje sifona i odvoda",
        "Uklanjanje neprijatnih mirisa",
        "Preventivno održavanje",
        "Hemijsko čišćenje odvoda",
      ],
    },
    {
      icon: <Search className="h-10 w-10 text-blue-600" />,
      title: "Snimanje kamerom",
      description:
        "Inspekcija kanalizacionih cevi specijalnom kamerom za preciznu dijagnostiku problema. Ova metoda omogućava da vidimo tačno mesto i prirodu problema u cevima.",
      image: "/placeholder.svg?height=300&width=400",
      features: [
        "Detekcija pukotina i lomova",
        "Lociranje začepljenja",
        "Inspekcija stanja cevi",
        "Video snimak za dokumentaciju",
      ],
    },
  ]

  return (
    <div className="space-y-16">
      {services.map((service, index) => (
        <div
          key={index}
          className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
        >
          <div className={`order-2 ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}>
            <div className="relative h-[250px] md:h-[300px] rounded-lg overflow-hidden">
              <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
            </div>
          </div>
          <div className={`order-1 ${index % 2 !== 0 ? "md:order-2" : "md:order-1"}`}>
            <div className="flex items-center mb-4">
              {service.icon}
              <h3 className="text-2xl font-bold ml-3 text-blue-800">{service.title}</h3>
            </div>
            <p className="text-gray-700 mb-6">{service.description}</p>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="/kontakt">
              <Button className="bg-blue-600 hover:bg-blue-700">Zatražite uslugu</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
