"use client";

import { useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { DApp, DAppConnection } from "@/types";
import { DAppNode } from "./dapp-node";
import { ConnectionLine } from "./connection-line";
import { ParticleField } from "./particle-field";

interface NetworkGraphProps {
  dapps: DApp[];
  onDAppClick: (dapp: DApp) => void;
}

/**
 * Main 3D Network Graph Scene
 * Displays dApps as nodes in 3D space with connections
 */
export function NetworkGraph({ dapps, onDAppClick }: NetworkGraphProps) {
  const [hoveredDApp, setHoveredDApp] = useState<DApp | null>(null);
  const [selectedDApp, setSelectedDApp] = useState<DApp | null>(null);

  // Generate positions for nodes in 3D space
  const nodePositions = useMemo(() => {
    const positions = new Map<string, [number, number, number]>();
    const radius = 8;
    
    dapps.forEach((dapp, index) => {
      // Distribute nodes in a sphere
      const phi = Math.acos(-1 + (2 * index) / dapps.length);
      const theta = Math.sqrt(dapps.length * Math.PI) * phi;
      
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      
      positions.set(dapp.id, [x, y, z]);
    });
    
    return positions;
  }, [dapps]);

  // Generate connections between dApps
  const connections = useMemo(() => {
    const conns: DAppConnection[] = [];
    
    // Create connections between dApps in the same category
    dapps.forEach((dapp1, i) => {
      dapps.forEach((dapp2, j) => {
        if (i < j) {
          const sharedCategories = dapp1.categories.filter(cat =>
            dapp2.categories.includes(cat)
          );
          
          if (sharedCategories.length > 0) {
            conns.push({
              source: dapp1.id,
              target: dapp2.id,
              type: "integration",
              strength: sharedCategories.length / Math.max(dapp1.categories.length, dapp2.categories.length),
            });
          }
        }
      });
    });
    
    return conns;
  }, [dapps]);

  const handleNodeClick = (dapp: DApp) => {
    setSelectedDApp(dapp);
    onDAppClick(dapp);
  };

  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={60} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
        <spotLight
          position={[0, 20, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          color="#3B82F6"
        />

        {/* Environment */}
        <Environment preset="night" />
        
        {/* Particle background */}
        <ParticleField />

        {/* Connection lines */}
        {connections.map((conn, index) => {
          const startPos = nodePositions.get(conn.source);
          const endPos = nodePositions.get(conn.target);
          
          if (startPos && endPos) {
            return (
              <ConnectionLine
                key={`conn-${index}`}
                start={startPos}
                end={endPos}
                opacity={conn.strength * 0.5}
              />
            );
          }
          return null;
        })}

        {/* dApp nodes */}
        {dapps.map((dapp) => {
          const position = nodePositions.get(dapp.id);
          if (!position) return null;
          
          return (
            <DAppNode
              key={dapp.id}
              dapp={dapp}
              position={position}
              onClick={handleNodeClick}
              onHover={setHoveredDApp}
              isHovered={hoveredDApp?.id === dapp.id}
              isSelected={selectedDApp?.id === dapp.id}
            />
          );
        })}

        {/* Camera controls */}
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          rotateSpeed={0.5}
          zoomSpeed={0.8}
          minDistance={10}
          maxDistance={40}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
