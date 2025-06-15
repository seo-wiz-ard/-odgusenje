"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleServicesMouseEnter = () => {
    setIsServicesOpen(true)
    setIsAboutOpen(false)
  }

  const handleServicesMouseLeave = () => {
    setTimeout(() => {
      setIsServicesOpen(false)
    }, 150)
  }

  const handleAboutMouseEnter = () => {
    setIsAboutOpen(true)
    setIsServicesOpen(false)
  }

  const handleAboutMouseLeave = () => {
    setTimeout(() => {
      setIsAboutOpen(false)
    }, 150)
  }

  const locations = [
    { name: "Voždovac", slug: "vozdovac" },
    { name: "Surčin", slug: "surcin" },
    { name: "Zvezdara", slug: "zvezdara" },
    { name: "Konjarnik", slug: "konjarnik" },
    { name: "Vračar", slug: "vracar" },
    { name: "Novi Beograd", slug: "novi-beograd" },
    { name: "Zemun", slug: "zemun" },
    { name: "Palilula", slug: "palilula" },
    { name: "Stari grad", slug: "stari-grad" },
    { name: "Savski venac", slug: "savski-venac" },
    { name: "Rakovica", slug: "rakovica" },
    { name: "Čukarica", slug: "cukarica" },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-800">
            Odgušenje kanalizacije
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Početna
              </Link>
              <Link href="/odgusenje-woma-vozilom" className="text-gray-700 hover:text-blue-600 font-medium">
                Odgušenje woma vozilom
              </Link>

              {/* Services dropdown */}
              <div
                className="relative group"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <Link
                  href="/usluge"
                  className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1 py-2"
                >
                  Usluge
                  <ChevronDown className="h-4 w-4" />
                </Link>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                    <Link
                      href="/usluge/masinsko-odgusenje"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Mašinsko odgušenje
                    </Link>
                    <Link
                      href="/usluge/visokopritisno-pranje"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Visokopritisno pranje
                    </Link>
                    <Link
                      href="/usluge/ciscenje-odvoda"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Čišćenje odvoda
                    </Link>
                    <Link
                      href="/usluge/snimanje-kamerom"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Snimanje kamerom
                    </Link>
                  </div>
                )}
              </div>

              {/* About dropdown with locations */}
              <div className="relative group" onMouseEnter={handleAboutMouseEnter} onMouseLeave={handleAboutMouseLeave}>
                <Link
                  href="/o-nama"
                  className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1 py-2"
                >
                  O nama
                  <ChevronDown className="h-4 w-4" />
                </Link>

                {isAboutOpen && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50 max-h-96 overflow-y-auto">
                    <Link
                      href="/o-nama"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-semibold border-b border-gray-100"
                    >
                      O nama - Opšte informacije
                    </Link>
                    <div className="px-4 py-2 text-xs text-gray-500 font-semibold uppercase tracking-wide">
                      Odgušenje po lokacijama:
                    </div>
                    {locations.map((location) => (
                      <Link
                        key={location.slug}
                        href={`/odgusenje-kanalizacije-${location.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        Odgušenje {location.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/kontakt" className="text-gray-700 hover:text-blue-600 font-medium">
                Kontakt
              </Link>
            </nav>

            <Button className="bg-red-600 hover:bg-red-700">
              <Phone className="h-4 w-4 mr-2" />
              <span>060 123 4567</span>
            </Button>
          </div>

          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Početna
              </Link>
              <Link
                href="/odgusenje-woma-vozilom"
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Odgušenje woma vozilom
              </Link>
              <Link
                href="/usluge"
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Usluge
              </Link>
              <div className="pl-4 space-y-2">
                <Link
                  href="/usluge/masinsko-odgusenje"
                  className="block text-gray-600 hover:text-blue-600 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  • Mašinsko odgušenje
                </Link>
                <Link
                  href="/usluge/visokopritisno-pranje"
                  className="block text-gray-600 hover:text-blue-600 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  • Visokopritisno pranje
                </Link>
                <Link
                  href="/usluge/ciscenje-odvoda"
                  className="block text-gray-600 hover:text-blue-600 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  • Čišćenje odvoda
                </Link>
                <Link
                  href="/usluge/snimanje-kamerom"
                  className="block text-gray-600 hover:text-blue-600 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  • Snimanje kamerom
                </Link>
              </div>
              <Link
                href="/o-nama"
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                O nama
              </Link>
              <div className="pl-4 space-y-1 max-h-48 overflow-y-auto">
                {locations.map((location) => (
                  <Link
                    key={location.slug}
                    href={`/odgusenje-kanalizacije-${location.slug}`}
                    className="block text-gray-600 hover:text-blue-600 py-1 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    • Odgušenje {location.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/kontakt"
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Kontakt
              </Link>
              <Button className="bg-red-600 hover:bg-red-700 w-full">
                <Phone className="h-4 w-4 mr-2" />
                <span>060 123 4567</span>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
