import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle, Truck, Clock, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "O nama | Profesionalne vodoinstalaterske usluge",
  description:
    "Saznajte više o našem timu, iskustvu, opremi i područjima koja pokrivamo. Više od 15 godina iskustva u odgušenju kanalizacije.",
}

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12 pt-17">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">O Nama</h1>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Naše iskustvo</h2>
          <p className="mb-4 text-gray-700">
            Sa više od 15 godina iskustva u oblasti vodoinstalaterskih usluga, postali smo sinonim za kvalitet i
            pouzdanost. Naš tim stručnjaka je obučen za rešavanje najkompleksnijih problema sa kanalizacijom i odvodima.
          </p>
          <p className="mb-4 text-gray-700">
            Kroz godine rada, razvili smo efikasne metode i procedure koje nam omogućavaju da brzo identifikujemo i
            rešimo problem, štedeći vreme i novac našim klijentima.
          </p>
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="text-blue-600 h-5 w-5" />
            <span>Više od 15 godina iskustva</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="text-blue-600 h-5 w-5" />
            <span>Preko 10,000 uspešno rešenih problema</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-blue-600 h-5 w-5" />
            <span>Sertifikovani stručnjaci</span>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=400&width=600" alt="Naš tim stručnjaka" fill className="object-cover" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="order-2 md:order-1 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=400&width=600" alt="Naša oprema" fill className="object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Naša oprema</h2>
          <p className="mb-4 text-gray-700">
            Koristimo najsavremeniju opremu za odgušenje kanalizacije koja nam omogućava da efikasno rešimo sve vrste
            začepljenja. Naša oprema uključuje profesionalne mašine za odgušenje, kamere za inspekciju cevi, i sisteme
            za visokopritisno pranje.
          </p>
          <p className="mb-4 text-gray-700">
            Redovno ulažemo u nove tehnologije kako bismo našim klijentima pružili najbolju moguću uslugu i rešili
            probleme sa minimalnim ometanjem njihovog svakodnevnog života.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">Delovi grada koje pokrivamo</h2>
        <p className="text-center mb-8 text-gray-700">
          Naše usluge odgušenja kanalizacije su dostupne u svim delovima Beograda i okolnih opština.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-blue-800">Odgušenje kanalizacije Voždovac</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-blue-800">Odgušenje kanalizacije Surčin</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-blue-800">Odgušenje kanalizacije Zvezdara</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-blue-800">Odgušenje kanalizacije Konjarnik</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-blue-800">Odgušenje kanalizacije Vračar</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-blue-800">Odgušenje kanalizacije Novi Beograd</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-blue-800">Odgušenje kanalizacije Zemun</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-blue-800">Odgušenje kanalizacije Palilula</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-blue-800">Odgušenje kanalizacije Stari grad</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-blue-800">Odgušenje kanalizacije Savski venac</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-blue-800">Odgušenje kanalizacije Rakovica</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-blue-800">Odgušenje kanalizacije Čukarica</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-600">
            <strong>Hitne intervencije 24/7</strong> - Pozovite nas na <strong>060 123 4567</strong> za brzu pomoć u
            bilo kom delu Beograda!
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-center mb-4">
            <Truck className="h-12 w-12 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">Brz dolazak</h3>
          <p className="text-center text-gray-600">
            Stižemo na vašu adresu u najkraćem mogućem roku, obično u roku od 1 sata.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-center mb-4">
            <Clock className="h-12 w-12 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">24/7 dostupnost</h3>
          <p className="text-center text-gray-600">
            Naše usluge su dostupne 24 sata dnevno, 7 dana u nedelji, uključujući praznike.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-center mb-4">
            <Award className="h-12 w-12 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">Garantovan kvalitet</h3>
          <p className="text-center text-gray-600">
            Pružamo garanciju na sve naše usluge i koristimo samo materijale najvišeg kvaliteta.
          </p>
        </div>
      </div>
    </div>
  )
}
