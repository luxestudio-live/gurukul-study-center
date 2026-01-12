import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Gurukul Study Center</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Expert online mathematics coaching for SSC, ICSE, and CBSE students with 42 years of teaching excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/timetable"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Timetable
                </Link>
              </li>
              <li>
                <Link
                  href="/fees"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Fees
                </Link>
              </li>
              <li>
                <Link
                  href="/demo-lectures"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Demo Lectures
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Phone size={16} className="mt-1 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Mail size={16} className="mt-1 shrink-0" />
                <span>info@gurukulstudycenter.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>Online Classes Available Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Gurukul Study Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
