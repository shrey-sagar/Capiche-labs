"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Orb() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;

    mesh.current.rotation.x += 0.002;
    mesh.current.rotation.y += 0.003;

    mesh.current.position.x =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.3;

    mesh.current.position.y =
      Math.cos(state.clock.elapsedTime * 0.6) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshPhysicalMaterial
          color="#38bdf8"
          roughness={0}
          transmission={1}
          thickness={2}
          metalness={0.2}
          clearcoat={1}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 4, 4]} intensity={3} />
      <pointLight
        position={[-4, -4, 4]}
        intensity={2}
        color="#06b6d4"
      />
      <Orb />
    </Canvas>
  );
}