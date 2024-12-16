"use client"
import { Video, ArrowUpRight, User, Smile } from 'lucide-react'

export default function FaceDetectionCard() {
  return (
    <div className="bg-white rounded-[20px] p-8 shadow-sm border border-gray-100 relative group hover:border-purple-500 transition-all duration-300">
      <div className="flex flex-col h-full">
        
        {/* Icon Section */}
        <div className="flex items-start mb-6">
          <div className="bg-gray-100 p-3 rounded-xl group-hover:bg-purple-100 duration-300">
            <Video className="w-6 h-6 text-[#1a365d] group-hover:text-purple-500 transition-colors duration-300" />
          </div>
        </div>
        
        {/* Title Section */}
        <h2 className="text-[#1a365d] text-2xl font-bold mb-3 group-hover:text-purple-600 duration-300">
          Real Time Face Detection
        </h2>
        
        {/* Description */}
        <p className="text-[#4a5568] text-lg leading-relaxed mb-8 pb-6">
          Capture Faces Clearly for Accurate Real-Time Detection and Recognition.
        </p>

        {/* Image and Features Section */}
        <div className="relative bg-white/80 w-full h-[300px] rounded-xl overflow-hidden">
          
          {/* Image */}
          <img
            src="/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg"
            alt="Face Detection Preview"
            className="w-full h-full object-cover"
          />
          
          {/* Floating badges */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
            <div className="bg-white rounded-xl py-2 px-4 shadow-lg flex items-center gap-2">
              <div className="bg-purple-100 p-2 rounded-lg">
                <User className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-[#1a365d] font-medium">Face Verification</span>
            </div>
            
            <div className="bg-white rounded-xl py-2 px-4 shadow-lg flex items-center gap-2">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Smile className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-[#1a365d] font-medium">Face Liveness Detection</span>
            </div>
          </div>
        </div>

        {/* Bottom Call-to-Action Button */}
        <div className="absolute bottom-8 left-8">
          <div className="w-10 h-10 rounded-full border border-purple-500 flex items-center justify-center group-hover:bg-purple-500 transition-all duration-300">
            <ArrowUpRight className="w-5 h-5 text-purple-500 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>

      </div>
    </div>
  )
}
