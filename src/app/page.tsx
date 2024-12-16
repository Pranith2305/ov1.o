import { Play, Zap } from 'lucide-react';
import { Laptop, Wifi, ChromeIcon as Browser } from 'lucide-react';
import Testimonials from "../app/Components/Testimonials"
import FaqSection from "../app/Components/Faq";
import Footer from "../app/Components/Footer";
import VerificationCards from "../app/Components/VerificationCard";
import RequirementCards from "../app/Components/RequirementCards";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Sticky Header */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-8">
        <div className="max-w-[600px] w-full mx-auto">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg py-2 px-4 flex justify-between items-center shadow-sm border transition-all duration-300">
            <div className="flex items-center gap-2">
              <img
                src="/profile-v1.png"
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
      </div>

      {/* Background Section */}
      <div
        className="bg-[#7C3AED] h-[60vh] sm:h-[40vh] md:min-h-screen pt-16 md:pt-28 pb-[60px] md:pb-[100px] px-4 md:px-8 lg:px-16 rounded-xl mx-2 md:mx-4 lg:mx-8 mt-2 md:mt-4 relative overflow-hidden"
        style={{
          background: `
            #7C3AED,
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          backgroundPosition: "top",
          backgroundAttachment: "fixed",
          zIndex: 0,
        }}
      >
        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Version Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-white px-4 py-1 rounded-full text-base font-medium flex items-center gap-2">
              <Zap className="bg-purple-700 text-white w-4 h-4 rounded-full p-2" />
              Pihu v13
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Welcome to Your Interview Journey
              <br className="hidden md:inline" />
              with OpenIntervue
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto">
              Let's make sure you have everything you need before we schedule
              your interview
            </p>
          </div>
        </div>

        {/* Add the fading grid effect */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: 'top',
            opacity: 0.3,
            zIndex: -1
          }}
        />
      </div>

      {/* Video Player */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-16 -mt-[75px] md:-mt-[150px] flex justify-center">
        <div
          className="w-full max-w-4xl aspect-[16/9] relative"
          style={{ perspective: "1000px" }}
        >
          {/* Outer Border Effect */}
          <div className="absolute inset-0 rounded-xl bg-white overflow-hidden">
            <div
              className="absolute -inset-6 rounded-[2rem] bg-gradient-to-b from-[#7C3AED] to-transparent opacity-20 blur-[100px] pointer-events-none"
              style={{ zIndex: 1 }}
            ></div>

            {/* Play Button Container */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-b from-[#ffffff] to-[#e4e1e8] rounded-full flex items-center justify-center shadow-2xl">
                <button className="w-12 h-12 md:w-16 md:h-16 bg-[#8B5CF6] rounded-full flex shadow-lg items-center justify-center hover:bg-[#7C3AED] transition">
                  <Play className="w-6 h-6 text-white" fill="white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*set up section */}
      <div className="w-full max-w-6xl mx-auto p-4 md:p-6 px-4 md:px-8 lg:px-24 mt-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-white bg-purple-600 p-2 rounded-lg font-medium mb-2 inline-block">
            <span className="text-white">✨</span> Setup Interview
          </div>
          <h1 className="text-[#1a365d] text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Ace Your Interview With The Right Setup
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Ensure Your Setup Meets All Interview Requirements for Success
          </p>
        </div>
        <div className="min-h-screen p-4 md:p-6">
          <VerificationCards />
        </div>
      </div>

      <div className="text-center mb-8 md:mb-12 mt-8 md:mt-12 px-4 md:px-8">
        <div className="text-white bg-purple-600 p-2 rounded-lg font-medium mb-2 inline-block">
          <span className="text-white">✨</span> Setup Requirement
        </div>
        <h2 className="text-[#1a365d] text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          Your Interview Right Setup
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unk
        </p>
      </div>
      <div className="mb-8 md:mb-12 px-4 md:px-8">
        <RequirementCards />
      </div>
      <div className="mb-8 md:mb-12 px-4 md:px-8">
        <Testimonials />
      </div>
      {/* Faq Section */}
      <div className="mb-8 md:mb-12 px-4 md:px-8 lg:px-24">
        <FaqSection />
      </div>

      {/* Footer Section */}
      <div className="mb-2">
        <Footer />
      </div>
    </div>
  );
}
