"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { DApp } from "@/types";

interface DAppNodeProps {
  dapp: DApp;
  position: [number, number, number];
  onClick: (dapp: DApp) => void;
  onHover: (dapp: DApp | null) => void;
  isHovered: boolean;
  isSelected: boolean;
}

/**
 * 3D Node representing a dApp in the network
 * Features: Glow effect, hover animation, category-based colors
 */
export function DAppNode({
  dapp,
  position,
  onClick,
  onHover,
  isHovered,
  isSelected,
}: DAppNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  // Category-based colors
  const categoryColors: { [key: string]: string } = {
    DeFi: "#8B5CF6", // Purple
    NFT: "#EC4899", // Pink
    Gaming: "#F59E0B", // Amber
    AI: "#06B6D4", // Cyan
    Infrastructure: "#3B82F6", // Blue
    Oracle: "#10B981", // Green
    Wallet: "#6366F1", // Indigo
    Analytics: "#8B5CF6", // Purple
    default: "#8B5CF6", // Purple
  };

  const color = categoryColors[dapp.categories[0]] || categoryColors.default;

  // Floating animation
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      meshRef.current.position.y =
        position[1] + Math.sin(time + position[0]) * 0.1;
      
      // Rotation animation
      meshRef.current.rotation.y += 0.005;

      // Scale animation on hover
      const targetScale = isHovered || isSelected ? 1.4 : 1;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }

    // Glow animation
    if (glowRef.current) {
      const pulseScale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      glowRef.current.scale.setScalar(pulseScale);
    }
  });

  return (
    <group position={position}>
      {/* Glow effect */}
      <Sphere ref={glowRef} args={[0.7, 32, 32]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={isHovered || isSelected ? 0.3 : 0.15}
        />
      </Sphere>

      {/* Main sphere */}
      <Sphere
        ref={meshRef}
        args={[0.4, 32, 32]}
        onClick={() => onClick(dapp)}
        onPointerOver={() => onHover(dapp)}
        onPointerOut={() => onHover(null)}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isHovered || isSelected ? 0.5 : 0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>

      {/* Label */}
      {(isHovered || isSelected) && (
        <Text
          position={[0, 0.8, 0]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {dapp.name}
        </Text>
      )}

      {/* Category badge */}
      {isHovered && (
        <>
          <Text
            position={[0, -0.8, 0]}
            fontSize={0.15}
            color={color}
            anchorX="center"
            anchorY="middle"
          >
            {dapp.categories[0]}
          </Text>
          
          {/* Quick stats on hover */}
          {dapp.tvl && (
            <Text
              position={[0, -1.1, 0]}
              fontSize={0.12}
              color="#9CA3AF"
              anchorX="center"
              anchorY="middle"
            >
              {`TVL: $${(dapp.tvl / 1000000).toFixed(1)}M`}
            </Text>
          )}
        </>
      )}
    </group>
  );
}
