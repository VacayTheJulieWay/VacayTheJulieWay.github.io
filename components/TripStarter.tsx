
import React, { useState } from 'react';
import { THEME } from '../theme';
import { QuizQuestion } from '../types';

const QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What's your morning vibe?",
    options: [
      { label: "Mickey Waffles & Parade Spots", value: "disney" },
      { label: "Mimosas on the Deck", value: "cruise" },
      { label: "Butterbeer at Hogsmeade", value: "universal" }
    ]
  },
  {
    id: 2,
    question: "How do you like to move?",
    options: [
      { label: "Thrill Seeker (Fast & Loud)", value: "thrill" },
      { label: "Slow & Steady (Relax & Unwind)", value: "chill" },
      { label: "Exploration (See it all)", value: "explore" }
    ]
  },
  {
    id: 3,
    question: "Who's in your crew?",
    options: [
      { label: "The Whole Family (Kids & Chaos)", value: "family" },
      { label: "Just the Adults (Quiet & Classy)", value: "adults" },
      { label: "BFFs Trip (Fun & Memories)", value: "friends" }
    ]
  }
];

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe42XBzHo0zffJFLoEST-E69lzj0VxjK6p-HHyTGCPWZ0efTQ/viewform";

const TripStarter: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleNext = () => {
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setIsFinished(true);
      setTimeout(() => {
        window.open(GOOGLE_FORM_URL, '_blank');
      }, 1500);
    }
  };

  if (isFinished) {
    return (
      <div className="text-center p-12 bg-white rounded-3xl shadow-xl fade-in max-w-2xl mx-auto border" style={{ borderColor: THEME.secondary }}>
        <h3 className="text-3xl font-bold mb-4 serif" style={{ color: THEME.primary }}>Yay! Let's get booking.</h3>
        <p className="text-gray-600 mb-6">Taking you to our detailed travel form to capture all the magic...</p>
        <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: THEME.primary }}></div>
        </div>
      </div>
    );
  }

  const currentQ = QUESTIONS[step];

  return (
    <div className="max-w-2xl mx-auto p-12 bg-white rounded-3xl shadow-xl fade-in border" style={{ borderColor: THEME.secondary }}>
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Step {step + 1} of {QUESTIONS.length}</span>
            <div className="w-1/2 h-1 bg-gray-100 rounded-full overflow-hidden">
                <div 
                    className="h-full transition-all duration-500" 
                    style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%`, backgroundColor: THEME.primary }}
                />
            </div>
        </div>
        <h3 className="text-3xl font-bold serif leading-tight" style={{ color: THEME.text }}>
          {currentQ.question}
        </h3>
      </div>

      <div className="space-y-4">
        {currentQ.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={handleNext}
            className="w-full p-5 text-left rounded-2xl border-2 border-gray-100 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 group"
          >
            <span className="text-lg font-medium group-hover:text-blue-600 transition-colors">
                {opt.label}
            </span>
          </button>
        ))}
      </div>
      
      <p className="mt-8 text-center text-xs text-gray-400 italic">
        "I'll use these answers to tailor my first recommendations to you!" — Julie
      </p>
    </div>
  );
};

export default TripStarter;
