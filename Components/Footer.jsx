"use client"
import { Link } from 'react-router-dom'
import { ArrowBigRight, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <div className="bg-black px-4 md:px-8 py-16 mx-4 md:mx-8 mt-4 rounded-xl">
      <footer className="max-w-7xl mx-auto text-white p-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
          {/* Left Column - Logo, Description, and Certificates */}
          <div className="md:col-span-3">
            {/* Logo and Company Name */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <img
                  src="/profile-v1.png"
                  alt="OpenIntervue Logo"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </div>
              <span className="text-xl font-semibold text-purple-500">OpenIntervue</span>
            </div>
    
            {/* Description */}
            <p className="text-white text-sm mb-8">
              AI Recruitment Tech Stack Industry's 
              <br/>leading AI Interviewer and Interview
              <br/> Intelligence Platform
            </p>
    
            {/* Certificates */}
            <div className="flex gap-4">
              <img
                src="/placeholder.svg?height=48&width=48"
                alt="GDPR Certified"
                width={48}
                height={48}
                className="rounded-full"
              />
              <img
                src="/placeholder.svg?height=48&width=48"
                alt="AICPA SOC"
                width={48}
                height={48}
                className="rounded-full"
              />
              <img
                src="/placeholder.svg?height=48&width=48"
                alt="ISO 27001"
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
          </div>
    
          {/* Navigation Links */}
          <div className="md:col-span-2">
            <ul className="space-y-4">
              <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
              <li><Link href="/about" className="text-white hover:text-gray-300">About us</Link></li>
              <li><Link href="/solutions" className="text-white hover:text-gray-300">Solutions</Link></li>
              <li><Link href="/subscription" className="text-white hover:text-gray-300">Subscription</Link></li>
              <li><Link href="/pihu" className="text-white hover:text-gray-300">Pihu</Link></li>
              <li><Link href="/blogs" className="text-white hover:text-gray-300">Blogs</Link></li>
            </ul>
          </div>
    
          <div className="md:col-span-2">
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-gray-400 hover:text-gray-300">Contact Us</Link></li>
              <li><Link href="/demo" className="text-white hover:text-gray-300">AI Interview (Book Demo)</Link></li>
              <li><Link href="/career" className="text-white hover:text-gray-300">Career</Link></li>
              <li><Link href="/faq" className="text-white hover:text-gray-300">FAQ</Link></li>
              <li><Link href="/webinar" className="text-white hover:text-gray-300">Webinar</Link></li>
            </ul>
          </div>
    
          <div className="md:col-span-2">
            <ul className="space-y-4">
              <li><Link href="/terms" className="text-white hover:text-gray-300">Terms & Condition</Link></li>
              <li><Link href="/privacy" className="text-white hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link href="/payment" className="text-white hover:text-gray-300">Payment Policy</Link></li>
              <li><Link href="/api-docs" className="text-white hover:text-gray-300">API Docs</Link></li>
              <li><Link href="/disclaimer" className="text-white hover:text-gray-300">Disclaimer</Link></li>
            </ul>
          </div>
    
          {/* Right Column - Social and Newsletter */}
          <div className="md:col-span-3">
            <h3 className="text-white mb-6">Follow Us</h3>
            <div className="flex gap-6 mb-8">
              {/* LinkedIn */}
              <Link href="https://www.linkedin.com" className="text-white hover:text-gray-300">
                <Linkedin className="w-6 h-6" />
              </Link>

              {/* Twitter */}
              <Link href="https://www.twitter.com" className="text-white hover:text-gray-300">
                <Twitter className="w-6 h-6" />
              </Link>

              {/* Instagram */}
              <Link href="https://www.instagram.com" className="text-white hover:text-gray-300">
                <Instagram className="w-6 h-6" />
              </Link>

              {/* YouTube */}
              <Link href="https://www.youtube.com" className="text-white hover:text-gray-300">
                <Youtube className="w-6 h-6" />
              </Link>
            </div>
    
            {/* Newsletter Form */}
            <h3 className="text-white mb-4">Subscribe to Our Newsletter</h3>
            <form action="#" method="POST" className="flex gap-4">
              <input
                type="email"
                name="email"
                className="p-3 w-72 text-sm text-black bg-black border-b border-white focus:outline-none focus:border-purple-500"
                placeholder="Enter your email"
              />
              <button type="submit" className="p-3 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors duration-300">
                <ArrowBigRight className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  )
}

