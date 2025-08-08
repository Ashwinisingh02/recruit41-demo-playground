import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

type RobotSceneProps = {
  progress: number; // 0..1 scroll progress used to drive subtle motion
};

function Robot({ progress }: { progress: number }) {
  const group = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    // Float and rotate based on time + scroll progress
    group.current.rotation.y = progress * 2 + Math.sin(t * 0.5) * 0.1;
    group.current.rotation.x = Math.sin(t * 0.3) * 0.03;
    group.current.position.y = 0.1 + Math.sin(t * 1.2) * 0.05;
  });

  const metal = new THREE.MeshStandardMaterial({ color: '#1f2937', metalness: 0.5, roughness: 0.3 });
  const softMetal = new THREE.MeshStandardMaterial({ color: '#334155', metalness: 0.6, roughness: 0.25 });
  const glowBlue = new THREE.MeshStandardMaterial({ color: '#0ea5e9', emissive: '#60a5fa', emissiveIntensity: 1.8, metalness: 0.2, roughness: 0.2 });

  return (
    <group ref={group} dispose={null}>
      {/* Body */}
      <mesh castShadow position={[0, 0.55, 0]} material={metal}>
        <boxGeometry args={[1.25, 1.5, 0.7]} />
      </mesh>

      {/* Head */}
      <mesh castShadow position={[0, 1.55, 0]} material={softMetal}>
        <sphereGeometry args={[0.48, 32, 32]} />
      </mesh>

      {/* Eyes */}
      <mesh position={[0.18, 1.6, 0.38]} material={glowBlue}>
        <sphereGeometry args={[0.06, 16, 16]} />
      </mesh>
      <mesh position={[-0.18, 1.6, 0.38]} material={glowBlue}>
        <sphereGeometry args={[0.06, 16, 16]} />
      </mesh>

      {/* Mouth bar */}
      <mesh position={[0, 1.38, 0.42]} material={glowBlue}>
        <boxGeometry args={[0.28, 0.06, 0.06]} />
      </mesh>

      {/* Antenna */}
      <mesh position={[0, 2.05, 0]} material={softMetal}>
        <cylinderGeometry args={[0.03, 0.03, 0.5, 16]} />
      </mesh>
      <mesh position={[0, 2.35, 0]} material={glowBlue}>
        <sphereGeometry args={[0.08, 16, 16]} />
      </mesh>

      {/* Arms */}
      <mesh castShadow position={[0.92, 0.9, 0]} rotation={[0, 0, -0.15]} material={softMetal}>
        <cylinderGeometry args={[0.06, 0.06, 0.9, 16]} />
      </mesh>
      <mesh castShadow position={[-0.92, 0.9, 0]} rotation={[0, 0, 0.15]} material={softMetal}>
        <cylinderGeometry args={[0.06, 0.06, 0.9, 16]} />
      </mesh>

      {/* Legs */}
      <mesh castShadow position={[0.35, -0.05, 0]} material={softMetal}>
        <cylinderGeometry args={[0.08, 0.08, 0.7, 16]} />
      </mesh>
      <mesh castShadow position={[-0.35, -0.05, 0]} material={softMetal}>
        <cylinderGeometry args={[0.08, 0.08, 0.7, 16]} />
      </mesh>
    </group>
  );
}

export default function RobotScene({ progress }: RobotSceneProps) {
  return (
    <div className="w-full h-[360px] md:h-[460px] rounded-lg shadow-[var(--shadow-elegant)] overflow-hidden bg-gradient-to-b from-background/40 to-background/80 border">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 1.2, 4], fov: 50 }} shadows>
        {/* Keep canvas transparent so it blends with the gradient container */}
        {/* <color attach="background" args={["transparent"]} /> */}

        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight castShadow position={[5, 6, 5]} intensity={0.8} shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
        <pointLight position={[-2, 2, 2]} intensity={1.1} color={new THREE.Color('#60a5fa')} />

        <Suspense fallback={null}>
          <Robot progress={progress} />
          <ContactShadows position={[0, -0.5, 0]} opacity={0.3} scale={6} blur={2.5} far={2} />
        </Suspense>
      </Canvas>
    </div>
  );
}
