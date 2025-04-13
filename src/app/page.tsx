import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { EarlyAccess } from "@/components/early-access"
import { Footer } from "@/components/footer"
import { LiveMatches } from "@/components/live-matches"
import { MiniGame } from "@/components/mini-game"
import { RegionalSupport } from "@/components/regional-support"
import { MobileAppPreview } from "@/components/mobile-app-preview"
import { ScanPayJoin } from "@/components/scan-pay-join"
import { MobileMenu } from "@/components/mobile-menu"
import { CountdownTimer } from "@/components/countdown-timer"
import { AITeamMaker } from "@/components/ai-team-maker"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col max-w-[100vw] overflow-hidden ">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 group">
              <Image src="/Logo.svg" alt="Cricket Panga Logo" width={130} height={60} className="h-10 w-auto" />
            <span className="text-xl font-bold text-blue-700 group-hover:text-blue-600 transition-colors">
              Cricket Panga <span className="text-orange-500 text-sm font-semibold">India Edition</span>
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-blue-700 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-blue-700 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              How It Works
            </Link>
            <Link
              href="#live-matches"
              className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-blue-700 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Live Matches
            </Link>
            <Link
              href="#ai-team-maker"
              className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-blue-700 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              AI Team Maker
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-blue-700 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              asChild
              variant="outline"
              className="hidden sm:flex hover:border-blue-700 hover:text-blue-700 transition-all duration-300"
            >
              <Link href="/login">Login</Link>
            </Button>
            <Button
              asChild
              className="hidden sm:flex bg-blue-700 hover:bg-blue-800 shadow-lg hover:shadow-blue-200 transition-all duration-300"
            >
              <Link href="#early-access">Early Access</Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <div className="py-8 md:py-12 bg-white">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <CountdownTimer />
          </div>
        </div>
        <div className="w-full max-w-[1920px] mx-auto">
          <LiveMatches />
          <ScanPayJoin />
          <AITeamMaker />
          <Features />
          <HowItWorks />
          <MobileAppPreview />
          <MiniGame />
          <Testimonials />
          <RegionalSupport />
          <FAQ />
          <EarlyAccess />
        </div>
      </main>
      <Footer />
    </div>
  )
}