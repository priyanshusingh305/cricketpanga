"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function FAQ() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeItem, setActiveItem] = useState("")

  const faqItems = [
    {
      id: "item-1",
      question: "What is the early access offer?",
      answer:
        "Our early access offer allows you to deposit ₹99 and get ₹150 in your wallet within 4 days. This is a limited-time offer for new users to get started with Cricket Panga.",
      tags: ["early access", "offer", "bonus", "deposit"],
    },
    {
      id: "item-2",
      question: "Is Cricket Panga legal in India?",
      answer:
        "Yes, Cricket Panga is completely legal in India. Fantasy sports are classified as games of skill and are permitted in most Indian states. However, please check your local regulations as some states have restrictions.",
      tags: ["legal", "india", "regulations"],
    },
    {
      id: "item-3",
      question: "How do I withdraw my winnings?",
      answer:
        "You can withdraw your winnings directly to your bank account or UPI ID. The minimum withdrawal amount is ₹200, and withdrawals are processed within 24 hours.",
      tags: ["withdraw", "winnings", "payment", "upi"],
    },
    {
      id: "item-4",
      question: "What payment methods are accepted?",
      answer:
        "Cricket Panga accepts payments via UPI (Google Pay, PhonePe, Paytm), net banking, credit/debit cards, and popular wallets like Paytm and PhonePe.",
      tags: ["payment", "upi", "paytm", "phonepe", "google pay"],
    },
    {
      id: "item-5",
      question: "How do I create a team?",
      answer:
        "To create a team, select an upcoming match, choose players within the 100 credit budget, select a captain and vice-captain, and save your team. You can create multiple teams for the same match.",
      tags: ["team", "create", "captain", "players"],
    },
    {
      id: "item-6",
      question: "What documents are required for KYC?",
      answer:
        "For KYC verification, you need to provide your PAN card and a valid address proof (Aadhaar card, driving license, or voter ID). KYC verification is mandatory for withdrawals.",
      tags: ["kyc", "documents", "pan", "aadhaar"],
    },
    {
      id: "item-7",
      question: "Can I create private contests for friends?",
      answer:
        "Yes, you can create private contests and invite your friends to join using a unique code. You can customize the entry fee and prize distribution for private contests.",
      tags: ["private", "contests", "friends", "invite"],
    },
    {
      id: "item-8",
      question: "Which Indian cricket leagues are supported?",
      answer:
        "Cricket Panga supports all major Indian cricket leagues including IPL, Ranji Trophy, Syed Mushtaq Ali Trophy, Vijay Hazare Trophy, and all international matches featuring Team India.",
      tags: ["leagues", "ipl", "ranji", "india"],
    },
    {
      id: "item-9",
      question: "Is Cricket Panga available in regional languages?",
      answer:
        "Yes, Cricket Panga is available in multiple Indian languages including Hindi, Tamil, Telugu, Bengali, and Marathi to make fantasy cricket accessible to everyone across India.",
      tags: ["languages", "regional", "hindi", "tamil", "telugu"],
    },
  ]

  const filteredFAQs = searchQuery
    ? faqItems.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some((tag) => tag.includes(searchQuery.toLowerCase())),
      )
    : faqItems

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about Cricket Panga
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl mt-8 mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              placeholder="Search FAQs..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full" value={activeItem} onValueChange={setActiveItem}>
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border rounded-lg mb-4 overflow-hidden">
                  <AccordionTrigger className="text-left px-6 hover:bg-gray-100 transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="pt-2 text-gray-600">{item.answer}</div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                          onClick={() => setSearchQuery(tag)}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">No FAQs found matching your search.</p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </div>
            )}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
