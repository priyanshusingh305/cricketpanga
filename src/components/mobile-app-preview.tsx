"use client"

import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"

export function MobileAppPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div
            className={`flex flex-col justify-center space-y-4 transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Experience Cricket Panga on Mobile
              </h2>
              <p className="max-w-[600px] text-sm sm:text-base text-gray-500 md:text-xl/relaxed">
                Download our app for the ultimate fantasy cricket experience. Available for Android and iOS devices.
              </p>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm font-medium bg-orange-100 text-orange-700 border-orange-200 mt-2">
                <span className="font-semibold">Scan Karo, Pay Karo, Join Karo.</span>
              </div>
            </div>

            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="rounded-full bg-green-100 p-1">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                </div>
                <span className="text-sm sm:text-base">Live match updates and real-time scoring</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="rounded-full bg-green-100 p-1">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                </div>
                <span className="text-sm sm:text-base">Create teams and join contests on the go</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="rounded-full bg-green-100 p-1">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                </div>
                <span className="text-sm sm:text-base">Instant notifications for match events</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="rounded-full bg-green-100 p-1">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                </div>
                <span className="text-sm sm:text-base">Secure payments with Indian payment options</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
              <Button
                asChild
                variant="outline"
                className="hover:border-blue-700 hover:text-blue-700 transition-all duration-300 text-sm sm:text-base"
              >
                <Link href="#" className="inline-flex items-center gap-2">
                  <Image
                    src="/google-play.png"
                    alt="Get it on Google Play"
                    width={24}
                    height={24}
                    className="h-4 sm:h-5 w-auto"
                  />
                  Google Play
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="hover:border-blue-700 hover:text-blue-700 transition-all duration-300 text-sm sm:text-base"
              >
                <Link href="#" className="inline-flex items-center gap-2">
                  <Image
                    src="/app-store.png"
                    alt="Download on the App Store"
                    width={24}
                    height={24}
                    className="h-4 sm:h-5 w-auto"
                  />
                  App Store
                </Link>
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative">
              <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-[175px] sm:w-[200px] md:w-[225px] lg:w-[250px] mx-auto">
                <Image src="/mobile-app.png" alt="Cricket Panga Mobile App" fill className="object-contain" />
              </div>

              <div
                className="absolute top-1/4 -right-8 sm:-right-16 bg-white rounded-lg p-2 sm:p-3 shadow-lg animate-bounce text-xs sm:text-sm"
                style={{ animationDuration: "3s" }}
              >
                <div className="font-medium">Live Score Updates!</div>
              </div>

              <div
                className="absolute bottom-1/4 -left-8 sm:-left-16 bg-white rounded-lg p-2 sm:p-3 shadow-lg animate-bounce text-xs sm:text-sm"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
              >
                <div className="font-medium">₹500 Bonus!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
