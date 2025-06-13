"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as random from "maath/random";
import { Group } from "three";

function Starfield() {
  const ref = useRef<Group>(null);
  const [positions, setPositions] = useState<Float32Array | null>(null);

  useEffect(() => {
    const pts = random.inSphere(new Float32Array(2000 * 3), { radius: 1.5 });
    setPositions(pts);
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  if (!positions) return null;

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#6366f1"
          size={0.005}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Starfield />
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}
