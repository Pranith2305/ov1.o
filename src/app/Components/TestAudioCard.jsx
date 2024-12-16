'use client'

import { Volume2, ArrowUpRight, User2 } from 'lucide-react'
import CardWrapper from './CardWrapper'

export default function TestAudioCard({ title = "Test Audio", caption = "Please read this aloud clearly: The quick brown fox jumps over the lazy dog" }) {
  return (
    <CardWrapper icon={Volume2} title={title} caption={caption}>
      <div className="mt-8 relative">
        {/* Inner card with glassmorphism effect */}
        <div className="relative">
          {/* Background gradient circles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-pink-200/20 rounded-full blur-xl" />
            <div className="absolute right-12 top-1/2 -translate-y-1/2 w-24 h-24 bg-pink-100/20 rounded-full blur-lg" />
          </div>
          
          {/* Main content card */}
          <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-lg p-4 relative">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* User icon with purple tint */}
                <div className="text-purple-600 rounded-lg border p-2 ">
                  <User2 className="w-5 h-5" />
                </div>
                {/* Audio visualization bars */}
                <div className="flex items-center gap-[2px]">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="w-[3px] bg-slate-400"
                      style={{
                        height: `${8 + Math.sin(i * 0.8) * 6}px`,
                        opacity: i > 8 ? 0.3 : 1
                      }}
                    />
                  ))}
                </div>
              </div>
              <button 
                className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg px-6 py-2 transition-colors"
              >
                Test audio
              </button>
            </div>
            {/* Audio waveform */}
        <div className="mt-6 relative">
          <svg
            className="w-full h-16"
            viewBox="0 0 800 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 C100,20 150,80 200,50 C250,20 300,80 350,50 C400,20 450,80 500,50 C550,20 600,80 650,50 C700,20 750,80 800,50"
              className="stroke-purple-600"
              fill="none"
              strokeWidth="2"
            />
          </svg>
        </div>
          </div>
        </div>        
      </div>
    </CardWrapper>
  )
}

