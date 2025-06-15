import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Search, Camera, Monitor, FileText } from "lucide-react"
import ContactCta from "@/components/contact-cta"

export const metadata: Metadata = {
  title: "Snimanje kamerom kanalizacije | Profesionalne vodoinstalaterske usluge",
  description:
    "Profesionalna inspekcija kanalizacionih cevi specijalnom kamerom. Precizna dijagnostika problema i video dokumentacija stanja sistema.",
}

export default function SnimanjeKamerom() {
  return (
    <div className="container mx-auto px-4 py-12 pt-17">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Snimanje kamerom</h1>
      <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Precizna dijagnostika kanalizacionih sistema pomoću napredne kamera tehnologije
      </p>

      {/* Hero section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Šta je snimanje kamerom?</h2>
          <p className="mb-4 text-gray-700">
            Snimanje kamerom je najsavremenija metoda inspekcije kanalizacionih cevi koja omogućava preciznu
            dijagnostiku stanja sistema bez potrebe za iskopavanjem ili rušenjem. Koristi se specijalna vodootporna
            kamera koja se uvodi u cevi.
          </p>
          <p className="mb-6 text-gray-700">
            Ova tehnologija omogućava da vidimo tačno stanje cevi iznutra, lociramo mesta oštećenja, začepljenja ili
            drugih problema, i napravimo plan za njihovo rešavanje. Sve se snima u visokoj rezoluciji i čuva kao
            dokumentacija.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 h-5 w-5" />
              <span>HD video kvalitet</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 h-5 w-5" />
              <span>Precizno lociranje problema</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 h-5 w-5" />
              <span>Bez iskopavanja</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 h-5 w-5" />
              <span>Kompletna dokumentacija</span>
            </div>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=400&width=600" alt="Snimanje kamerom" fill className="object-cover" />
        </div>
      </div>

      {/* When to use */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Kada se koristi snimanje kamerom?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-blue-800">Dijagnostika problema</h3>
            <p className="text-gray-600">Kada nije jasno gde se nalazi problem ili koji je uzrok začepljenja.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-blue-800">Pre kupovine nekretnine</h3>
            <p className="text-gray-600">Provera stanja kanalizacionog sistema pre kupovine kuće ili stana.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-blue-800">Ponavljajući problemi</h3>
            <p className="text-gray-600">Kada se isti problem vraća uprkos prethodnim intervencijama.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-blue-800">Preventivna kontrola</h3>
            <p className="text-gray-600">Redovna kontrola stanja sistema u stariji objektima.</p>
          </div>
        </div>
      </div>

      {/* What we can detect */}
      <div className="bg-blue-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Šta možemo da otkrijemo?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-700">Strukturni problemi</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Pukotine i lomove cevi</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Deformacije i sleganja</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Koroziju i habanje</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Neispravne spojeve</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-700">Začepljenja i prepreke</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Nakupine masnoće i nečistoća</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Korenje biljaka u cevima</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Strane predmete</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Kamene naslage</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Equipment */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Naša oprema</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-center mb-4">
              <Camera className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">HD kamere</h3>
            <p className="text-center text-gray-600">
              Vodootporne kamere sa LED osvetljenjem za snimanje u visokoj rezoluciji.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-center mb-4">
              <Monitor className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Monitoring sistem</h3>
            <p className="text-center text-gray-600">
              Napredni sistem za praćenje i snimanje sa mogućnošću live pregleda.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-center mb-4">
              <FileText className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Dokumentacija</h3>
            <p className="text-center text-gray-600">Detaljni izveštaji sa slikama, video zapisima i preporukama.</p>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Proces snimanja kamerom"
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
                <h3 className="font-semibold mb-1">Priprema sistema</h3>
                <p className="text-gray-700">Priprema pristupnih tačaka i opreme za snimanje</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">Uvođenje kamere</h3>
                <p className="text-gray-700">Kamera se uvodi u cev i kreće snimanje</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">Inspekcija i snimanje</h3>
                <p className="text-gray-700">Detaljno snimanje celokupnog sistema</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold mb-1">Analiza i izveštaj</h3>
                <p className="text-gray-700">Priprema detaljnog izveštaja sa preporukama</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Prednosti snimanja kamerom</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Preciznost</h3>
            <p className="text-gray-600">Tačno lociranje problema bez pogađanja</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">💰</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Ušteda</h3>
            <p className="text-gray-600">Izbegavanje nepotrebnih radova i troškova</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">⏱️</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Brzina</h3>
            <p className="text-gray-600">Brza dijagnostika bez rušenja i iskopavanja</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Dokumentacija</h3>
            <p className="text-gray-600">Kompletna video dokumentacija za buduće reference</p>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Cenovnik usluga</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="text-xl font-bold text-center">Snimanje kamerom</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span>Inspekcija do 20m</span>
                <span className="font-semibold">od 8.000 RSD</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>Inspekcija do 50m</span>
                <span className="font-semibold">od 12.000 RSD</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>Inspekcija preko 50m</span>
                <span className="font-semibold">po dogovoru</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Detaljni izveštaj sa DVD</span>
                <span className="font-semibold">+2.000 RSD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-800 text-white p-8 rounded-lg mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Potrebna vam je inspekcija kanalizacije?</h2>
          <p className="mb-6">
            Saznajte tačno stanje vašeg kanalizacionog sistema pre nego što problem postane veći. Kontaktirajte nas za
            profesionalnu inspekciju!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/kontakt">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 w-full sm:w-auto">
                Zatražite inspekciju
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
