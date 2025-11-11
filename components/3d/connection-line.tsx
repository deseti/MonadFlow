"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
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
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current && groupRef.current.children[0]) {
      const line = groupRef.current.children[0] as THREE.Line;
      const material = line.material as THREE.LineBasicMaterial;
      if (material && material.opacity !== undefined) {
        material.opacity = opacity * (0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.3);
      }
    }
  });

  return (
    <group ref={groupRef}>
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([start[0], start[1], start[2], end[0], end[1], end[2]])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={color}
          transparent
          opacity={opacity}
          linewidth={1.5}
        />
      </line>
    </group>
  );
}
