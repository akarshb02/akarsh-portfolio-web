
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { OrbitControls, Float } from '@react-three/drei';

console.log('FloatingCube component loaded');

const AnimatedCube = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#3B82F6"
          metalness={0.8}
          roughness={0.2}
          emissive="#1E40AF"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
};

const FloatingCube = () => {
  console.log('FloatingCube rendering');
  
  return (
    <div className="w-64 h-64 md:w-80 md:h-80">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7C3AED" />
        <AnimatedCube />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default FloatingCube;
