import Link from "next/link"

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r p-6">
      <h1 className="text-2xl font-bold mb-8">
        WorkFlow
      </h1>

      <nav className="space-y-3">
        <Link
          href="/"
          className="block p-3 rounded-lg hover:bg-gray-100"
        >
          Dashboard
        </Link>

        <Link
          href="/urniki"
          className="block p-3 rounded-lg hover:bg-gray-100"
        >
          Urniki
        </Link>

        <Link
          href="/potni-nalogi"
          className="block p-3 rounded-lg hover:bg-gray-100"
        >
          Potni nalogi
        </Link>

        <Link
          href="/assistant"
          className="block p-3 rounded-lg hover:bg-gray-100"
        >
          AI Assistant
        </Link>
      </nav>
    </aside>
  )
}