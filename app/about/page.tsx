import Link from "next/link"
import { ArrowLeft, Users, Target, Lightbulb, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-white tracking-wider">TTOFL</div>
          <div className="text-xs text-gray-300 mt-1">LEARN MORE, GROW MORE, SPREAD MORE</div>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-blue-300 transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-white hover:text-blue-300 transition-colors">
            Products
          </Link>
          <Link href="/about" className="text-blue-300 font-semibold">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-300 transition-colors">
            Contact
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
            <h1 className="relative text-5xl font-bold text-white mb-6">About us</h1>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed">
              TTOFL is a values-driven company pioneering innovation and excellence in mobile applications. Our focus
              spans auto care, education, and healthcare, all geared toward enhancing society. Join us on this
              transformative journey.
            </p>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Welcome to The Team of Future Learning (TTOFL)
          </h2>
          <p className="text-lg text-gray-300 text-center italic mb-8">Learn more | Grow more | Spread more</p>
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            Are you ready for something extraordinary? We are too, and we're delighted you're here.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Us?</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Innovation at its Best</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Our team of tech-savvy individuals is driven by innovation, devoted to making your life easier and more
                efficient, and committed to creating top-tier mobile applications for you.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Quality Matters</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We understand that quality is paramount. That's why we're devoted to providing you with a top-tier
                mobile application, crafted with precision and care.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-green-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Stay Ahead</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                With our applications, you'll always be one step ahead. Get ready to experience the future, today,
                across automobile care, education, and healthcare.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-yellow-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Our Promise</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                At TTOFL, we're not just creating apps; we're crafting experiences. Experiences that will make your life
                easier, more enjoyable, and more rewarding, all while contributing to a better society.
              </p>
            </div>
          </div>
        </div>

        {/* Countdown Section */}
        <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Countdown to Launch</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We know you're curious, and we appreciate your enthusiasm! The countdown has begun, and we're working
            tirelessly to bring our applications, spanning automobile care, education, and healthcare, to your
            fingertips. Until then, stay tuned, and don't miss out on the big reveal.
          </p>
        </div>

        {/* Final Message */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Thank you for joining us on this exciting journey. We can't wait to transform the way you experience auto
            care, education, and healthcare.
          </p>
        </div>
      </div>
    </div>
  )
}
