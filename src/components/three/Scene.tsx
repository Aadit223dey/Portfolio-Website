"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, Preload } from "@react-three/drei";
import { FloatingObjects } from "./FloatingObjects";
import { CameraRig } from "./CameraRig";

/**
 * Main React Three Fiber Canvas composing lighting, camera rigs, and meshes.
 */
export function Scene() {
  return (
    <div className="w-full h-full absolute inset-0 select-none pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 1.5]} // Restrict maximum device-pixel ratio on high-res monitors to maintain smooth rendering
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        {/* Lights Setup */}
        <ambientLight intensity={0.15} />
        
        {/* Crisp directional light generating metallic high-contrast reflections */}
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" castShadow={false} />
        
        {/* Dramatic glowing Cyber Blue point light highlighting dark edges */}
        <pointLight position={[-4, 3, 2]} intensity={2.5} color="#0070F3" />
        <pointLight position={[4, -3, 2]} intensity={1.5} color="#0051B3" />
        
        {/* Volumetric soft white lights for depth */}
        <spotLight
          position={[0, 5, 2]}
          angle={0.6}
          penumbra={1}
          intensity={1.5}
          color="#ffffff"
        />

        {/* Geometric Meshes */}
        <FloatingObjects />

        {/* Mouse parallax controller */}
        <CameraRig />

        {/* Dynamic loading configurations */}
        <AdaptiveDpr />
        <Preload all />
      </Canvas>
    </div>
  );
}
export default Scene;
