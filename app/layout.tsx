import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Gurukul Study Center - Master Mathematics Online",
  description:
    "Expert online mathematics coaching for SSC, ICSE, and CBSE students (Classes 7-10) by Prof. Sambhaji Bugade with 42 years of teaching excellence.",
  keywords: "online mathematics coaching, SSC maths, ICSE maths, CBSE maths, Prof Sambhaji Bugade, online tuition",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className={`font-sans antialiased`}>
        {/* Added ScrollToTop component to handle page navigation */}
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
