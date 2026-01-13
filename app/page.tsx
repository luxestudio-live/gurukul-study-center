"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Video, Award, Users, Clock, Target, CheckCircle2, Lock, Star, ArrowRight, FileText, Brain } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleEnquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    // Submit in background using iframe trick
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.name = 'hidden-form-iframe'
    document.body.appendChild(iframe)
    
    const tempForm = document.createElement('form')
    tempForm.action = form.action
    tempForm.method = 'POST'
    tempForm.target = 'hidden-form-iframe'
    
    formData.forEach((value, key) => {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = value.toString()
      tempForm.appendChild(input)
    })
    
    document.body.appendChild(tempForm)
    tempForm.submit()
    
    // Clean up and redirect after a short delay
    setTimeout(() => {
      document.body.removeChild(tempForm)
      document.body.removeChild(iframe)
      // Open YouTube in new window
      window.open('https://www.youtube.com/@bugadesirsgurukul2025', '_blank')
      // Redirect to demo lectures page
      window.location.href = '/demo-lectures'
    }, 1000)
  }

  const advantages = [
    {
      icon: Clock,
      title: "Learn at Your Pace",
      description: "Flexible scheduling that fits your routine",
    },
    {
      icon: Video,
      title: "Interactive Sessions",
      description: "Engaging online & offline classes with real-time interaction",
    },
    {
      icon: Users,
      title: "Personal Attention",
      description: "Small batch sizes for individual focus",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Structured curriculum for exam excellence",
    },
  ]

  const courses = [
    { board: "SSC", classes: "Classes 7-10", color: "bg-primary" },
    { board: "ICSE", classes: "Classes 7-10", color: "bg-secondary" },
    { board: "CBSE", classes: "Classes 7-10", color: "bg-accent" },
  ]

  const testimonials = [
    {
      name: "Shreya Ajay Sarda",
      class: "Class 10",
      text: "I am extremely happy to share that I have secured 100 out of 100 marks in Mathematics in my 10th Board examination. This success is possible only because of your dedicated teaching, patience, and continuous encouragement. Your innovative Software Animations methods and clear concepts helped me build strong confidence in mathematics.",
      rating: 5,
    },
    {
      name: "Shruti Ajay Sarada",
      class: "Class 10",
      text: "Thank you very much for your guidance and encouragement. Because of your wonderful teaching and support, I was able to score 99/100 in Mathematics in my 10th Board exam. Your clear explanations and motivation made learning easy and enjoyable. I am truly grateful to you.",
      rating: 5,
    },
    {
      name: "Tushar Niwas Patil",
      class: "Class 10",
      text: "I am happy to share my success with you. I scored 98 marks in Mathematics in my 10th Board exam, and this achievement is because of your hard work, patience, and inspiring teaching. Thank you for guiding me and always encouraging me to do my best.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-balance mb-4 sm:mb-6 text-foreground leading-tight">
                Master Mathematics with Expert Coaching
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-3 sm:mb-4 text-balance">
                SSC | ICSE | CBSE (Classes 7–10)
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 border border-accent/20">
                <Award className="text-accent shrink-0" size={18} />
                <p className="text-xs sm:text-sm font-medium text-pretty">
                  By Prof. Sambhaji Bugade – Mathematics Expert | 42 Years of Excellence
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-sm sm:text-base shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
                  onClick={() => window.location.href = '/gurukul-study-center/contact'}
                >
                  Start Learning Today
                  <ArrowRight className="ml-2" size={18} />
                </Button>
                <Button size="lg" variant="outline" className="text-sm sm:text-base bg-transparent w-full sm:w-auto" onClick={() => window.location.href = '/demo-lectures'}>
                  <Video className="mr-2" size={18} />
                  Watch Demo
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-center mb-3 sm:mb-4">
              Advantages of Our Learning Approach
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-pretty px-4">
              Experience the perfect blend of traditional teaching excellence and modern online convenience
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {advantages.map((advantage, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-hover">
                  <CardContent className="p-5 sm:p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 text-primary mb-3 sm:mb-4">
                      <advantage.icon size={24} className="sm:w-7 sm:h-7" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2">{advantage.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground text-balance">{advantage.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-center mb-3 sm:mb-4">
              Our Courses
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-pretty px-4">
              Comprehensive mathematics coaching tailored to your board's curriculum
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {courses.map((course, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group card-hover">
                  <div className={`h-2 ${course.color}`} />
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="text-4xl sm:text-5xl font-serif font-bold mb-2 sm:mb-3 bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                      {course.board}
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">{course.classes}</p>
                    <ul className="space-y-2 text-xs sm:text-sm text-left mb-4 sm:mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                        <span>Complete syllabus coverage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                        <span>Regular practice tests</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                        <span>Doubt clearing sessions</span>
                      </li>
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent text-sm sm:text-base"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Lectures Preview */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-center mb-3 sm:mb-4">
              Experience Our Teaching Style
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-pretty px-4">
              Watch demo lectures to get a feel of our interactive and effective teaching methodology
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {["Algebra Basics", "Geometry Concepts", "Trigonometry Intro"].map((title, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-none shadow-lg overflow-hidden group cursor-pointer card-hover">
                  <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm">
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 sm:gap-4">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-background/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Lock className="text-primary" size={24} />
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-foreground/80 bg-background/80 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                        Unlock with Enquiry
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Class 8 • 15 minutes</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={300}>
            <div className="text-center mt-6 sm:mt-8">
              <Button size="lg" onClick={() => setShowEnquiryForm(true)} className="w-full sm:w-auto">
                Unlock Demo Lectures
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-center mb-3 sm:mb-4">
              Student Success Stories
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-pretty px-4">
              Hear from our students about their journey to mathematical excellence
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-none shadow-lg card-hover">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex gap-1 mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-accent text-accent sm:w-4 sm:h-4" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 text-pretty">"{testimonial.text}"</p>
                    <div className="pt-3 sm:pt-4 border-t border-border">
                      <p className="font-semibold text-xs sm:text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.class}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Learning App Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
                Prefer Self-Learning?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Download our Android app and purchase courses at your own pace
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <Card className="border-none shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-6 sm:p-8 bg-gradient-to-br from-primary/5 to-secondary/5 flex flex-col justify-center">
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                        <Star className="text-primary" size={18} />
                        <span className="text-sm font-medium">Self-Paced Learning</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-4">Learn Anytime, Anywhere</h3>
                      <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <Video className="text-primary shrink-0 mt-1" size={18} />
                          <span>Pre-recorded video lectures</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FileText className="text-primary shrink-0 mt-1" size={18} />
                          <span>Study materials & notes</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Brain className="text-primary shrink-0 mt-1" size={18} />
                          <span>Topic-wise practice questions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="text-primary shrink-0 mt-1" size={18} />
                          <span>Buy individual courses</span>
                        </li>
                      </ul>
                    </div>
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto"
                      onClick={() => window.open('https://play.google.com/store/apps/details?id=com.zscygm.lkmvii', '_blank')}
                    >
                      <span className="mr-2">📱</span> Download Android App
                    </Button>
                  </div>
                  
                  <div className="bg-gradient-to-br from-accent/20 to-primary/20 p-6 sm:p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-background rounded-2xl p-8 shadow-xl">
                        <div className="text-6xl sm:text-7xl mb-4">📱</div>
                        <h4 className="text-lg sm:text-xl font-bold mb-2">Google Play Store</h4>
                        <p className="text-sm text-muted-foreground mb-4">Available Now</p>
                        <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-lg">
                          <span className="text-xl">⭐</span>
                          <span className="font-semibold text-sm">Individual Courses</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-3 sm:mb-4 text-balance">
                Ready to Excel in Mathematics?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-primary-foreground/90 mb-6 sm:mb-8 text-pretty px-4">
                Join hundreds of successful students who have transformed their mathematics journey with us
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="shadow-xl hover:shadow-2xl transition-shadow w-full sm:w-auto"
                onClick={() => setShowEnquiryForm(true)}
              >
                Get Started Now
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Enquiry Form Modal */}
      {showEnquiryForm && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <ScrollReveal>
            <Card className="w-full max-w-md shadow-2xl my-8">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold">Enquiry Form</h3>
                  <button
                    onClick={() => setShowEnquiryForm(false)}
                    className="text-muted-foreground hover:text-foreground text-2xl leading-none"
                  >
                    ✕
                  </button>
                </div>
                <form action="https://script.google.com/macros/s/AKfycbxMgEb4mB6SHj99zYz-AYvkzXsAeh-l3jpRrBAk3YMbqR4FYbEMV8ac-bZUCIK4pxGa/exec" method="POST" onSubmit={handleEnquirySubmit} className="space-y-3 sm:space-y-4">
                  <input type="hidden" name="form_type" value="Homepage Enquiry" />
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Class & Board</label>
                    <select name="class_board" required className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="">Select your class & board</option>
                      <option>Class 7 - SSC</option>
                      <option>Class 8 - SSC</option>
                      <option>Class 9 - SSC</option>
                      <option>Class 10 - SSC</option>
                      <option>Class 7 - ICSE</option>
                      <option>Class 8 - ICSE</option>
                      <option>Class 9 - ICSE</option>
                      <option>Class 10 - ICSE</option>
                      <option>Class 7 - CBSE</option>
                      <option>Class 8 - CBSE</option>
                      <option>Class 9 - CBSE</option>
                      <option>Class 10 - CBSE</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin">⏳</span> Submitting...
                      </span>
                    ) : (
                      'Submit Enquiry'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      )}

      <Footer />
    </div>
  )
}
