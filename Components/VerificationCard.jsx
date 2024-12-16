"use client"

import { Video, Mic, Volume2, MessageSquare, ArrowUpRight } from 'lucide-react'
import FaceDetectionCard from './FaceDetectionCard'
import SystemCheckCard from './SystemCheckCard'
import TestAudioCard from './TestAudioCard'
import TermsAndConditionsCard from './TermsAndConditions'

const cards = [
  {
    component: FaceDetectionCard,
    icon: Video,
    title: "Real Time Face Detection",
    caption: "Capture Faces Clearly for Accurate Real-Time Detection and Recognition.",
  },
  {
    component: SystemCheckCard,
    icon: Mic,
    title: "System Check",
    caption: "Ensure your device has a working camera, microphone and have a stable internet connection.",
  },
  {
    component: TestAudioCard,
    icon: Volume2,
    title: "Test Audio",
    caption: "Please read this aloud clearly: The quick brown fox jumps over the lazy dog",
  },
  {
    component: TermsAndConditionsCard,
    icon: MessageSquare,
    title: "Terms And Conditions",
    caption: "I agree with the Terms & Conditions and Privacy Policy",
  },
]

export default function VerificationCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cards.map((card, index) => {
        const CardComponent = card.component
        return <CardComponent key={index} {...card} />
      })}
    </div>
  )
}

