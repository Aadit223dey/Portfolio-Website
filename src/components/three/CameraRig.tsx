"use client";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * CameraRig dampens camera movement, tracing cursor positions for organic 3D parallax offsets.
 */
export function CameraRig() {
  const targetVector = new THREE.Vector3();

  useFrame((state) => {
    // Collect client coordinate percentages (-0.5 to 0.5)
    const x = state.pointer.x * 0.5;
    const y = state.pointer.y * 0.5;

    // Apply linear interpolation (lerping) to dampen movement
    targetVector.set(x * 1.5, y * 1.2, 5.5);
    state.camera.position.lerp(targetVector, 0.05);
    
    // Have camera look at scene origin smoothly
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}
