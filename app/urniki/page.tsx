"use client"

import { useEffect, useState } from "react"

type Urnik = {
  id: number
  oseba: string
  datum: string
  zacetek: string
  konec: string
  opis: string
}

export default function UrnikiPage() {
  const [urniki, setUrniki] = useState<Urnik[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/urniki")
      .then((res) => res.json())
      .then((data) => {
        setUrniki(data)
        setLoading(false)
      })
  }, [])

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-2">
        Urniki
      </h1>

      <p className="text-gray-500 mb-8">
        Pregled delovnih urnikov.
      </p>

      {loading ? (
        <p>Nalaganje...</p>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4">Oseba</th>
                <th className="text-left p-4">Datum</th>
                <th className="text-left p-4">Začetek</th>
                <th className="text-left p-4">Konec</th>
                <th className="text-left p-4">Opis</th>
              </tr>
            </thead>

            <tbody>
              {urniki.map((urnik) => (
                <tr key={urnik.id} className="border-t">
                  <td className="p-4">{urnik.oseba}</td>
                  <td className="p-4">{urnik.datum}</td>
                  <td className="p-4">{urnik.zacetek}</td>
                  <td className="p-4">{urnik.konec}</td>
                  <td className="p-4">{urnik.opis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  )
}