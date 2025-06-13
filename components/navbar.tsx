"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
              <Link href="/usluge" className="text-gray-700 hover:text-blue-600 font-medium">
                Usluge
              </Link>
              <Link href="/o-nama" className="text-gray-700 hover:text-blue-600 font-medium">
                O nama
              </Link>
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
              <Link
                href="/o-nama"
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                O nama
              </Link>
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
