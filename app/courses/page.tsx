"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Video,
  FileText,
  Clock,
  MessageCircle,
  Award,
  BookOpen,
  Users,
  Calendar,
  Target,
  Zap,
  Brain,
  TrendingUp,
  Star,
} from "lucide-react"

export default function CoursesPage() {
  const courses = [
    {
      board: "SSC Board",
      color: "from-primary to-primary/80",
      icon: BookOpen,
      description:
        "Maharashtra State Board curriculum with focus on conceptual clarity and board exam patterns. Master every concept with our structured approach.",
      classes: [
        {
          class: "Class 7",
          duration: "Annual Course",
          highlight: "Building Strong Foundations",
        },
        {
          class: "Class 8",
          duration: "Annual Course",
          highlight: "Conceptual Mastery",
        },
        {
          class: "Class 9",
          duration: "Annual Course",
          highlight: "Board Exam Preparation Begins",
        },
        {
          class: "Class 10",
          duration: "Annual Course",
          highlight: "Complete Board Exam Success",
        },
      ],
    },
    {
      board: "ICSE Board",
      color: "from-secondary to-secondary/80",
      icon: Target,
      description:
        "Comprehensive coverage of ICSE mathematics syllabus with emphasis on application, reasoning, and analytical thinking.",
      classes: [
        {
          class: "Class 7",
          duration: "Annual Course",
          highlight: "Foundation & Problem Solving",
        },
        {
          class: "Class 8",
          duration: "Annual Course",
          highlight: "Advanced Concepts",
        },
        {
          class: "Class 9",
          duration: "Annual Course",
          highlight: "Critical Thinking Development",
        },
        {
          class: "Class 10",
          duration: "Annual Course",
          highlight: "ICSE Excellence Program",
        },
      ],
    },
    {
      board: "CBSE Board",
      color: "from-accent to-accent/80",
      icon: Award,
      description:
        "NCERT-based curriculum aligned with latest CBSE guidelines, examination patterns, and competitive exam preparation.",
      classes: [
        {
          class: "Class 7",
          duration: "Annual Course",
          highlight: "NCERT Mastery",
        },
        {
          class: "Class 8",
          duration: "Annual Course",
          highlight: "Comprehensive Learning",
        },
        {
          class: "Class 9",
          duration: "Annual Course",
          highlight: "Foundation for Class 10",
        },
        {
          class: "Class 10",
          duration: "Annual Course",
          highlight: "Board Excellence & Beyond",
        },
      ],
    },
  ]

  const features = [
    {
      icon: Video,
      title: "Live Interactive Classes",
      description: "Real-time learning with instant doubt resolution",
    },
    {
      icon: FileText,
      title: "Study Materials",
      description: "Comprehensive notes and practice sheets",
    },
    {
      icon: Clock,
      title: "Recorded Sessions",
      description: "Unlimited access to class recordings",
    },
    {
      icon: MessageCircle,
      title: "Doubt Resolution",
      description: "Personal attention and guidance",
    },
    {
      icon: Calendar,
      title: "Regular Assessments",
      description: "Track progress with weekly tests",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 sm:mb-6 text-balance">
              Mathematics Courses
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-pretty px-4 max-w-2xl mx-auto">
              Comprehensive coaching with online & offline classes for Classes 7-10 across SSC, ICSE, and CBSE boards
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-64 sm:h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-64 sm:h-64 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 sm:mb-6">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm font-semibold">Signature Course</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 text-balance">
                  Vedic Mathematics
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-primary-foreground/90 text-pretty leading-relaxed">
                  Unlock the ancient wisdom of Vedic Mathematics and perform lightning-fast calculations. This
                  revolutionary system teaches you to solve complex mathematical problems mentally, boosting speed and
                  accuracy by up to 10 times faster than conventional methods.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <Brain className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1 text-xs sm:text-sm">Mental Math Mastery</h4>
                      <p className="text-[10px] sm:text-xs text-primary-foreground/80">
                        Solve problems in your head with ease
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1 text-xs sm:text-sm">Competitive Edge</h4>
                      <p className="text-[10px] sm:text-xs text-primary-foreground/80">Excel in competitive exams</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1 text-xs sm:text-sm">Speed & Accuracy</h4>
                      <p className="text-[10px] sm:text-xs text-primary-foreground/80">
                        Calculate 10x faster than traditional methods
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1 text-xs sm:text-sm">Confidence Builder</h4>
                      <p className="text-[10px] sm:text-xs text-primary-foreground/80">
                        Reduce math anxiety and build confidence
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <Button size="lg" variant="secondary" className="w-full sm:w-auto" onClick={() => window.location.href = '/demo-lectures'}>
                  Explore Vedic Mathematics
                </Button>
              </ScrollReveal>
            </div>
            <div className="flex-1 max-w-md">
              <ScrollReveal delay={200}>
                <Card className="border-none shadow-2xl bg-white/95 backdrop-blur">
                  <CardContent className="p-6 sm:p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 text-primary mb-4">
                        <Brain className="w-8 h-8 sm:w-10 sm:h-10" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Why Vedic Math?</h3>
                    </div>
                    <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-foreground/80">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary shrink-0 mt-2" />
                        <span>Reduces calculation time significantly in competitive exams</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary shrink-0 mt-2" />
                        <span>Enhances logical thinking and pattern recognition</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary shrink-0 mt-2" />
                        <span>Simplifies complex calculations with easy techniques</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary shrink-0 mt-2" />
                        <span>Perfect for students preparing for JEE, NEET, and banking exams</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary shrink-0 mt-2" />
                        <span>Makes mathematics fun and less intimidating</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-6 sm:mb-8 text-center">
              What Every Course Includes
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-none shadow-lg text-center card-hover h-full">
                  <CardContent className="p-4 sm:p-6 flex flex-col items-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 text-primary mb-2 sm:mb-3">
                      <feature.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm text-balance">{feature.title}</h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground text-balance leading-tight">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl space-y-12 sm:space-y-20">
          {courses.map((course, courseIndex) => (
            <div key={courseIndex}>
              <ScrollReveal delay={courseIndex * 100}>
                <div className="text-center mb-8 sm:mb-12">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${course.color} text-primary-foreground`}
                    >
                      <course.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold">{course.board}</h2>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty px-4 leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {course.classes.map((item, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group card-hover h-full">
                      <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                      <CardContent className="p-5 sm:p-6 flex flex-col h-full">
                        <div className="text-center mb-4 sm:mb-6">
                          <h3 className="text-xl sm:text-2xl font-bold mb-2">{item.class}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground">{item.duration}</p>
                        </div>
                        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 flex-grow flex items-center justify-center">
                          <p className="text-xs sm:text-sm font-medium text-center text-balance">{item.highlight}</p>
                        </div>
                        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                          <div className="flex items-center gap-2 text-xs sm:text-sm">
                            <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary shrink-0" />
                            <span className="text-muted-foreground">Small batch sizes</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs sm:text-sm">
                            <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-primary shrink-0" />
                            <span className="text-muted-foreground">Complete syllabus coverage</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs sm:text-sm">
                            <Award className="w-3 h-3 sm:w-4 sm:h-4 text-primary shrink-0" />
                            <span className="text-muted-foreground">Regular assessments</span>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent text-xs sm:text-sm"
                          onClick={() => window.location.href = '/demo-lectures'}
                        >
                          View Demo Lecture
                        </Button>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Self-Learning App Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4">
                Self-Learning Option Available
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Prefer to learn at your own pace? Download our Android app and purchase individual courses
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <Card className="border-none shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-primary/5 to-secondary/5 flex flex-col justify-center">
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                        <Star className="text-primary" size={18} />
                        <span className="text-sm font-medium">Self-Paced Learning</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-4">Learn Anytime, Anywhere</h3>
                      <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <Video className="text-primary shrink-0 mt-1" size={18} />
                          <span>Access pre-recorded video lectures</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FileText className="text-primary shrink-0 mt-1" size={18} />
                          <span>Download study materials & notes</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Brain className="text-primary shrink-0 mt-1" size={18} />
                          <span>Practice with topic-wise questions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Target className="text-primary shrink-0 mt-1" size={18} />
                          <span>Learn at your own pace</span>
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
                  
                  <div className="bg-gradient-to-br from-accent/20 to-primary/20 p-6 sm:p-8 md:p-10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-background rounded-2xl p-8 shadow-xl">
                        <div className="text-6xl sm:text-7xl md:text-8xl mb-4">📱</div>
                        <h4 className="text-lg sm:text-xl font-bold mb-2">Available on</h4>
                        <p className="text-sm text-muted-foreground mb-4">Google Play Store</p>
                        <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-lg">
                          <span className="text-2xl">⭐</span>
                          <span className="font-semibold">Buy Individual Courses</span>
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

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4 sm:mb-6">
              Ready to Start Learning?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 text-pretty px-4">
              Join our next batch and experience the difference quality teaching makes
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto">
                Enroll Now
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent w-full sm:w-auto">
                Schedule a Call
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
