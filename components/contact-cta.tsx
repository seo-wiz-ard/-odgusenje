import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"

export default function ContactCta() {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Imate problem sa kanalizacijom?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Ne čekajte da problem postane veći. Kontaktirajte nas odmah za brzu i profesionalnu uslugu odgušenja.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg">
              <Phone className="h-5 w-5 mr-2" />
              <span>060 123 4567</span>
            </Button>
            <Link href="/kontakt">
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-blue-800">
                Pošaljite upit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
