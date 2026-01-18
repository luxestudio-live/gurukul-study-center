import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { IndianRupee, CheckCircle2, Award, TrendingDown } from "lucide-react"

export default function FeesPage() {
  // Online Tuition Fees
  const onlineFees = [
    {
      board: "STATE",
      color: "from-green-500 to-green-600",
      classes: [
        { standard: "7th", monthly: "700", yearly: "6,025" },
        { standard: "8th", monthly: "800", yearly: "7,025" },
        { standard: "9th", monthly: "1,000", yearly: "8,525" },
        { standard: "10th", monthly: "1,200", yearly: "10,025" },
      ],
    },
    {
      board: "CBSE",
      color: "from-blue-500 to-blue-600",
      classes: [
        { standard: "7th", monthly: "800", yearly: "7,025" },
        { standard: "8th", monthly: "900", yearly: "8,025" },
        { standard: "9th", monthly: "1,100", yearly: "9,525" },
        { standard: "10th", monthly: "1,300", yearly: "11,025" },
      ],
    },
    {
      board: "ICSE",
      color: "from-purple-500 to-purple-600",
      classes: [
        { standard: "7th", monthly: "1,000", yearly: "8,525" },
        { standard: "8th", monthly: "1,100", yearly: "9,525" },
        { standard: "9th", monthly: "1,200", yearly: "10,525" },
        { standard: "10th", monthly: "1,400", yearly: "11,025" },
      ],
    },
  ];

  // Notes & Video Course on App Fees
  const appFees = [
    {
      board: "STATE",
      color: "from-green-500 to-green-600",
      classes: [
        { standard: "7th", yearly: "1,500" },
        { standard: "8th", yearly: "1,700" },
        { standard: "9th", yearly: "1,900" },
        { standard: "10th", yearly: "2,100" },
      ],
    },
    {
      board: "CBSE",
      color: "from-blue-500 to-blue-600",
      classes: [
        { standard: "7th", yearly: "1,600" },
        { standard: "8th", yearly: "1,800" },
        { standard: "9th", yearly: "2,000" },
        { standard: "10th", yearly: "2,200" },
      ],
    },
    {
      board: "ICSE",
      color: "from-purple-500 to-purple-600",
      classes: [
        { standard: "7th", yearly: "1,700" },
        { standard: "8th", yearly: "1,900" },
        { standard: "9th", yearly: "2,100" },
        { standard: "10th", yearly: "2,300" },
      ],
    },
  ];

  // Offline Tuition Fees
  const offlineFees = [
    {
      board: "STATE",
      color: "from-green-500 to-green-600",
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
      classes: [
        { standard: "7th", monthly: "2,500", yearly: "21,000" },
        { standard: "8th", monthly: "3,000", yearly: "26,000" },
        { standard: "9th", monthly: "3,500", yearly: "31,000" },
        { standard: "10th", monthly: "4,000", yearly: "36,000" },
      ],
    },
  ];

  const benefits = [
    "One-on-one doubt clearing sessions",
    "Study materials & practice sheets included",
    "Regular assessments & progress reports",
    "Access to recorded lectures",
    "Flexible payment options available",
    "Need based discount applicable",
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





      {/* Online Tuition Fees Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Online Tuition Fees <span className="text-base font-normal">(Only 60 Students)</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {onlineFees.map((board, boardIdx) => (
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
                        <div key={cls.standard} className={`bg-gradient-to-br rounded-lg p-4 transition-all duration-300 hover:scale-105`}>
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
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Notes & Video Course on App Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Notes & Video Course on App</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {appFees.map((board, boardIdx) => (
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
                        <div key={cls.standard} className={`bg-gradient-to-br rounded-lg p-4 transition-all duration-300 hover:scale-105`}>
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-bold text-lg">{cls.standard} Standard</span>
                            <Award className="text-primary" size={20} />
                          </div>
                          <div className="grid grid-cols-1 gap-3">
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
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offline Tuition Fees Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Offline Tuition Fees <span className="text-base font-normal">(Only 20 Students)</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {offlineFees.map((board, boardIdx) => (
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
                        <div key={cls.standard} className={`bg-gradient-to-br rounded-lg p-4 transition-all duration-300 hover:scale-105`}>
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
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GST Note */}
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <ScrollReveal>
            <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
              <CardContent className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-center text-muted-foreground">
                  <span className="font-semibold">Note:</span> All fees mentioned above are exclusive of GST. GST will be added as applicable.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
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
