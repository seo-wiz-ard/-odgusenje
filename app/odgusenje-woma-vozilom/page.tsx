import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Truck, Droplet, Shield } from "lucide-react"
import ContactCta from "@/components/contact-cta"

export const metadata: Metadata = {
  title: "Odgušenje woma vozilom | Profesionalne vodoinstalaterske usluge",
  description:
    "Specijalizovana usluga odgušenja kanalizacije woma vozilom pod visokim pritiskom. Efikasno rešenje za najteža začepljenja kanalizacionih sistema.",
}

export default function WomaService() {
  return (
    <div className="container mx-auto px-4 py-12 pt-17">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Odgušenje woma vozilom</h1>
      <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Najsavremenija tehnologija za odgušenje kanalizacije pod visokim pritiskom
      </p>

      {/* Hero section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Šta je woma vozilo?</h2>
          <p className="mb-4 text-gray-700">
            Woma vozilo je specijalizovano vozilo opremljeno sistemom za odgušenje kanalizacije pod visokim pritiskom
            vode. Ova napredna tehnologija omogućava efikasno čišćenje i odgušenje najkompleksnijih začepljenja u
            kanalizacionim sistemima.
          </p>
          <p className="mb-6 text-gray-700">
            Naše woma vozilo može da razvije pritisak vode do 200 bara, što je dovoljno za uklanjanje i najtvrđih
            naslaga, korenja, masnoće i drugih prepreka u cevima različitih prečnika.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 h-5 w-5" />
              <span>Pritisak vode do 200 bara</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 h-5 w-5" />
              <span>Čišćenje cevi prečnika od 50mm do 600mm</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 h-5 w-5" />
              <span>Dužina creva do 100 metara</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 h-5 w-5" />
              <span>Ekološki prihvatljivo rešenje</span>
            </div>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=400&width=600" alt="Woma vozilo" fill className="object-cover" />
        </div>
      </div>

      {/* Advantages section */}
      <div className="bg-blue-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Prednosti odgušenja woma vozilom</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <Droplet className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Visoka efikasnost</h3>
            <p className="text-center text-gray-600">
              Visok pritisak vode omogućava uklanjanje i najtvrđih naslaga i začepljenja koja se ne mogu rešiti
              standardnim metodama.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <Truck className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Brzo rešenje</h3>
            <p className="text-center text-gray-600">
              Woma vozilo omogućava brzo i efikasno čišćenje kanalizacionih sistema, čime se smanjuje vreme zastoja i
              neugodnosti.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Bez oštećenja</h3>
            <p className="text-center text-gray-600">
              Za razliku od mehaničkih metoda, odgušenje vodom pod pritiskom ne oštećuje cevi i produžava njihov životni
              vek.
            </p>
          </div>
        </div>
      </div>

      {/* Process section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Kako funkcioniše odgušenje woma vozilom?</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <ol className="space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Inspekcija</h3>
                  <p className="text-gray-700">
                    Naši stručnjaci prvo vrše inspekciju kanalizacionog sistema kako bi utvrdili prirodu i lokaciju
                    začepljenja.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Priprema</h3>
                  <p className="text-gray-700">
                    Woma vozilo se pozicionira na odgovarajuće mesto i priprema se oprema za rad. Biraju se odgovarajuće
                    mlaznice u zavisnosti od vrste začepljenja.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Čišćenje</h3>
                  <p className="text-gray-700">
                    Specijalno crevo sa mlaznicom se uvodi u kanalizacionu cev i pušta se voda pod visokim pritiskom
                    koja razbija i ispira sve naslage i začepljenja.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Provera</h3>
                  <p className="text-gray-700">
                    Nakon čišćenja, vrši se provera prohodnosti sistema kako bi se osiguralo da je začepljenje u
                    potpunosti uklonjeno.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Proces odgušenja woma vozilom"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Applications section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Gde se koristi woma vozilo?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <p className="font-semibold">Stambene zgrade</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <p className="font-semibold">Industrijski objekti</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <p className="font-semibold">Gradska kanalizacija</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <p className="font-semibold">Komercijalni objekti</p>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-blue-800 text-white p-8 rounded-lg mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Imate problem sa teškim začepljenjem?</h2>
          <p className="mb-6">
            Naše woma vozilo je spremno da reši i najteže probleme sa kanalizacijom. Kontaktirajte nas za brzu i
            efikasnu uslugu.
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
