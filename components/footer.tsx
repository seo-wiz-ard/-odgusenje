import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Odgušenje kanalizacije</h3>
            <p className="mb-4 text-blue-100">
              Profesionalne usluge odgušenja kanalizacije dostupne 24/7. Brza i pouzdana pomoć za sve probleme sa
              odvodima.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-300">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-blue-300">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Brzi linkovi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white">
                  Početna
                </Link>
              </li>
              <li>
                <Link href="/odgusenje-woma-vozilom" className="text-blue-100 hover:text-white">
                  Odgušenje woma vozilom
                </Link>
              </li>
              <li>
                <Link href="/usluge" className="text-blue-100 hover:text-white">
                  Usluge
                </Link>
              </li>
              <li>
                <Link href="/o-nama" className="text-blue-100 hover:text-white">
                  O nama
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-blue-100 hover:text-white">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Usluge</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/usluge/masinsko-odgusenje" className="text-blue-100 hover:text-white">
                  Mašinsko odgušenje
                </Link>
              </li>
              <li>
                <Link href="/usluge/visokopritisno-pranje" className="text-blue-100 hover:text-white">
                  Visokopritisno pranje
                </Link>
              </li>
              <li>
                <Link href="/usluge/ciscenje-odvoda" className="text-blue-100 hover:text-white">
                  Čišćenje odvoda
                </Link>
              </li>
              <li>
                <Link href="/usluge/snimanje-kamerom" className="text-blue-100 hover:text-white">
                  Snimanje kamerom
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-blue-300" />
                <a href="tel:+381643577947" className="text-blue-100 hover:text-white">
                  +381 64 357 7947
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-blue-300" />
                <span>odgusenje.online@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-blue-300" />
                <span>Ustanicka 169, Beograd</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 text-blue-300" />
                <span>Dostupni 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 mt-6 text-center text-blue-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Odgušenje kanalizacije. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  )
}
