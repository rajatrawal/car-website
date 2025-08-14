import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TTOFL - The Team of Future Learning",
  description:
    "Tech made simple, innovation made accessible. Pioneering mobile applications for auto care, education, and healthcare.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        {/* Footer */}
        <footer className="bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 border-t border-blue-400/30 py-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 tracking-wider mb-2">TTOFL</div>
                <div className="text-sm text-blue-200 mb-1">The Team of Future Learning</div>
                <div className="text-xs text-blue-100">Tech made simple, innovation made accessible</div>
              </div>
              <div className="text-center md:text-right">
                <div className="text-sm text-blue-200 mb-2">© 2025 TTOFL. All rights reserved.</div>
                <div className="text-xs text-blue-100">Empowering the future through technology</div>
              </div>
            </div>
          </div>
        </footer>

        <Toaster />
      </body>
    </html>
  )
}
