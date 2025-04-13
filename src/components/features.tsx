"use client"

import { BirdIcon as Cricket, Shield, Zap, Award, Smartphone, CreditCard, Users, IndianRupee } from "lucide-react"
import { useInView } from "react-intersection-observer"

export function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-blue-700" />,
      title: "100% Secure",
      description: "Your data and transactions are protected with bank-grade security",
    },
    {
      icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-blue-700" />,
      title: "Instant Withdrawals",
      description: "Get your winnings instantly transferred to your bank account or UPI",
    },
    {
      icon: <Award className="h-5 w-5 sm:h-6 sm:w-6 text-blue-700" />,
      title: "Exciting Contests",
      description: "Join multiple contests with different entry fees and prize pools",
    },
    {
      icon: <Smartphone className="h-5 w-5 sm:h-6 sm:w-6 text-blue-700" />,
      title: "Mobile Friendly",
      description: "Play anytime, anywhere with our responsive mobile interface",
    },
    {
      icon: <CreditCard className="h-5 w-5 sm:h-6 sm:w-6 text-blue-700" />,
      title: "Indian Payment Options",
      description: "Add funds using UPI, Paytm, PhonePe, Google Pay, and more",
    },
    {
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-700" />,
      title: "Private Leagues",
      description: "Create private contests and invite friends to compete",
    },
    {
      icon: <IndianRupee className="h-5 w-5 sm:h-6 sm:w-6 text-blue-700" />,
      title: "Indian Contests",
      description: "Specially designed contests for Indian cricket fans and tournaments",
    },
    {
      icon: <Cricket className="h-5 w-5 sm:h-6 sm:w-6 text-blue-700" />,
      title: "All Indian Leagues",
      description: "Play fantasy cricket for IPL, Ranji Trophy, Syed Mushtaq Ali, and more",
    },
  ]

  return (
    <section id="features" className="py-12 md:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm font-medium bg-blue-50 text-blue-700 border-blue-200">
              <Cricket className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5" />
              Features
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
              Why Choose Cricket Panga?
            </h2>
            <p className="max-w-[900px] text-sm sm:text-base text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience fantasy cricket like never before with our innovative platform designed for Indian cricket fans
            </p>
          </div>
        </div>
        <div
          ref={ref}
          className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 py-8 md:py-12"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center space-y-2 rounded-lg border p-4 md:p-6 shadow-sm transition-all duration-500 hover:shadow-md hover:-translate-y-1 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="rounded-full bg-blue-100 p-2 sm:p-3 transition-transform hover:scale-110 duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-center">{feature.title}</h3>
              <p className="text-center text-sm md:text-base text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
