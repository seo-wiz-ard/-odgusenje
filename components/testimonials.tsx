import { Star } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marko Petrović",
      location: "Novi Beograd",
      text: "Odlična usluga! Majstor je stigao za manje od sat vremena i brzo rešio problem sa zapušenim odvodom u kupatilu. Sve preporuke!",
      rating: 5,
    },
    {
      name: "Ana Jovanović",
      location: "Zemun",
      text: "Profesionalno i brzo. Imala sam problem sa zapušenom kanalizacijom u stanu, pozvala sam ih i došli su istog dana. Problem je rešen za manje od sat vremena.",
      rating: 5,
    },
    {
      name: "Nikola Đorđević",
      location: "Voždovac",
      text: "Već drugi put koristim njihove usluge i uvek sam zadovoljan. Brzi su, efikasni i cene su korektne. Preporučujem svima!",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Šta kažu naši klijenti</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pogledajte iskustva naših zadovoljnih klijenata sa našim uslugama odgušenja kanalizacije.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
