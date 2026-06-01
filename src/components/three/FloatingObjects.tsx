"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Renders individual rotating metallic geometric elements floating in 3D space.
 */
export function FloatingObjects() {
  const mesh1 = useRef<THREE.Mesh>(null);
  const mesh2 = useRef<THREE.Mesh>(null);
  const mesh3 = useRef<THREE.Mesh>(null);
  const mesh4 = useRef<THREE.Mesh>(null);

  // Rotate shapes slowly on each tick frame
  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();

    if (mesh1.current) {
      mesh1.current.rotation.x = elapsed * 0.12;
      mesh1.current.rotation.y = elapsed * 0.15;
      mesh1.current.position.y = Math.sin(elapsed * 0.8) * 0.25;
    }
    
    if (mesh2.current) {
      mesh2.current.rotation.x = -elapsed * 0.1;
      mesh2.current.rotation.z = elapsed * 0.08;
      mesh2.current.position.y = Math.cos(elapsed * 0.6) * 0.2 - 1.2;
    }

    if (mesh3.current) {
      mesh3.current.rotation.y = -elapsed * 0.07;
      mesh3.current.rotation.x = elapsed * 0.09;
      mesh3.current.position.y = Math.sin(elapsed * 0.7) * 0.15 + 1.2;
    }

    if (mesh4.current) {
      mesh4.current.rotation.z = elapsed * 0.14;
      mesh4.current.position.x = Math.sin(elapsed * 0.5) * 0.3 - 2;
      mesh4.current.position.y = Math.cos(elapsed * 0.5) * 0.15 + 0.5;
    }
  });

  return (
    <group>
      {/* Object 1: Premium Metallic Torus Knot at the center */}
      <mesh ref={mesh1} position={[0, 0, 0]} scale={[0.85, 0.85, 0.85]}>
        <torusKnotGeometry args={[1, 0.3, 120, 16]} />
        <meshPhysicalMaterial
          color="#333333"
          metalness={0.95}
          roughness={0.08}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          reflectivity={1.0}
        />
      </mesh>

      {/* Object 2: Glowing Electric Blue Icosahedron on the right */}
      <mesh ref={mesh2} position={[2.5, -1.2, -1.5]} scale={[0.6, 0.6, 0.6]}>
        <icosahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color="#0070F3"
          metalness={0.9}
          roughness={0.15}
          clearcoat={0.8}
          reflectivity={0.9}
          emissive="#002b66"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Object 3: Silver Octahedron on the left */}
      <mesh ref={mesh3} position={[-2.5, 1.2, -1]} scale={[0.5, 0.5, 0.5]}>
        <octahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color="#888888"
          metalness={0.98}
          roughness={0.05}
          clearcoat={1.0}
          reflectivity={1.0}
        />
      </mesh>

      {/* Object 4: Cyber Blue Sphere floating far left */}
      <mesh ref={mesh4} position={[-3.5, 0.5, -3]} scale={[0.3, 0.3, 0.3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial
          color="#0051B3"
          metalness={0.8}
          roughness={0.2}
          reflectivity={0.8}
        />
      </mesh>
    </group>
  );
}
