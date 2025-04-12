"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Trophy, Users, TrendingUp, Star } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "IPL 2025",
      description: "Create your dream team for the biggest cricket league in India",
      image: "/ipl-slide.png",
    },
    {
      title: "India vs Australia",
      description: "The epic rivalry continues. Build your team for the Border-Gavaskar Trophy",
      image: "/ind-aus-slide.png",
    },
    {
      title: "T20 World Cup",
      description: "Represent India in the global T20 showdown with your fantasy team",
      image: "/t20-slide.png",
    },
  ]

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div
            className={`flex flex-col justify-center space-y-4 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
          >
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-orange-50 text-orange-700 border-orange-200 mb-4">
              <Star className="mr-1 h-3.5 w-3.5" />
              India's #1 Fantasy Cricket Platform
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Play Fantasy Cricket.{" "}
                <span className="text-blue-700 relative">
                  Win Big.
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-orange-500"></span>
                </span>
              </h1>
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-orange-100 text-orange-700 border-orange-200 mt-2 animate-pulse">
                <span className="font-semibold">Scan Karo, Pay Karo, Join Karo.</span>
              </div>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Join India's fastest growing fantasy cricket platform. Create your dream team with players from
                <span className="font-semibold text-blue-700"> IPL</span>,
                <span className="font-semibold text-blue-700"> Team India</span>, and
                <span className="font-semibold text-blue-700"> international cricket</span>.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-blue-700 hover:bg-blue-800 shadow-lg hover:shadow-blue-200 transition-all duration-300 group"
              >
                <Link href="#early-access" className="inline-flex items-center gap-2">
                  Get Early Access <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:border-blue-700 hover:text-blue-700 transition-all duration-300"
              >
                <Link href="#how-it-works">How It Works</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                <Users className="h-4 w-4 text-blue-700" />
                <span className="text-sm font-medium">10L+ Users</span>
              </div>
              <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                <Trophy className="h-4 w-4 text-blue-700" />
                <span className="text-sm font-medium">₹10Cr+ Won</span>
              </div>
              <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                <TrendingUp className="h-4 w-4 text-blue-700" />
                <span className="text-sm font-medium">100+ Contests</span>
              </div>
            </div>
          </div>
          <div
            className={`flex items-center justify-center transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
          >
            <div className="relative h-[400px] w-[400px] lg:h-[500px] lg:w-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full opacity-20 blur-3xl"></div>

              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 transform ${
                    currentSlide === index ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-95 rotate-3"
                  }`}
                >
                  <div className="relative h-full w-full rounded-xl overflow-hidden border shadow-xl">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-white text-xl font-bold">{slide.title}</h3>
                      <p className="text-white/90 text-sm">{slide.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === index ? "bg-blue-700 w-6" : "bg-blue-300"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
