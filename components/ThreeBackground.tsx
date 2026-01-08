
import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Scene = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const blobRef = useRef<THREE.Mesh>(null!);
  const { mouse } = useThree();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Smooth follow mouse
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouse.y * 0.5, 0.1);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouse.x * 0.5, 0.1);
    
    blobRef.current.position.x = Math.sin(t * 0.5) * 2;
    blobRef.current.position.y = Math.cos(t * 0.3) * 2;
    blobRef.current.rotation.z = t * 0.1;
  });

  return (
    <>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere ref={meshRef} args={[1, 128, 128]} scale={2.8}>
          <MeshDistortMaterial
            color="#4f46e5"
            speed={4}
            distort={0.3}
            radius={1}
            emissive="#1e1b4b"
            metalness={0.9}
            roughness={0.1}
          />
        </Sphere>
      </Float>

      <mesh ref={blobRef}>
        <Sphere args={[0.5, 64, 64]}>
          <MeshWobbleMaterial color="#818cf8" speed={2} factor={0.6} metalness={0.8} />
        </Sphere>
      </mesh>

      <gridHelper args={[20, 20, '#1e293b', '#0f172a']} position={[0, -5, 0]} rotation={[0.5, 0, 0]} />
    </>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#030610]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(79,70,229,0.1),_transparent)]" />
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#818cf8" />
        <pointLight position={[-10, -10, -10]} color="#fb7185" intensity={1} />
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
