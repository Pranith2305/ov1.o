"use client"
import { MessageSquare, Check } from "lucide-react";
import CardWrapper from "./CardWrapper";

export default function TermsAndConditionsCard({
  title = "Terms And Conditions",
  caption = "I agree with the Terms & Conditions and Privacy Policy",
}) {
  return (
    <CardWrapper icon={MessageSquare} title={title} caption={caption}>
      <div className="mt-8 relative">
        {/* Placeholder bar - background bar */}
        <div className="border p-4 rounded-lg">
          <div className="h-8 bg-green-600 rounded-lg w-1/2 absolute top-16 left-1/3 z-0" />
          {/* Main content with glassmorphism */}
          <div className="relative z-10">
            {/* Background gradient overlays */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute right-1 top-1/2 -translate-y-1/2 w-48 h-64 bg-green-100/30 rounded-full blur-xl" />
              <div className="absolute right-2 bottom-0 w-32 h-32 bg-purple-100/20 rounded-full blur-lg" />
            </div>

            {/* Glassmorphism effect applied to the Terms Card */}
            <div className="backdrop-blur-md bg-white/20  border rounded-2xl shadow-lg p-4 relative z-20">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-purple-600 p-2">
                  <Check className="w-5 h-5 text-white " />
                </div>
                <span className="text-[#1a365d] text-lg font-semibold">
                  Terms And Conditions
                </span>
              </div>
            </div>
          </div>

          {/* Placeholder loading lines */}
          <div className="mt-6 space-y-3 px-4">
          <div className="h-2 bg-gray-200 rounded-full w-3/4" />
            <div className="h-2 bg-gray-200 rounded-full w-full" />
            <div className="flex items-center gap-2">
              <div className="h-2 bg-gray-200 rounded-full w-2" />
              <div className="h-2 bg-gray-200 rounded-full w-1/3" />
              <div className="h-2 bg-orange-400 rounded-full w-2" />
              <div className="h-2 bg-gray-200 rounded-full w-1/3" />
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}
