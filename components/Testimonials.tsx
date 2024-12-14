"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "You made it so simple. My new site is so much faster and easier to work with than my old site.",
    author: "Jenny Wilson",
    role: "Co-founder, Appson",
    avatar: "",
  },
  {
    id: 2,
    text: "The experience has been excellent. The platform's features are intuitive.",
    author: "John Doe",
    role: "CEO, TechWorks",
    avatar: "",
  },
  {
    id: 3,
    text: "I was able to create an amazing site in no time. The customer service is excellent.",
    author: "Alice Johnson",
    role: "Marketing Head, GlobaTech",
    avatar: "",
  },
  {
    id: 4,
    text: "The new interface has made a significant difference in how our team collaborates.",
    author: "Michael Smith",
    role: "Product Manager, InnovateX",
    avatar: "",
  },
  {
    id: 5,
    text: "This platform revolutionized our workflow. Everything is faster, clearer, and just better.",
    author: "Emma Davis",
    role: "CTO, FutureTech",
    avatar: "",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  if (!isMounted) return null;

  return (
    <div className="w-full max-w-6xl mx-auto px-8 py-12 relative overflow-hidden">
      {/* Title Section */}
      <div className="mb-8 text-left">
        <div className="text-white bg-purple-600 p-2 rounded-lg font-medium mb-2 inline-block">
        <span className="text-white">✨</span> Our Testimonials
        
        </div>
        <h2 className="text-[#1a365d] text-4xl font-bold mb-4">
          What Our Customers Are Saying
        </h2>
        <p className="text-gray-600">
          Read testimonials from our satisfied customers and learn how SAP has
          <br />
          transformed their project management experience.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="relative overflow-hidden mt-4">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / Math.min(testimonials.length, 3))}%)`,
            width: `${(testimonials.length / Math.min(testimonials.length, 3)) * 100}%`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-1/3 px-4 flex-shrink-0">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 h-[200px] w-[320px] flex flex-col justify-between">
                {/* Testimonial Text */}
                <p className="text-gray-700 text-base italic mb-4 leading-relaxed flex-1">
                  "{testimonial.text}"
                </p>

                {/* Author Section */}
                <div className="flex items-center space-x-4 mt-auto">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-700">
                      {testimonial.author.split(" ")[0][0]}
                      {testimonial.author.split(" ")[1][0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a365d] text-lg">
                      {testimonial.author}
                    </h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 transform -translate-y-1/2 right-4 flex flex-col space-y-4 z-10">
          <button
            onClick={handlePrevious}
            className="w-12 h-12 bg-white rounded-full border shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="w-12 h-12 bg-white rounded-full border shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
