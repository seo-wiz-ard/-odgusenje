export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Učitavanje...</h2>
        <p className="text-gray-600">Molimo sačekajte dok se stranica učitava</p>
      </div>
    </div>
  )
}
