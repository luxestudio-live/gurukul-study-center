import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 text-balance">
              Get in Touch
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-base sm:text-lg text-muted-foreground text-pretty px-4">
              We'd love to hear from you. Reach out with any questions or to schedule a demo class.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <ScrollReveal>
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4 sm:mb-6">Contact Information</h2>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone size={18} className="text-primary sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1 text-sm sm:text-base">Phone</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">+91 98765 43210</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail size={18} className="text-primary sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1 text-sm sm:text-base">Email</p>
                        <p className="text-xs sm:text-sm text-muted-foreground break-all">
                          info@gurukulstudycenter.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin size={18} className="text-primary sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1 text-sm sm:text-base">Location</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">Online & Offline Classes Available</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock size={18} className="text-primary sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1 text-sm sm:text-base">Available Hours</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">Mon - Sat: 9:00 AM - 8:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="border-none shadow-xl">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4 sm:mb-6">Send us a Message</h2>
                  <form action="https://formsubmit.co/your-email@example.com" method="POST" className="space-y-3 sm:space-y-4">
                    <input type="hidden" name="_subject" value="New Contact Form Submission - Gurukul Study Center" />
                    <input type="hidden" name="_template" value="table" />
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                        placeholder="+91 "
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                        placeholder="Your city"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Class & Board</label>
                      <select name="class_board" required className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all">
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
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Message</label>
                      <textarea
                        name="message"
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all min-h-[100px] sm:min-h-[120px]"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                    <Button type="submit" className="w-full text-sm sm:text-base" size="lg">
                      Submit Enquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Android App Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <Card className="border-none shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-6 sm:p-8 bg-gradient-to-br from-primary/10 to-secondary/10 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3">Self-Learning Option</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-6">
                      Can't join live classes? Download our Android app and purchase individual courses to learn at your own pace.
                    </p>
                    <ul className="space-y-2 text-sm sm:text-base mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="text-primary" size={16} />
                        <span>Pre-recorded video lectures</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="text-primary" size={16} />
                        <span>Study materials included</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="text-primary" size={16} />
                        <span>Practice questions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="text-primary" size={16} />
                        <span>Learn at your own pace</span>
                      </li>
                    </ul>
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
                      <div className="text-7xl sm:text-8xl mb-4">📱</div>
                      <h4 className="text-lg sm:text-xl font-bold mb-2">Available on</h4>
                      <p className="text-base font-semibold text-primary">Google Play Store</p>
                    </div>
                  </div>
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
