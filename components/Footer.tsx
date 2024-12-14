import { CiMail } from "react-icons/ci"; // Ensure correct import
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiArrowRight } from "react-icons/fi"; // Same for social icons
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Left Column - Logo, Description, and Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b">
          <div className="col-span-1 md:col-span-1">
            {/* Logo and Company Name */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt=""
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </div>
              <span className="text-xl font-semibold text-purple-500">OpenIntervue</span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-8">
              AI Recruitment Tech Stack Industry's leading AI Interviewer and Interview Intelligence Platform
            </p>

            {/* Certificates */}
            <div className="flex gap-4">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="GDPR Certified"
                width={48}
                height={48}
                className="rounded-full"
              />
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="AICPA SOC"
                width={48}
                height={48}
                className="rounded-full"
              />
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="ISO 27001"
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1 md:col-span-1">
            <ul className="space-y-4">
              <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
              <li><Link href="/about" className="text-white hover:text-gray-300">About us</Link></li>
              <li><Link href="/solutions" className="text-white hover:text-gray-300">Solutions</Link></li>
              <li><Link href="/subscription" className="text-white hover:text-gray-300">Subscription</Link></li>
              <li><Link href="/pihu" className="text-white hover:text-gray-300">Pihu</Link></li>
              <li><Link href="/blogs" className="text-white hover:text-gray-300">Blogs</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-white hover:text-gray-300">Contact Us</Link></li>
              <li><Link href="/demo" className="text-white hover:text-gray-300">AI Interview (Book Demo)</Link></li>
              <li><Link href="/career" className="text-white hover:text-gray-300">Career</Link></li>
              <li><Link href="/faq" className="text-white hover:text-gray-300">FAQ</Link></li>
              <li><Link href="/webinar" className="text-white hover:text-gray-300">Webinar</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <ul className="space-y-4">
              <li><Link href="/terms" className="text-white hover:text-gray-300">Terms & Condition</Link></li>
              <li><Link href="/privacy" className="text-white hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link href="/payment" className="text-white hover:text-gray-300">Payment Policy</Link></li>
              <li><Link href="/api-docs" className="text-white hover:text-gray-300">API Docs</Link></li>
              <li><Link href="/disclaimer" className="text-white hover:text-gray-300">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Right Column - Social and Newsletter */}
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-white mb-6">Follow Us</h3>
            <div className="flex gap-6 mb-8">
              {/* Social Icons */}
              <Link href="#" className="text-white hover:text-gray-300">
                <FiFacebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <FiTwitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <FiInstagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <FiLinkedin className="w-6 h-6" />
              </Link>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {/* Correctly applying the className */}
                <CiMail className="w-5 h-5 text-purple-500" />
                <span className="text-white">Get updates on OpenIntervue</span>
              </div>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-gray-900 text-white px-4 py-2 rounded-md flex-grow focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-md">
                  <FiArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm mt-16">
          Copyright © 2023-2024 OpenIntervue All rights reserved.
        </div>
      </div>
    </footer>
  );
}
