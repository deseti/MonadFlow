"use client";

import { useState, useEffect } from "react";
import { ChevronRight, Volume2 } from "lucide-react";

/**
 * Interactive 3D tour guide for new users
 * Shows tips and tricks to explore the ecosystem
 */
export function TourGuide({ isFirstTime = true }: { isFirstTime?: boolean }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(isFirstTime);

  const steps = [
    {
      title: "Welcome to MonadFlow! 🌀",
      description: "Explore the Monad ecosystem in stunning 3D. Each sphere represents a dApp.",
      hint: "💡 Tip: Use your mouse to rotate and zoom",
    },
    {
      title: "Interactive Nodes 🎯",
      description:
        "Click on any node (dApp) to see detailed information, stats, and links.",
      hint: "💡 Tip: Lines connecting nodes show shared categories",
    },
    {
      title: "Smart Search 🔍",
      description: "Use the search bar to find specific dApps or filter by category.",
      hint: "💡 Tip: Search works in real-time as you type",
    },
    {
      title: "You're All Set! ✨",
      description: "Now go explore and discover the amazing Monad ecosystem!",
      hint: "💡 You can close this guide anytime",
    },
  ];

  const step = steps[currentStep];

  if (!isOpen) {
    return null;
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto"
        onClick={() => setIsOpen(false)}
      />

      {/* Tutorial Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass rounded-2xl p-6 sm:p-8 max-w-md pointer-events-auto border border-monad-purple/30 shadow-2xl">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-monad-purple to-monad-blue flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold">{currentStep + 1}</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white">{step.title}</h3>
          </div>
        </div>

        <p className="text-gray-300 mb-4">{step.description}</p>

        <div className="flex items-start gap-2 p-3 bg-blue-500/10 rounded-lg mb-6 border border-blue-500/20">
          <Volume2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-blue-300">{step.hint}</p>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-6">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentStep
                  ? "w-8 bg-monad-purple"
                  : index < currentStep
                    ? "w-2 bg-gray-600"
                    : "w-2 bg-gray-700"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setIsOpen(false)}
            className="flex-1 px-4 py-2 glass rounded-lg text-white transition-all hover:bg-white/10"
          >
            Skip
          </button>
          <button
            onClick={handleNext}
            className="flex-1 px-4 py-2 bg-gradient-to-r from-monad-purple to-monad-blue text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            {currentStep === steps.length - 1 ? "Done" : "Next"}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
