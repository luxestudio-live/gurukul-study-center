import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Award, TrendingUp, Users } from "lucide-react"
import { getImageUrl } from "@/lib/image-url"

export default function GalleryPage() {
  const results = [
    { name: "Sneha Kulkarni", percentage: "98%", board: "SSC", year: "2024", subject: "Mathematics" },
    { name: "Arjun Mehta", percentage: "96%", board: "ICSE", year: "2024", subject: "Mathematics" },
    { name: "Pooja Desai", percentage: "97%", board: "CBSE", year: "2024", subject: "Mathematics" },
    { name: "Rohan Patil", percentage: "95%", board: "SSC", year: "2023", subject: "Mathematics" },
    { name: "Ananya Shah", percentage: "99%", board: "ICSE", year: "2023", subject: "Mathematics" },
    { name: "Vikram Singh", percentage: "96%", board: "CBSE", year: "2023", subject: "Mathematics" },
    { name: "Priya Joshi", percentage: "94%", board: "SSC", year: "2024", subject: "Mathematics" },
    { name: "Karan Patel", percentage: "97%", board: "ICSE", year: "2024", subject: "Mathematics" },
    { name: "Meera Reddy", percentage: "98%", board: "CBSE", year: "2023", subject: "Mathematics" },
  ]

  const galleryImages = [
    {
      title: "Interactive Classes",
      description: "Students engaging with Prof. Bugade during live online & offline sessions",
      image: "online+mathematics+class+students+learning",
    },
    {
      title: "Problem Solving Session",
      description: "Collaborative learning with step-by-step explanations",
      image: "teacher+solving+mathematics+problem+whiteboard",
    },
    {
      title: "Student Achievement Day",
      description: "Celebrating our top performers of 2024",
      image: "students+celebrating+exam+success+achievement",
    },
    {
      title: "Geometry Workshop",
      description: "Special workshop on advanced geometry concepts",
      image: "geometry+mathematics+tools+compass+protractor",
    },
    {
      title: "Algebra Practice",
      description: "Students working through algebraic problems",
      image: "mathematical+equations+algebra+on+notebook",
    },
    {
      title: "Parent Teacher Meeting",
      description: "Regular interactions to discuss student progress",
      image: "parent+teacher+meeting+discussion+education",
    },
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-none shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 card-hover">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={getImageUrl("/placeholder.svg")}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 sm:p-5">
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground text-pretty">{item.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

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
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary via-secondary to-accent mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg">
                      <span className="text-xl sm:text-2xl font-bold text-primary-foreground">{result.percentage}</span>
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
