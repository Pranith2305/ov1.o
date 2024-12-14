'use client'

import { useState } from 'react'

const faqData = [
  {
    question: "How is the interview structured and who will guide me?",
    answer: "The interview will be guided by our AI interviewer, Pihu, who may ask follow-up questions to gain deeper insights into your experience.",
  },
  {
    question: "What is OpenIntervue?",
    answer: "OpenIntervue is our AI-powered interview platform designed to provide a seamless and comprehensive assessment experience for candidates.",
  },
  {
    question: "What are some helpful tips for success in the interview?",
    answer: "Prepare your environment, ensure stable internet connection, speak clearly, and be ready to provide specific examples from your experience.",
  },
  {
    question: "What should I do if I experience technical issues?",
    answer: "If you experience technical issues, try refreshing your browser, check your internet connection, or reach out to our support team for immediate assistance.",
  },
  {
    question: "Can I reschedule the interview if needed?",
    answer: "Yes, you can reschedule your interview through our platform up to 24 hours before the scheduled time. Simply access your interview details and select a new time slot.",
  },
  {
    question: "What types of questions can I expect during the interview?",
    answer: "You can expect a mix of behavioral and technical questions relevant to your role, designed to assess both your skills and cultural fit.",
  }
]

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <span className="inline-flex items-center text-purple-600 font-medium mb-2">
          FAQ's
        </span>
        <h2 className="text-[#1a365d] text-4xl font-bold">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200  bg-white transition-all duration-200 hover:bg-gray-50"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex w-full items-center justify-between p-6"
            >
              <span className="text-lg font-semibold text-[#1a365d]">
                {faq.question}
              </span>
              {activeIndex === index ? (
                <svg
                  className="h-6 w-6 text-purple-600 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-purple-600 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
            </button>
            {activeIndex === index && (
              <div className="p-6 pb-6">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

