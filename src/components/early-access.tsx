"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Check, IndianRupee, Bot } from "lucide-react"
import { useState } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export function EarlyAccess() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  interface FormState {
    name: string
    phone: string
    email: string
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormState((prev: FormState) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSuccess(false)
        setFormState({
          name: "",
          phone: "",
          email: "",
        })
      }, 3000)
    }, 1500)
  }

  return (
    <section id="early-access" className="py-12 md:py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div
            className={`flex flex-col justify-center space-y-4 transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get Early Access Today
              </h2>
              <p className="max-w-[600px] text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join Cricket Panga now and get exclusive benefits for Indian cricket fans, including our AI Team Maker
                worth ₹1000 for FREE!
              </p>
            </div>
            <ul className="grid gap-3">
              <li className="flex items-center gap-2">
                <div className="rounded-full bg-blue-600 p-1">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                </div>
                <span className="flex items-center text-sm sm:text-base">
                  Deposit <IndianRupee className="h-3 w-3 mx-1" />
                  99, get <IndianRupee className="h-3 w-3 mx-1" />
                  150 in 4 days
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="rounded-full bg-blue-600 p-1">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                </div>
                <span className="text-sm sm:text-base">Early access to premium IPL contests</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="rounded-full bg-blue-600 p-1">
                  <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                </div>
                <span className="text-sm sm:text-base">
                  <span className="font-bold">FREE AI Team Maker</span> worth ₹1000 - Launching June 1, 2025
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="rounded-full bg-blue-600 p-1">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                </div>
                <span className="text-sm sm:text-base">Lower entry fees for the first month</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="rounded-full bg-blue-600 p-1">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                </div>
                <span className="text-sm sm:text-base">Priority customer support in your language</span>
              </li>
            </ul>

            <div className="relative mt-4 md:mt-6 p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="absolute -top-3 -right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                Limited Time Offer!
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-base md:text-lg">Pay</div>
                  <div className="text-2xl md:text-3xl font-bold flex items-center">
                    <IndianRupee className="h-4 w-4 md:h-5 md:w-5" />
                    99
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold">→</div>
                <div>
                  <div className="text-base md:text-lg">Get</div>
                  <div className="text-2xl md:text-3xl font-bold flex items-center">
                    <IndianRupee className="h-4 w-4 md:h-5 md:w-5" />
                    150 + AI Team Maker
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`flex items-center justify-center transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="w-full max-w-md space-y-4 md:space-y-6 rounded-lg bg-white p-4 md:p-6 text-gray-900 shadow-lg">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-8 md:py-10 space-y-4">
                  <div className="rounded-full bg-green-100 p-3">
                    <Check className="h-6 w-6 md:h-8 md:w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-center">Thank You!</h3>
                  <p className="text-sm md:text-base text-gray-500 text-center">
                    Your early access request has been received. We&#39;ll send you details shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl md:text-2xl font-bold">Sign Up for Early Access</h3>
                    <p className="text-sm md:text-base text-gray-500">
                      Limited time offer - Get ₹150 + FREE AI Team Maker (worth ₹1000) for just ₹99
                    </p>
                  </div>
                  <div className="flex items-center justify-center my-3 md:my-4">
                    <div className="bg-orange-100 text-orange-700 px-3 md:px-4 py-1 md:py-2 rounded-full font-semibold text-center text-sm md:text-base">
                      Scan Karo, Pay Karo, Join Karo.
                    </div>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                    <div className="space-y-1 md:space-y-2">
                      <Label htmlFor="name" className="text-sm md:text-base">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="focus:border-blue-700 focus:ring-blue-700 text-sm md:text-base"
                      />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <Label htmlFor="phone" className="text-sm md:text-base">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                        className="focus:border-blue-700 focus:ring-blue-700 text-sm md:text-base"
                      />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <Label htmlFor="email" className="text-sm md:text-base">
                        Email
                      </Label>
                      <Input
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="focus:border-blue-700 focus:ring-blue-700 text-sm md:text-base"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-700 hover:bg-blue-800 group text-sm md:text-base"
                      disabled={isSubmitting}
                    >
                      <span className="inline-flex items-center gap-2">
                        {isSubmitting ? (
                          "Processing..."
                        ) : (
                          <>
                            Pay ₹99 & Get Started{" "}
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </Button>
                    <div className="flex flex-col items-center justify-center mt-3 md:mt-4 mb-2">
                      <div className="relative h-24 w-24 md:h-32 md:w-32 mb-2">
                        <Image src="/qr-code.png" alt="Scan QR Code" fill className="object-contain" />
                      </div>
                      <p className="text-xs md:text-sm font-medium text-blue-700">Scan Karo, Pay Karo, Join Karo.</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-3 md:mt-4">
                      <img src="/upi-icon.png" alt="UPI" className="h-5 md:h-6" />
                      <img src="/paytm-icon.png" alt="Paytm" className="h-5 md:h-6" />
                      <img src="/phonepe-icon.png" alt="PhonePe" className="h-5 md:h-6" />
                      <img src="/gpay-icon.png" alt="Google Pay" className="h-5 md:h-6" />
                    </div>
                    <p className="text-[10px] md:text-xs text-center text-gray-500">
                      By signing up, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
