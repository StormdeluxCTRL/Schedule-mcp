"use client"

import { useEffect, useState } from "react"

type PotniNalog = {
  id: number
  oseba: string
  datum_od: string
  datum_do: string
  relacija: string
  namen: string
  prevoz: string
  kilometri: number
  strosek: number
  status: string
}

export default function PotniNalogiPage() {
  const [nalogi, setNalogi] = useState<PotniNalog[]>([])

  useEffect(() => {
    fetch("/api/potni-nalogi")
      .then((res) => res.json())
      .then((data) => setNalogi(data))
  }, [])

  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            Potni nalogi
          </h1>

          <p className="text-gray-500">
            Pregled službenih poti.
          </p>
        </div>

        <button className="bg-black text-white px-5 py-3 rounded-lg">
          + Nov potni nalog
        </button>
      </div>

      <div className="grid gap-5">
        {nalogi.map((nalog) => (
          <div
            key={nalog.id}
            className="bg-white rounded-xl shadow p-6"
          >
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl font-semibold">
                  {nalog.oseba}
                </h2>

                <p className="text-gray-600">
                  {nalog.relacija}
                </p>
              </div>

              <span className="bg-gray-100 rounded-full px-3 py-1 text-sm">
                {nalog.status}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              <div>
                <p className="text-sm text-gray-500">Datum</p>
                <p>{nalog.datum_od}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Kilometri</p>
                <p>{nalog.kilometri} km</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Strošek</p>
                <p>{nalog.strosek} €</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Namen</p>
                <p>{nalog.namen}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

