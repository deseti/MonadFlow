"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

interface ConnectionLineProps {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
  opacity?: number;
}

/**
 * Animated connection line between dApp nodes
 * Features: Gradient, pulse animation, glow effect
 */
export function ConnectionLine({
  start,
  end,
  color = "#8B5CF6",
  opacity = 0.3,
}: ConnectionLineProps) {
  const lineRef = useRef<THREE.Line>(null);

  useFrame((state) => {
    if (lineRef.current) {
      // Pulse animation
      const material = lineRef.current.material as THREE.LineBasicMaterial;
      if (material) {
        material.opacity = opacity * (0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.3);
      }
    }
  });

  return (
    <Line
      ref={lineRef}
      points={[start, end]}
      color={color}
      lineWidth={1.5}
      transparent
      opacity={opacity}
    />
  );
}
