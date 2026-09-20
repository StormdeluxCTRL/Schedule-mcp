export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          Dashboard
        </h1>

        <p className="text-gray-600 mb-8">
          Pregled urnikov in potnih nalogov.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">Današnji urniki</p>
            <p className="text-3xl font-bold mt-2">2</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">Potni nalogi</p>
            <p className="text-3xl font-bold mt-2">1</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">Skupni kilometri</p>
            <p className="text-3xl font-bold mt-2">220 km</p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Zadnji potni nalogi
          </h2>

          <div className="border rounded-lg p-4">
            <p className="font-semibold">Luka</p>
            <p className="text-gray-600">
              Nova Gorica → Ljubljana
            </p>
            <p className="text-sm text-gray-500">
              25. 9. 2026
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}