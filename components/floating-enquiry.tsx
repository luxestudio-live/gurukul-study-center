"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FloatingEnquiry() {
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    // Submit in background using iframe trick
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.name = 'hidden-form-iframe-floating'
    document.body.appendChild(iframe)
    
    const tempForm = document.createElement('form')
    tempForm.action = 'https://script.google.com/macros/s/AKfycbxMgEb4mB6SHj99zYz-AYvkzXsAeh-l3jpRrBAk3YMbqR4FYbEMV8ac-bZUCIK4pxGa/exec'
    tempForm.method = 'POST'
    tempForm.target = 'hidden-form-iframe-floating'
    
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
      // Redirect to demo lectures page only
      window.location.href = '/demo-lectures'
    }, 1000)
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-6 right-6 z-40 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
        aria-label="Enquire Now"
      >
        <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse"></span>
      </button>

      {/* Enquiry Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <ScrollReveal>
            <Card className="w-full max-w-md shadow-2xl my-8">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold">Quick Enquiry</h3>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-muted-foreground hover:text-foreground text-2xl leading-none"
                  >
                    ✕
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <input type="hidden" name="form_type" value="Floating Enquiry" />
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
    </>
  )
}
