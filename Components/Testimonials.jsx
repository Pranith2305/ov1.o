"use client"
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "You made it so simple. My new site is so much faster and easier to work with than my old site.",
    author: "Jenny Wilson",
    role: "Co-founder, Appson",
  },
  {
    id: 2,
    text: "The experience has been excellent. The platform's features are intuitive.",
    author: "John Doe",
    role: "CEO, TechWorks",
  },
  {
    id: 3,
    text: "I was able to create an amazing site in no time. The customer service is excellent.",
    author: "Alice Johnson",
    role: "Marketing Head, GlobaTech",
  },
  {
    id: 4,
    text: "The new interface has made a significant difference in how our team collaborates.",
    author: "Michael Smith",
    role: "Product Manager, InnovateX",
  },
  {
    id: 5,
    text: "This platform revolutionized our workflow. Everything is faster, clearer, and just better.",
    author: "Emma Davis",
    role: "CTO, FutureTech",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const cardsPerPage = 3; // Number of cards to display at once
  const totalCards = testimonials.length;
  const totalGroups = Math.ceil(totalCards / cardsPerPage);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalGroups - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalGroups - 1 ? 0 : prevIndex + 1
    );
  };

  if (!isMounted) return null;

  // Dynamically slice testimonials for current group
  const currentGroup = testimonials.slice(
    currentIndex * cardsPerPage,
    currentIndex * cardsPerPage + cardsPerPage
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative overflow-hidden">
      {/* Title Section */}
      <div className="mb-8 text-left px-4 sm:px-8 lg:px-24">
        <div className="text-white bg-purple-600 p-2 rounded-lg font-medium mb-2 inline-block">
          <span className="text-white">✨</span> Our Testimonials
        </div>
        <h2 className="text-[#1a365d] text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          What Our Customers Are Saying
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Read testimonials from our satisfied customers and learn how SAP has
          transformed their project management experience.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4 bottom-1 flex flex-row space-x-2 sm:space-x-4 px-4 sm:px-8 lg:px-24">
        <button
          onClick={handlePrevious}
          className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full border shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
        </button>

        <button
          onClick={handleNext}
          className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full border shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
        </button>
      </div>

      {/* Testimonial Cards */}
      <div className="relative overflow-hidden mt-4">
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4 flex-shrink-0 mb-4 sm:mb-0"
            >
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-md border border-gray-200 h-auto sm:h-[160px] flex flex-col justify-between">
                {/* Testimonial Text */}
                <p className="text-gray-700 mb-3 leading-relaxed flex-1 text-xs sm:text-sm line-clamp-3 sm:line-clamp-none">
                  "{testimonial.text}"
                </p>

                {/* Author Section */}
                <div className="flex items-center space-x-2 sm:space-x-4 mt-auto">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-sm sm:text-md font-bold text-blue-700">
                      {testimonial.author
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a365d] text-sm sm:text-base">
                      {testimonial.author}
                    </h3>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
