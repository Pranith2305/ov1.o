import Image from "next/image";
import { Play } from "lucide-react";
import { Laptop, Wifi, ChromeIcon as Browser } from 'lucide-react'
import { Video, Mic, Volume2, FileCheck, ArrowUpRight, Check } from 'lucide-react'
import Testimonials from "../../components/Testimonials";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";

export default function Home() {
  const gridItems = [
    {
      icon: Video,
      title: 'Real Time Face Detection',
      caption: 'Capture Faces Clearly for Accurate Real-Time Detection and Recognition.',
      content: (
        <div className="relative bg-gray-50 rounded-lg p-4">
          <img 
            src="/placeholder.svg?height=240&width=400" 
            alt="Face Detection Demo"
            className="w-full rounded-lg"
          />
          <div className="absolute top-4 left-4 space-y-2">
            <div className="bg-white px-3 py-1.5 rounded-full flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              <span className="text-sm">Face Verification</span>
            </div>
            <div className="bg-white px-3 py-1.5 rounded-full flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              <span className="text-sm">Face Liveness Detection</span>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Mic,
      title: 'System Check',
      caption: 'Ensure your device has a working camera, microphone and have a stable internet connection.',
      content: (
        <div className="space-y-3">
          {[
            { label: 'Camera', icon: Video },
            { label: 'Microphone', icon: Mic },
            { label: 'Speaker', icon: Volume2 }
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <item.icon className="w-5 h-5 text-gray-700" />
                <span>{item.label}</span>
              </div>
              <div className="bg-green-100 rounded-full p-1">
                <Check className="w-4 h-4 text-green-600" />
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      icon: Volume2,
      title: 'Test Audio',
      caption: 'Please read this aloud clearly: The quick brown fox jumps over the lazy dog',
      content: (
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <Mic className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 h-2 bg-gray-200 rounded-full">
              <div className="h-full w-3/4 bg-purple-600 rounded-full"></div>
            </div>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
              Test audio
            </button>
          </div>
          <div className="h-24 bg-purple-100 rounded-lg overflow-hidden">
            <svg viewBox="0 0 100 20" className="w-full h-full">
              <path 
                d="M0,10 Q5,5 10,10 T20,10 T30,10 T40,10 T50,10 T60,10 T70,10 T80,10 T90,10 T100,10" 
                fill="none" 
                stroke="#9333EA" 
                strokeWidth="0.5"
              />
            </svg>
          </div>
        </div>
      )
    },
    {
      icon: FileCheck,
      title: 'Terms And Conditions',
      caption: 'I agree with the Terms & Conditions and Privacy Policy',
      content: (
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-5 h-5 border-2 border-purple-600 rounded flex items-center justify-center">
              <Check className="w-3 h-3 text-purple-600" />
            </div>
            <span className="font-medium">Terms And Conditions</span>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-gray-200 rounded-full"></div>
            <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
            <div className="h-2 bg-gray-200 rounded-full w-1/2"></div>
          </div>
        </div>
      )
    }
  ]
  
  const prospects = [
    {
      name: "Jerome Bell",
      role: "Director Software Engineer",
      company: "Braze",
      location: "Sunnyvale, California, United States",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Guy Hawkins",
      role: "Director of Engineering",
      company: "Pinterest",
      location: "Providence, Rhode Island, United States",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Cody Fisher",
      role: "Engineering Director",
      company: "Apple",
      location: "Los Gatos, California, United States",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Wade Warren",
      role: "Director of Software Engineering",
      company: "Zillow",
      location: "Miami, Florida, United States",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Esther Howard",
      role: "Head of Engineering",
      company: "Rippling",
      location: "Vista, California, United States",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-[#7C3AED] pt-16 pb-[200px] px-8 md:px-16 rounded-xl mx-4 md:mx-8 mt-4">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="max-w-[600px] mx-auto mb-12">
            <div className="bg-white rounded-lg py-2 px-4 flex justify-between items-center shadow-sm border">
              <div className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg"
                  alt="OpenIntervue Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span className="font-semibold">OpenIntervue</span>
              </div>
              <button className="bg-[#8B5CF6] text-white rounded-lg px-4 py-1 text-sm border">
                Help
              </button>
            </div>
          </div>

          {/* Version Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-white px-4 py-1 rounded-full text-base font-medium flex items-center gap-2">
              <div className="w-4 h-4 bg-[#8B5CF6] rounded-full"></div>
              Pihu v13
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Welcome to Your Interview Journey
              <br />
              with OpenIntervue
            </h1>
            <p className="text-white/80">
              Let's make sure you have everything you need before we schedule
              your interview
            </p>
          </div>
        </div>
      </div>

      {/* Prospect List */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 -mt-[150px] flex justify-center">
        <div
          className="w-full max-w-4xl aspect-[16/9] relative"
          style={{
            perspective: "1000px",
          }}
        >
          <div className="absolute inset-0 bg-white rounded-lg ">
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-b from-[#ffffff] to-[#d2cdda] rounded-full flex items-center justify-center">
                <button className="w-16 h-16 bg-[#8B5CF6] rounded-full flex shadow-lg items-center justify-center hover:bg-[#7C3AED]">
                  <Play className="w-6 h-6 text-white" fill="white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mb-6">
        <span className="text-purple-600 font-medium mb-1 inline-block text-sm">
          ⚡ Setup Requirements
        </span>
        <h2 className="text-[#1a365d] text-2xl font-bold mb-2">
          Your Interview Right Setup
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unk
        </p>
      </div>

      {/* Requirements Cards */}
      <div className="w-full max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {['Laptop', 'Internet', 'Browser'].map((item, index) => (
          <div key={item} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-center space-x-4">
            <div className="bg-purple-100/50 w-10 h-10 rounded-lg flex items-center justify-center">
              {index === 0 && <Laptop className="w-5 h-5 text-purple-600" />}
              {index === 1 && <Wifi className="w-5 h-5 text-purple-600" />}
              {index === 2 && <Browser className="w-5 h-5 text-purple-600" />}
            </div>
            <div>
              <h3 className="font-semibold text-[#1a365d] text-sm">{item}</h3>
              <p className="text-gray-500 text-xs">
                Streamline task monitoring for productivity.
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>

        {/*set up section */}
      <div className="w-full max-w-6xl mx-auto p-6 px-24">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="text-purple-600 font-medium mb-2 inline-block text-sm">
          ⚡ Setup Interview
        </span>
        <h1 className="text-[#1a365d] text-3xl font-bold mb-3">
          Ace Your Interview With The Right Setup
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          Ensure Your Setup Meets All Interview Requirements for Success
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {gridItems.map((item, index) => (
          <div key={index} className="bg-slate-100 rounded-xl p-6 shadow-sm border border-gray-100 relative">
            <div className="flex flex-col">
              <div className="flex items-start mb-4">
                <div className="bg-gray-50 p-3 rounded-xl">
                  <item.icon className="w-5 h-5 text-[#1a365d]" />
                </div>
              </div>
              <h2 className={`text-xl font-bold mb-2 text-[#1a365d]`}>
                {item.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {item.caption}
              </p>
            </div>
            <div className="absolute bottom-6  rounded-full p-2 border border-purple-600 hover:bg-purple-600">
              <ArrowUpRight className="w-5 h-5 text-purple-600 hover:text-white " />
            </div>
          </div>
        ))}
      </div>
      </div>
      <Testimonials/>
      <div className="px-24 mt-12">
        <Faq/>
      </div>
    </div>
  );
}
