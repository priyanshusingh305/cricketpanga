"use client"
import { BirdIcon as Cricket, Trophy, Users2, Clock, Presentation, Target, Award } from "lucide-react"
import { useInView } from "react-intersection-observer"

export function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      icon: <Users2 className="h-6 w-6 text-blue-700" />,
      title: "Create an Account",
      description: "Sign up for free and complete quick verification to get started",
    },
    {
      icon: <Award className="h-6 w-6 text-blue-700" />,
      title: "Select a Match",
      description: "Choose from upcoming cricket matches across all formats and tournaments",
    },
    {
      icon: <Trophy className="h-6 w-6 text-blue-700" />,
      title: "Join Contests",
      description: "Enter contests with different entry fees and prize pools based on your budget",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-700" />,
      title: "Create Your Team",
      description: "Build your fantasy team within the credit limit before the deadline",
    },
    {
      icon: <Presentation className="h-6 w-6 text-blue-700" />,
      title: "Track Live Scores",
      description: "Watch your fantasy points update in real-time as the match progresses",
    },
    {
      icon: <Target className="h-6 w-6 text-blue-700" />,
      title: "Win Cash Prizes",
      description: "Win cash rewards based on your team's performance and contest ranking",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-blue-50 text-blue-700 border-blue-200">
              <Cricket className="mr-1 h-3.5 w-3.5" />
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start Playing in Minutes</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our simple process makes it easy to join fantasy cricket contests and win cash prizes
            </p>
          </div>
        </div>
        <div ref={ref} className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center space-y-3 rounded-lg border p-6 bg-white shadow-sm transition-all duration-500 hover:shadow-md ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <span className="text-xl font-bold">{index + 1}</span>
              </div>
              <div className="rounded-full bg-blue-100 p-3 transition-transform hover:scale-110 duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-center text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}