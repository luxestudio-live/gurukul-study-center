"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, Play, Clock, BookOpen } from "lucide-react"
import { useState } from "react"

export default function DemoLecturesPage() {
  const [selectedBoard, setSelectedBoard] = useState("SSC")

  const lectures = {
    SSC: [
      {
        class: 7,
        title: "Introduction to Integers",
        duration: "12 min",
        description: "Understanding positive and negative numbers with real-life examples",
        thumbnail: "mathematics+integers+concept+visualization",
      },
      {
        class: 8,
        title: "Linear Equations Fundamentals",
        duration: "15 min",
        description: "Step-by-step approach to solving linear equations",
        thumbnail: "linear+equations+mathematical+diagram",
      },
      {
        class: 9,
        title: "Polynomials Basics",
        duration: "18 min",
        description: "Introduction to polynomials with practical applications",
        thumbnail: "polynomials+algebra+graph+visualization",
      },
      {
        class: 10,
        title: "Trigonometry Introduction",
        duration: "20 min",
        description: "Understanding trigonometric ratios and their applications",
        thumbnail: "trigonometry+triangle+angles+concept",
      },
    ],
    ICSE: [
      {
        class: 7,
        title: "Number Systems Overview",
        duration: "14 min",
        description: "Exploring different types of numbers and their properties",
        thumbnail: "number+systems+mathematical+concept",
      },
      {
        class: 8,
        title: "Algebraic Expressions",
        duration: "16 min",
        description: "Simplifying and evaluating algebraic expressions",
        thumbnail: "algebraic+expressions+mathematics",
      },
      {
        class: 9,
        title: "Coordinate Geometry",
        duration: "17 min",
        description: "Plotting points and understanding coordinate planes",
        thumbnail: "coordinate+geometry+graph+axes",
      },
      {
        class: 10,
        title: "Quadratic Equations",
        duration: "22 min",
        description: "Solving quadratic equations using various methods",
        thumbnail: "quadratic+equations+parabola+graph",
      },
    ],
    CBSE: [
      {
        class: 7,
        title: "Simple Equations",
        duration: "13 min",
        description: "Building foundation for equation solving techniques",
        thumbnail: "simple+equations+balance+method",
      },
      {
        class: 8,
        title: "Understanding Quadrilaterals",
        duration: "15 min",
        description: "Properties of different types of quadrilaterals",
        thumbnail: "quadrilaterals+geometry+shapes",
      },
      {
        class: 9,
        title: "Introduction to Euclid's Geometry",
        duration: "19 min",
        description: "Exploring fundamental principles of geometry",
        thumbnail: "euclidean+geometry+postulates",
      },
      {
        class: 10,
        title: "Pair of Linear Equations",
        duration: "21 min",
        description: "Solving systems of linear equations graphically and algebraically",
        thumbnail: "linear+equations+intersecting+lines",
      },
    ],
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 text-balance">
              Demo Lectures
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 text-pretty px-4">
              Experience Prof. Bugade's teaching methodology before enrolling. Submit an enquiry to unlock all demo
              lectures.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
              {["SSC", "ICSE", "CBSE"].map((board) => (
                <Button
                  key={board}
                  variant={selectedBoard === board ? "default" : "outline"}
                  onClick={() => setSelectedBoard(board)}
                  className={`text-sm sm:text-base ${selectedBoard !== board ? "bg-transparent" : ""}`}
                  size={selectedBoard === board ? "default" : "sm"}
                >
                  {board}
                </Button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <ScrollReveal>
              <Card className="border-none shadow-lg text-center card-hover">
                <CardContent className="p-5 sm:p-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 text-primary mb-2 sm:mb-3">
                    <Play size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Clear Explanations</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Watch how complex topics are broken down into simple, easy-to-understand concepts
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <Card className="border-none shadow-lg text-center card-hover">
                <CardContent className="p-5 sm:p-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 text-primary mb-2 sm:mb-3">
                    <BookOpen size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Real Examples</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Learn through practical examples that make mathematics relatable and interesting
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Card className="border-none shadow-lg text-center card-hover">
                <CardContent className="p-5 sm:p-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 text-primary mb-2 sm:mb-3">
                    <Clock size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Concise Sessions</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Each demo is perfectly timed to showcase our teaching approach effectively
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {lectures[selectedBoard as keyof typeof lectures].map((lecture, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-none shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-all card-hover">
                  <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
                    <img
                      src="/placeholder.svg"
                      alt={lecture.title}
                      className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 sm:gap-4 bg-background/40 backdrop-blur-sm">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-background/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                        <Lock className="text-primary" size={24} />
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-foreground bg-background/90 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg">
                        Submit Enquiry to Unlock
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="text-[10px] sm:text-xs font-semibold text-primary bg-primary/10 px-2 sm:px-3 py-1 rounded-full">
                        Class {lecture.class}
                      </span>
                      <span className="text-[10px] sm:text-xs text-muted-foreground flex items-center gap-1">
                        <Clock size={12} />
                        {lecture.duration}
                      </span>
                    </div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{lecture.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground text-pretty">{lecture.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <div className="text-center mt-8 sm:mt-12">
              <Button size="lg" className="shadow-lg w-full sm:w-auto text-sm sm:text-base">
                Submit Enquiry to Access All Demos
              </Button>
              <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 px-4">
                No credit card required • Instant access after enquiry
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
