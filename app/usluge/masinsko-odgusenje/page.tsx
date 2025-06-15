import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Wrench, Clock, Shield } from "lucide-react"
import ContactCta from "@/components/contact-cta"

export const metadata: Metadata = {
  title: "Mašinsko odgušenje kanalizacije | Profesionalne vodoinstalaterske usluge",
  description:
    "Profesionalno mašinsko odgušenje kanalizacije i odvoda. Brzo i efikasno rešavanje začepljenja pomoću specijalizovane opreme.",
}

export default function MasinskoOdgusenje() {
  return (
    <div className="container mx-auto px-4 py-12 pt-17">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Mašinsko odgušenje</h1>
      <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Profesionalno odgušenje kanalizacije pomoću specijalizovanih mašina i alata
      </p>

      {/* Hero section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Šta je mašinsko odgušenje?</h2>
          <p className="mb-4 text-gray-700">
            Mašinsko odgušenje je najčešće korišćena metoda za rešavanje začepljenja u kanalizacionim cevima. Koristi se
            specijalizovana oprema koja mehanički uklanja začepljenja pomoću spirala, žica i drugih alata.
          </p>
          <p className="mb-6 text-gray-700">
            Naše mašine za odgušenje mogu da reše začepljenja u cevima različitih prečnika, od malih kućnih odvoda do
            velikih kanalizacionih sistema. Ova metoda je efikasna za uklanjanje kose, papira, ostataka hrane, masnoće i
            drugih čestih uzročnika začepljenja.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 h-5 w-5" />
              <span>Efikasno za sve vrste začepljenja</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 h-5 w-5" />
              <span>Brzo rešavanje problema</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 h-5 w-5" />
              <span>Dostupno 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 h-5 w-5" />
              <span>Povoljne cene</span>
            </div>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=400&width=600" alt="Mašinsko odgušenje" fill className="object-cover" />
        </div>
      </div>

      {/* Types of blockages */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Vrste začepljenja koje rešavamo</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-blue-800">WC šolje</h3>
            <p className="text-gray-600">
              Začepljenja toaletskih šolja uzrokovana papirima, higijenskim potrepštinama i drugim predmetima.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-blue-800">Kuhinjski odvodi</h3>
            <p className="text-gray-600">Masnoća, ostaci hrane i drugi kuhinjski otpad koji blokira odvode sudopere.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-blue-800">Kupatilski odvodi</h3>
            <p className="text-gray-600">
              Kosa, sapun, pasta za zube i drugi proizvodi koji začepljuju odvode u kupatilu.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-blue-800">Glavni odvodi</h3>
            <p className="text-gray-600">Začepljenja u glavnim kanalizacionim cevima zgrade ili kuće.</p>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="order-2 md:order-1 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Proces mašinskog odgušenja"
            fill
            className="object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-6 text-blue-800">Kako funkcioniše mašinsko odgušenje?</h2>
          <ol className="space-y-4">
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">Dijagnostika</h3>
                <p className="text-gray-700">Lociramo mesto i uzrok začepljenja</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">Izbor alata</h3>
                <p className="text-gray-700">Biramo odgovarajuću spiralu ili alat</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">Odgušenje</h3>
                <p className="text-gray-700">Mehanički uklanjamo začepljenje</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold mb-1">Testiranje</h3>
                <p className="text-gray-700">Proveravamo da li je problem rešen</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      {/* Equipment */}
      <div className="bg-blue-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Naša oprema</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <Wrench className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Električne spirale</h3>
            <p className="text-center text-gray-600">
              Profesionalne električne spirale različitih veličina za sve tipove cevi.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <Clock className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Ručni alati</h3>
            <p className="text-center text-gray-600">
              Specijalizovani ručni alati za precizno rešavanje složenih začepljenja.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Zaštitna oprema</h3>
            <p className="text-center text-gray-600">
              Kompletna zaštitna oprema za bezbednost naših radnika i vaše imovine.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Cenovnik usluga</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="text-xl font-bold text-center">Mašinsko odgušenje</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span>WC šolja</span>
                <span className="font-semibold">od 2.000 RSD</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>Kuhinjski odvod</span>
                <span className="font-semibold">od 1.500 RSD</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>Kupatilski odvod</span>
                <span className="font-semibold">od 1.500 RSD</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Glavni odvod</span>
                <span className="font-semibold">od 3.000 RSD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-800 text-white p-8 rounded-lg mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Potrebno vam je mašinsko odgušenje?</h2>
          <p className="mb-6">
            Naš tim stručnjaka je spreman da brzo reši vaš problem sa začepljenim odvodima. Kontaktirajte nas već danas!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/kontakt">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 w-full sm:w-auto">
                Pozovite nas odmah
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
