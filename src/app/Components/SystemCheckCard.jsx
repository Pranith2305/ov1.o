"use client";

import { Mic, ArrowUpRight, Camera, Volume2, Check } from "lucide-react";

export default function SystemCheckCard() {
  return (
    <div className="bg-white rounded-[20px] p-8 shadow-sm border border-gray-100 relative group hover:border-purple-500 transition-all duration-300">
      <div className="flex flex-col h-full">
        <div className="flex items-start mb-6">
          <div className="bg-gray-100 p-3 rounded-xl group-hover:bg-purple-100 transition-colors duration-300">
            <Mic className="w-6 h-6 group-hover:text-purple-600 transition-colors duration-300" />
          </div>
        </div>

        <h2 className=" group-hover:text-purple-600 text-2xl font-bold mb-3 transition-colors duration-300">
          System Check
        </h2>

        <p className="text-[#4a5568] text-lg leading-relaxed mb-8">
          Ensure your device has a working camera, microphone and have a stable
          internet connection.
        </p>

        <div className="relative w-full h-[400px] md:h-[300px] rounded-xl bg-blue-50/50 mt-auto">
        <div className="absolute left-4 md:left-8 top-1/4 md:top-1/3 bg-white bg-opacity-30 backdrop-blur-md rounded-xl py-1 md:py-2 px-2 md:px-4 shadow-lg flex items-center gap-2 text-sm md:text-base">
          <Camera className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
          <span className="text-[#1a365d] font-medium">Camera</span>
          <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
            <Check className="w-3 h-3 text-white" />
          </div>
        </div>

        <div className="absolute right-4 md:right-8 top-2/4 md:top-1/3 bg-white bg-opacity-30 backdrop-blur-md rounded-xl py-1 md:py-2 px-2 md:px-4 shadow-lg flex items-center gap-2 text-sm md:text-base">
          <Mic className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
          <span className="text-[#1a365d] font-medium">Microphone</span>
          <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
            <Check className="w-3 h-3 text-white" />
          </div>
        </div>

        <div className="absolute bottom-1/4 md:bottom-1/3 left-1/2 -translate-x-1/2 bg-white bg-opacity-30 backdrop-blur-md rounded-xl py-1 md:py-2 px-2 md:px-4 shadow-lg flex items-center gap-2 text-sm md:text-base">
          <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
          <span className="text-[#1a365d] font-medium">Speaker</span>
          <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
            <Check className="w-3 h-3 text-white" />
          </div>
        </div>
      </div>

        <div className="absolute bottom-8 left-8">
          <div className="w-10 h-10 rounded-full border border-purple-500 flex items-center justify-center group-hover:bg-purple-500 transition-all duration-300">
            <ArrowUpRight className="w-5 h-5 text-purple-500 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
