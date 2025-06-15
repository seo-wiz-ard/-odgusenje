import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Waves, Droplet, Shield, Zap } from "lucide-react"
import ContactCta from "@/components/contact-cta"

export const metadata: Metadata = {
  title: "Visokopritisno pranje kanalizacije | Profesionalne vodoinstalaterske usluge",
  description:
    "Profesionalno visokopritisno pranje kanalizacionih cevi. Efikasno uklanjanje naslaga, masnoće i drugih nečistoća.",
}

export default function VisokopritisnoPranje() {
  return (
    <div className="container mx-auto px-4 py-12 pt-17">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Visokopritisno pranje</h1>
      <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Temeljno čišćenje kanalizacionih cevi pomoću vode pod visokim pritiskom
      </p>

      {/* Hero section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Šta je visokopritisno pranje?</h2>
          <p className="mb-4 text-gray-700">
            Visokopritisno pranje je napredna metoda čišćenja kanalizacionih cevi koja koristi vodu pod visokim
            pritiskom za uklanjanje naslaga, masnoće, kamenca i drugih nečistoća koje se nakupljaju u cevima tokom
            vremena.
          </p>
          <p className="mb-6 text-gray-700">
            Ova metoda je posebno efikasna za preventivno održavanje kanalizacionih sistema i za slučajeve kada
            standardno mašinsko odgušenje nije dovoljno. Pritisak vode može dostići do 200 bara, što omogućava temeljno
            čišćenje cevi.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 h-5 w-5" />
              <span>Pritisak do 200 bara</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 h-5 w-5" />
              <span>Ekološki prihvatljivo</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 h-5 w-5" />
              <span>Bez hemikalija</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 h-5 w-5" />
              <span>Dugotrajni efekat</span>
            </div>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Visokopritisno pranje"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-blue-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Prednosti visokopritisnog pranja</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <Waves className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Temeljno čišćenje</h3>
            <p className="text-center text-gray-600">
              Uklanja sve vrste naslaga i nečistoća koje se ne mogu ukloniti standardnim metodama.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <Droplet className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Bez hemikalija</h3>
            <p className="text-center text-gray-600">
              Koristi se samo voda, što čini metodu potpuno ekološki prihvatljivom.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Bezbedno za cevi</h3>
            <p className="text-center text-gray-600">
              Ne oštećuje cevi i produžava njihov životni vek za razliku od agresivnih hemikalija.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <Zap className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Brza efikasnost</h3>
            <p className="text-center text-gray-600">
              Brzo i efikasno čišćenje koje vraća cevima originalnu prohodnost.
            </p>
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Kada se koristi visokopritisno pranje?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-700">Preventivno održavanje</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Redovno čišćenje kanalizacionih sistema</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Sprečavanje nastanka začepljenja</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Održavanje prohodnosti cevi</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-700">Rešavanje problema</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Uklanjanje masnih naslaga</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Čišćenje kamenca i mineralnih naslaga</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Uklanjanje neprijatnih mirisa</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Proces visokopritisnog pranja"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6 text-blue-800">Kako funkcioniše proces?</h2>
          <ol className="space-y-4">
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">Inspekcija sistema</h3>
                <p className="text-gray-700">Proveravamo stanje kanalizacionog sistema</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">Priprema opreme</h3>
                <p className="text-gray-700">Podešavamo pritisak i biramo odgovarajuće mlaznice</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">Pranje cevi</h3>
                <p className="text-gray-700">Voda pod visokim pritiskom čisti cevi iznutra</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold mb-1">Finalna provera</h3>
                <p className="text-gray-700">Testiramo prohodnost i kvalitet čišćenja</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Cenovnik usluga</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="text-xl font-bold text-center">Visokopritisno pranje</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span>Kućni kanalizacioni sistem</span>
                <span className="font-semibold">od 5.000 RSD</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>Poslovni objekti</span>
                <span className="font-semibold">od 8.000 RSD</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>Industrijski objekti</span>
                <span className="font-semibold">po dogovoru</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Preventivno održavanje</span>
                <span className="font-semibold">od 4.000 RSD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-800 text-white p-8 rounded-lg mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Potrebno vam je visokopritisno pranje?</h2>
          <p className="mb-6">
            Investirajte u preventivno održavanje vašeg kanalizacionog sistema. Kontaktirajte nas za profesionalnu
            uslugu!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/kontakt">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 w-full sm:w-auto">
                Zatražite uslugu
              </Button>
            </Link>
            <Link href="/usluge">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-blue-700 w-full sm:w-auto"
              >
                Pogledajte sve usluge
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <ContactCta />
    </div>
  )
}
