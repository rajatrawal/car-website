import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Car, Wrench, Smartphone, Play } from "lucide-react"

export default function ProductsPage() {
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
          <Link href="/products" className="text-blue-300 font-semibold">
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

      <div className="container mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Our Products</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative solutions designed to transform industries and enhance user experiences
          </p>
        </div>

        {/* Society Cars Product */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <CardHeader className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Car className="h-8 w-8 text-blue-400" />
                  <CardTitle className="text-3xl font-bold">Society Cars</CardTitle>
                </div>
                <CardDescription className="text-gray-300 text-lg leading-relaxed">
                  Your one-stop solution for all automotive services. Society Cars is a revolutionary mobile application
                  that connects you with trusted automotive service providers in your area.
                </CardDescription>

                <div className="space-y-6 mt-8">
                  <div className="flex items-start space-x-3">
                    <Wrench className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Complete Auto Care</h3>
                      <p className="text-gray-300">
                        From routine cleaning to complex maintenance, find all automotive services in one place.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Smartphone className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Mobile-First Experience</h3>
                      <p className="text-gray-300">
                        Intuitive mobile app designed for seamless booking and service management.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3">
                    Coming Soon
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="p-8 flex items-center justify-center">
                <div className="relative">
                  <div className="w-50 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl flex items-center justify-center border border-gray-600 overflow-hidden p-2">
                    <video
                      src="/societycar.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full"></div>
                </div>
              </CardContent>


            </div>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Service Booking</CardTitle>
                <CardDescription className="text-gray-300">
                  Easy scheduling and booking of automotive services with real-time availability
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Trusted Providers</CardTitle>
                <CardDescription className="text-gray-300">
                  Vetted and verified service providers ensuring quality and reliability
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Track & Manage</CardTitle>
                <CardDescription className="text-gray-300">
                  Real-time tracking of services and comprehensive service history management
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
