"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Check, IndianRupee } from "lucide-react"
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

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e) => {
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
    <section id="early-access" className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div
            className={`flex flex-col justify-center space-y-4 transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Early Access Today</h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join Cricket Panga now and get exclusive benefits for Indian cricket fans
              </p>
            </div>
            <ul className="grid gap-3">
              <li className="flex items-center gap-2">
                <div className="rounded-full bg-blue-600 p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="flex items-center">
                  Deposit <IndianRupee className="h-3 w-3 mx-1" />
                  99, get <IndianRupee className="h-3 w-3 mx-1" />
                  150 in 4 days
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="rounded-full bg-blue-600 p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span>Early access to premium IPL contests</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="rounded-full bg-blue-600 p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span>Lower entry fees for the first month</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="rounded-full bg-blue-600 p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span>Priority customer support in your language</span>
              </li>
            </ul>

            <div className="relative mt-6 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="absolute -top-3 -right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                Limited Time Offer!
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg">Pay</div>
                  <div className="text-3xl font-bold flex items-center">
                    <IndianRupee className="h-5 w-5" />
                    99
                  </div>
                </div>
                <div className="text-4xl font-bold">→</div>
                <div>
                  <div className="text-lg">Get</div>
                  <div className="text-3xl font-bold flex items-center">
                    <IndianRupee className="h-5 w-5" />
                    150
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
            <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-6 text-gray-900 shadow-lg">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-10 space-y-4">
                  <div className="rounded-full bg-green-100 p-3">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-center">Thank You!</h3>
                  <p className="text-gray-500 text-center">
                    Your early access request has been received. We'll send you details shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-2 text-center">
                    <h3 className="text-2xl font-bold">Sign Up for Early Access</h3>
                    <p className="text-gray-500">Limited time offer - Get ₹150 for just ₹99</p>
                  </div>
                  <div className="flex items-center justify-center my-4">
                    <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold text-center">
                      Scan Karo, Pay Karo, Join Karo.
                    </div>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="focus:border-blue-700 focus:ring-blue-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                        className="focus:border-blue-700 focus:ring-blue-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="focus:border-blue-700 focus:ring-blue-700"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-700 hover:bg-blue-800 group"
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
                    <div className="flex flex-col items-center justify-center mt-4 mb-2">
                      <div className="relative h-32 w-32 mb-2">
                        <Image src="/qr-code.png" alt="Scan QR Code" fill className="object-contain" />
                      </div>
                      <p className="text-sm font-medium text-blue-700">Scan Karo, Pay Karo, Join Karo.</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <img src="/upi-icon.png" alt="UPI" className="h-6" />
                      <img src="/paytm-icon.png" alt="Paytm" className="h-6" />
                      <img src="/phonepe-icon.png" alt="PhonePe" className="h-6" />
                      <img src="/gpay-icon.png" alt="Google Pay" className="h-6" />
                    </div>
                    <p className="text-xs text-center text-gray-500">
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
