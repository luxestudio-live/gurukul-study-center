import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, GraduationCap, Users, Target, TrendingUp, Heart, Lightbulb } from "lucide-react"
import { getImageUrl } from "@/lib/image-url"

export default function AboutPage() {
  const highlights = [
    { icon: GraduationCap, label: "Mathematics Expert", value: "Expert Qualification" }
    { icon: Award, label: "42 Years", value: "Teaching Experience" },
    { icon: Users, label: "5000+", value: "Students Taught" },
    { icon: BookOpen, label: "100%", value: "Dedication" },
  ]

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in mathematics education",
    },
    {
      icon: Heart,
      title: "Individual Care",
      description: "Every student receives personalized attention and guidance",
    },
    {
      icon: Lightbulb,
      title: "Clear Understanding",
      description: "We focus on concepts, not just rote memorization",
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "Building confidence alongside mathematical skills",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 text-balance">
              About Gurukul Study Center
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-base sm:text-lg text-muted-foreground text-pretty px-4">
              Four decades of mathematical excellence, now available online
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto">
            {highlights.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-none shadow-lg text-center card-hover">
                  <CardContent className="p-4 sm:p-6">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 text-primary mb-2 sm:mb-3">
                      <item.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold mb-1">{item.value}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">{item.label}</div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Professor Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-8 sm:mb-12 text-center">
              Meet Your Mentor
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <ScrollReveal delay={100}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
                <img
                  src={getImageUrl("/professional-indian-male-professor-teaching-mathem.jpg")}
                  alt="Prof. Sambhaji Bugade"
                  className="relative rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-2">Prof. Sambhaji Bugade</h3>
                  <p className="text-sm sm:text-base text-accent font-medium">
                    Mathematics Expert | Founder & Lead Instructor
                  </p>
                </div>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <p className="text-pretty">
                    With 42 years of dedicated teaching experience, Prof. Sambhaji Bugade has transformed the lives of
                    over 5,000 students across Maharashtra. His passion for mathematics and unique ability to simplify
                    complex concepts has made him one of the most sought-after mathematics educators.
                  </p>
                  <p className="text-pretty">
                    Prof. Bugade believes that every student can excel in mathematics with the right guidance and
                    approach. His teaching methodology focuses on building strong fundamentals, developing
                    problem-solving skills, and nurturing a genuine appreciation for the subject.
                  </p>
                  <p className="text-pretty italic">
                    "Mathematics is not about memorizing formulas, it's about understanding patterns and developing
                    logical thinking. My goal is to make every student fall in love with mathematics."
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold text-primary mb-1">42+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Years Teaching</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold text-primary mb-1">5000+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Students Guided</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold text-primary mb-1">95%+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold text-primary mb-1">3</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Boards Covered</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6 sm:mb-8 text-center">Our Story</h2>
          </ScrollReveal>
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
            <ScrollReveal delay={100}>
              <p className="text-pretty">
                Gurukul Study Center was founded with a simple yet powerful vision: to make quality mathematics
                education accessible to every student, regardless of their location. The COVID-19 pandemic accelerated
                our transition to online teaching, and we discovered that technology could enhance rather than diminish
                the personal touch that makes learning effective.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-pretty">
                Led by Prof. Sambhaji Bugade, our online platform brings together traditional teaching wisdom with
                modern educational tools. We use interactive whiteboards, real-time problem solving, recorded sessions
                for revision, and regular assessments to ensure every student progresses at their optimal pace.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="text-pretty">
                What sets us apart is our unwavering commitment to understanding each student's unique learning style.
                We maintain small batch sizes, provide one-on-one doubt clearing sessions, and work closely with parents
                to track progress. Our students don't just score well—they develop a lifelong appreciation for
                mathematics.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 sm:mb-4 text-center">Our Values</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-pretty px-4">
              The principles that guide our teaching and interaction with every student
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                  <CardContent className="p-5 sm:p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 text-primary mb-3 sm:mb-4">
                      <value.icon size={24} className="sm:w-7 sm:h-7" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground text-balance">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6 sm:mb-8 text-center">Our Mission</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Card className="border-none shadow-xl">
              <CardContent className="p-6 sm:p-8 md:p-12">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center text-pretty">
                  To empower students with strong mathematical foundations, critical thinking skills, and the confidence
                  to excel in their academic pursuits and beyond. We believe that with the right guidance, personalized
                  attention, and a nurturing environment, every student can master mathematics and unlock their full
                  potential.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
