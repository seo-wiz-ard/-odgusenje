import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Phone, Clock, Wrench, Droplet, Truck, MapPin } from "lucide-react"
import ContactCta from "@/components/contact-cta"

export const metadata: Metadata = {
  title: "Odgušenje kanalizacije Zemun 24/7 | Hitne intervencije povoljno",
  description:
    "Profesionalno odgušenje kanalizacije Zemun 24/7. Hitne intervencije, povoljne cene, brz dolazak. Pokrivamo ceo Zemun. Pozovite odmah!",
  keywords:
    "odgušenje kanalizacije zemun, hitno odgušenje zemun, vodoinstalater zemun 24h, odgušenje kanalizacije zemun povoljno",
  alternates: {
    canonical: "https://www.odgusenje.online/odgusenje-kanalizacije-zemun",
  },
  openGraph: {
    title: "Odgušenje kanalizacije Zemun 24/7 | Hitne intervencije povoljno",
    description: "Profesionalno odgušenje kanalizacije Zemun 24/7. Hitne intervencije, povoljne cene, brz dolazak.",
    url: "https://www.odgusenje.online/odgusenje-kanalizacije-zemun",
  },
}

export default function OdgusenjeZemun() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Odgušenje kanalizacije Zemun",
    description: "Profesionalne usluge odgušenja kanalizacije na teritoriji Zemuna 24/7",
    url: "https://www.odgusenje.online/odgusenje-kanalizacije-zemun",
    telephone: "+381601234567",
    areaServed: {
      "@type": "Place",
      name: "Zemun, Beograd",
    },
    openingHours: "Mo-Su 00:00-24:00",
    priceRange: "$$",
  }

  const zemunNeighborhoods = [
    "Centar Zemuna",
    "Gardoš",
    "Zemun polje",
    "Novi grad",
    "Altina",
    "Batajnica",
    "Ugrinovci",
    "Kej oslobođenja",
  ]

  const services = [
    {
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      title: "Mašinsko odgušenje kanalizacije",
      description: "Brzo i efikasno rešenje za stanove, kuće i male poslovne prostore",
      features: ["Sudopere, WC šolje, tuš kabine", "Unutrašnje instalacije", "Vertikale", "Bez građevinskih radova"],
    },
    {
      icon: <Droplet className="h-8 w-8 text-blue-600" />,
      title: "Visokopritisno odgušenje (Hydro Jet)",
      description: "Temeljno čišćenje cevi vodenim mlazom pod pritiskom od preko 150 bara",
      features: ["Glavne kanalizacione cevi", "Veće stambene zgrade", "Ugostiteljski objekti", "Ekološka metoda"],
    },
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      title: "Odgušenje WOM vozilom",
      description: "Za teža i dubinska zapušenja kombinujemo usisavanje sa visokopritisnim čišćenjem",
      features: ["Fekalne jame i šahtove", "Javni sistemi", "Industrijske instalacije", "Teške havarije"],
    },
  ]

  const causes = [
    "Ostaci hrane i masnoća iz sudopera",
    "Vlažne maramice, toalet papir i higijenski ulošci",
    "Pesak i šut iz renoviranja",
    "Kamenac i talozi",
    "Korenje drveća koje prodire u cevi",
  ]

  const advantages = [
    "Hitne intervencije 0–24h, svakog dana",
    "Dolazak za 30–45 minuta na bilo koju lokaciju u Zemunu",
    "Profesionalna oprema i obučeni majstori",
    "Jasne cene – bez skrivenih troškova",
    "Mogućnost snimanja cevi kamerom (video inspekcija)",
    "Garancija na obavljene usluge",
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="container mx-auto px-4 py-12 pt-17">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            Odgušenje kanalizacije Zemun – Hitne intervencije dostupne 0–24h
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-800 mb-6">
            Pouzdana i brza pomoć kod svih vrsta zapušenja na teritoriji Zemuna
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
            Ukoliko ste se našli u situaciji da voda sporo otiče, pojavljuju se neprijatni mirisi, ili vam se
            kanalizacija vraća u stan ili lokal – ne čekajte da problem postane havarija. Naša služba za odgušenje
            kanalizacije u Zemunu spremna je da reaguje odmah, bilo da se nalazite u centru Zemuna, na Gardošu, Zemun
            polju, Novom gradu, Altini, Batajnici ili Ugrinovcima.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg">
              <Phone className="h-5 w-5 mr-2" />
              <span>060 123 4567</span>
            </Button>
            <Link href="/kontakt">
              <Button size="lg" variant="outline" className="text-lg border-blue-600 text-blue-600 hover:bg-blue-50">
                Zatražite ponudu
              </Button>
            </Link>
          </div>
        </div>

        {/* What is drain cleaning */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Šta je odgušenje kanalizacije?</h2>
            <p className="text-gray-700 mb-6">
              Odgušenje kanalizacije je tehnički postupak uklanjanja fizičkih prepreka, masnoća, mulja, korenja i drugih
              nečistoća iz kanalizacionih cevi, šahtova i odvoda. Cilj je obezbediti neometan protok ot padnih voda,
              zaštititi vašu imovinu i sprečiti eventualne sanitarne i građevinske posledice.
            </p>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Odgušenje kanalizacije Zemun - profesionalne usluge"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Common causes */}
        <div className="bg-red-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-red-800">
            Najčešći uzroci zapušenja kanalizacije u Zemunu
          </h2>
          <p className="text-center mb-8 text-gray-700">
            Zbog starije kanalizacione infrastrukture u mnogim delovima Zemuna i gustine naseljenosti, zapušenja su
            česta pojava. Neki od najčešćih uzroka su:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {causes.map((cause, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{cause}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">
            Vrste profesionalnog odgušenja koje nudimo
          </h2>
          <p className="text-center mb-12 text-gray-700 max-w-3xl mx-auto">
            Naša ekipa koristi savremenu opremu i pristupa svakom slučaju individualno. U zavisnosti od tipa i lokacije
            zapušenja, primenjujemo jednu od sledećih metoda:
          </p>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`${index % 2 !== 0 ? "md:order-2" : "md:order-1"}`}>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-bold ml-3 text-blue-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-blue-700">Gde se koristi:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className={`relative h-[250px] rounded-lg overflow-hidden ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}
                >
                  <Image
                    src="/placeholder.svg?height=250&width=400"
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why choose us */}
        <div className="bg-blue-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
            Odgušenje kanalizacije Zemun – Zašto izabrati nas?
          </h2>
          <p className="text-center mb-8 text-gray-700 max-w-3xl mx-auto">
            Naša firma se više od 10 godina bavi održavanjem i čišćenjem kanalizacije širom Beograda, sa posebnim
            fokusom na Zemun, gde smo intervenisali na hiljadama adresa. Naš cilj je brzo, temeljno i trajno rešenje
            svakog problema.
          </p>

          <h3 className="text-xl font-bold mb-6 text-center text-blue-700">🛠️ Naše prednosti:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage areas */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Pokrivamo sve delove Zemuna</h2>
          <p className="text-center mb-8 text-gray-700">Bez obzira da li se nalazite u:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {zemunNeighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center border border-blue-100">
                <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-blue-800">{neighborhood}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-gray-700">
            Naš tim će stići brzo i rešiti svaki problem sa kanalizacijom.
          </p>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Lokacija - Zemun</h2>
          <div className="rounded-lg overflow-hidden h-[400px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11384.123456789!2d20.3054321!3d44.8412345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6e987654321%3A0x987654321abcdef!2sZemun%2C%20Belgrade%2C%20Serbia!5e0!3m2!1sen!2sus!4v1654789542873!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Zemuna - Odgušenje kanalizacije"
            ></iframe>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-800 text-white p-8 rounded-lg mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">📞 Pozovite odmah za hitno odgušenje kanalizacije u Zemunu</h2>
            <p className="mb-6 text-lg">
              Ne čekajte da začepljenje izazove poplavu ili ozbiljnu štetu. Pozovite nas odmah i obezbedite sebi
              profesionalnu pomoć, bez stresa i čekanja.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Phone className="h-5 w-5 mr-2" />
                060 123 4567
              </Button>
              <Link href="/kontakt">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                  Pošaljite upit
                </Button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-blue-100">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Radimo svakog dana – 24h dnevno</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Besplatno savetovanje i procena problema</span>
              </div>
            </div>
          </div>
        </div>

        <ContactCta />
      </div>
    </>
  )
}
