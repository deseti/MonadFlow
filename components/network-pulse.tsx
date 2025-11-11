"use client";

import { useEffect, useState } from "react";

/**
 * Animated network pulse indicator
 * Shows ecosystem health with pulsing animation
 */
export function NetworkPulse() {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.05;
      setPulse(Math.sin(time) * 0.5 + 0.5); // Oscillates between 0-1
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="flex items-center gap-3">
      <div className="relative w-3 h-3">
        {/* Outer pulsing ring */}
        <div
          className="absolute inset-0 rounded-full bg-green-400"
          style={{
            opacity: 0.3 * (1 - pulse),
            transform: `scale(${1 + pulse * 0.5})`,
          }}
        />
        {/* Inner dot */}
        <div className="absolute inset-0 rounded-full bg-green-400" />
      </div>
      <span className="text-xs sm:text-sm text-green-400 font-medium">
        Network Active
      </span>
    </div>
  );
}
