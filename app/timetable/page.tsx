import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Calendar, BookOpen } from "lucide-react"

export default function TimetablePage() {
  const morningSlots = [
    { time: "6.45 am to 7.55 am", mon: "10th State Eng Med.", tue: "10th State Semi-Eng", wed: "10th State Eng Med.", thu: "10th State Semi-Eng", fri: "10th State Eng Med.", sat: "10th State Semi-Eng", sun: "" },
    { time: "8.00 am to 9.00 am", mon: "9th State Eng Med.", tue: "9th State Semi-Eng", wed: "9th State Eng Med.", thu: "9th State Semi-Eng", fri: "9th State Eng Med.", sat: "9th State Semi-Eng", sun: "" },
    { time: "9.05 am to 10.05 am", mon: "8th State Eng Med.", tue: "8th State Semi-Eng", wed: "7th State Eng Med.", thu: "8th State Eng Med.", fri: "8th State Semi-Eng", sat: "7th State Semi-Eng", sun: "EXAM" },
  ];

  const eveningSlots = [
    { time: "3.45 pm to 4.45 pm", mon: "7th ICSE", tue: "7th CBSE", wed: "7th ICSE", thu: "7th CBSE", fri: "7th ICSE", sat: "7th CBSE", sun: "" },
    { time: "4.50 pm to 5.50 pm", mon: "8th ICSE", tue: "8th CBSE", wed: "8th ICSE", thu: "8th CBSE", fri: "8th ICSE", sat: "8th CBSE", sun: "" },
    { time: "5.55 pm to 6.55 pm", mon: "9th ICSE", tue: "9th CBSE", wed: "9th ICSE", thu: "9th CBSE", fri: "9th ICSE", sat: "9th CBSE", sun: "" },
    { time: "7.00 pm to 8.10 pm", mon: "10th ICSE", tue: "10th CBSE", wed: "10th ICSE", thu: "10th CBSE", fri: "10th ICSE", sat: "10th CBSE", sun: "" },
    { time: "8.15 pm to 9.15 pm", mon: "Vedic E1", tue: "Vedic E2", wed: "Vedic E3", thu: "Vedic E1", fri: "Vedic E2", sat: "Vedic E3", sun: "" },
  ];

  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  const shortDays = ["MON", "TUS", "WED", "THU", "FRI", "SAT", "SUN"]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 border border-primary/20">
              <Calendar className="text-primary" size={20} />
              <span className="text-sm sm:text-base font-medium">Weekly Schedule</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 text-balance">
              Class Timetable
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Structured learning schedule designed for optimal understanding. Choose your convenient time slot and board.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <ScrollReveal delay={100}>
              <Card className="border-none shadow-lg bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Flexible Timings</h3>
                  <p className="text-sm text-muted-foreground">Morning & Evening batches available</p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Card className="border-none shadow-lg bg-gradient-to-br from-secondary/10 to-secondary/5">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-12 h-12 mx-auto mb-3 text-secondary" />
                  <h3 className="font-semibold text-lg mb-2">All Boards</h3>
                  <p className="text-sm text-muted-foreground">SSC, ICSE & CBSE covered</p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Card className="border-none shadow-lg bg-gradient-to-br from-accent/10 to-accent/5">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-12 h-12 mx-auto mb-3 text-accent" />
                  <h3 className="font-semibold text-lg mb-2">Weekly Tests</h3>
                  <p className="text-sm text-muted-foreground">Sunday exam sessions</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Morning Schedule */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-8 text-center">Morning Sessions</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                {/* Header */}
                <div className="grid grid-cols-8 gap-2 mb-2">
                  <div className="bg-accent/20 rounded-lg p-3 text-center font-semibold text-sm">Time</div>
                  {shortDays.map((day, idx) => (
                    <div key={day} className={`${idx === 6 ? 'bg-primary/20' : 'bg-primary/10'} rounded-lg p-3 text-center font-semibold text-sm`}>
                      {day}
                    </div>
                  ))}
                </div>
                
                {/* Slots */}
                {morningSlots.map((slot, idx) => (
                  <ScrollReveal key={idx} delay={idx * 50 + 150}>
                    <div className="grid grid-cols-8 gap-2 mb-2">
                      <div className="bg-accent/10 rounded-lg p-4 flex items-center justify-center text-xs sm:text-sm font-medium text-center">
                        {slot.time}
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-lg p-4 flex items-center justify-center text-xs sm:text-sm font-medium text-center">
                        {slot.mon}
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-lg p-4 flex items-center justify-center text-xs sm:text-sm font-medium text-center">
                        {slot.tue}
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-lg p-4 flex items-center justify-center text-xs sm:text-sm font-medium text-center">
                        {slot.wed}
                      </div>
                      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900 rounded-lg p-4 flex items-center justify-center text-xs sm:text-sm font-medium text-center">
                        {slot.thu}
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-lg p-4 flex items-center justify-center text-xs sm:text-sm font-medium text-center">
                        {slot.fri}
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-lg p-4 flex items-center justify-center text-xs sm:text-sm font-medium text-center">
                        {slot.sat}
                      </div>
                      <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900 rounded-lg p-4 flex items-center justify-center text-xs sm:text-sm font-medium text-center">
                        {slot.sun}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Evening Schedule */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-8 text-center">Evening Sessions</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                {/* Header */}
                <div className="grid grid-cols-8 gap-2 mb-2">
                  <div className="bg-accent/20 rounded-lg p-3 text-center font-semibold text-sm">Time</div>
                  {shortDays.map((day, idx) => (
                    <div key={day} className={`${idx === 6 ? 'bg-primary/20' : 'bg-primary/10'} rounded-lg p-3 text-center font-semibold text-sm`}>
                      {day}
                    </div>
                  ))}
                </div>
                
                {/* Slots */}
                {eveningSlots.map((slot, idx) => (
                  <ScrollReveal key={idx} delay={idx * 50 + 150}>
                    <div className="grid grid-cols-8 gap-2 mb-2">
                      <div className="bg-accent/10 rounded-lg p-4 flex items-center justify-center text-xs sm:text-sm font-medium text-center">
                        {slot.time}
                      </div>
                      <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950 dark:to-cyan-900 rounded-lg p-4 flex items-center justify-center text-xs sm:text-sm font-medium text-center">
                        {slot.mon}
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 rounded-lg p-4 flex items-center justify-center text-xs sm:text-sm font-medium text-center">
                        {slot.tue}
                      </div>
                      <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950 dark:to-cyan-900 rounded-lg p-4 flex items-center justify-center text-xs sm:text-sm font-medium text-center">
                        {slot.wed}
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 rounded-lg p-4 flex items-center justify-center text-xs sm:text-sm font-medium text-center">
                        {slot.thu}
                      </div>
                      <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950 dark:to-cyan-900 rounded-lg p-4 flex items-center justify-center text-xs sm:text-sm font-medium text-center">
                        {slot.fri}
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 rounded-lg p-4 flex items-center justify-center text-xs sm:text-sm font-medium text-center">
                        {slot.sat}
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-center text-xs sm:text-sm font-medium text-center">
                        {slot.sun}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Notes Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <Card className="border-none shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4">Important Notes</h3>
                <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>M1 and M2 indicate different batches for the same class</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Vedic Mathematics classes available on Friday & Saturday mornings and evenings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Sunday morning slots are reserved for weekly examinations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Each session is carefully designed to ensure comprehensive coverage of the syllabus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>For any schedule conflicts or special requests, please contact us</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
