"use client";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import { MeshStandardMaterial, Mesh } from "three";

export default function IpadModel() {
  const groupRef = useRef<any>(null);
  const { nodes, materials } = useGLTF("/3D/ipad_mini_6_2021.glb");

  const textures = useTexture([
    "/models/ipad/textures/pantalla1.svg",
    "/models/ipad/textures/pantalla2.svg",
    "/models/ipad/textures/pantalla3.svg",
    "/models/ipad/textures/pantalla4.svg",
    "/models/ipad/textures/pantalla 5.svg",
  ]);

  const [currentTextureIndex, setCurrentTextureIndex] = useState(0);
  const [slowDown, setSlowDown] = useState(false);
  const [lastWasBack, setLastWasBack] = useState(false);
  const [hovered, setHovered] = useState(false); // 👈 Nuevo estado para hover

  useEffect(() => {
    textures.forEach((texture) => {
      texture.flipY = false;
      texture.center.set(0.5, 0.5);
      texture.rotation = 0;
    });
  }, [textures]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      const rotationY = groupRef.current.rotation.y;
      const angleDeg = ((rotationY * 180) / Math.PI) % 360;
      const normalizedAngle = angleDeg < 0 ? angleDeg + 360 : angleDeg;

      const isFront = normalizedAngle > 160 && normalizedAngle < 200;
      const isBack = normalizedAngle < 20 || normalizedAngle > 340;

      if (!lastWasBack && isBack) {
        setCurrentTextureIndex((prev) => (prev + 1) % textures.length);
      }

      setLastWasBack(isBack);
      setSlowDown(isFront);

      // ⚡️ Movimiento base automático
      const speed = slowDown ? delta * 0.3 : delta * 7;
      groupRef.current.rotation.y += speed;

      // ✋ Pequeño tilt si está hovered
      const tiltAmount = hovered ? 0.05 : 0;
      groupRef.current.rotation.x = tiltAmount; // pequeño giro en X
      groupRef.current.rotation.z = hovered ? 0.03 : 0; // pequeño giro en Z

      // 🚿 Mantener rotación Y limpia
      if (groupRef.current.rotation.y > Math.PI * 2) {
        groupRef.current.rotation.y -= Math.PI * 2;
      }
    }
  });

  return (
    <group
      ref={groupRef}
      rotation={[0, 0, 0]}
      scale={0.025}
      onPointerOver={() => setHovered(true)}  // 👈 Detecta hover
      onPointerOut={() => setHovered(false)}  // 👈 Detecta salir del hover
    >
      <group rotation={[0, 0, 0]} scale={100}>
        {Object.keys(nodes).map((key) => {
          const node = nodes[key] as Mesh;
          if (!node.geometry) return null;

          const isScreen = key.includes("Screen");

          return (
            <mesh
              key={key}
              castShadow
              receiveShadow
              geometry={node.geometry}
              material={
                isScreen
                  ? new MeshStandardMaterial({ map: textures[currentTextureIndex] })
                  : Array.isArray(node.material)
                  ? materials[node.material[0]?.name]
                  : materials[node.material.name]
              }
            />
          );
        })}
      </group>
    </group>
  );
}

useGLTF.preload("/3D/ipad_mini_6_2021.glb");
