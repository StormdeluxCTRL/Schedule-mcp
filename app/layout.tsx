import type { Metadata } from "next"
import "./globals.css"
import Sidebar from "./components/Sidebar"

export const metadata: Metadata = {
  title: "WorkFlow",
  description: "Urniki, potni nalogi in AI pomočnik",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sl">
      <body>
        <div className="flex min-h-screen bg-gray-50">
          <Sidebar />

          <div className="flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}