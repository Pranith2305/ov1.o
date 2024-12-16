"use client"
import React from 'react';
import { Laptop, Wifi, Chrome as Browser } from 'lucide-react';

const RequirementCards = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-16 pt-2">
      {/* Requirements Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Laptop", "Internet", "Browser"].map((item, index) => (
          <div
            key={item}
            className="bg-white rounded-xl p-4 shadow-lg border flex items-center space-x-6"
          >
            {/* Icon container with square dimensions */}
            <div className="bg-purple-100 p-1 w-14h-14 rounded-lg flex items-center justify-center">
              {index === 0 && <Laptop className="w-8 h-8 text-purple-600" />}
              {index === 1 && <Wifi className="w-8 h-8 text-purple-600" />}
              {index === 2 && <Browser className="w-8 h-8 text-purple-600" />}
            </div>
            <div>
              <h3 className="font-semibold text-[#1a365d] text-lg">{item}</h3>
              <p className="text-gray-500 text-sm">
                Streamline task monitoring for productivity.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequirementCards;
