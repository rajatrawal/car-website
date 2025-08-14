import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Code, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-white tracking-wider">TTOFL</div>
          <div className="text-xs text-gray-300 mt-1">LEARN MORE, GROW MORE, SPREAD MORE</div>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-blue-300 transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-white hover:text-blue-300 transition-colors">
            Products
          </Link>
          <Link href="/about" className="text-white hover:text-blue-300 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-300 transition-colors">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center mt-30">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-full blur-3xl transform -rotate-12 scale-150"></div>
          <h1 className="relative text-6xl md:text-8xl font-bold text-white mb-8">
            Launching
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SOON</span>
          </h1>
        </div>

        <p className="text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
          Tech made simple, innovation made accessible. At TTOFL, we're here to ensure technology works seamlessly for
          you, your enterprise, and your community.
        </p>

        <Link href="/about">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-lg border border-yellow-400 hover:border-yellow-300 transition-all duration-300 transform hover:scale-105">
            Learn more
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mb-20">
          <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <Smartphone className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Mobile First</h3>
            <p className="text-gray-300">Cutting-edge mobile applications designed for the future</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <Code className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
            <p className="text-gray-300">Technology solutions that transform industries</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
            <p className="text-gray-300">Quality-driven development for superior experiences</p>
          </div>
        </div>
      </div>
    </div>
  )
}
