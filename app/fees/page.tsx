import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { IndianRupee, CheckCircle2, Award, TrendingDown } from "lucide-react"

export default function FeesPage() {
  const feeStructure = [
    {
      board: "STATE",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100 dark:from-green-950 dark:to-green-900",
      classes: [
        { standard: "7th", monthly: "2,200", yearly: "20,000" },
        { standard: "8th", monthly: "2,400", yearly: "21,000" },
        { standard: "9th", monthly: "2,700", yearly: "24,000" },
        { standard: "10th", monthly: "3,000", yearly: "26,000" },
      ],
    },
    {
      board: "CBSE",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900",
      classes: [
        { standard: "7th", monthly: "2,300", yearly: "21,000" },
        { standard: "8th", monthly: "2,500", yearly: "22,000" },
        { standard: "9th", monthly: "2,800", yearly: "25,000" },
        { standard: "10th", monthly: "3,200", yearly: "28,000" },
      ],
    },
    {
      board: "ICSE",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900",
      classes: [
        { standard: "7th", monthly: "2,500", yearly: "21,000" },
        { standard: "8th", monthly: "3,000", yearly: "26,000" },
        { standard: "9th", monthly: "3,500", yearly: "31,000" },
        { standard: "10th", monthly: "4,000", yearly: "36,000" },
      ],
    },
  ]

  const benefits = [
    "One-on-one doubt clearing sessions",
    "Study materials & practice sheets included",
    "Regular assessments & progress reports",
    "Access to recorded lectures",
    "Flexible payment options available",
    "Sibling discount applicable",
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 border border-primary/20">
              <IndianRupee className="text-primary" size={20} />
              <span className="text-sm sm:text-base font-medium">Transparent Pricing</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 text-balance">
              Fee Structure
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Affordable and value-driven pricing for quality mathematics education. Choose the plan that suits your budget.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Savings Banner */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <Card className="border-none shadow-xl bg-gradient-to-r from-accent/20 via-secondary/20 to-primary/20">
              <CardContent className="p-6 sm:p-8 text-center">
                <TrendingDown className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Save with Yearly Plan</h3>
                <p className="text-muted-foreground">
                  Pay annually and save up to 2 months of fees! Get the best value for quality education.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Fee Cards */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {feeStructure.map((board, boardIdx) => (
              <ScrollReveal key={board.board} delay={boardIdx * 100}>
                <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className={`h-3 bg-gradient-to-r ${board.color}`}></div>
                  <CardContent className="p-6 sm:p-8">
                    <div className="text-center mb-6">
                      <h2 className={`text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r ${board.color} bg-clip-text text-transparent`}>
                        {board.board} Board
                      </h2>
                      <p className="text-sm text-muted-foreground">Classes 7th to 10th</p>
                    </div>

                    <div className="space-y-4">
                      {board.classes.map((cls, clsIdx) => (
                        <div
                          key={cls.standard}
                          className={`bg-gradient-to-br ${board.bgColor} rounded-lg p-4 transition-all duration-300 hover:scale-105`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-bold text-lg">{cls.standard} Standard</span>
                            <Award className="text-primary" size={20} />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-background/60 rounded-lg p-3 text-center">
                              <p className="text-xs text-muted-foreground mb-1">Monthly</p>
                              <p className="text-lg font-bold flex items-center justify-center gap-1">
                                <IndianRupee size={16} />
                                {cls.monthly}
                              </p>
                            </div>
                            <div className="bg-background/60 rounded-lg p-3 text-center">
                              <p className="text-xs text-muted-foreground mb-1">Yearly</p>
                              <p className="text-lg font-bold flex items-center justify-center gap-1">
                                <IndianRupee size={16} />
                                {cls.yearly}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full mt-6" size="lg">
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-8 sm:mb-12 text-center">
              What's Included in Your Fees
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((benefit, idx) => (
              <ScrollReveal key={idx} delay={idx * 50}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                      <p className="text-sm sm:text-base">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">Ready to Start Learning?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-muted-foreground mb-8 text-balance">
              Contact us today to discuss your child's learning needs and enrollment process
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base">
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                View Timetable
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
