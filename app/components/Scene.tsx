"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment, Stars } from "@react-three/drei";
import * as THREE from "three";

function Icosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      const scroll = window.scrollY;
      
      // Combine time-based rotation with scroll-based rotation for a dynamic feel
      const targetRotY = state.clock.getElapsedTime() * 0.2 + scroll * 0.005;
      const targetRotX = state.clock.getElapsedTime() * 0.25 + scroll * 0.002;
      
      // Move it down slightly as we scroll
      const targetPosY = scroll * -0.001;
      
      // Use damping for buttery smooth interpolation
      meshRef.current.rotation.y = THREE.MathUtils.damp(meshRef.current.rotation.y, targetRotY, 5, delta);
      meshRef.current.rotation.x = THREE.MathUtils.damp(meshRef.current.rotation.x, targetRotX, 5, delta);
      meshRef.current.position.y = THREE.MathUtils.damp(meshRef.current.position.y, targetPosY, 5, delta);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={1.8}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#9d4edd" wireframe />
      </mesh>
    </Float>
  );
}

function DistortedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      const scroll = window.scrollY;
      
      // Move closer and float upwards on scroll
      const targetPosZ = -2 + scroll * 0.005;
      const targetPosY = -1.5 + scroll * 0.002;
      
      meshRef.current.position.z = THREE.MathUtils.damp(meshRef.current.position.z, Math.min(targetPosZ, 2), 4, delta);
      meshRef.current.position.y = THREE.MathUtils.damp(meshRef.current.position.y, targetPosY, 4, delta);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef} position={[3, -1.5, -2]}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <MeshDistortMaterial
          color="#00d4ff"
          distort={0.4}
          speed={3}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function Torus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      const scroll = window.scrollY;
      
      // Torus rotates aggressively based on scroll
      const targetRotZ = scroll * 0.008;
      
      // Move it outwards and up
      const targetPosX = -3.5 - scroll * 0.001;
      const targetPosY = 1.5 + scroll * 0.003;
      
      meshRef.current.rotation.z = THREE.MathUtils.damp(meshRef.current.rotation.z, targetRotZ, 5, delta);
      meshRef.current.position.x = THREE.MathUtils.damp(meshRef.current.position.x, targetPosX, 5, delta);
      meshRef.current.position.y = THREE.MathUtils.damp(meshRef.current.position.y, targetPosY, 5, delta);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0} floatIntensity={2}>
      <mesh ref={meshRef} position={[-3.5, 1.5, -1]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[0.9, 0.25, 16, 100]} />
        <meshPhysicalMaterial 
          color="#00f5d4" 
          roughness={0.1}
          metalness={0.8}
          transmission={0.9}
          thickness={0.5}
          ior={1.5}
        />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 w-full h-full bg-black">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <color attach="background" args={["#030303"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9d4edd" />
        
        {/* Parallax stars could also be added, but letting the camera stay static and moving objects is cleaner here */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        <Icosahedron />
        <DistortedSphere />
        <Torus />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
