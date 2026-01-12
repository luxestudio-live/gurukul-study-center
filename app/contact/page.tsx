"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, CheckCircle2, Star, Video, FileText, Brain } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    // Submit in background using iframe trick
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.name = 'hidden-form-iframe-contact'
    document.body.appendChild(iframe)
    
    const tempForm = document.createElement('form')
    tempForm.action = form.action
    tempForm.method = 'POST'
    tempForm.target = 'hidden-form-iframe-contact'
    
    formData.forEach((value, key) => {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = value.toString()
      tempForm.appendChild(input)
    })
    
    document.body.appendChild(tempForm)
    tempForm.submit()
    
    // Show success after longer delay to ensure submission completes
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      form.reset()
      
      // Clean up after showing success
      setTimeout(() => {
        document.body.removeChild(tempForm)
        document.body.removeChild(iframe)
      }, 500)
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 2000)
  }
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
                      <div className="flex-1">
                        <p className="font-semibold mb-1 text-sm sm:text-base">Phone</p>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-2">+91 91367 27393</p>
                        <div className="flex gap-2">
                          <Button size="sm" className="text-xs" onClick={() => window.location.href = 'tel:+919136727393'}>
                            <Phone size={14} className="mr-1" /> Call Now
                          </Button>
                          <Button size="sm" variant="outline" className="text-xs" onClick={() => window.open('https://wa.me/919136727393', '_blank')}>
                            <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                            WhatsApp
                          </Button>
                        </div>
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
                  <form action="https://script.google.com/macros/s/AKfycbxMgEb4mB6SHj99zYz-AYvkzXsAeh-l3jpRrBAk3YMbqR4FYbEMV8ac-bZUCIK4pxGa/exec" method="POST" onSubmit={handleContactSubmit} className="space-y-3 sm:space-y-4">
                    <input type="hidden" name="form_type" value="Contact Form" />
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
                    <Button type="submit" className="w-full text-sm sm:text-base" size="lg" disabled={isSubmitting || submitSuccess}>
                      {submitSuccess ? (
                        <span className="flex items-center gap-2 animate-pulse">
                          <CheckCircle2 size={20} /> Form Submitted Successfully!
                        </span>
                      ) : isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin">⏳</span> Submitting...
                        </span>
                      ) : (
                        'Submit Enquiry'
                      )}
                    </Button>
                    {submitSuccess && (
                      <p className="text-xs sm:text-sm text-green-600 dark:text-green-500 text-center animate-fade-in">
                        Thank you! We'll get back to you soon.
                      </p>
                    )}
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
