"use client"
import { ArrowUpRight } from 'lucide-react'

export default function CardWrapper({ icon: Icon, title, caption, children }) {
  return (
    <div className="bg-white rounded-[20px] p-8 shadow-sm border border-gray-100 relative group hover:border-purple-500 transition-all duration-300">
      <div className="flex flex-col h-full">
        <div className="flex items-start mb-6">
          <div className="bg-gray-100 p-3 rounded-xl group-hover:bg-purple-100  transition-colors duration-300">
            <Icon className="w-6 h-6 text-[#1a365d] group-hover:text-purple-600 transition-colors duration-300" />
          </div>
        </div>
        <h2 className="text-[#1a365d] text-2xl font-bold mb-3 group-hover:text-purple-600 transition-all duration-300">
          {title}
        </h2>
        <p className="text-[#4a5568] text-lg leading-relaxed mb-8">
          {caption}
        </p>
        {children}
        <div className="absolute bottom-8">
          <div className="w-10 h-10 rounded-full border border-purple-500 flex items-center justify-center group-hover:bg-purple-500 transition-all duration-300">
            <ArrowUpRight className="w-5 h-5 text-purple-500 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
      </div>
    </div>
  )
}

