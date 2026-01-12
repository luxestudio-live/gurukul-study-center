"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Award, TrendingUp, Users, X } from "lucide-react"
import { getImageUrl } from "@/lib/image-url"
import { useState } from "react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const results = [
    { name: "Shreya Ajay Sarda", percentage: "98.60%", score: "100/100", board: "SSC", year: "2024", subject: "Mathematics" },
    { name: "Shruti Ajay Sarda", percentage: "96.40%", score: "99/100", board: "SSC", year: "2024", subject: "Mathematics" },
    { name: "Tushar Nivas Patil", percentage: "94.60%", score: "98/100", board: "SSC", year: "2024", subject: "Mathematics" },
    { name: "Parth Nagesh Kage", percentage: "94.00%", score: "98/100", board: "SSC", year: "2024", subject: "Mathematics" },
    { name: "Amey Sanjay Powar", percentage: "92.80%", score: "96/100", board: "SSC", year: "2024", subject: "Mathematics" },
  ]

  const galleryImages = [
    { image: "gsc.jpeg" },
    { image: "gsc1.jpeg" },
    { image: "gsc2.jpeg" },
    { image: "gsc3.jpeg" },
    { image: "gsc4.jpeg" },
    { image: "gsc5.jpeg" },
    { image: "gsc6.jpeg" },
    { image: "gsc7.jpeg" },
    { image: "gsc8.jpeg" },
    { image: "gsc9.jpeg" },
  ]

  const stats = [
    { icon: Award, label: "Average Score", value: "96.5%", color: "text-primary" },
    { icon: TrendingUp, label: "Improvement Rate", value: "25%", color: "text-secondary" },
    { icon: Users, label: "Students This Year", value: "150+", color: "text-accent" },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 text-balance">
              Gallery & Results
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-base sm:text-lg text-muted-foreground text-pretty px-4">
              Celebrating the success of our students and memorable moments from our learning journey
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-none shadow-lg text-center card-hover">
                  <CardContent className="p-6 sm:p-8">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 mb-3 sm:mb-4 ${stat.color}`}
                    >
                      <stat.icon size={24} className="sm:w-7 sm:h-7" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 sm:mb-4 text-center">Photo Gallery</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-pretty px-4">
              Glimpses of our vibrant learning community and special moments
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((item, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div 
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-300"
                  onClick={() => setSelectedImage(getImageUrl(`/${item.image}`))}
                >
                  <img
                    src={getImageUrl(`/${item.image}`)}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                      Click to view
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image Zoom Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Zoomed gallery image"
            className="max-w-full max-h-full object-contain animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Results Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 sm:mb-4 text-center">Top Performers</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-pretty px-4">
              Our students consistently achieve outstanding results across all boards
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {results.map((result, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-hover">
                  <CardContent className="p-5 sm:p-6 text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent mx-auto mb-3 sm:mb-4 flex flex-col items-center justify-center shadow-lg">
                      <span className="text-xl sm:text-2xl font-bold text-primary-foreground">{result.percentage}</span>
                      <span className="text-[10px] sm:text-xs text-primary-foreground/90 font-medium">{result.score}</span>
                    </div>
                    <h3 className="font-bold text-base sm:text-lg mb-1">{result.name}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                      {result.board} • Class 10 • {result.year}
                    </p>
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-primary/10 text-primary px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium">
                      <Award size={12} />
                      {result.subject}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <Card className="border-none shadow-xl bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6 sm:p-8 md:p-12 text-center">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 text-pretty italic">
                  "The dedication and expertise at Gurukul Study Center transformed my understanding of mathematics.
                  Prof. Bugade's teaching method made even the most complex topics feel simple and intuitive."
                </p>
                <div className="pt-4 sm:pt-6 border-t border-border">
                  <p className="font-bold text-sm sm:text-base">Sneha Kulkarni</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">98% in Mathematics • SSC 2024</p>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
