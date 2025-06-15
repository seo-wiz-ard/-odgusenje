import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Home, Utensils, Bath } from "lucide-react"
import ContactCta from "@/components/contact-cta"

export const metadata: Metadata = {
  title: "Čišćenje odvoda | Profesionalne vodoinstalaterske usluge",
  description:
    "Profesionalno čišćenje odvoda u kupatilu, kuhinji i drugim prostorijama. Uklanjanje neprijatnih mirisa i preventivno održavanje.",
}

export default function CiscenjeOdvoda() {
  return (
    <div className="container mx-auto px-4 py-12 pt-17">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Čišćenje odvoda</h1>
      <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Profesionalno čišćenje i održavanje odvoda u vašem domu ili poslovnom prostoru
      </p>

      {/* Hero section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Zašto je važno čišćenje odvoda?</h2>
          <p className="mb-4 text-gray-700">
            Redovno čišćenje odvoda je ključno za održavanje higijene i funkcionalnosti vašeg doma ili poslovnog
            prostora. Odvodi se vremenom začepljuju zbog nakupljanja kose, sapuna, masnoće, ostataka hrane i drugih
            nečistoća.
          </p>
          <p className="mb-6 text-gray-700">
            Naša usluga čišćenja odvoda uključuje temeljno čišćenje svih vrsta odvoda, uklanjanje neprijatnih mirisa,
            dezinfekciju i preventivno održavanje koje sprečava nastanak budućih problema.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 h-5 w-5" />
              <span>Uklanjanje neprijatnih mirisa</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 h-5 w-5" />
              <span>Preventivno održavanje</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 h-5 w-5" />
              <span>Dezinfekcija i higijena</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-blue-600 h-5 w-5" />
              <span>Produžavanje životnog veka sistema</span>
            </div>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=400&width=600" alt="Čišćenje odvoda" fill className="object-cover" />
        </div>
      </div>

      {/* Types of drains */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Vrste odvoda koje čistimo</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex justify-center mb-4">
              <Utensils className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-blue-800">Kuhinjski odvodi</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Odvod sudopere</li>
              <li>• Odvod mašine za pranje sudova</li>
              <li>• Odvod friteže</li>
              <li>• Industrijski kuhinjski odvodi</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex justify-center mb-4">
              <Bath className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-blue-800">Kupatilski odvodi</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Odvod lavaboa</li>
              <li>• Odvod tuša</li>
              <li>• Odvod kade</li>
              <li>• Podni odvodi</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex justify-center mb-4">
              <Home className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-blue-800">Ostali odvodi</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Odvod mašine za pranje veša</li>
              <li>• Odvod u podrumu</li>
              <li>• Odvod na terasi</li>
              <li>• Garažni odvodi</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Common problems */}
      <div className="bg-blue-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Česti problemi sa odvodima</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-700">Uzroci začepljenja</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Nakupljanje kose i dlaka</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Masnoća i ulje iz kuhinje</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Ostaci sapuna i kozmetike</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Ostaci hrane</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-700">Simptomi problema</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Sporo odticanje vode</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Neprijatni mirisi</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Bublanje i čudni zvukovi</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span>Povraćaj vode</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="order-2 md:order-1 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Proces čišćenja odvoda"
            fill
            className="object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-6 text-blue-800">Naš proces čišćenja</h2>
          <ol className="space-y-4">
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">Pregled i dijagnostika</h3>
                <p className="text-gray-700">Identifikujemo uzrok problema i stanje odvoda</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">Mehaničko čišćenje</h3>
                <p className="text-gray-700">Uklanjamo začepljenja i nečistoće</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">Hemijsko tretiranje</h3>
                <p className="text-gray-700">Koristimo specijalne preparate za dubinsko čišćenje</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold mb-1">Dezinfekcija</h3>
                <p className="text-gray-700">Dezinfikujemo odvod i uklanjamo bakterije</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      {/* Prevention tips */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Saveti za održavanje odvoda</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-blue-700">Što raditi</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <span>Redovno prolivajte vrućom vodom</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <span>Koristite sita za odvode</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <span>Čistite sifone redovno</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <span>Koristite prirodne čistače</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-red-700">Što izbegavati</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1 flex-shrink-0">✗</span>
                <span>Bacanje masnoće u odvod</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1 flex-shrink-0">✗</span>
                <span>Ispiranje ostataka hrane</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1 flex-shrink-0">✗</span>
                <span>Korišćenje agresivnih hemikalija</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1 flex-shrink-0">✗</span>
                <span>Ignorisanje prvih znakova problema</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Cenovnik usluga</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="text-xl font-bold text-center">Čišćenje odvoda</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span>Čišćenje jednog odvoda</span>
                <span className="font-semibold">od 1.000 RSD</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>Čišćenje svih odvoda (stan)</span>
                <span className="font-semibold">od 3.000 RSD</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>Čišćenje svih odvoda (kuća)</span>
                <span className="font-semibold">od 5.000 RSD</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Redovno održavanje (mesečno)</span>
                <span className="font-semibold">od 2.000 RSD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-800 text-white p-8 rounded-lg mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Potrebno vam je čišćenje odvoda?</h2>
          <p className="mb-6">
            Ne čekajte da se problem pogorša. Kontaktirajte nas za profesionalno čišćenje i održavanje vaših odvoda!
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
